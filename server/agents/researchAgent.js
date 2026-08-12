// const { callOpenRouter } = require('../services/openrouter.service');

// const researchAgent = async (topic, industry, audience) => {
//   const prompt = `Research and analyze the following topic for LinkedIn content generation.

// Topic: ${topic}
// Industry: ${industry}
// Target Audience: ${audience}

// Provide a comprehensive research brief covering:
// 1. Key insights and trends related to this topic
// 2. Common pain points and challenges in this industry
// 3. What the target audience cares about
// 4. Relevant statistics or data points (use realistic ones if specific data isn't available)
// 5. Current conversations happening on LinkedIn about this topic
// 6. Expert opinions or frameworks that could be referenced

// Keep the analysis concise but actionable. Return the response as a structured research brief.`;

//   const research = await callOpenRouter(prompt, 'gemini', {
//     temperature: 0.5,
//     maxTokens: 2000,
//     systemPrompt: 'You are an expert research analyst who specializes in LinkedIn content trends, industry analysis, and audience research. You provide detailed, actionable research briefs for content creators.'
//   });

//   return {
//     topic,
//     industry,
//     audience,
//     research,
//     timestamp: new Date()
//   };
// };

// module.exports = researchAgent;




const { callOpenRouter } = require('../services/openrouter.service');

// Merges the old researchAgent + plannerAgent into a single LLM call.
// This cuts one full network round-trip from the pipeline (5 calls -> 3
// total for post generation) without losing the two distinct sections —
// the model is asked to clearly label RESEARCH and CONTENT PLAN so the
// rest of the pipeline can keep reading them the same way as before.
const researchPlannerAgent = async (topic, industry, audience, tone, length, additionalContext) => {
  const prompt = `You are producing two things for LinkedIn content generation, in one response.

Topic: ${topic}
Industry: ${industry}
Target Audience: ${audience}
Tone: ${tone}
Length: ${length}
Additional Context: ${additionalContext || 'None'}

Return your response in exactly this structure with these two headers:

RESEARCH:
Provide a concise, actionable research brief covering:
1. Key insights and trends related to this topic
2. Common pain points and challenges in this industry
3. What the target audience cares about
4. Relevant statistics or data points (use realistic ones if specific data isn't available)
5. Current conversations happening on LinkedIn about this topic
6. Expert opinions or frameworks that could be referenced

CONTENT PLAN:
Based on the research above, provide a detailed content structure for the post:
1. Post structure (hook, body, conclusion, CTA)
2. Key talking points to cover
3. Suggested flow and transitions
4. Emotional hooks to include
5. Storytelling elements if applicable
6. Call-to-action placement
7. Formatting recommendations

Keep both sections tight and directly usable by a writer.`;

  const raw = await callOpenRouter(prompt, 'gemini', {
    temperature: 0.55,
    maxTokens: 2200,
    systemPrompt: 'You are an expert research analyst and senior content strategist who specializes in LinkedIn content trends, industry analysis, audience research, and content planning. You return clearly labeled, structured output.'
  });

  const planMarkerMatch = raw.match(/CONTENT PLAN:?\s*\n?([\s\S]*)/i);
  const researchMarkerMatch = raw.match(/RESEARCH:?\s*\n?([\s\S]*?)(?=\n\s*CONTENT PLAN:?)/i);

  const research = researchMarkerMatch ? researchMarkerMatch[1].trim() : raw.trim();
  const plan = planMarkerMatch ? planMarkerMatch[1].trim() : raw.trim();

  return {
    topic,
    industry,
    audience,
    tone,
    length,
    research,
    plan,
    timestamp: new Date()
  };
};

module.exports = researchPlannerAgent;