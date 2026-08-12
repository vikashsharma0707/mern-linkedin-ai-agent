// // import { useState } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import { FileText, Sparkles, Loader2, Copy, Check, Hash, TrendingUp, Lightbulb, FileSearch, PenTool, Search, Tag, ClipboardCheck } from 'lucide-react'
// // import api from '../services/api.js'
// // import toast from 'react-hot-toast'

// // const tones = ['professional', 'technical', 'casual', 'storytelling', 'motivational', 'founder style']
// // const lengths = ['short', 'medium', 'long']
// // const models = [
// //   { value: 'gemini', label: 'Google Gemini', icon: 'G' },
// //   { value: 'llama', label: 'Meta Llama', icon: 'L' },
// //   { value: 'qwen', label: 'Qwen', icon: 'Q' },
// //   { value: 'mistral', label: 'Mistral', icon: 'M' },
// // ]

// // const agentSteps = [
// //   { id: 'research', label: 'Research Agent', icon: Search },
// //   { id: 'planner', label: 'Planner Agent', icon: Lightbulb },
// //   { id: 'writer', label: 'Writer Agent', icon: PenTool },
// //   { id: 'hashtag', label: 'Hashtag Agent', icon: Tag },
// //   { id: 'reviewer', label: 'Reviewer Agent', icon: ClipboardCheck },
// // ]

