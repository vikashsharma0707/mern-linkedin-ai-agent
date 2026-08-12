// // const axios = require('axios');

// // const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// // const DEFAULT_MODELS = {
// //   gemini: 'google/gemini-2.0-flash-exp:free',
// //   llama: 'meta-llama/llama-3.3-70b-instruct',
// //   qwen: 'qwen/qwen-3-235b-a22b',
// //   mistral: 'mistralai/mistral-small-24b-instruct-2501'
// // };

// // const callOpenRouter = async (prompt, model = 'gemini', options = {}) => {
// //   try {
// //     const modelId = DEFAULT_MODELS[model] || DEFAULT_MODELS.gemini;
// //     const apiKey = process.env.OPENROUTER_API_KEY;
// //     if (!apiKey) {
// //       throw new Error('OpenRouter API key not configured');
// //     }
// //     const response = await axios.post(
// //       OPENROUTER_API_URL,
// //       {
// //         model: modelId,
// //         messages: [
// //           { role: 'system', content: options.systemPrompt || 'You are a professional LinkedIn content strategist and AI assistant.' },
// //           { role: 'user', content: prompt }
// //         ],
// //         temperature: options.temperature || 0.7,
// //         max_tokens: options.maxTokens || 4000
// //       },
// //       {
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ${apiKey}`,
// //           'HTTP-Referer': 'https://linkedin-post-generator.com',
// //           'X-Title': 'LinkedIn Post Generator'
// //         }
// //       }
// //     );
// //     return response.data.choices[0].message.content;
// //   } catch (error) {
// //     console.error('OpenRouter Error:', error.response?.data || error.message);
// //     throw new Error('Failed to get AI response from OpenRouter');
// //   }
// // };

// // module.exports = { callOpenRouter, DEFAULT_MODELS };


// const axios = require('axios');

// const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// const DEFAULT_MODELS = {
//   gemini: 'google/gemini-2.5-flash',
//   gemini_flash: 'google/gemini-2.5-flash',
  
//   // Free Models (Best Working Right Now)
//   llama: 'nvidia/nemotron-3-super-120b-a12b:free',
//   qwen: 'nvidia/nemotron-3-super-120b-a12b:free',
  
//   // Paid but more stable
//   mistral: 'nvidia/nemotron-3-super-120b-a12b:free'
// };

// // Default free model
// const DEFAULT_MODEL = 'meta-llama/llama-3.3-70b-instruct:free';

// const callOpenRouter = async (prompt, model = 'llama', options = {}) => {
//   let modelId = DEFAULT_MODELS[model] || DEFAULT_MODEL;

//   // Allow overriding model
//   if (options.model) {
//     modelId = options.model;
//   }

//   try {
//     const apiKey = process.env.OPENROUTER_API_KEY;
//     if (!apiKey) {
//       throw new Error('OpenRouter API key not configured in .env file');
//     }

//     const response = await axios.post(
//       OPENROUTER_API_URL,
//       {
//         model: modelId,
//         messages: [
//           {
//             role: 'system',
//             content: options.systemPrompt || 'You are a professional LinkedIn content strategist and AI assistant.'
//           },
//           { role: 'user', content: prompt }
//         ],
//         temperature: options.temperature || 0.75,
//         max_tokens: options.maxTokens || 4000,
//         top_p: options.top_p || 0.95,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`,
//           'HTTP-Referer': 'https://linkedin-post-generator.com',
//           'X-Title': 'LinkedIn Post Generator',
//         }
//       }
//     );

//     if (!response.data?.choices?.[0]?.message?.content) {
//       throw new Error('Invalid response from OpenRouter');
//     }

//     return response.data.choices[0].message.content;

//   } catch (error) {
//     console.error('OpenRouter Error:', error.response?.data || error.message);

//     // Rate limit handling
//     if (error.response?.status === 429) {
//       console.log(`Rate limit hit on ${modelId}. Waiting 8 seconds...`);
//       await new Promise(resolve => setTimeout(resolve, 8000));
      
//       // Try again with same model
//       return callOpenRouter(prompt, model, options);
//     }

