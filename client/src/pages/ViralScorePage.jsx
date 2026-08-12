// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { TrendingUp, Loader2, BarChart3, Lightbulb, AlertTriangle, ArrowUp } from 'lucide-react'
// import api from '../services/api.js'
// import toast from 'react-hot-toast'

// const models = [
//   { value: 'gemini', label: 'Google Gemini', icon: 'G' },
//   { value: 'llama', label: 'Meta Llama', icon: 'L' },
//   { value: 'qwen', label: 'Qwen', icon: 'Q' },
//   { value: 'mistral', label: 'Mistral', icon: 'M' },
// ]

// const scoreColors = {
//   engagement: 'bg-primary-500',
//   readability: 'bg-success-500',
//   hookStrength: 'bg-accent-500',
//   viralPotential: 'bg-warning-500',
//   overall: 'bg-secondary-700',
//   formatting: 'bg-primary-400',
//   ctaEffectiveness: 'bg-success-400'
// }

// const scoreLabels = {
//   engagement: 'Engagement',
//   readability: 'Readability',
//   hookStrength: 'Hook Strength',
//   viralPotential: 'Viral Potential',
//   overall: 'Overall',
//   formatting: 'Formatting',
//   ctaEffectiveness: 'CTA Effectiveness'
// }

// const ViralScorePage = () => {
//   const [content, setContent] = useState('')
//   const [model, setModel] = useState('gemini')
//   const [result, setResult] = useState(null)
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!content || content.trim().length < 10) {
//       toast.error('Please enter at least 10 characters')
//       return
//     }
//     setLoading(true)
//     try {
//       const response = await api.post('/viral/analyze', { content, model })
//       if (response.data.success) {
//         setResult(response.data.data)
//         toast.success('Analysis complete!')
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Failed to analyze')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const getScoreColor = (score) => {
//     if (score >= 80) return 'text-success-600'
//     if (score >= 60) return 'text-warning-600'
//     return 'text-error-600'
//   }

//   const getScoreBarColor = (score) => {
//     if (score >= 80) return 'bg-success-500'
//     if (score >= 60) return 'bg-warning-500'
//     return 'bg-error-500'
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold text-secondary-900">Viral Score Analyzer</h1>
//         <p className="text-secondary-500 mt-1">Analyze your post and predict its viral potential</p>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-6">
//         <div className="card">
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-secondary-700 mb-2">Your LinkedIn Post *</label>
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               placeholder="Paste your LinkedIn post here to analyze..."
//               className="textarea-field"
//               rows={10}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-secondary-700 mb-2">AI Model</label>
//             <div className="grid grid-cols-4 gap-2">
//               {models.map((m) => (
//                 <button
//                   key={m.value}
//                   type="button"
//                   onClick={() => setModel(m.value)}
//                   className={`p-3 rounded-lg border text-center transition-all ${
//                     model === m.value ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-secondary-200 hover:border-secondary-300 text-secondary-600'
//                   }`}
//                 >
//                   <div className="text-lg font-bold mb-1">{m.icon}</div>
//                   <div className="text-xs font-medium">{m.label}</div>
//                 </button>
//               ))}
//             </div>
//           </div>
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
//           >
//             {loading ? <Loader2 size={18} className="animate-spin" /> : <TrendingUp size={18} />}
//             {loading ? 'Analyzing...' : 'Analyze Viral Potential'}
//           </button>
//         </div>

//         <div>
//           <AnimatePresence>
//             {result && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="space-y-4"
//               >
//                 <div className="card">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
//                       <BarChart3 size={24} className="text-primary-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-secondary-900">Viral Score Analysis</h3>
//                       <p className="text-sm text-secondary-500">AI-powered content assessment</p>
//                     </div>
//                   </div>

//                   {result.scores && (
//                     <div className="space-y-4">
//                       {Object.entries(result.scores).filter(([key]) => key !== 'overall').map(([key, value]) => (
//                         <div key={key}>
//                           <div className="flex items-center justify-between mb-1">
//                             <span className="text-sm text-secondary-600">{scoreLabels[key] || key}</span>
//                             <span className={`text-sm font-bold ${getScoreColor(value)}`}>{value}/100</span>
//                           </div>
//                           <div className="w-full bg-secondary-100 rounded-full h-2">
//                             <motion.div
//                               initial={{ width: 0 }}
//                               animate={{ width: `${value}%` }}
//                               transition={{ duration: 0.8, delay: 0.2 }}
//                               className={`h-2 rounded-full ${getScoreBarColor(value)}`}
//                             />
//                           </div>
//                         </div>
//                       ))}

//                       <div className="pt-4 border-t border-secondary-200">
//                         <div className="flex items-center justify-between mb-1">
//                           <span className="text-sm font-semibold text-secondary-700">Overall Score</span>
//                           <span className={`text-lg font-bold ${getScoreColor(result.scores.overall)}`}>{result.scores.overall}/100</span>
//                         </div>
//                         <div className="w-full bg-secondary-100 rounded-full h-3">
//                           <motion.div
//                             initial={{ width: 0 }}
//                             animate={{ width: `${result.scores.overall}%` }}
//                             transition={{ duration: 1, delay: 0.5 }}
//                             className={`h-3 rounded-full ${getScoreBarColor(result.scores.overall)}`}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {result.strengths && (
//                   <div className="card">
//                     <div className="flex items-center gap-2 mb-3">
//                       <Lightbulb size={18} className="text-success-600" />
//                       <h3 className="font-semibold text-secondary-900 text-sm">Strengths</h3>
//                     </div>
//                     <div className="bg-success-50 rounded-lg p-4 text-sm text-secondary-700 whitespace-pre-wrap">
//                       {result.strengths}
//                     </div>
//                   </div>
//                 )}

//                 {result.weaknesses && (
//                   <div className="card">
//                     <div className="flex items-center gap-2 mb-3">
//                       <AlertTriangle size={18} className="text-warning-600" />
//                       <h3 className="font-semibold text-secondary-900 text-sm">Weaknesses</h3>
//                     </div>
//                     <div className="bg-warning-50 rounded-lg p-4 text-sm text-secondary-700 whitespace-pre-wrap">
//                       {result.weaknesses}
//                     </div>
//                   </div>
//                 )}

//                 {result.improvements && (
//                   <div className="card">
//                     <div className="flex items-center gap-2 mb-3">
//                       <ArrowUp size={18} className="text-primary-600" />
//                       <h3 className="font-semibold text-secondary-900 text-sm">Actionable Improvements</h3>
//                     </div>
//                     <div className="bg-primary-50 rounded-lg p-4 text-sm text-secondary-700 whitespace-pre-wrap">
//                       {result.improvements}
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ViralScorePage




import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Loader2, BarChart3, Lightbulb, AlertTriangle, ArrowUp, Clock, X, Trash2, RotateCcw } from 'lucide-react'
import api from '../services/api.js'
import toast from 'react-hot-toast'

const models = [
  { value: 'gemini', label: 'Google Gemini', icon: 'G' },
  { value: 'llama', label: 'Meta Llama', icon: 'L' },
  { value: 'qwen', label: 'Qwen', icon: 'Q' },
  { value: 'mistral', label: 'Mistral', icon: 'M' },
]

const scoreColors = {
  engagement: 'bg-primary-500',
  readability: 'bg-success-500',
  hookStrength: 'bg-accent-500',
  viralPotential: 'bg-warning-500',
  overall: 'bg-secondary-700',
  formatting: 'bg-primary-400',
  ctaEffectiveness: 'bg-success-400'
}

const scoreLabels = {
  engagement: 'Engagement',
  readability: 'Readability',
  hookStrength: 'Hook Strength',
  viralPotential: 'Viral Potential',
  overall: 'Overall',
  formatting: 'Formatting',
  ctaEffectiveness: 'CTA Effectiveness'
}

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

const extractSection = (text, sectionName) => {
  if (!text) return ''
  const regex = new RegExp(`${sectionName}[:\\s]*\\n*([\\s\\S]*?)(?=\\n\\n\\d*\\.\\s+[A-Z]|\\n[A-Z][A-Z\\s]+[:\\s]*\\n|$)`, 'i')
  const match = text.match(regex)
  return match ? match[1].trim() : ''
}