// // const GeneratePostPage = () => {
// //   const [formData, setFormData] = useState({
// //     topic: '',
// //     industry: '',
// //     audience: '',
// //     tone: 'professional',
// //     length: 'medium',
// //     additionalContext: '',
// //     model: 'gemini'
// //   })
// //   const [result, setResult] = useState(null)
// //   const [loading, setLoading] = useState(false)
// //   const [copied, setCopied] = useState(false)
// //   const [activeTab, setActiveTab] = useState('post')
// //   const [activeStep, setActiveStep] = useState(0)

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     if (!formData.topic || !formData.industry || !formData.audience) {
// //       toast.error('Please fill in all required fields')
// //       return
// //     }
// //     setLoading(true)
// //     setActiveStep(0)
// //     setResult(null)

// //     const stepInterval = setInterval(() => {
// //       setActiveStep(prev => {
// //         if (prev < 4) return prev + 1
// //         return prev
// //       })
// //     }, 2000)

// //     try {
// //       const response = await api.post('/posts/generate', formData)
// //       if (response.data.success) {
// //         setResult(response.data.data.post)
// //         setActiveStep(5)
// //         toast.success('Post generated successfully!')
// //       }
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Failed to generate post')
// //     } finally {
// //       clearInterval(stepInterval)
// //       setLoading(false)
// //     }
// //   }

// //   const handleCopy = (text) => {
// //     navigator.clipboard.writeText(text)
// //     setCopied(true)
// //     toast.success('Copied to clipboard!')
// //     setTimeout(() => setCopied(false), 2000)
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <div>
// //         <h1 className="text-2xl font-bold text-secondary-900">Generate LinkedIn Post</h1>
// //         <p className="text-secondary-500 mt-1">Let AI agents create your next viral post</p>
// //       </div>

// //       <div className="grid lg:grid-cols-2 gap-6">
// //         <div className="card">
// //           <form onSubmit={handleSubmit} className="space-y-5">
// //             <div>
// //               <label className="block text-sm font-medium text-secondary-700 mb-2">Topic *</label>
// //               <input
// //                 type="text"
// //                 value={formData.topic}
// //                 onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
// //                 placeholder="e.g., AI in Marketing"
// //                 className="input-field"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-secondary-700 mb-2">Industry *</label>
// //               <input
// //                 type="text"
// //                 value={formData.industry}
// //                 onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
// //                 placeholder="e.g., Technology, Finance, Healthcare"
// //                 className="input-field"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-secondary-700 mb-2">Target Audience *</label>
// //               <input
// //                 type="text"
// //                 value={formData.audience}
// //                 onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
// //                 placeholder="e.g., Marketing Managers, Founders, Developers"
// //                 className="input-field"
// //                 required
// //               />
// //             </div>
// //             <div className="grid grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-sm font-medium text-secondary-700 mb-2">Tone</label>
// //                 <select
// //                   value={formData.tone}
// //                   onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
// //                   className="select-field"
// //                 >
// //                   {tones.map(tone => (
// //                     <option key={tone} value={tone}>{tone.charAt(0).toUpperCase() + tone.slice(1)}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-secondary-700 mb-2">Length</label>
// //                 <select
// //                   value={formData.length}
// //                   onChange={(e) => setFormData({ ...formData, length: e.target.value })}
// //                   className="select-field"
// //                 >
// //                   {lengths.map(len => (
// //                     <option key={len} value={len}>{len.charAt(0).toUpperCase() + len.slice(1)}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-secondary-700 mb-2">AI Model</label>
// //               <div className="grid grid-cols-4 gap-2">
// //                 {models.map((model) => (
// //                   <button
// //                     key={model.value}
// //                     type="button"
// //                     onClick={() => setFormData({ ...formData, model: model.value })}
// //                     className={`p-3 rounded-lg border text-center transition-all duration-200 ${
// //                       formData.model === model.value
// //                         ? 'border-primary-500 bg-primary-50 text-primary-700'
// //                         : 'border-secondary-200 hover:border-secondary-300 text-secondary-600'
// //                     }`}
// //                   >
// //                     <div className="text-lg font-bold mb-1">{model.icon}</div>
// //                     <div className="text-xs font-medium">{model.label}</div>
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-secondary-700 mb-2">Additional Context</label>
// //               <textarea
// //                 value={formData.additionalContext}
// //                 onChange={(e) => setFormData({ ...formData, additionalContext: e.target.value })}
// //                 placeholder="Any specific points, angle, or context..."
// //                 className="textarea-field"
// //                 rows={3}
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
// //             >
// //               {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
// //               {loading ? 'AI Agents Working...' : 'Generate with AI Agents'}
// //             </button>
// //           </form>
// //         </div>

// //         <div className="space-y-4">
// //           {loading && (
// //             <div className="card">
// //               <h3 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
// //                 <Loader2 size={18} className="animate-spin text-primary-600" />
// //                 Agentic Workflow
// //               </h3>
// //               <div className="space-y-2">
// //                 {agentSteps.map((step, index) => {
// //                   const Icon = step.icon
// //                   const status = index < activeStep ? 'complete' : index === activeStep ? 'active' : 'pending'
// //                   return (
// //                     <motion.div
// //                       key={step.id}
// //                       initial={{ opacity: 0, x: -20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       className={`agent-step ${status === 'complete' ? 'agent-step-complete' : status === 'active' ? 'agent-step-active' : 'agent-step-pending'}`}
// //                     >
// //                       <Icon size={16} />
// //                       <span>{step.label}</span>
// //                       {status === 'complete' && <Check size={14} className="ml-auto" />}
// //                       {status === 'active' && <Loader2 size={14} className="ml-auto animate-spin" />}
// //                     </motion.div>
// //                   )
// //                 })}
// //               </div>
// //             </div>
// //           )}

// //           <AnimatePresence>
// //             {result && (
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -20 }}
// //                 className="card"
// //               >
// //                 <div className="flex items-center justify-between mb-4">
// //                   <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
// //                     <FileText size={18} className="text-primary-600" />
// //                     Generated Post
// //                   </h3>
// //                   <div className="flex items-center gap-2">
// //                     {result.scores && (
// //                       <div className="flex items-center gap-1 px-2 py-1 bg-primary-50 rounded-lg text-xs font-semibold text-primary-700">
// //                         <TrendingUp size={12} />
// //                         Score: {result.scores.overall}
// //                       </div>
// //                     )}
// //                     <button
// //                       onClick={() => handleCopy(result.content + '\n\n' + result.hashtagString)}
// //                       className="p-2 rounded-lg hover:bg-secondary-100 transition-colors"
// //                       title="Copy to clipboard"
// //                     >
// //                       {copied ? <Check size={16} className="text-success-600" /> : <Copy size={16} className="text-secondary-600" />}
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="flex gap-2 mb-4 border-b border-secondary-200">
// //                   {['post', 'hashtags', 'review'].map((tab) => (
// //                     <button
// //                       key={tab}
// //                       onClick={() => setActiveTab(tab)}
// //                       className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition-all ${
// //                         activeTab === tab ? 'border-primary-500 text-primary-600' : 'border-transparent text-secondary-500 hover:text-secondary-700'
// //                       }`}
// //                     >
// //                       {tab}
// //                     </button>
// //                   ))}
// //                 </div>

