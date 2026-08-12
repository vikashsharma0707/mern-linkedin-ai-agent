// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Sparkles, Loader2, Copy, Check, RefreshCw } from 'lucide-react'
// import api from '../services/api.js'
// import toast from 'react-hot-toast'

// const models = [
//   { value: 'gemini', label: 'Google Gemini', icon: 'G' },
//   { value: 'llama', label: 'Meta Llama', icon: 'L' },
//   { value: 'qwen', label: 'Qwen', icon: 'Q' },
//   { value: 'mistral', label: 'Mistral', icon: 'M' },
// ]

// const HookGeneratorPage = () => {
//   const [topic, setTopic] = useState('')
//   const [industry, setIndustry] = useState('')
//   const [count, setCount] = useState(5)
//   const [model, setModel] = useState('gemini')
//   const [hooks, setHooks] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [copiedIndex, setCopiedIndex] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!topic) {
//       toast.error('Please enter a topic')
//       return
//     }
//     setLoading(true)
//     try {
//       const response = await api.post('/hooks/generate', { topic, industry, count, model })
//       if (response.data.success) {
//         setHooks(response.data.data.hooks)
//         toast.success(`${response.data.data.hooks.length} hooks generated!`)
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Failed to generate hooks')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleCopy = (hook, index) => {
//     navigator.clipboard.writeText(hook)
//     setCopiedIndex(index)
//     toast.success('Hook copied!')
//     setTimeout(() => setCopiedIndex(null), 2000)
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold text-secondary-900">Hook Generator</h1>
//         <p className="text-secondary-500 mt-1">Create scroll-stopping hooks that capture attention</p>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-6">
//         <div className="card">
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-sm font-medium text-secondary-700 mb-2">Topic *</label>
//               <input
//                 type="text"
//                 value={topic}
//                 onChange={(e) => setTopic(e.target.value)}
//                 placeholder="e.g., Why AI will replace most jobs"
//                 className="input-field"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-secondary-700 mb-2">Industry</label>
//               <input
//                 type="text"
//                 value={industry}
//                 onChange={(e) => setIndustry(e.target.value)}
//                 placeholder="e.g., Technology, Marketing"
//                 className="input-field"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-secondary-700 mb-2">Number of Hooks</label>
//               <input
//                 type="number"
//                 value={count}
//                 onChange={(e) => setCount(Math.min(15, Math.max(1, parseInt(e.target.value) || 1)))}
//                 min="1"
//                 max="15"
//                 className="input-field"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-secondary-700 mb-2">AI Model</label>
//               <div className="grid grid-cols-4 gap-2">
//                 {models.map((m) => (
//                   <button
//                     key={m.value}
//                     type="button"
//                     onClick={() => setModel(m.value)}
//                     className={`p-3 rounded-lg border text-center transition-all ${
//                       model === m.value ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-secondary-200 hover:border-secondary-300 text-secondary-600'
//                     }`}
//                   >
//                     <div className="text-lg font-bold mb-1">{m.icon}</div>
//                     <div className="text-xs font-medium">{m.label}</div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
//             >
//               {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
//               {loading ? 'Generating...' : 'Generate Hooks'}
//             </button>
//           </form>
//         </div>

//         <div>
//           <AnimatePresence>
//             {hooks.length > 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="card"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
//                     <Sparkles size={18} className="text-accent-600" />
//                     Generated Hooks
//                   </h3>
//                   <button
//                     onClick={() => handleSubmit({ preventDefault: () => {} })}
//                     className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
//                   >
//                     <RefreshCw size={14} />
//                     Regenerate
//                   </button>
//                 </div>
//                 <div className="space-y-3">
//                   {hooks.map((hook, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-start gap-3 p-3 bg-secondary-50 rounded-lg group hover:bg-primary-50 transition-colors"
//                     >
//                       <span className="text-sm font-bold text-primary-600 mt-0.5">{index + 1}.</span>
//                       <p className="text-sm text-secondary-800 flex-1 leading-relaxed">{hook}</p>
//                       <button
//                         onClick={() => handleCopy(hook, index)}
//                         className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-white transition-all"
//                         title="Copy hook"
//                       >
//                         {copiedIndex === index ? <Check size={14} className="text-success-600" /> : <Copy size={14} className="text-secondary-500" />}
//                       </button>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HookGeneratorPage



import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Loader2, Copy, Check, RefreshCw, Clock, X, Trash2, RotateCcw } from 'lucide-react'
import api from '../services/api.js'
import toast from 'react-hot-toast'

const models = [
  { value: 'gemini', label: 'Google Gemini', icon: 'G' },
  { value: 'llama', label: 'Meta Llama', icon: 'L' },
  { value: 'qwen', label: 'Qwen', icon: 'Q' },
  { value: 'mistral', label: 'Mistral', icon: 'M' },
]

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

const HookGeneratorPage = () => {
  const [topic, setTopic] = useState('')
  const [industry, setIndustry] = useState('')
  const [count, setCount] = useState(5)
  const [model, setModel] = useState('gemini')
  const [hooks, setHooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const [showHistory, setShowHistory] = useState(false)
  const [historyItems, setHistoryItems] = useState([])
  const [historyLoading, setHistoryLoading] = useState(false)

  useEffect(() => {
    fetchHistory()
  }, [])

  const fetchHistory = async () => {
    setHistoryLoading(true)
    try {
      const response = await api.get('/history', { params: { type: 'hook', limit: 30 } })
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
    if (!topic) {
      toast.error('Please enter a topic')
      return
    }
    setLoading(true)
    try {
      const response = await api.post('/hooks/generate', { topic, industry, count, model })
      if (response.data.success) {
        setHooks(response.data.data.hooks)
        toast.success(`${response.data.data.hooks.length} hooks generated!`)
        fetchHistory()
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to generate hooks')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = (hook, index) => {
    navigator.clipboard.writeText(hook)
    setCopiedIndex(index)
    toast.success('Hook copied!')
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const loadFromHistory = (item) => {
    setTopic(item.input?.topic || '')
    setIndustry(item.input?.industry || '')
    setCount(item.input?.count || 5)
    setHooks(item.output?.hooks || [])
    setShowHistory(false)
  }

  const handleClearHistory = async () => {
    if (!confirm('Clear all history? This removes activity across every AI tool, not just hooks.')) return
    try {
      await api.delete('/history/clear')
      setHistoryItems([])
      toast.success('History cleared')
    } catch (error) {
      toast.error('Failed to clear history')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Hook Generator</h1>
          <p className="text-secondary-500 mt-1">Create scroll-stopping hooks that capture attention</p>
        </div>
        <button
          onClick={() => setShowHistory(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-secondary-200
                     bg-white text-secondary-700 hover:border-secondary-300 transition-colors"
        >
          <Clock size={16} />
          History
          {historyItems.length > 0 && (
            <span className="px-1.5 py-0.5 rounded-md text-xs font-semibold bg-primary-50 text-primary-600">
              {historyItems.length}
            </span>
          )}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Topic *</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Why AI will replace most jobs"
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Industry</label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g., Technology, Marketing"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Number of Hooks</label>
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(Math.min(15, Math.max(1, parseInt(e.target.value) || 1)))}
                min="1"
                max="15"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">AI Model</label>
              <div className="grid grid-cols-4 gap-2">
                {models.map((m) => (
                  <button
                    key={m.value}
                    type="button"
                    onClick={() => setModel(m.value)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      model === m.value ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-secondary-200 hover:border-secondary-300 text-secondary-600'
                    }`}
                  >
                    <div className="text-lg font-bold mb-1">{m.icon}</div>
                    <div className="text-xs font-medium">{m.label}</div>
                  </button>
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
              {loading ? 'Generating...' : 'Generate Hooks'}
            </button>
          </form>
        </div>

        <div>
          <AnimatePresence>
            {hooks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
                    <Sparkles size={18} className="text-accent-600" />
                    Generated Hooks
                  </h3>
                  <button
                    onClick={() => handleSubmit({ preventDefault: () => {} })}
                    className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <RefreshCw size={14} />
                    Regenerate
                  </button>
                </div>
                <div className="space-y-3">
                  {hooks.map((hook, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-secondary-50 rounded-lg group hover:bg-primary-50 transition-colors"
                    >
                      <span className="text-sm font-bold text-primary-600 mt-0.5">{index + 1}.</span>
                      <p className="text-sm text-secondary-800 flex-1 leading-relaxed">{hook}</p>
                      <button
                        onClick={() => handleCopy(hook, index)}
                        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-white transition-all"
                        title="Copy hook"
                      >
                        {copiedIndex === index ? <Check size={14} className="text-success-600" /> : <Copy size={14} className="text-secondary-500" />}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
              className="fixed right-0 top-0 h-full w-full max-w-md z-50 bg-white border-l border-secondary-200 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-secondary-200">
                <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
                  <Clock size={18} className="text-primary-600" />
                  Hook History
                </h3>
                <div className="flex items-center gap-1">
                  {historyItems.length > 0 && (
                    <button
                      onClick={handleClearHistory}
                      title="Clear history"
                      className="p-2 rounded-lg text-secondary-400 hover:text-error-600 hover:bg-error-50 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => setShowHistory(false)}
                    className="p-2 rounded-lg text-secondary-400 hover:text-secondary-700 hover:bg-secondary-100 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-thin px-5 py-4 space-y-3">
                {historyLoading ? (
                  <div className="flex items-center justify-center py-16">
                    <Loader2 size={22} className="animate-spin text-primary-600" />
                  </div>
                ) : historyItems.length === 0 ? (
                  <div className="flex flex-col items-center text-center py-16">
                    <Clock size={36} className="text-secondary-300 mb-3" />
                    <p className="text-sm text-secondary-500">
                      No hooks generated yet. Your history will show up here.
                    </p>
                  </div>
                ) : (
                  historyItems.map((item) => (
                    <button
                      key={item._id}
                      onClick={() => loadFromHistory(item)}
                      className="w-full text-left rounded-xl p-4 border border-secondary-200 hover:border-primary-300
                                 bg-secondary-50 hover:bg-primary-50/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-sm font-semibold text-secondary-900 line-clamp-1">
                          {item.title}
                        </span>
                        <RotateCcw size={14} className="text-secondary-300 group-hover:text-primary-600 flex-shrink-0 mt-0.5 transition-colors" />
                      </div>
                      <p className="text-xs text-secondary-500 line-clamp-2 mb-2">
                        {item.output?.hooks?.[0]}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap text-[11px]">
                        <span className="px-2 py-0.5 rounded-md bg-primary-50 text-primary-600 font-medium">
                          {item.output?.hooks?.length || 0} hooks
                        </span>
                        <span className="text-secondary-400 ml-auto">
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

export default HookGeneratorPage