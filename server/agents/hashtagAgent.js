// const { callOpenRouter } = require('../services/openrouter.service');

// const hashtagAgent = async (postData, model = 'gemini') => {
//   const prompt = `Generate 10-15 highly relevant, optimized hashtags for the following LinkedIn post.

// Post Content:
// ${postData.post}

// Topic: ${postData.topic}
// Industry: ${postData.industry}

// Generate a mix of:
// - Broad industry hashtags (high reach)
// - Niche-specific hashtags (targeted audience)
// - Trending hashtags (if relevant)
// - Brand-specific or community hashtags

// Return only the hashtags in a clean list format, one per line. Do not include any explanations or additional text. Make sure hashtags are professional and relevant to LinkedIn audiences.`;

//   const hashtags = await callOpenRouter(prompt, model, {
//     temperature: 0.5,
//     maxTokens: 1000,
//     systemPrompt: 'You are a hashtag strategist who specializes in LinkedIn hashtag optimization. You create hashtag combinations that maximize reach and engagement while maintaining relevance.'
//   });

//   const hashtagList = hashtags
//     .split(/\n/)
//     .map(tag => tag.trim().replace(/^#/, ''))
//     .filter(tag => tag.length > 0)
//     .slice(0, 15);

//   return {
//     ...postData,
//     hashtags: hashtagList,
//     hashtagString: hashtagList.map(tag => `#${tag}`).join(' '),
//     timestamp: new Date()
//   };
// };

// module.exports = hashtagAgent;



const { callOpenRouter } = require('../services/openrouter.service');

// Merges the old hashtagAgent + reviewerAgent into a single LLM call.
// Cuts another full network round-trip from the pipeline. The model is
// asked for clearly labeled HASHTAGS and REVIEW sections so downstream
// parsing (hashtag list + score extraction) works the same as before.
const hashtagReviewAgent = async (postData, model = 'gemini') => {
  const prompt = `You have two tasks for the following LinkedIn post. Return both in one response, clearly labeled.

Post Content:
${postData.post}

Topic: ${postData.topic}
Industry: ${postData.industry}
Tone: ${postData.tone}

Return your response in exactly this structure with these two headers:

HASHTAGS:
Generate 10-15 highly relevant, optimized hashtags — a mix of broad industry hashtags (high reach), niche-specific hashtags (targeted audience), trending hashtags (if relevant), and brand/community hashtags. List only the hashtags, one per line, no explanations.

REVIEW:
1. IMPROVED VERSION:
Write a refined version of the post with better hook, clearer structure, and stronger CTA.

2. ENGAGEMENT SCORE (0-100):
Rate the post's potential for likes, comments, and shares.

3. READABILITY SCORE (0-100):
Rate how easy and pleasant the post is to read.

4. HOOK STRENGTH (0-100):
Rate how compelling the opening line is.

5. VIRAL POTENTIAL (0-100):
Rate the overall likelihood of the post going viral.

6. SUGGESTED IMPROVEMENTS:
List 3-5 specific improvements that could be made.

7. BETTER CTA:
Suggest a stronger call-to-action if the current one is weak.`;

  const raw = await callOpenRouter(prompt, model, {
    temperature: 0.55,
    maxTokens: 3200,
    systemPrompt: 'You are a LinkedIn hashtag strategist and content reviewer combined. You optimize hashtags for reach and relevance, and you provide honest, actionable feedback with specific scores. You return clearly labeled, structured output.'
  });

  const hashtagsMatch = raw.match(/HASHTAGS:?\s*\n?([\s\S]*?)(?=\n\s*REVIEW:?)/i);
  const reviewMatch = raw.match(/REVIEW:?\s*\n?([\s\S]*)/i);

  const hashtagsRaw = hashtagsMatch ? hashtagsMatch[1].trim() : '';
  const review = reviewMatch ? reviewMatch[1].trim() : raw.trim();

  const hashtagList = hashtagsRaw
    .split(/\n/)
    .map(tag => tag.trim().replace(/^#/, '').replace(/^-\s*/, ''))
    .filter(tag => tag.length > 0)
    .slice(0, 15);

  const scores = extractScores(review);

  return {
    ...postData,
    hashtags: hashtagList,
    hashtagString: hashtagList.map(tag => `#${tag}`).join(' '),
    review,
    scores,
    finalPost: postData.post,
    finalHashtags: hashtagList.map(tag => `#${tag}`).join(' '),
    timestamp: new Date()
  };
};

const extractScores = (review) => {
  const scores = {
    engagement: 75,
    readability: 75,
    hookStrength: 75,
    viralPotential: 75
  };

  const engagementMatch = review.match(/(?:Engagement Score|engagement)\s*[:\-]?\s*(\d+)/i);
  const readabilityMatch = review.match(/(?:Readability Score|readability)\s*[:\-]?\s*(\d+)/i);
  const hookMatch = review.match(/(?:Hook Strength|hook)\s*[:\-]?\s*(\d+)/i);
  const viralMatch = review.match(/(?:Viral Potential|viral)\s*[:\-]?\s*(\d+)/i);

  if (engagementMatch) scores.engagement = parseInt(engagementMatch[1]);
  if (readabilityMatch) scores.readability = parseInt(readabilityMatch[1]);
  if (hookMatch) scores.hookStrength = parseInt(hookMatch[1]);
  if (viralMatch) scores.viralPotential = parseInt(viralMatch[1]);

  scores.overall = Math.round((scores.engagement + scores.readability + scores.hookStrength + scores.viralPotential) / 4);

  return scores;
};

module.exports = hashtagReviewAgent;