//     // Model fallback logic
//     if (modelId.includes(':free') && model !== 'qwen') {
//       console.log('Free model rate limited. Trying Qwen free...');
//       return callOpenRouter(prompt, 'qwen', { ...options, model: DEFAULT_MODELS.qwen });
//     }

//     if (!modelId.includes(':free')) {
//       console.log('Trying free fallback model...');
//       return callOpenRouter(prompt, 'llama', { ...options, model: DEFAULT_MODEL });
//     }

//     throw new Error('Failed to get AI response from OpenRouter. Free models are busy. Try again in 1-2 minutes.');
//   }
// };

// module.exports = { callOpenRouter, DEFAULT_MODELS };



const axios = require('axios');

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// All aliases route to the same paid, fast, reliable model by default.
// Free (":free") models on OpenRouter rotate/get delisted weekly and are
// heavily rate-limited — that churn was the root cause of 2+ minute generations.
const DEFAULT_MODELS = {
  gemini: 'nvidia/nemotron-3-ultra-550b-a55b:free',
  gemini_flash:'nvidia/nemotron-3-ultra-550b-a55b:free',
  llama: 'nvidia/nemotron-3-ultra-550b-a55b:free',
  qwen: 'nvidia/nemotron-3-ultra-550b-a55b:free',
  mistral: 'nvidia/nemotron-3-ultra-550b-a55b:free',
};

const RELIABLE_MODEL = 'google/gemini-2.5-flash';

// Single, capped fallback chain — each model tried at most once.
const FALLBACK_CHAIN = [
  'nvidia/nemotron-3-super-120b-a12b:free',
  'nvidia/nemotron-3-super-120b-a12b:free',
 'nvidia/nemotron-3-super-120b-a12b:free',
];

const REQUEST_TIMEOUT_MS = 25000; // fail fast per-call instead of hanging
const RETRY_WAIT_MS = 2000;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const requestOnce = async (modelId, prompt, options, apiKey) => {
  const response = await axios.post(
    OPENROUTER_API_URL,
    {
      model: modelId,
      messages: [
        {
          role: 'system',
          content: options.systemPrompt || 'You are a professional LinkedIn content strategist and AI assistant.'
        },
        { role: 'user', content: prompt }
      ],
      temperature: options.temperature || 0.75,
      max_tokens: options.maxTokens || 4000,
      top_p: options.top_p || 0.95,
    },
    {
      timeout: REQUEST_TIMEOUT_MS,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://linkedin-post-generator.com',
        'X-Title': 'LinkedIn Post Generator',
      }
    }
  );

  if (!response.data?.choices?.[0]?.message?.content) {
    throw new Error('Invalid response from OpenRouter');
  }

  return response.data.choices[0].message.content;
};

// Tries the requested model once, then walks a fixed fallback chain
// (each model attempted at most once, one short retry on 429 only).
// This replaces the old open-ended recursive retry that could compound
// to several minutes when free models were rate-limited or delisted.
const callOpenRouter = async (prompt, model = 'gemini', options = {}) => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error('OpenRouter API key not configured in .env file');
  }

  const requestedModelId = options.model || DEFAULT_MODELS[model] || RELIABLE_MODEL;
  const chain = [requestedModelId, ...FALLBACK_CHAIN.filter(id => id !== requestedModelId)];

  let lastError;

  for (const modelId of chain) {
    try {
      return await requestOnce(modelId, prompt, options, apiKey);
    } catch (error) {
      lastError = error;
      const status = error.response?.status;
      console.error(`OpenRouter error on ${modelId}:`, error.response?.data || error.message);

      if (status === 429) {
        // Rate limited — short wait, then let the loop move to the next
        // fallback model rather than retrying the same one (this used to
        // double the worst-case time per step).
        await sleep(RETRY_WAIT_MS);
      }
      // Any error (timeout, 429, 5xx, delisted model) — move to next in chain.
    }
  }

  throw new Error(lastError?.message || 'Failed to get AI response from OpenRouter after trying all fallback models.');
};

module.exports = { callOpenRouter, DEFAULT_MODELS };