// //                 {activeTab === 'post' && (
// //                   <div className="bg-secondary-50 rounded-lg p-4 whitespace-pre-wrap text-sm leading-relaxed text-secondary-800">
// //                     {result.content}
// //                   </div>
// //                 )}

// //                 {activeTab === 'hashtags' && (
// //                   <div className="space-y-3">
// //                     <div className="flex flex-wrap gap-2">
// //                       {result.hashtags?.map((tag, i) => (
// //                         <span key={i} className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">
// //                           #{tag}
// //                         </span>
// //                       ))}
// //                     </div>
// //                     <div className="bg-secondary-50 rounded-lg p-4 text-sm text-secondary-700">
// //                       {result.hashtagString}
// //                     </div>
// //                   </div>
// //                 )}

// //                 {activeTab === 'review' && (
// //                   <div className="space-y-4">
// //                     {result.scores && (
// //                       <div className="grid grid-cols-2 gap-3">
// //                         {Object.entries(result.scores).map(([key, value]) => (
// //                           <div key={key} className="bg-secondary-50 rounded-lg p-3">
// //                             <div className="text-xs text-secondary-500 uppercase mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
// //                             <div className="text-2xl font-bold text-secondary-900">{value}</div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     )}
// //                     {result.review && (
// //                       <div className="bg-secondary-50 rounded-lg p-4 text-sm text-secondary-700 whitespace-pre-wrap max-h-64 overflow-y-auto">
// //                         {result.review}
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default GeneratePostPage






// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FileText, Sparkles, Loader2, Copy, Check, Hash, TrendingUp, Lightbulb, FileSearch, PenTool, Search, Tag, ClipboardCheck } from 'lucide-react'
// import api from '../services/api.js'
// import toast from 'react-hot-toast'

// const tones = ['professional', 'technical', 'casual', 'storytelling', 'motivational', 'founder style']
// const lengths = ['short', 'medium', 'long']
// const models = [
//   { value: 'gemini', label: 'Google Gemini', icon: 'G', gradient: 'from-blue-500 to-cyan-500' },
//   { value: 'llama', label: 'Meta Llama', icon: 'L', gradient: 'from-indigo-500 to-blue-500' },
//   { value: 'qwen', label: 'Qwen', icon: 'Q', gradient: 'from-violet-500 to-purple-500' },
//   { value: 'mistral', label: 'Mistral', icon: 'M', gradient: 'from-orange-500 to-amber-500' },
// ]

// const agentSteps = [
//   { id: 'research', label: 'Research Agent', icon: Search },
//   { id: 'planner', label: 'Planner Agent', icon: Lightbulb },
//   { id: 'writer', label: 'Writer Agent', icon: PenTool },
//   { id: 'hashtag', label: 'Hashtag Agent', icon: Tag },
//   { id: 'reviewer', label: 'Reviewer Agent', icon: ClipboardCheck },
// ]

// const tabList = ['post', 'hashtags', 'review']

// const GeneratePostPage = () => {
//   const [formData, setFormData] = useState({
//     topic: '',
//     industry: '',
//     audience: '',
//     tone: 'professional',
//     length: 'medium',
//     additionalContext: '',
//     model: 'gemini'
//   })
//   const [result, setResult] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [copied, setCopied] = useState(false)
//   const [activeTab, setActiveTab] = useState('post')
//   const [activeStep, setActiveStep] = useState(0)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!formData.topic || !formData.industry || !formData.audience) {
//       toast.error('Please fill in all required fields')
//       return
//     }
//     setLoading(true)
//     setActiveStep(0)
//     setResult(null)

//     const stepInterval = setInterval(() => {
//       setActiveStep(prev => {
//         if (prev < 4) return prev + 1
//         return prev
//       })
//     }, 2000)

//     try {
//       const response = await api.post('/posts/generate', formData)
//       if (response.data.success) {
//         setResult(response.data.data.post)
//         setActiveStep(5)
//         toast.success('Post generated successfully!')
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Failed to generate post')
//     } finally {
//       clearInterval(stepInterval)
//       setLoading(false)
//     }
//   }

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text)
//     setCopied(true)
//     toast.success('Copied to clipboard!')
//     setTimeout(() => setCopied(false), 2000)
//   }

//   return (
//     <div className="space-y-6 text-gray-900 dark:text-white">
//       <div>
//         <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Generate LinkedIn Post</h1>
//         <p className="text-gray-500 dark:text-white/50 mt-1">Let AI agents create your next viral post</p>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">

