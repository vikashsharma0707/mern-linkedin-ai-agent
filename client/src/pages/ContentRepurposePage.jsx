// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Repeat, Loader2, Copy, Check, FileText, Twitter, BookOpen } from 'lucide-react'
// import api from '../services/api.js'
// import toast from 'react-hot-toast'

// const models = [
//   { value: 'gemini', label: 'Google Gemini', icon: 'G' },
//   { value: 'llama', label: 'Meta Llama', icon: 'L' },
//   { value: 'qwen', label: 'Qwen', icon: 'Q' },
//   { value: 'mistral', label: 'Mistral', icon: 'M' },
// ]

// const contentTypes = [
//   { value: 'youtube transcript', label: 'YouTube Transcript' },
//   { value: 'blog', label: 'Blog Post' },
//   { value: 'notes', label: 'Notes' },
//   { value: 'article', label: 'Article' },
//   { value: 'podcast', label: 'Podcast Transcript' },
// ]

// const outputFormats = [
//   { value: 'linkedin', label: 'LinkedIn Post', icon: FileText },
//   { value: 'twitter', label: 'Twitter Thread', icon: Twitter },
//   { value: 'blog', label: 'Blog Draft', icon: BookOpen },
// ]

// const ContentRepurposePage = () => {
//   const [content, setContent] = useState('')
//   const [contentType, setContentType] = useState('youtube transcript')
//   const [selectedFormats, setSelectedFormats] = useState(['linkedin', 'twitter'])
//   const [model, setModel] = useState('gemini')
//   const [results, setResults] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [copiedFormat, setCopiedFormat] = useState(null)
//   const [activeTab, setActiveTab] = useState('linkedin')

//   const handleFormatToggle = (format) => {
//     setSelectedFormats(prev => {
//       if (prev.includes(format)) {
//         return prev.filter(f => f !== format)
//       }
//       return [...prev, format]
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!content || content.trim().length < 20) {
//       toast.error('Please enter at least 20 characters')
//       return
//     }
//     if (selectedFormats.length === 0) {
//       toast.error('Please select at least one output format')
//       return
//     }
//     setLoading(true)
//     try {
//       const response = await api.post('/repurpose/content', {
//         content,
//         contentType,
//         outputFormats: selectedFormats,
//         model
//       })
//       if (response.data.success) {
//         setResults(response.data.data.results)
//         setActiveTab(selectedFormats[0])
//         toast.success('Content repurposed successfully!')
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Failed to repurpose content')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleCopy = (text, format) => {
//     navigator.clipboard.writeText(text)
//     setCopiedFormat(format)
//     toast.success('Copied!')
//     setTimeout(() => setCopiedFormat(null), 2000)
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold text-secondary-900">Content Repurpose Agent</h1>
//         <p className="text-secondary-500 mt-1">Transform any content into LinkedIn posts, Twitter threads, and blog drafts</p>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-6">
//         <div className="space-y-6">
//           <div className="card">
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-secondary-700 mb-2">Your Content *</label>
//               <textarea
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 placeholder="Paste your YouTube transcript, blog, notes, or any content here..."
//                 className="textarea-field"
//                 rows={8}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-secondary-700 mb-2">Content Type</label>
//               <select
//                 value={contentType}
//                 onChange={(e) => setContentType(e.target.value)}
//                 className="select-field"
//               >
//                 {contentTypes.map(type => (
//                   <option key={type.value} value={type.value}>{type.label}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-secondary-700 mb-2">Output Formats</label>
//               <div className="space-y-2">
//                 {outputFormats.map((format) => {
//                   const Icon = format.icon
//                   const isSelected = selectedFormats.includes(format.value)
//                   return (
//                     <button
//                       key={format.value}
//                       type="button"
//                       onClick={() => handleFormatToggle(format.value)}
//                       className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
//                         isSelected
//                           ? 'border-primary-500 bg-primary-50 text-primary-700'
//                           : 'border-secondary-200 hover:border-secondary-300 text-secondary-600'
//                       }`}
//                     >
//                       <Icon size={18} />
//                       <span className="font-medium">{format.label}</span>
//                       <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                         isSelected ? 'border-primary-500 bg-primary-500' : 'border-secondary-300'
//                       }`}>
//                         {isSelected && <Check size={12} className="text-white" />}
//                       </div>
//                     </button>
//                   )
//                 })}
//               </div>
//             </div>
//             <div className="mb-4">
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
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
//             >
//               {loading ? <Loader2 size={18} className="animate-spin" /> : <Repeat size={18} />}
//               {loading ? 'Repurposing...' : 'Repurpose Content'}
//             </button>
//           </div>
//         </div>

//         <div>
//           <AnimatePresence>
//             {results && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="space-y-4"
//               >
//                 <div className="card">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
//                       <Repeat size={18} className="text-primary-600" />
//                       Repurposed Content
//                     </h3>
//                   </div>

//                   <div className="flex gap-2 mb-4 border-b border-secondary-200">
//                     {selectedFormats.map((format) => (
//                       <button
//                         key={format}
//                         onClick={() => setActiveTab(format)}
//                         className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition-all ${
//                           activeTab === format ? 'border-primary-500 text-primary-600' : 'border-transparent text-secondary-500 hover:text-secondary-700'
//                         }`}
//                       >
//                         {format}
//                       </button>
//                     ))}
//                   </div>

//                   {selectedFormats.map((format) => (
//                     activeTab === format && (
//                       <div key={format}>
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-sm font-medium text-secondary-600 capitalize">{format} Output</span>
//                           <button
//                             onClick={() => handleCopy(results[format], format)}
//                             className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
//                           >
//                             {copiedFormat === format ? <Check size={14} /> : <Copy size={14} />}
//                             {copiedFormat === format ? 'Copied' : 'Copy'}
//                           </button>
//                         </div>
//                         <div className="bg-secondary-50 rounded-lg p-4 whitespace-pre-wrap text-sm text-secondary-800 leading-relaxed max-h-[400px] overflow-y-auto">
//                           {results[format]}
//                         </div>
//                       </div>
//                     )
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

// export default ContentRepurposePage




import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Repeat, Loader2, Copy, Check, FileText, Twitter, BookOpen, Clock, X, Trash2, RotateCcw } from 'lucide-react'
import api from '../services/api.js'
import toast from 'react-hot-toast'