const ViralScorePage = () => {
  const [content, setContent] = useState('')
  const [model, setModel] = useState('gemini')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const [showHistory, setShowHistory] = useState(false)
  const [historyItems, setHistoryItems] = useState([])
  const [historyLoading, setHistoryLoading] = useState(false)

  useEffect(() => {
    fetchHistory()
  }, [])

  const fetchHistory = async () => {
    setHistoryLoading(true)
    try {
      const response = await api.get('/history', { params: { type: 'viral', limit: 30 } })
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
    if (!content || content.trim().length < 10) {
      toast.error('Please enter at least 10 characters')
      return
    }
    setLoading(true)
    try {
      const response = await api.post('/viral/analyze', { content, model })
      if (response.data.success) {
        setResult(response.data.data)
        toast.success('Analysis complete!')
        fetchHistory()
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to analyze')
    } finally {
      setLoading(false)
    }
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-success-600'
    if (score >= 60) return 'text-warning-600'
    return 'text-error-600'
  }

  const getScoreBarColor = (score) => {
    if (score >= 80) return 'bg-success-500'
    if (score >= 60) return 'bg-warning-500'
    return 'bg-error-500'
  }

  const loadFromHistory = (item) => {
    const analysis = item.output?.analysis || ''
    setContent(item.input?.content || '')
    setResult({
      scores: item.output?.scores || {},
      analysis,
      strengths: extractSection(analysis, 'STRENGTHS'),
      weaknesses: extractSection(analysis, 'WEAKNESSES'),
      improvements: extractSection(analysis, 'ACTIONABLE IMPROVEMENTS'),
      content: item.input?.content || '',
    })
    setShowHistory(false)
  }

  const handleClearHistory = async () => {
    if (!confirm('Clear all history? This removes activity across every AI tool, not just viral analyses.')) return
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
          <h1 className="text-2xl font-bold text-secondary-900">Viral Score Analyzer</h1>
          <p className="text-secondary-500 mt-1">Analyze your post and predict its viral potential</p>
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-secondary-700 mb-2">Your LinkedIn Post *</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your LinkedIn post here to analyze..."
              className="textarea-field"
              rows={10}
              required
            />
          </div>
          <div className="mb-4">
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
            onClick={handleSubmit}
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <TrendingUp size={18} />}
            {loading ? 'Analyzing...' : 'Analyze Viral Potential'}
          </button>
        </div>

        <div>
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                      <BarChart3 size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Viral Score Analysis</h3>
                      <p className="text-sm text-secondary-500">AI-powered content assessment</p>
                    </div>
                  </div>

                  {result.scores && (
                    <div className="space-y-4">
                      {Object.entries(result.scores).filter(([key]) => key !== 'overall').map(([key, value]) => (
                        <div key={key}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-secondary-600">{scoreLabels[key] || key}</span>
                            <span className={`text-sm font-bold ${getScoreColor(value)}`}>{value}/100</span>
                          </div>
                          <div className="w-full bg-secondary-100 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${value}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className={`h-2 rounded-full ${getScoreBarColor(value)}`}
                            />
                          </div>
                        </div>
                      ))}

                      <div className="pt-4 border-t border-secondary-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-secondary-700">Overall Score</span>
                          <span className={`text-lg font-bold ${getScoreColor(result.scores.overall)}`}>{result.scores.overall}/100</span>
                        </div>
                        <div className="w-full bg-secondary-100 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${result.scores.overall}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-3 rounded-full ${getScoreBarColor(result.scores.overall)}`}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {result.strengths && (
                  <div className="card">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb size={18} className="text-success-600" />
                      <h3 className="font-semibold text-secondary-900 text-sm">Strengths</h3>
                    </div>
                    <div className="bg-success-50 rounded-lg p-4 text-sm text-secondary-700 whitespace-pre-wrap">
                      {result.strengths}
                    </div>
                  </div>
                )}

                {result.weaknesses && (
                  <div className="card">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle size={18} className="text-warning-600" />
                      <h3 className="font-semibold text-secondary-900 text-sm">Weaknesses</h3>
                    </div>
                    <div className="bg-warning-50 rounded-lg p-4 text-sm text-secondary-700 whitespace-pre-wrap">
                      {result.weaknesses}
                    </div>
                  </div>
                )}

                {result.improvements && (
                  <div className="card">
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowUp size={18} className="text-primary-600" />
                      <h3 className="font-semibold text-secondary-900 text-sm">Actionable Improvements</h3>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-4 text-sm text-secondary-700 whitespace-pre-wrap">
                      {result.improvements}
                    </div>
                  </div>
                )}
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
                  Analysis History
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
                      No analyses yet. Your history will show up here.
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
                        <span className="text-sm font-semibold text-secondary-900 line-clamp-2">
                          {item.input?.content}
                        </span>
                        <RotateCcw size={14} className="text-secondary-300 group-hover:text-primary-600 flex-shrink-0 mt-0.5 transition-colors" />
                      </div>
                      <div className="flex items-center gap-2 flex-wrap text-[11px]">
                        {item.output?.scores?.overall != null && (
                          <span className={`px-2 py-0.5 rounded-md font-medium ${
                            item.output.scores.overall >= 80 ? 'bg-success-50 text-success-600' :
                            item.output.scores.overall >= 60 ? 'bg-warning-50 text-warning-600' :
                            'bg-error-50 text-error-600'
                          }`}>
                            Score {item.output.scores.overall}
                          </span>
                        )}
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

export default ViralScorePage