//         {/* FORM */}
//         <div className="rounded-3xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm
//                         dark:bg-white/[0.04] dark:border-white/[0.06] dark:shadow-none">
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Topic *</label>
//               <input
//                 type="text"
//                 value={formData.topic}
//                 onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
//                 placeholder="e.g., AI in Marketing"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900
//                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
//                            dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white dark:placeholder:text-white/30
//                            dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Industry *</label>
//               <input
//                 type="text"
//                 value={formData.industry}
//                 onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
//                 placeholder="e.g., Technology, Finance, Healthcare"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900
//                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
//                            dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white dark:placeholder:text-white/30
//                            dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Target Audience *</label>
//               <input
//                 type="text"
//                 value={formData.audience}
//                 onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
//                 placeholder="e.g., Marketing Managers, Founders, Developers"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900
//                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
//                            dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white dark:placeholder:text-white/30
//                            dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
//                 required
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Tone</label>
//                 <select
//                   value={formData.tone}
//                   onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 cursor-pointer
//                              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
//                              dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white
//                              dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
//                 >
//                   {tones.map(tone => (
//                     <option key={tone} value={tone} className="text-gray-900">
//                       {tone.charAt(0).toUpperCase() + tone.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Length</label>
//                 <select
//                   value={formData.length}
//                   onChange={(e) => setFormData({ ...formData, length: e.target.value })}
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 cursor-pointer
//                              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
//                              dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white
//                              dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
//                 >
//                   {lengths.map(len => (
//                     <option key={len} value={len} className="text-gray-900">
//                       {len.charAt(0).toUpperCase() + len.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">AI Model</label>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//                 {models.map((model) => {
//                   const isSelected = formData.model === model.value
//                   return (
//                     <motion.button
//                       key={model.value}
//                       type="button"
//                       whileTap={{ scale: 0.96 }}
//                       onClick={() => setFormData({ ...formData, model: model.value })}
//                       className={`relative p-3 rounded-xl border text-center transition-all duration-200 overflow-hidden
//                         ${isSelected
//                           ? 'border-indigo-400 bg-indigo-50 dark:border-white/20 dark:bg-white/[0.08]'
//                           : 'border-gray-200 hover:border-gray-300 dark:border-white/[0.08] dark:hover:border-white/20'}`}
//                     >
//                       <div className={`w-7 h-7 mx-auto rounded-lg flex items-center justify-center text-xs font-bold text-white mb-1.5
//                                        bg-gradient-to-br ${model.gradient}`}>
//                         {model.icon}
//                       </div>
//                       <div className={`text-xs font-medium truncate ${isSelected ? 'text-indigo-700 dark:text-white' : 'text-gray-600 dark:text-white/60'}`}>
//                         {model.label}
//                       </div>
//                     </motion.button>
//                   )
//                 })}
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Additional Context</label>
//               <textarea
//                 value={formData.additionalContext}
//                 onChange={(e) => setFormData({ ...formData, additionalContext: e.target.value })}
//                 placeholder="Any specific points, angle, or context..."
//                 rows={3}
//                 className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 resize-none
//                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
//                            dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white dark:placeholder:text-white/30
//                            dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
//               />
//             </div>

//             <motion.button
//               type="submit"
//               disabled={loading}
//               whileHover={{ scale: loading ? 1 : 1.01 }}
//               whileTap={{ scale: loading ? 1 : 0.98 }}
//               className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white
//                          bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20
//                          disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
//             >
//               {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
//               {loading ? 'AI Agents Working...' : 'Generate with AI Agents'}
//             </motion.button>
//           </form>
//         </div>

//         {/* RESULT / WORKFLOW */}
//         <div className="space-y-4">
//           {loading && (
//             <div className="rounded-3xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm
//                             dark:bg-white/[0.04] dark:border-white/[0.06] dark:shadow-none">
//               <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
//                 <Loader2 size={18} className="animate-spin text-indigo-500 dark:text-indigo-400" />
//                 Agentic Workflow
//               </h3>
//               <div className="space-y-2">
//                 {agentSteps.map((step, index) => {
//                   const Icon = step.icon
//                   const status = index < activeStep ? 'complete' : index === activeStep ? 'active' : 'pending'
//                   const statusClasses = {
//                     complete: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
//                     active: 'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20',
//                     pending: 'bg-gray-100 text-gray-500 dark:bg-white/[0.05] dark:text-white/40',
//                   }
//                   return (
//                     <motion.div
//                       key={step.id}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${statusClasses[status]}`}
//                     >
//                       <Icon size={16} />
//                       <span>{step.label}</span>
//                       {status === 'complete' && <Check size={14} className="ml-auto" />}
//                       {status === 'active' && <Loader2 size={14} className="ml-auto animate-spin" />}
//                     </motion.div>
//                   )
//                 })}
//               </div>
//             </div>
//           )}

//           <AnimatePresence>
//             {result && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="rounded-3xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm
//                           dark:bg-white/[0.04] dark:border-white/[0.06] dark:shadow-none"
//               >
//                 <div className="flex items-start sm:items-center justify-between gap-3 mb-4 flex-wrap">
//                   <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
//                     <FileText size={18} className="text-indigo-500 dark:text-indigo-400" />
//                     Generated Post
//                   </h3>
//                   <div className="flex items-center gap-2">
//                     {result.scores && (
//                       <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold
//                                      bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
//                         <TrendingUp size={12} />
//                         Score: {result.scores.overall}
//                       </div>
//                     )}
//                     <button
//                       onClick={() => handleCopy(result.content + '\n\n' + result.hashtagString)}
//                       className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-colors"
//                       title="Copy to clipboard"
//                     >
//                       {copied
//                         ? <Check size={16} className="text-emerald-600 dark:text-emerald-400" />
//                         : <Copy size={16} className="text-gray-500 dark:text-white/60" />}
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex gap-1 mb-4 border-b border-gray-200 dark:border-white/[0.08] overflow-x-auto">
//                   {tabList.map((tab) => (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveTab(tab)}
//                       className={`px-4 py-2 text-sm font-medium capitalize border-b-2 whitespace-nowrap transition-all
//                         ${activeTab === tab
//                           ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-white'
//                           : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-white/40 dark:hover:text-white/70'}`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>

//                 {activeTab === 'post' && (
//                   <div className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-4 whitespace-pre-wrap text-sm leading-relaxed
//                                   text-gray-800 dark:text-white/80 max-h-96 overflow-y-auto scrollbar-thin">
//                     {result.content}
//                   </div>
//                 )}

//                 {activeTab === 'hashtags' && (
//                   <div className="space-y-3">
//                     <div className="flex flex-wrap gap-2">
//                       {result.hashtags?.map((tag, i) => (
//                         <span key={i} className="px-3 py-1.5 rounded-lg text-sm font-medium
//                                                  bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
//                           #{tag}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-4 text-sm text-gray-700 dark:text-white/70">
//                       {result.hashtagString}
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'review' && (
//                   <div className="space-y-4">
//                     {result.scores && (
//                       <div className="grid grid-cols-2 gap-3">
//                         {Object.entries(result.scores).map(([key, value]) => (
//                           <div key={key} className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-3">
//                             <div className="text-xs text-gray-500 dark:text-white/40 uppercase mb-1">
//                               {key.replace(/([A-Z])/g, ' $1').trim()}
//                             </div>
//                             <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {result.review && (
//                       <div className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-4 text-sm text-gray-700 dark:text-white/70
//                                       whitespace-pre-wrap max-h-64 overflow-y-auto scrollbar-thin">
//                         {result.review}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Empty state when nothing generated yet and not loading */}
//           {!loading && !result && (
//             <div className="rounded-3xl p-8 bg-white border border-gray-200 shadow-sm
//                             dark:bg-white/[0.04] dark:border-white/[0.06] dark:shadow-none
//                             flex flex-col items-center text-center">
//               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-fuchsia-100
//                               dark:from-indigo-500/20 dark:to-fuchsia-500/20 flex items-center justify-center mb-4">
//                 <Sparkles size={24} className="text-indigo-500 dark:text-indigo-300" />
//               </div>
//               <p className="text-gray-600 dark:text-white/60 text-sm">
//                 Fill in the form and your AI-generated post will appear here.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GeneratePostPage






import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Sparkles, Loader2, Copy, Check, Hash, TrendingUp, Lightbulb, FileSearch, PenTool, Search, Tag, ClipboardCheck, Clock, X, Trash2, RotateCcw } from 'lucide-react'
import api from '../services/api.js'
import toast from 'react-hot-toast'

const tones = ['professional', 'technical', 'casual', 'storytelling', 'motivational', 'founder style']
const lengths = ['short', 'medium', 'long']
const models = [
  { value: 'gemini', label: 'Google Gemini', icon: 'G', gradient: 'from-blue-500 to-cyan-500' },
  { value: 'llama', label: 'Meta Llama', icon: 'L', gradient: 'from-indigo-500 to-blue-500' },
  { value: 'qwen', label: 'Qwen', icon: 'Q', gradient: 'from-violet-500 to-purple-500' },
  { value: 'mistral', label: 'Mistral', icon: 'M', gradient: 'from-orange-500 to-amber-500' },
]

const agentSteps = [
  { id: 'research', label: 'Research Agent', icon: Search },
  { id: 'planner', label: 'Planner Agent', icon: Lightbulb },
  { id: 'writer', label: 'Writer Agent', icon: PenTool },
  { id: 'hashtag', label: 'Hashtag Agent', icon: Tag },
  { id: 'reviewer', label: 'Reviewer Agent', icon: ClipboardCheck },
]

const tabList = ['post', 'hashtags', 'review']

const timeAgo = (dateStr) => {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 7) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString()
}

const GeneratePostPage = () => {
  const [formData, setFormData] = useState({
    topic: '',
    industry: '',
    audience: '',
    tone: 'professional',
    length: 'medium',
    additionalContext: '',
    model: 'gemini'
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('post')
  const [activeStep, setActiveStep] = useState(0)

  const [showHistory, setShowHistory] = useState(false)
  const [historyItems, setHistoryItems] = useState([])
  const [historyLoading, setHistoryLoading] = useState(false)

  useEffect(() => {
    fetchHistory()
  }, [])

  const fetchHistory = async () => {
    setHistoryLoading(true)
    try {
      const response = await api.get('/history', { params: { type: 'post', limit: 30 } })
      if (response.data.success) {
        setHistoryItems(response.data.data.items)
      }
    } catch (error) {
      // silent fail, history is a convenience panel
    } finally {
      setHistoryLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.topic || !formData.industry || !formData.audience) {
      toast.error('Please fill in all required fields')
      return
    }
    setLoading(true)
    setActiveStep(0)
    setResult(null)

    const stepInterval = setInterval(() => {
      setActiveStep(prev => {
        if (prev < 4) return prev + 1
        return prev
      })
    }, 2000)

    try {
      const response = await api.post('/posts/generate', formData)
      if (response.data.success) {
        setResult(response.data.data.post)
        setActiveStep(5)
        setActiveTab('post')
        toast.success('Post generated successfully!')
        fetchHistory()
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to generate post')
    } finally {
      clearInterval(stepInterval)
      setLoading(false)
    }
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    toast.success('Copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  const loadFromHistory = (item) => {
    const output = item.output || {}
    setFormData(prev => ({ ...prev, ...item.input }))
    setResult({
      content: output.content || '',
      hashtags: output.hashtags || [],
      hashtagString: output.hashtags?.length ? output.hashtags.map(h => `#${h}`).join(' ') : '',
      scores: output.scores || null,
      review: output.review || null,
    })
    setActiveTab('post')
    setShowHistory(false)
  }

  const handleClearHistory = async () => {
    if (!confirm('Clear all history? This removes activity across every AI tool, not just posts.')) return
    try {
      await api.delete('/history/clear')
      setHistoryItems([])
      toast.success('History cleared')
    } catch (error) {
      toast.error('Failed to clear history')
    }
  }

  return (
    <div className="space-y-6 text-gray-900 dark:text-white">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Generate LinkedIn Post</h1>
          <p className="text-gray-500 dark:text-white/50 mt-1">Let AI agents create your next viral post</p>
        </div>
        <button
          onClick={() => setShowHistory(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors
                     bg-white border-gray-200 text-gray-700 hover:border-gray-300
                     dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-white/70 dark:hover:border-white/20"
        >
          <Clock size={16} />
          History
          {historyItems.length > 0 && (
            <span className="px-1.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-600
                             dark:bg-indigo-500/10 dark:text-indigo-400">
              {historyItems.length}
            </span>
          )}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">

        {/* FORM */}
        <div className="rounded-3xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm
                        dark:bg-white/[0.04] dark:border-white/[0.06] dark:shadow-none">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Topic *</label>
              <input
                type="text"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                placeholder="e.g., AI in Marketing"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
                           dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white dark:placeholder:text-white/30
                           dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Industry *</label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                placeholder="e.g., Technology, Finance, Healthcare"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
                           dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white dark:placeholder:text-white/30
                           dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Target Audience *</label>
              <input
                type="text"
                value={formData.audience}
                onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                placeholder="e.g., Marketing Managers, Founders, Developers"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
                           dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white dark:placeholder:text-white/30
                           dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Tone</label>
                <select
                  value={formData.tone}
                  onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 cursor-pointer
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
                             dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white
                             dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                >
                  {tones.map(tone => (
                    <option key={tone} value={tone} className="text-gray-900">
                      {tone.charAt(0).toUpperCase() + tone.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Length</label>
                <select
                  value={formData.length}
                  onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 cursor-pointer
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
                             dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white
                             dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                >
                  {lengths.map(len => (
                    <option key={len} value={len} className="text-gray-900">
                      {len.charAt(0).toUpperCase() + len.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">AI Model</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {models.map((model) => {
                  const isSelected = formData.model === model.value
                  return (
                    <motion.button
                      key={model.value}
                      type="button"
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setFormData({ ...formData, model: model.value })}
                      className={`relative p-3 rounded-xl border text-center transition-all duration-200 overflow-hidden
                        ${isSelected
                          ? 'border-indigo-400 bg-indigo-50 dark:border-white/20 dark:bg-white/[0.08]'
                          : 'border-gray-200 hover:border-gray-300 dark:border-white/[0.08] dark:hover:border-white/20'}`}
                    >
                      <div className={`w-7 h-7 mx-auto rounded-lg flex items-center justify-center text-xs font-bold text-white mb-1.5
                                       bg-gradient-to-br ${model.gradient}`}>
                        {model.icon}
                      </div>
                      <div className={`text-xs font-medium truncate ${isSelected ? 'text-indigo-700 dark:text-white' : 'text-gray-600 dark:text-white/60'}`}>
                        {model.label}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">Additional Context</label>
              <textarea
                value={formData.additionalContext}
                onChange={(e) => setFormData({ ...formData, additionalContext: e.target.value })}
                placeholder="Any specific points, angle, or context..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 resize-none
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all
                           dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-white dark:placeholder:text-white/30
                           dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20
                         disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
              {loading ? 'AI Agents Working...' : 'Generate with AI Agents'}
            </motion.button>
          </form>
        </div>

        {/* RESULT / WORKFLOW */}
        <div className="space-y-4">
          {loading && (
            <div className="rounded-3xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm
                            dark:bg-white/[0.04] dark:border-white/[0.06] dark:shadow-none">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Loader2 size={18} className="animate-spin text-indigo-500 dark:text-indigo-400" />
                Agentic Workflow
              </h3>
              <div className="space-y-2">
                {agentSteps.map((step, index) => {
                  const Icon = step.icon
                  const status = index < activeStep ? 'complete' : index === activeStep ? 'active' : 'pending'
                  const statusClasses = {
                    complete: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
                    active: 'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20',
                    pending: 'bg-gray-100 text-gray-500 dark:bg-white/[0.05] dark:text-white/40',
                  }
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${statusClasses[status]}`}
                    >
                      <Icon size={16} />
                      <span>{step.label}</span>
                      {status === 'complete' && <Check size={14} className="ml-auto" />}
                      {status === 'active' && <Loader2 size={14} className="ml-auto animate-spin" />}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="rounded-3xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm
                          dark:bg-white/[0.04] dark:border-white/[0.06] dark:shadow-none"
              >
                <div className="flex items-start sm:items-center justify-between gap-3 mb-4 flex-wrap">
                  <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <FileText size={18} className="text-indigo-500 dark:text-indigo-400" />
                    Generated Post
                  </h3>
                  <div className="flex items-center gap-2">
                    {result.scores && (
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold
                                     bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
                        <TrendingUp size={12} />
                        Score: {result.scores.overall}
                      </div>
                    )}
                    <button
                      onClick={() => handleCopy(result.content + '\n\n' + result.hashtagString)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied
                        ? <Check size={16} className="text-emerald-600 dark:text-emerald-400" />
                        : <Copy size={16} className="text-gray-500 dark:text-white/60" />}
                    </button>
                  </div>
                </div>

                <div className="flex gap-1 mb-4 border-b border-gray-200 dark:border-white/[0.08] overflow-x-auto">
                  {tabList.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 text-sm font-medium capitalize border-b-2 whitespace-nowrap transition-all
                        ${activeTab === tab
                          ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-white'
                          : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-white/40 dark:hover:text-white/70'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {activeTab === 'post' && (
                  <div className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-4 whitespace-pre-wrap text-sm leading-relaxed
                                  text-gray-800 dark:text-white/80 max-h-96 overflow-y-auto scrollbar-thin">
                    {result.content}
                  </div>
                )}

                {activeTab === 'hashtags' && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {result.hashtags?.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg text-sm font-medium
                                                 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-4 text-sm text-gray-700 dark:text-white/70">
                      {result.hashtagString}
                    </div>
                  </div>
                )}

                {activeTab === 'review' && (
                  <div className="space-y-4">
                    {result.scores && (
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(result.scores).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-3">
                            <div className="text-xs text-gray-500 dark:text-white/40 uppercase mb-1">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {result.review && (
                      <div className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-4 text-sm text-gray-700 dark:text-white/70
                                      whitespace-pre-wrap max-h-64 overflow-y-auto scrollbar-thin">
                        {result.review}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty state when nothing generated yet and not loading */}
          {!loading && !result && (
            <div className="rounded-3xl p-8 bg-white border border-gray-200 shadow-sm
                            dark:bg-white/[0.04] dark:border-white/[0.06] dark:shadow-none
                            flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-fuchsia-100
                              dark:from-indigo-500/20 dark:to-fuchsia-500/20 flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-indigo-500 dark:text-indigo-300" />
              </div>
              <p className="text-gray-600 dark:text-white/60 text-sm">
                Fill in the form and your AI-generated post will appear here.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* HISTORY DRAWER */}
      <AnimatePresence>
        {showHistory && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHistory(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed right-0 top-0 h-full w-full max-w-md z-50 bg-white dark:bg-[#0b0b10]
                         border-l border-gray-200 dark:border-white/[0.08] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-white/[0.08]">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Clock size={18} className="text-indigo-500 dark:text-indigo-400" />
                  Post History
                </h3>
                <div className="flex items-center gap-1">
                  {historyItems.length > 0 && (
                    <button
                      onClick={handleClearHistory}
                      title="Clear history"
                      className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50
                                 dark:text-white/40 dark:hover:text-red-400 dark:hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => setShowHistory(false)}
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100
                               dark:text-white/40 dark:hover:text-white dark:hover:bg-white/[0.08] transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-thin px-5 py-4 space-y-3">
                {historyLoading ? (
                  <div className="flex items-center justify-center py-16">
                    <Loader2 size={22} className="animate-spin text-indigo-500" />
                  </div>
                ) : historyItems.length === 0 ? (
                  <div className="flex flex-col items-center text-center py-16">
                    <Clock size={36} className="text-gray-300 dark:text-white/20 mb-3" />
                    <p className="text-sm text-gray-500 dark:text-white/40">
                      No posts generated yet. Your history will show up here.
                    </p>
                  </div>
                ) : (
                  historyItems.map((item) => (
                    <button
                      key={item._id}
                      onClick={() => loadFromHistory(item)}
                      className="w-full text-left rounded-2xl p-4 border border-gray-200 hover:border-indigo-300
                                 bg-gray-50 hover:bg-indigo-50/40 transition-colors group
                                 dark:bg-white/[0.03] dark:border-white/[0.08] dark:hover:border-indigo-400/30
                                 dark:hover:bg-white/[0.06]"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">
                          {item.title}
                        </span>
                        <RotateCcw size={14} className="text-gray-300 dark:text-white/20 group-hover:text-indigo-500
                                                          dark:group-hover:text-indigo-400 flex-shrink-0 mt-0.5 transition-colors" />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-white/40 line-clamp-2 mb-2">
                        {item.output?.content}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap text-[11px]">
                        {item.input?.tone && (
                          <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600
                                           dark:bg-indigo-500/10 dark:text-indigo-400 font-medium capitalize">
                            {item.input.tone}
                          </span>
                        )}
                        {item.output?.scores?.overall != null && (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600
                                           dark:bg-emerald-500/10 dark:text-emerald-400 font-medium">
                            Score {item.output.scores.overall}
                          </span>
                        )}
                        <span className="text-gray-400 dark:text-white/30 ml-auto">
                          {timeAgo(item.createdAt)}
                        </span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GeneratePostPage