const models = [
  { value: 'gemini', label: 'Google Gemini', icon: 'G' },
  { value: 'llama', label: 'Meta Llama', icon: 'L' },
  { value: 'qwen', label: 'Qwen', icon: 'Q' },
  { value: 'mistral', label: 'Mistral', icon: 'M' },
]

const contentTypes = [
  { value: 'youtube transcript', label: 'YouTube Transcript' },
  { value: 'blog', label: 'Blog Post' },
  { value: 'notes', label: 'Notes' },
  { value: 'article', label: 'Article' },
  { value: 'podcast', label: 'Podcast Transcript' },
]

const outputFormats = [
  { value: 'linkedin', label: 'LinkedIn Post', icon: FileText },
  { value: 'twitter', label: 'Twitter Thread', icon: Twitter },
  { value: 'blog', label: 'Blog Draft', icon: BookOpen },
]

const formatIcons = {
  linkedin: FileText,
  twitter: Twitter,
  blog: BookOpen,
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

const ContentRepurposePage = () => {
  const [content, setContent] = useState('')
  const [contentType, setContentType] = useState('youtube transcript')
  const [selectedFormats, setSelectedFormats] = useState(['linkedin', 'twitter'])
  const [model, setModel] = useState('gemini')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copiedFormat, setCopiedFormat] = useState(null)
  const [activeTab, setActiveTab] = useState('linkedin')

  const [showHistory, setShowHistory] = useState(false)
  const [historyItems, setHistoryItems] = useState([])
  const [historyLoading, setHistoryLoading] = useState(false)

  useEffect(() => {
    fetchHistory()
  }, [])

  const fetchHistory = async () => {
    setHistoryLoading(true)
    try {
      const response = await api.get('/history', { params: { type: 'repurpose', limit: 30 } })
      if (response.data.success) {
        setHistoryItems(response.data.data.items)
      }
    } catch (error) {
      // silent fail, history is a convenience panel
    } finally {
      setHistoryLoading(false)
    }
  }

  const handleFormatToggle = (format) => {
    setSelectedFormats(prev => {
      if (prev.includes(format)) {
        return prev.filter(f => f !== format)
      }
      return [...prev, format]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!content || content.trim().length < 20) {
      toast.error('Please enter at least 20 characters')
      return
    }
    if (selectedFormats.length === 0) {
      toast.error('Please select at least one output format')
      return
    }
    setLoading(true)
    try {
      const response = await api.post('/repurpose/content', {
        content,
        contentType,
        outputFormats: selectedFormats,
        model
      })
      if (response.data.success) {
        setResults(response.data.data.results)
        setActiveTab(selectedFormats[0])
        toast.success('Content repurposed successfully!')
        fetchHistory()
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to repurpose content')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = (text, format) => {
    navigator.clipboard.writeText(text)
    setCopiedFormat(format)
    toast.success('Copied!')
    setTimeout(() => setCopiedFormat(null), 2000)
  }

  const loadFromHistory = (item) => {
    setContent(item.input?.content || '')
    setContentType(item.input?.contentType || 'youtube transcript')
    const formats = item.input?.outputFormats || Object.keys(item.output || {})
    setSelectedFormats(formats)
    setResults(item.output || {})
    setActiveTab(formats[0] || 'linkedin')
    setShowHistory(false)
  }

  const handleClearHistory = async () => {
    if (!confirm('Clear all history? This removes activity across every AI tool, not just repurposed content.')) return
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
          <h1 className="text-2xl font-bold text-secondary-900">Content Repurpose Agent</h1>
          <p className="text-secondary-500 mt-1">Transform any content into LinkedIn posts, Twitter threads, and blog drafts</p>
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
        <div className="space-y-6">
          <div className="card">
            <div className="mb-4">
              <label className="block text-sm font-medium text-secondary-700 mb-2">Your Content *</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste your YouTube transcript, blog, notes, or any content here..."
                className="textarea-field"
                rows={8}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-secondary-700 mb-2">Content Type</label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="select-field"
              >
                {contentTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-secondary-700 mb-2">Output Formats</label>
              <div className="space-y-2">
                {outputFormats.map((format) => {
                  const Icon = format.icon
                  const isSelected = selectedFormats.includes(format.value)
                  return (
                    <button
                      key={format.value}
                      type="button"
                      onClick={() => handleFormatToggle(format.value)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-secondary-200 hover:border-secondary-300 text-secondary-600'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{format.label}</span>
                      <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-primary-500 bg-primary-500' : 'border-secondary-300'
                      }`}>
                        {isSelected && <Check size={12} className="text-white" />}
                      </div>
                    </button>
                  )
                })}
              </div>
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
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Repeat size={18} />}
              {loading ? 'Repurposing...' : 'Repurpose Content'}
            </button>
          </div>
        </div>

        <div>
          <AnimatePresence>
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
                      <Repeat size={18} className="text-primary-600" />
                      Repurposed Content
                    </h3>
                  </div>

                  <div className="flex gap-2 mb-4 border-b border-secondary-200">
                    {selectedFormats.map((format) => (
                      <button
                        key={format}
                        onClick={() => setActiveTab(format)}
                        className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition-all ${
                          activeTab === format ? 'border-primary-500 text-primary-600' : 'border-transparent text-secondary-500 hover:text-secondary-700'
                        }`}
                      >
                        {format}
                      </button>
                    ))}
                  </div>

                  {selectedFormats.map((format) => (
                    activeTab === format && (
                      <div key={format}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-secondary-600 capitalize">{format} Output</span>
                          <button
                            onClick={() => handleCopy(results[format], format)}
                            className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
                          >
                            {copiedFormat === format ? <Check size={14} /> : <Copy size={14} />}
                            {copiedFormat === format ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                        <div className="bg-secondary-50 rounded-lg p-4 whitespace-pre-wrap text-sm text-secondary-800 leading-relaxed max-h-[400px] overflow-y-auto">
                          {results[format]}
                        </div>
                      </div>
                    )
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
                  Repurpose History
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
                      No content repurposed yet. Your history will show up here.
                    </p>
                  </div>
                ) : (
                  historyItems.map((item) => {
                    const formats = item.input?.outputFormats || Object.keys(item.output || {})
                    return (
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
                          {item.input?.content}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap text-[11px]">
                          {formats.map((f) => {
                            const Icon = formatIcons[f]
                            return (
                              <span key={f} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary-50 text-primary-600 font-medium capitalize">
                                {Icon && <Icon size={10} />}
                                {f}
                              </span>
                            )
                          })}
                          <span className="text-secondary-400 ml-auto">
                            {timeAgo(item.createdAt)}
                          </span>
                        </div>
                      </button>
                    )
                  })
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContentRepurposePage