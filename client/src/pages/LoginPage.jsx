// // // import { useState } from 'react'
// // // import { useNavigate, Link } from 'react-router-dom'
// // // import { useAuth } from '../context/AuthContext.jsx'
// // // import { Bot, Eye, EyeOff, Loader2 } from 'lucide-react'
// // // import toast from 'react-hot-toast'

// // // const LoginPage = () => {
// // //   const [email, setEmail] = useState('')
// // //   const [password, setPassword] = useState('')
// // //   const [showPassword, setShowPassword] = useState(false)
// // //   const [loading, setLoading] = useState(false)
// // //   const { login } = useAuth()
// // //   const navigate = useNavigate()

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault()
// // //     if (!email || !password) {
// // //       toast.error('Please fill in all fields')
// // //       return
// // //     }
// // //     setLoading(true)
// // //     try {
// // //       await login(email, password)
// // //       toast.success('Login successful!')
// // //       navigate('/dashboard')
// // //     } catch (error) {
// // //       toast.error(error.response?.data?.message || 'Login failed')
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-secondary-50 flex items-center justify-center p-4">
// // //       <div className="w-full max-w-md">
// // //         <div className="text-center mb-8">
// // //           <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4">
// // //             <Bot size={28} className="text-white" />
// // //           </div>
// // //           <h1 className="text-2xl font-bold text-secondary-900">Welcome Back Project</h1>
// // //           <p className="text-secondary-500 mt-1">Sign in to your LinkedIn Post Generator</p>
// // //         </div>

// // //         <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8">
// // //           <form onSubmit={handleSubmit} className="space-y-5">
// // //             <div>
// // //               <label className="block text-sm font-medium text-secondary-700 mb-2">Email Address</label>
// // //               <input
// // //                 type="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 placeholder="you@example.com"
// // //                 className="input-field"
// // //                 required
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block text-sm font-medium text-secondary-700 mb-2">Password</label>
// // //               <div className="relative">
// // //                 <input
// // //                   type={showPassword ? 'text' : 'password'}
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   placeholder="Enter your password"
// // //                   className="input-field pr-12"
// // //                   required
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowPassword(!showPassword)}
// // //                   className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
// // //                 >
// // //                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               disabled={loading}
// // //               className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
// // //             >
// // //               {loading ? <Loader2 size={18} className="animate-spin" /> : null}
// // //               Sign In
// // //             </button>
// // //           </form>
// // //         </div>

// // //         <p className="text-center mt-6 text-sm text-secondary-500">
// // //           Don't have an account?{' '}
// // //           <Link to="/register" className="text-primary-600 font-medium hover:text-primary-700">
// // //             Create one
// // //           </Link>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default LoginPage



// // import { useState, useEffect } from 'react'
// // import { useNavigate, Link } from 'react-router-dom'
// // import { useAuth } from '../context/AuthContext.jsx'
// // import {
// //   Bot,
// //   Eye,
// //   EyeOff,
// //   Loader2,
// //   Mail,
// //   ArrowLeft,
// //   ArrowRight,
// //   Search,
// //   Target,
// //   PenLine,
// //   ShieldCheck,
// //   Hash,
// //   Sparkles,
// //   Check,
// // } from 'lucide-react'
// // import { motion, useReducedMotion } from 'framer-motion'
// // import toast from 'react-hot-toast'

// // const agents = [
// //   {
// //     icon: Search,
// //     name: 'Research Agent',
// //     description: 'Analyzing trends',
// //   },
// //   {
// //     icon: Target,
// //     name: 'Strategy Agent',
// //     description: 'Planning content',
// //   },
// //   {
// //     icon: PenLine,
// //     name: 'Writer Agent',
// //     description: 'Crafting your post',
// //   },
// //   {
// //     icon: ShieldCheck,
// //     name: 'Reviewer Agent',
// //     description: 'Optimizing quality',
// //   },
// //   {
// //     icon: Hash,
// //     name: 'Hashtag Agent',
// //     description: 'Finalizing reach',
// //   },
// // ]

// // const LoginPage = () => {
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [showPassword, setShowPassword] = useState(false)
// //   const [loading, setLoading] = useState(false)
// //   const [activeAgent, setActiveAgent] = useState(0)

// //   const { login } = useAuth()
// //   const navigate = useNavigate()
// //   const shouldReduceMotion = useReducedMotion()

// //   // Cycle active agent for live feel
// //   useEffect(() => {
// //     if (shouldReduceMotion) return

// //     const interval = setInterval(() => {
// //       setActiveAgent((prev) => (prev + 1) % agents.length)
// //     }, 2400)

// //     return () => clearInterval(interval)
// //   }, [shouldReduceMotion])

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()

// //     if (!email || !password) {
// //       toast.error('Please fill in all fields')
// //       return
// //     }

// //     setLoading(true)

// //     try {
// //       await login(email, password)
// //       toast.success('Login successful!')
// //       navigate('/dashboard')
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Login failed')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-hidden">
// //       {/* Ambient background */}
// //       <div className="fixed inset-0 pointer-events-none overflow-hidden">
// //         <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-indigo-500/[0.07] blur-3xl" />
// //         <div className="absolute -bottom-48 left-[35%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.05] blur-3xl" />
// //       </div>

// //       <div className="relative min-h-screen lg:grid lg:grid-cols-[58%_42%]">
// //         {/* ============================================================
// //             LEFT — AI WORKSPACE
// //         ============================================================ */}
// //         <section className="relative hidden min-h-screen overflow-hidden border-r border-slate-200/80 bg-white lg:flex">
// //           {/* Subtle grid */}
// //           <div
// //             className="absolute inset-0 opacity-[0.35]"
// //             style={{
// //               backgroundImage:
// //                 'linear-gradient(rgba(79,70,229,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.045) 1px, transparent 1px)',
// //               backgroundSize: '42px 42px',
// //               maskImage:
// //                 'linear-gradient(to bottom, black 0%, transparent 85%)',
// //               WebkitMaskImage:
// //                 'linear-gradient(to bottom, black 0%, transparent 85%)',
// //             }}
// //           />

// //           {/* AI atmosphere */}
// //           <div className="absolute left-[28%] top-[26%] h-72 w-72 rounded-full bg-indigo-500/[0.08] blur-[100px]" />
// //           <div className="absolute right-[8%] top-[48%] h-64 w-64 rounded-full bg-violet-500/[0.06] blur-[100px]" />

// //           <div className="relative z-10 flex w-full flex-col px-10 py-9 xl:px-16 xl:py-10">
// //             {/* Brand */}
// //             <motion.div
// //               initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.45 }}
// //               className="flex items-center justify-between"
// //             >
// //               <div className="flex items-center gap-3">
// //                 <div className="relative flex h-11 w-11 items-center justify-center rounded-[14px] bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
// //                   <Bot size={23} strokeWidth={2.2} className="text-white" />
// //                   <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
// //                 </div>

// //                 <div>
// //                   <div className="text-[15px] font-bold tracking-tight text-slate-950">
// //                     LinkedIn AI
// //                   </div>
// //                   <div className="mt-0.5 text-[9px] font-semibold tracking-[0.18em] text-slate-400">
// //                     AI CONTENT WORKSPACE
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-slate-500 shadow-sm xl:flex">
// //                 <Sparkles size={12} className="text-indigo-500" />
// //                 Agentic AI
// //               </div>
// //             </motion.div>

// //             {/* Main copy */}
// //             <motion.div
// //               initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.55, delay: 0.08 }}
// //               className="mt-16 max-w-[650px] xl:mt-20"
// //             >
// //               <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1.5 text-[11px] font-semibold text-indigo-600">
// //                 <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
// //                 YOUR AI CONTENT TEAM
// //               </div>

// //               <h1 className="max-w-[680px] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 xl:text-[52px]">
// //                 Your AI team is
// //                 <br />
// //                 <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
// //                   ready to create.
// //                 </span>
// //               </h1>

// //               <p className="mt-6 max-w-[570px] text-[16px] leading-7 text-slate-500 xl:text-[17px]">
// //                 Research, write, review and optimize LinkedIn content with
// //                 specialized AI agents working together behind the scenes.
// //               </p>
// //             </motion.div>

// //             {/* Workflow */}
// //             <motion.div
// //               initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.65, delay: 0.2 }}
// //               className="relative mt-12 max-w-[650px] xl:mt-14"
// //             >
// //               {/* Workflow heading */}
// //               <div className="mb-5 flex items-center justify-between">
// //                 <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
// //                   Autonomous workflow
// //                 </div>

// //                 <div className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600">
// //                   <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
// //                   Agents online
// //                 </div>
// //               </div>

// //               {/* Connector line */}
// //               <div className="absolute left-[25px] top-[57px] bottom-[30px] hidden w-px bg-gradient-to-b from-indigo-200 via-violet-200 to-slate-200 sm:block" />

// //               <div className="space-y-2.5">
// //                 {agents.map((agent, index) => {
// //                   const Icon = agent.icon
// //                   const isActive = index === activeAgent
// //                   const isCompleted = index < activeAgent

// //                   return (
// //                     <motion.div
// //                       key={agent.name}
// //                       initial={
// //                         shouldReduceMotion
// //                           ? false
// //                           : { opacity: 0, x: -12 }
// //                       }
// //                       animate={{ opacity: 1, x: 0 }}
// //                       transition={{
// //                         duration: 0.4,
// //                         delay: 0.28 + index * 0.08,
// //                       }}
// //                       className={`group relative flex items-center gap-3 rounded-2xl border p-3 shadow-[0_5px_20px_rgba(15,23,42,0.035)] backdrop-blur-xl transition-all duration-300 ${
// //                         isActive
// //                           ? 'border-indigo-200 bg-indigo-50/60 shadow-[0_8px_28px_rgba(79,70,229,0.10)]'
// //                           : 'border-slate-200/80 bg-white/85 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-[0_8px_28px_rgba(79,70,229,0.08)]'
// //                       }`}
// //                     >
// //                       {/* Node */}
// //                       <div
// //                         className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
// //                           isActive
// //                             ? 'border-indigo-300 bg-indigo-600 text-white'
// //                             : isCompleted
// //                             ? 'border-emerald-200 bg-emerald-50 text-emerald-600'
// //                             : 'border-slate-200 bg-slate-50 text-slate-500'
// //                         }`}
// //                       >
// //                         {isCompleted ? (
// //                           <Check size={17} strokeWidth={2.5} />
// //                         ) : (
// //                           <Icon size={17} strokeWidth={2} />
// //                         )}

// //                         {isActive && (
// //                           <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
// //                         )}
// //                       </div>

// //                       <div className="min-w-0 flex-1">
// //                         <div className="flex items-center gap-2">
// //                           <p className="text-[13px] font-semibold text-slate-800">
// //                             {agent.name}
// //                           </p>

// //                           {isActive && (
// //                             <span className="rounded-full bg-indigo-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-indigo-600">
// //                               Working
// //                             </span>
// //                           )}
// //                           {isCompleted && (
// //                             <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-emerald-600">
// //                               Done
// //                             </span>
// //                           )}
// //                         </div>

// //                         <p className="mt-0.5 text-[11px] text-slate-400">
// //                           {isActive
// //                             ? agent.description
// //                             : isCompleted
// //                             ? 'Task completed'
// //                             : 'Waiting...'}
// //                         </p>
// //                       </div>

// //                       <div className="hidden items-center gap-2 sm:flex">
// //                         <div className="flex gap-1">
// //                           {[0, 1, 2].map((dot) => (
// //                             <span
// //                               key={dot}
// //                               className={`h-1 w-1 rounded-full transition-colors ${
// //                                 isActive
// //                                   ? 'bg-indigo-400'
// //                                   : isCompleted
// //                                   ? 'bg-emerald-400'
// //                                   : 'bg-slate-300'
// //                               }`}
// //                             />
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )
// //                 })}
// //               </div>
// //             </motion.div>

// //             {/* Bottom trust */}
// //             <motion.div
// //               initial={shouldReduceMotion ? false : { opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.5, delay: 0.7 }}
// //               className="mt-auto flex items-center gap-6 pt-10 text-[11px] font-medium text-slate-400"
// //             >
// //               <span className="flex items-center gap-2">
// //                 <span className="relative flex h-2 w-2">
// //                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
// //                   <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
// //                 </span>
// //                 AI agents online
// //               </span>

// //               <span className="text-slate-300">•</span>
// //               <span>Fast</span>
// //               <span>•</span>
// //               <span>Intelligent</span>
// //               <span>•</span>
// //               <span>Built for creators</span>
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* ============================================================
// //             RIGHT — LOGIN
// //         ============================================================ */}
// //         <section className="relative flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:px-10 xl:px-16">
// //           <div className="w-full max-w-[440px]">
// //             {/* Back home */}
// //             <motion.button
// //               type="button"
// //               onClick={() => navigate('/')}
// //               initial={shouldReduceMotion ? false : { opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.4 }}
// //               className="mb-8 inline-flex items-center gap-2 rounded-lg px-1 py-1 text-[13px] font-medium text-slate-500 transition-colors hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
// //             >
// //               <ArrowLeft size={15} />
// //               Back to Home
// //             </motion.button>

// //             {/* Mobile brand */}
// //             <motion.div
// //               initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.45 }}
// //               className="mb-8 flex items-center gap-3 lg:hidden"
// //             >
// //               <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-md shadow-indigo-500/20">
// //                 <Bot size={21} className="text-white" />
// //                 <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#F8FAFC] bg-emerald-500" />
// //               </div>

// //               <div>
// //                 <div className="text-sm font-bold tracking-tight text-slate-950">
// //                   LinkedIn AI
// //                 </div>
// //                 <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
// //                   AI CONTENT WORKSPACE
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Login card */}
// //             <motion.div
// //               initial={
// //                 shouldReduceMotion
// //                   ? false
// //                   : { opacity: 0, y: 18, scale: 0.985 }
// //               }
// //               animate={{ opacity: 1, y: 0, scale: 1 }}
// //               transition={{ duration: 0.5, ease: 'easeOut' }}
// //               className="rounded-[24px] border border-slate-200/90 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8"
// //             >
// //               {/* Header */}
// //               <div className="mb-8">
// //                 <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 ring-1 ring-indigo-100">
// //                   <Sparkles size={20} />
// //                 </div>

// //                 <h2 className="text-[28px] font-bold tracking-[-0.025em] text-slate-950">
// //                   Welcome back
// //                 </h2>

// //                 <p className="mt-2 text-[14px] leading-6 text-slate-500">
// //                   Sign in to continue to your AI content workspace.
// //                 </p>
// //               </div>

// //               <form onSubmit={handleSubmit} className="space-y-5">
// //                 {/* Email */}
// //                 <div>
// //                   <label
// //                     htmlFor="email"
// //                     className="mb-2 block text-[13px] font-semibold text-slate-700"
// //                   >
// //                     Email address
// //                   </label>

// //                   <div className="group relative">
// //                     <Mail
// //                       size={17}
// //                       aria-hidden="true"
// //                       className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 group-focus-within:text-indigo-500"
// //                     />

// //                     <input
// //                       id="email"
// //                       name="email"
// //                       type="email"
// //                       value={email}
// //                       onChange={(e) => setEmail(e.target.value)}
// //                       placeholder="you@example.com"
// //                       autoComplete="email"
// //                       required
// //                       disabled={loading}
// //                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 text-[14px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Password */}
// //                 <div>
// //                   <label
// //                     htmlFor="password"
// //                     className="mb-2 block text-[13px] font-semibold text-slate-700"
// //                   >
// //                     Password
// //                   </label>

// //                   <div className="group relative">
// //                     <input
// //                       id="password"
// //                       name="password"
// //                       type={showPassword ? 'text' : 'password'}
// //                       value={password}
// //                       onChange={(e) => setPassword(e.target.value)}
// //                       placeholder="Enter your password"
// //                       autoComplete="current-password"
// //                       required
// //                       disabled={loading}
// //                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pr-12 text-[14px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
// //                     />

// //                     <button
// //                       type="button"
// //                       onClick={() => setShowPassword(!showPassword)}
// //                       disabled={loading}
// //                       aria-label={
// //                         showPassword ? 'Hide password' : 'Show password'
// //                       }
// //                       aria-pressed={showPassword}
// //                       className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
// //                     >
// //                       {showPassword ? (
// //                         <EyeOff size={17} />
// //                       ) : (
// //                         <Eye size={17} />
// //                       )}
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* Submit */}
// //                 <motion.button
// //                   type="submit"
// //                   disabled={loading}
// //                   whileHover={
// //                     shouldReduceMotion || loading ? {} : { y: -1 }
// //                   }
// //                   whileTap={
// //                     shouldReduceMotion || loading ? {} : { scale: 0.99 }
// //                   }
// //                   className="group relative mt-1 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-[14px] font-semibold text-white shadow-lg shadow-indigo-500/20 outline-none transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 hover:shadow-xl hover:shadow-indigo-500/25 focus-visible:ring-4 focus-visible:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-lg"
// //                 >
// //                   {!loading && (
// //                     <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
// //                   )}

// //                   {loading ? (
// //                     <>
// //                       <Loader2 size={18} className="animate-spin" />
// //                       Signing in...
// //                     </>
// //                   ) : (
// //                     <>
// //                       Sign In
// //                       <ArrowRight
// //                         size={16}
// //                         className="transition-transform duration-200 group-hover:translate-x-0.5"
// //                       />
// //                     </>
// //                   )}
// //                 </motion.button>
// //               </form>

// //               {/* Security indicator */}
// //               <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-400">
// //                 <ShieldCheck size={14} className="text-emerald-500" />
// //                 <span>Secure authentication</span>
// //                 <span className="text-slate-300">•</span>
// //                 <span>Your data stays protected</span>
// //               </div>
// //             </motion.div>

// //             {/* Register */}
// //             <motion.p
// //               initial={shouldReduceMotion ? false : { opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.45, delay: 0.3 }}
// //               className="mt-6 text-center text-[13px] text-slate-500"
// //             >
// //               Don't have an account?{' '}
// //               <Link
// //                 to="/register"
// //                 className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
// //               >
// //                 Create your account →
// //               </Link>
// //             </motion.p>

// //             {/* Small mobile trust */}
// //             <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 lg:hidden">
// //               <Check size={12} className="text-emerald-500" />
// //               AI-powered content workspace
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   )
// // }

// // export default LoginPage



// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext.jsx";

// import {
//   Bot,
//   Eye,
//   EyeOff,
//   Loader2,
//   Mail,
//   Lock,
//   ArrowRight,
//   Search,
//   Target,
//   PenLine,
//   ShieldCheck,
//   Hash,
//   Sparkles,
//   Check,
//   Zap,
//   Brain,
//   Shield,
//   UserRound,
// } from "lucide-react";

// import { motion, useReducedMotion } from "framer-motion";
// import toast from "react-hot-toast";

// import boyImage from "../assets/boyimage.png";
// import aiImage from "../assets/aiimage.png";


// /* ============================================================
//    AI AGENTS
// ============================================================ */

// const agents = [
//   {
//     icon: Search,
//     name: "Research Agent",
//     description: "Analyzing trends",
//     color: "blue",
//   },
//   {
//     icon: Target,
//     name: "Strategy Agent",
//     description: "Planning content",
//     color: "violet",
//   },
//   {
//     icon: PenLine,
//     name: "Writer Agent",
//     description: "Crafting your post",
//     color: "orange",
//   },
//   {
//     icon: ShieldCheck,
//     name: "Reviewer Agent",
//     description: "Optimizing quality",
//     color: "green",
//   },
//   {
//     icon: Hash,
//     name: "Hashtag Agent",
//     description: "Finalizing reach",
//     color: "indigo",
//   },
// ];


// /* ============================================================
//    LOGIN PAGE
// ============================================================ */

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [activeAgent, setActiveAgent] = useState(0);

//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const shouldReduceMotion = useReducedMotion();


//   /* ============================================================
//      CYCLE ACTIVE AGENT
//   ============================================================ */

//   useEffect(() => {
//     if (shouldReduceMotion) return;

//     const interval = setInterval(() => {
//       setActiveAgent((prev) => (prev + 1) % agents.length);
//     }, 2400);

//     return () => clearInterval(interval);
//   }, [shouldReduceMotion]);


//   /* ============================================================
//      EXISTING LOGIN LOGIC — UNCHANGED
//   ============================================================ */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     setLoading(true);

//     try {
//       await login(email, password);

//       toast.success("Login successful!");

//       navigate("/dashboard");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Login failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A]">

//       {/* ========================================================
//           GLOBAL BACKGROUND
//       ======================================================== */}

//       <div className="pointer-events-none fixed inset-0 overflow-hidden">

//         <div className="absolute -left-[180px] -top-[180px] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.055] blur-[100px]" />

//         <div className="absolute -bottom-[220px] left-[30%] h-[520px] w-[520px] rounded-full bg-violet-500/[0.05] blur-[110px]" />

//         <div className="absolute right-[-180px] top-[10%] h-[450px] w-[450px] rounded-full bg-indigo-400/[0.035] blur-[120px]" />

//       </div>


//       {/* ========================================================
//           MAIN 58 / 42 LAYOUT
//       ======================================================== */}

//       <div className="relative min-h-screen lg:grid lg:grid-cols-[58%_42%]">


//         {/* ======================================================
//             LEFT SIDE
//         ====================================================== */}

//         <section className="relative hidden min-h-screen overflow-hidden border-r border-slate-200/80 bg-white lg:flex">

//           {/* Soft gradient */}
//           <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFF] to-[#F5F3FF]" />

//           {/* Very subtle grid */}
//           <div
//             className="absolute inset-0 opacity-[0.28]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(79,70,229,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.035) 1px, transparent 1px)",
//               backgroundSize: "42px 42px",
//               maskImage:
//                 "linear-gradient(to bottom, black 0%, transparent 90%)",
//               WebkitMaskImage:
//                 "linear-gradient(to bottom, black 0%, transparent 90%)",
//             }}
//           />


//           {/* Ambient lighting */}

//           <div className="absolute left-[27%] top-[18%] h-[360px] w-[360px] rounded-full bg-indigo-500/[0.075] blur-[105px]" />

//           <div className="absolute right-[12%] top-[38%] h-[300px] w-[300px] rounded-full bg-violet-500/[0.055] blur-[100px]" />

//           <div className="absolute bottom-[4%] left-[24%] h-[260px] w-[400px] rounded-full bg-blue-400/[0.045] blur-[100px]" />


//           {/* ====================================================
//               LEFT CONTENT
//           ==================================================== */}

//           <div className="relative z-10 flex w-full flex-col px-8 py-7 xl:px-9 xl:py-8">


//             {/* ==================================================
//                 BRAND
//             ================================================== */}

//             <motion.div
//               initial={
//                 shouldReduceMotion
//                   ? false
//                   : { opacity: 0, y: -10 }
//               }
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.45,
//               }}
//               className="flex items-center justify-between"
//             >

//               {/* Logo */}

//               <div className="flex items-center gap-3">

//                 <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-[17px] bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-600 shadow-[0_10px_30px_rgba(79,70,229,0.22)]">

//                   <Bot
//                     size={32}
//                     strokeWidth={1.8}
//                     className="text-white"
//                   />

//                   <span className="absolute right-[-2px] top-[-2px] h-[14px] w-[14px] rounded-full border-[3px] border-white bg-emerald-500" />

//                 </div>


//                 <div>

//                   <div className="text-[25px] font-bold leading-none tracking-[-0.035em] text-[#0F172A]">
//                     LinkedIn AI
//                   </div>

//                   <div className="mt-2 text-[10px] font-medium tracking-[0.19em] text-slate-500">
//                     AI CONTENT WORKSPACE
//                   </div>

//                 </div>

//               </div>


//               {/* Agentic AI */}

//               <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-[11px] font-medium text-slate-500 shadow-[0_5px_18px_rgba(15,23,42,0.04)] xl:flex">

//                 <Sparkles
//                   size={13}
//                   className="text-indigo-500"
//                 />

//                 Agentic AI

//               </div>

//             </motion.div>


//             {/* ==================================================
//                 STATUS PILL
//             ================================================== */}

//             <motion.div
//               initial={
//                 shouldReduceMotion
//                   ? false
//                   : { opacity: 0, y: 10 }
//               }
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.45,
//                 delay: 0.05,
//               }}
//               className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3 py-2 text-[11px] font-medium text-slate-500 shadow-[0_5px_18px_rgba(15,23,42,0.055)]"
//             >

//               <span className="relative flex h-2.5 w-2.5">

//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

//                 <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />

//               </span>

//               AI Agents Online

//             </motion.div>


//             {/* ==================================================
//                 HERO COPY
//             ================================================== */}

//             <motion.div
//               initial={
//                 shouldReduceMotion
//                   ? false
//                   : {
//                       opacity: 0,
//                       y: 18,
//                     }
//               }
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.55,
//                 delay: 0.1,
//               }}
//               className="mt-9 xl:mt-10"
//             >

//               <h1 className="text-[42px] font-bold leading-[1.06] tracking-[-0.045em] text-[#0B1533] xl:text-[46px]">

//                 Your AI team is

//                 <br />

//                 <span className="bg-gradient-to-r from-[#4338CA] via-[#5B21B6] to-[#2563EB] bg-clip-text text-transparent">
//                   ready to create.
//                 </span>

//               </h1>


//               <p className="mt-5 max-w-[500px] text-[15px] leading-[1.55] text-[#64748B] xl:text-[16px]">

//                 Research, write, review and optimize

//                 <br className="hidden xl:block" />

//                 LinkedIn content with specialized AI

//                 <br className="hidden xl:block" />

//                 agents working together.

//               </p>

//             </motion.div>


//             {/* ==================================================
//                 VISUAL WORKSPACE
//             ================================================== */}

//             <div className="relative mt-3 flex-1 min-h-[400px]">


//               {/* =================================================
//                   ROBOT IMAGE
//               ================================================= */}

//               <motion.div
//                 initial={
//                   shouldReduceMotion
//                     ? false
//                     : {
//                         opacity: 0,
//                         y: 20,
//                         scale: 0.96,
//                       }
//                 }
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.18,
//                 }}
//                 className="absolute left-[44%] top-[-22px] z-20 w-[46%] max-w-[390px]"
//               >

//                 <img
//                   src={aiImage}
//                   alt="AI robot working"
//                   className="h-auto w-full object-contain drop-shadow-[0_22px_35px_rgba(79,70,229,0.12)]"
//                 />

//               </motion.div>


//               {/* =================================================
//                   CONNECTOR LINE
//               ================================================= */}

//               <div className="absolute left-[56%] top-[90px] z-[5] h-[280px] w-[100px]">

//                 <div className="absolute left-0 top-0 h-[70px] w-[70px] rounded-tl-[22px] border-l border-t border-indigo-300/80" />

//                 <div className="absolute left-0 top-[68px] h-[80px] w-[70px] rounded-bl-[22px] border-b border-l border-violet-300/80" />

//                 <div className="absolute left-0 top-[146px] h-[80px] w-[70px] rounded-tl-[22px] border-l border-t border-orange-300/70" />

//                 <div className="absolute left-0 top-[224px] h-[55px] w-[70px] rounded-bl-[22px] border-b border-l border-blue-300/70" />

//               </div>


//               {/* =================================================
//                   BOY IMAGE
//               ================================================= */}

//               <motion.div
//                 initial={
//                   shouldReduceMotion
//                     ? false
//                     : {
//                         opacity: 0,
//                         x: -20,
//                         y: 20,
//                       }
//                 }
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.28,
//                 }}
//                 className="absolute bottom-[-22px] left-[-45px] z-10 w-[61%] max-w-[510px]"
//               >

//                 <img
//                   src={boyImage}
//                   alt="Creator using LinkedIn AI"
//                   className="h-auto w-full object-contain drop-shadow-[0_22px_35px_rgba(15,23,42,0.12)]"
//                 />

//               </motion.div>


//               {/* =================================================
//                   AGENT CARDS
//               ================================================= */}

//               <div className="absolute right-[-2px] top-[92px] z-30 w-[47%] max-w-[330px]">


//                 {agents.map((agent, index) => {

//                   const Icon = agent.icon;

//                   const isActive =
//                     index === activeAgent;

//                   const isCompleted =
//                     index < activeAgent;


//                   return (
//                     <motion.div
//                       key={agent.name}
//                       initial={
//                         shouldReduceMotion
//                           ? false
//                           : {
//                               opacity: 0,
//                               x: 18,
//                             }
//                       }
//                       animate={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       transition={{
//                         duration: 0.4,
//                         delay:
//                           0.3 + index * 0.08,
//                       }}
//                       className={`
//                         relative mb-2.5 flex
//                         items-center gap-2.5
//                         rounded-[14px]
//                         border p-2.5
//                         backdrop-blur-xl
//                         transition-all duration-500

//                         ${
//                           isActive
//                             ? "border-indigo-200 bg-white shadow-[0_12px_30px_rgba(79,70,229,0.13)]"
//                             : "border-slate-200/90 bg-white/95 shadow-[0_7px_20px_rgba(15,23,42,0.055)]"
//                         }
//                       `}
//                     >

//                       {/* Icon */}

//                       <div
//                         className={`
//                           relative flex h-10 w-10
//                           shrink-0 items-center
//                           justify-center rounded-xl

//                           ${
//                             isActive
//                               ? "bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md shadow-indigo-500/20"
//                               : isCompleted
//                               ? "bg-emerald-50 text-emerald-500"
//                               : "bg-slate-50 text-slate-400"
//                           }
//                         `}
//                       >

//                         {isCompleted ? (
//                           <Check
//                             size={17}
//                             strokeWidth={2.6}
//                           />
//                         ) : (
//                           <Icon
//                             size={18}
//                             strokeWidth={2}
//                           />
//                         )}

//                         {isActive && (
//                           <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
//                         )}

//                       </div>


//                       {/* Text */}

//                       <div className="min-w-0 flex-1">

//                         <div className="flex items-center gap-1.5">

//                           <p className="truncate text-[11px] font-bold text-[#172033]">
//                             {agent.name}
//                           </p>

//                         </div>


//                         <p className="mt-0.5 truncate text-[9px] text-slate-400">
//                           {agent.description}
//                         </p>

//                       </div>


//                       {/* Status */}

//                       <div className="flex flex-col items-end gap-1">

//                         <div className="flex items-center gap-1">

//                           <span
//                             className={`
//                               h-1.5 w-1.5
//                               rounded-full

//                               ${
//                                 isActive
//                                   ? "bg-emerald-500"
//                                   : "bg-slate-300"
//                               }
//                             `}
//                           />

//                           <span
//                             className={`
//                               text-[8px]
//                               font-medium

//                               ${
//                                 isActive
//                                   ? "text-emerald-600"
//                                   : "text-slate-400"
//                               }
//                             `}
//                           >
//                             {isActive
//                               ? "Working"
//                               : "Waiting"}
//                           </span>

//                         </div>


//                         <div className="flex gap-1">

//                           {[0, 1, 2].map(
//                             (dot) => (
//                               <span
//                                 key={dot}
//                                 className={`
//                                   h-1 w-1
//                                   rounded-full

//                                   ${
//                                     isActive
//                                       ? agent.color ===
//                                         "orange"
//                                         ? "bg-orange-400"
//                                         : "bg-indigo-400"
//                                       : "bg-slate-300"
//                                   }
//                                 `}
//                               />
//                             )
//                           )}

//                         </div>

//                       </div>

//                     </motion.div>
//                   );
//                 })}

//               </div>


//               {/* =================================================
//                   FLOATING DOTS
//               ================================================= */}

//               <motion.span
//                 animate={
//                   shouldReduceMotion
//                     ? {}
//                     : {
//                         y: [-4, 5, -4],
//                         opacity: [0.45, 1, 0.45],
//                       }
//                 }
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                 }}
//                 className="absolute left-[36%] top-[38px] h-2 w-2 rounded-full bg-indigo-400"
//               />

//               <motion.span
//                 animate={
//                   shouldReduceMotion
//                     ? {}
//                     : {
//                         y: [5, -5, 5],
//                         opacity: [0.3, 0.8, 0.3],
//                       }
//                 }
//                 transition={{
//                   duration: 3.4,
//                   repeat: Infinity,
//                 }}
//                 className="absolute left-[72%] top-[28px] h-1.5 w-1.5 rounded-full bg-violet-400"
//               />

//               <span className="absolute left-[48%] top-[120px] h-1.5 w-1.5 rounded-full bg-blue-400" />

//               <span className="absolute right-[2%] top-[45px] h-1 w-1 rounded-full bg-indigo-400" />

//             </div>


//             {/* ==================================================
//                 FEATURES
//             ================================================== */}

//             <motion.div
//               initial={
//                 shouldReduceMotion
//                   ? false
//                   : { opacity: 0 }
//               }
//               animate={{
//                 opacity: 1,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: 0.7,
//               }}
//               className="mb-1 flex w-fit items-center gap-4 rounded-full border border-slate-200/70 bg-white/60 px-3 py-2 text-[10px] font-medium text-slate-500 backdrop-blur-sm"
//             >

//               <span className="flex items-center gap-1.5">

//                 <Zap
//                   size={11}
//                   className="text-indigo-500"
//                 />

//                 Fast

//               </span>


//               <span className="flex items-center gap-1.5">

//                 <Brain
//                   size={11}
//                   className="text-indigo-500"
//                 />

//                 Intelligent

//               </span>


//               <span className="flex items-center gap-1.5">

//                 <Shield
//                   size={11}
//                   className="text-indigo-500"
//                 />

//                 Secure

//               </span>


//               <span className="flex items-center gap-1.5">

//                 <UserRound
//                   size={11}
//                   className="text-indigo-500"
//                 />

//                 Built for creators

//               </span>

//             </motion.div>

//           </div>

//         </section>


//         {/* ======================================================
//             RIGHT LOGIN SECTION
//         ====================================================== */}

//         <section className="relative flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 py-8 sm:px-8 lg:px-8 xl:px-12">

//           <div className="w-full max-w-[430px]">


//             {/* ==================================================
//                 LOGIN CARD
//             ================================================== */}

//             <motion.div
//               initial={
//                 shouldReduceMotion
//                   ? false
//                   : {
//                       opacity: 0,
//                       y: 18,
//                       scale: 0.985,
//                     }
//               }
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 0.55,
//                 ease: "easeOut",
//               }}
//               className="rounded-[25px] border border-slate-200/90 bg-white px-7 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.085)] sm:px-8 sm:py-9"
//             >


//               {/* =================================================
//                   AI ICON
//               ================================================= */}

//               <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 ring-1 ring-indigo-100">

//                 <Sparkles
//                   size={21}
//                   strokeWidth={2}
//                 />

//               </div>


//               {/* =================================================
//                   HEADER
//               ================================================= */}

//               <div className="mb-7">

//                 <h2 className="text-[29px] font-bold tracking-[-0.035em] text-[#0B1533]">

//                   Welcome back

//                 </h2>


//                 <p className="mt-2 max-w-[300px] text-[14px] leading-[1.55] text-slate-500">

//                   Sign in to continue to your

//                   <br />

//                   AI content workspace.

//                 </p>

//               </div>


//               {/* =================================================
//                   FORM
//               ================================================= */}

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-5"
//               >


//                 {/* EMAIL */}

//                 <div>

//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-[13px] font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>


//                   <div className="group relative">

//                     <Mail
//                       size={17}
//                       className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
//                     />


//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) =>
//                         setEmail(e.target.value)
//                       }
//                       placeholder="you@example.com"
//                       autoComplete="email"
//                       required
//                       disabled={loading}
//                       className="
//                         h-12 w-full rounded-xl
//                         border border-slate-200
//                         bg-slate-50/40
//                         pl-10 pr-4
//                         text-[14px]
//                         text-slate-900
//                         outline-none
//                         transition-all duration-200

//                         placeholder:text-slate-400

//                         hover:border-slate-300

//                         focus:border-indigo-400
//                         focus:bg-white
//                         focus:ring-4
//                         focus:ring-indigo-500/[0.07]

//                         disabled:cursor-not-allowed
//                         disabled:opacity-60
//                       "
//                     />

//                   </div>

//                 </div>


//                 {/* PASSWORD */}

//                 <div>

//                   <label
//                     htmlFor="password"
//                     className="mb-2 block text-[13px] font-semibold text-slate-700"
//                   >
//                     Password
//                   </label>


//                   <div className="group relative">

//                     <Lock
//                       size={17}
//                       className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
//                     />


//                     <input
//                       id="password"
//                       name="password"
//                       type={
//                         showPassword
//                           ? "text"
//                           : "password"
//                       }
//                       value={password}
//                       onChange={(e) =>
//                         setPassword(e.target.value)
//                       }
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       required
//                       disabled={loading}
//                       className="
//                         h-12 w-full rounded-xl
//                         border border-slate-200
//                         bg-slate-50/40
//                         pl-10 pr-12
//                         text-[14px]
//                         text-slate-900
//                         outline-none
//                         transition-all duration-200

//                         placeholder:text-slate-400

//                         hover:border-slate-300

//                         focus:border-indigo-400
//                         focus:bg-white
//                         focus:ring-4
//                         focus:ring-indigo-500/[0.07]

//                         disabled:cursor-not-allowed
//                         disabled:opacity-60
//                       "
//                     />


//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowPassword(
//                           !showPassword
//                         )
//                       }
//                       disabled={loading}
//                       aria-label={
//                         showPassword
//                           ? "Hide password"
//                           : "Show password"
//                       }
//                       className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
//                     >

//                       {showPassword ? (
//                         <EyeOff size={17} />
//                       ) : (
//                         <Eye size={17} />
//                       )}

//                     </button>

//                   </div>

//                 </div>


//                 {/* REMEMBER / FORGOT */}

//                 <div className="flex items-center justify-between">

//                   <label className="flex cursor-pointer items-center gap-2">

//                     <input
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:ring-indigo-500"
//                     />

//                     <span className="text-[11px] text-slate-500">
//                       Remember me
//                     </span>

//                   </label>


//                   <span className="cursor-pointer text-[11px] font-medium text-indigo-500 transition-colors hover:text-indigo-700">
//                     Forgot password?
//                   </span>

//                 </div>


//                 {/* =================================================
//                     SIGN IN BUTTON
//                 ================================================= */}

//                 <motion.button
//                   type="submit"
//                   disabled={loading}
//                   whileHover={
//                     shouldReduceMotion || loading
//                       ? {}
//                       : { y: -1 }
//                   }
//                   whileTap={
//                     shouldReduceMotion || loading
//                       ? {}
//                       : { scale: 0.99 }
//                   }
//                   className="
//                     group relative mt-2
//                     flex h-[49px] w-full
//                     items-center justify-center
//                     gap-2 overflow-hidden
//                     rounded-xl

//                     bg-gradient-to-r
//                     from-[#2563EB]
//                     via-[#4F46E5]
//                     to-[#7C3AED]

//                     text-[14px]
//                     font-semibold
//                     text-white

//                     shadow-[0_10px_25px_rgba(79,70,229,0.24)]

//                     outline-none
//                     transition-all duration-200

//                     hover:shadow-[0_14px_32px_rgba(79,70,229,0.28)]

//                     focus-visible:ring-4
//                     focus-visible:ring-indigo-500/20

//                     disabled:cursor-not-allowed
//                     disabled:opacity-60
//                   "
//                 >

//                   {/* Shine */}

//                   {!loading && (
//                     <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                   )}


//                   {loading ? (
//                     <>
//                       <Loader2
//                         size={18}
//                         className="animate-spin"
//                       />

//                       Signing in...
//                     </>
//                   ) : (
//                     <>
//                       <span className="relative">
//                         Sign In
//                       </span>

//                       <ArrowRight
//                         size={16}
//                         className="relative transition-transform duration-200 group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}

//                 </motion.button>

//               </form>


//               {/* =================================================
//                   SECURITY
//               ================================================= */}

//               <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400">

//                 <ShieldCheck
//                   size={14}
//                   className="text-emerald-500"
//                 />

//                 <span>
//                   Secure authentication
//                 </span>

//                 <span className="text-slate-300">
//                   •
//                 </span>

//                 <span>
//                   Your data stays protected
//                 </span>

//               </div>


//               {/* =================================================
//                   DIVIDER
//               ================================================= */}

//               <div className="my-6 h-px bg-slate-100" />


//               {/* =================================================
//                   REGISTER
//               ================================================= */}

//               <motion.p
//                 initial={
//                   shouldReduceMotion
//                     ? false
//                     : { opacity: 0 }
//                 }
//                 animate={{
//                   opacity: 1,
//                 }}
//                 transition={{
//                   duration: 0.45,
//                   delay: 0.3,
//                 }}
//                 className="text-center text-[11px] text-slate-500"
//               >

//                 Don't have an account?{" "}

//                 <Link
//                   to="/register"
//                   className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
//                 >
//                   Create your account
//                 </Link>

//                 <ArrowRight
//                   size={12}
//                   className="ml-1 inline-block text-indigo-600"
//                 />

//               </motion.p>

//             </motion.div>


//             {/* ==================================================
//                 MOBILE BRAND
//             ================================================== */}

//             <div className="mt-7 flex items-center justify-center gap-2 text-[9px] font-medium uppercase tracking-[0.14em] text-slate-400 lg:hidden">

//               <Check
//                 size={12}
//                 className="text-emerald-500"
//               />

//               AI-powered content workspace

//             </div>

//           </div>

//         </section>

//       </div>

//     </main>
//   );
// };


// export default LoginPage;

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

import {
  Bot,
  Eye,
  EyeOff,
  Loader2,
  Mail,
  ArrowLeft,
  ArrowRight,
  Search,
  Target,
  PenLine,
  ShieldCheck,
  Hash,
  Sparkles,
  Check,
  LockKeyhole,
} from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";
import toast from "react-hot-toast";

import boyImage from "../assets/boyimage.png";
import robotImage from "../assets/aiimage.png";

const agents = [
  {
    icon: Search,
    name: "Research Agent",
    description: "Analyzing trends",
  },
  {
    icon: Target,
    name: "Strategy Agent",
    description: "Planning content",
  },
  {
    icon: PenLine,
    name: "Writer Agent",
    description: "Crafting your post",
  },
  {
    icon: ShieldCheck,
    name: "Reviewer Agent",
    description: "Optimizing quality",
  },
  {
    icon: Hash,
    name: "Hashtag Agent",
    description: "Finalizing reach",
  },
];

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeAgent, setActiveAgent] = useState(0);

  const { login } = useAuth();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agents.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A]">
      {/* ============================================================
          AMBIENT BACKGROUND
      ============================================================ */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-500/[0.055] blur-[110px]" />

        <div className="absolute left-[30%] top-[35%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.045] blur-[120px]" />

        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/[0.035] blur-[120px]" />
      </div>

      <div className="relative min-h-screen lg:grid lg:grid-cols-[58%_42%]">

        {/* ============================================================
            LEFT SIDE
        ============================================================ */}
        <section className="relative hidden min-h-screen overflow-hidden border-r border-slate-200/80 bg-white lg:block">

          {/* Very subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(79,70,229,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.035) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
          />

          {/* Soft center glow */}
          <div className="absolute left-[38%] top-[25%] h-[400px] w-[400px] rounded-full bg-indigo-500/[0.07] blur-[120px]" />

          <div className="relative z-10 h-screen w-full">

            {/* ========================================================
                BRAND
            ======================================================== */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute left-10 top-7 flex items-center xl:left-10"
            >
              <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-[20px] bg-gradient-to-br from-indigo-500 to-violet-600 shadow-[0_12px_30px_rgba(79,70,229,0.22)]">
                <Bot
                  size={34}
                  strokeWidth={2}
                  className="text-white"
                />

                <span className="absolute right-[6px] top-[5px] h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-500" />
              </div>

              <div className="ml-4">
                <div className="text-[27px] font-bold tracking-[-0.04em] text-[#0F172A]">
                  LinkedIn AI
                </div>

                <div className="mt-0.5 text-[11px] font-semibold tracking-[0.19em] text-slate-500">
                  AI CONTENT WORKSPACE
                </div>
              </div>
            </motion.div>

            {/* Agentic AI */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="absolute right-10 top-8 flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-[12px] font-medium text-slate-500 shadow-[0_5px_20px_rgba(15,23,42,0.04)] backdrop-blur-xl"
            >
              <Sparkles size={14} className="text-indigo-500" />
              Agentic AI
            </motion.div>

            {/* ========================================================
                HEADLINE
            ======================================================== */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="absolute left-10 top-[132px] z-20 xl:left-10"
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-2 text-[12px] font-semibold text-indigo-600 shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                AI Agents Online
              </div>

              <h1 className="max-w-[430px] text-[47px] font-bold leading-[1.04] tracking-[-0.045em] text-[#0F172A] xl:text-[50px]">
                Your AI team is
                <br />

                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                  ready to create.
                </span>
              </h1>

              <p className="mt-6 max-w-[390px] text-[16px] leading-[1.55] text-slate-500">
                Research, write, review and optimize LinkedIn content with
                specialized AI agents working together.
              </p>

              {/* Feature pills */}
              <div className="mt-5 flex items-center gap-4 text-[10px] font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-indigo-500" />
                  Fast
                </span>

                <span className="text-slate-300">•</span>

                <span>Intelligent</span>

                <span className="text-slate-300">•</span>

                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-indigo-500" />
                  Secure
                </span>

                <span className="text-slate-300">•</span>

                <span>Built for creators</span>
              </div>
            </motion.div>

            {/* ========================================================
                ROBOT IMAGE
            ======================================================== */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 15, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pointer-events-none absolute left-[34%] top-[72px] z-[4] h-[270px] w-[360px]"
            >
              {/* Glow behind robot */}
              <div className="absolute left-1/2 top-[45%] h-[180px] w-[260px] -translate-x-1/2 rounded-full bg-indigo-400/[0.12] blur-[70px]" />

              <img
                src={robotImage}
                alt="AI Robot"
                className="relative h-full w-full object-contain"
              />
            </motion.div>

            {/* ========================================================
                WORKFLOW
            ======================================================== */}
            <div className="absolute right-[30px] top-[258px] z-20 w-[255px] xl:right-[32px] xl:w-[270px]">

              {/* Connector */}
              <div className="absolute left-[-18px] top-[34px] bottom-[32px] w-[2px] rounded-full bg-gradient-to-b from-indigo-300 via-violet-300 to-blue-300 opacity-80" />

              {/* Decorative nodes */}
              <span className="absolute -left-[22px] top-[28px] h-3 w-3 rounded-full border-2 border-white bg-indigo-400 shadow-[0_0_0_4px_rgba(129,140,248,0.12)]" />

              <span className="absolute -left-[22px] top-[143px] h-3 w-3 rounded-full border-2 border-white bg-violet-400 shadow-[0_0_0_4px_rgba(167,139,250,0.12)]" />

              <span className="absolute -left-[22px] bottom-[31px] h-3 w-3 rounded-full border-2 border-white bg-blue-400 shadow-[0_0_0_4px_rgba(96,165,250,0.12)]" />

              <div className="space-y-3">
                {agents.map((agent, index) => {
                  const Icon = agent.icon;
                  const isActive = index === activeAgent;
                  const isCompleted = index < activeAgent;

                  return (
                    <motion.div
                      key={agent.name}
                      initial={
                        shouldReduceMotion
                          ? false
                          : { opacity: 0, x: 15 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.25 + index * 0.08,
                      }}
                      className={`
                        relative flex min-h-[64px] items-center gap-3
                        rounded-[15px] border px-3 py-2.5
                        backdrop-blur-xl transition-all duration-300
                        ${
                          isActive
                            ? "border-indigo-200 bg-white shadow-[0_10px_30px_rgba(79,70,229,0.14)]"
                            : "border-slate-200/80 bg-white/90 shadow-[0_7px_22px_rgba(15,23,42,0.055)]"
                        }
                      `}
                    >
                      {/* Icon */}
                      <div
                        className={`
                          relative flex h-10 w-10 shrink-0 items-center
                          justify-center rounded-xl
                          ${
                            isActive
                              ? "bg-indigo-600 text-white shadow-[0_6px_16px_rgba(79,70,229,0.25)]"
                              : isCompleted
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-slate-50 text-slate-400"
                          }
                        `}
                      >
                        {isCompleted ? (
                          <Check size={17} strokeWidth={2.5} />
                        ) : (
                          <Icon size={17} strokeWidth={2} />
                        )}

                        {isActive && (
                          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <p className="truncate text-[12px] font-bold text-slate-800">
                            {agent.name}
                          </p>
                        </div>

                        <p className="mt-0.5 truncate text-[10px] text-slate-400">
                          {agent.description}
                        </p>
                      </div>

                      {/* Status */}
                      <div className="flex flex-col items-end">
                        <div
                          className={`flex items-center gap-1 text-[8px] font-semibold ${
                            isActive
                              ? "text-emerald-600"
                              : "text-slate-400"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isActive
                                ? "bg-emerald-500"
                                : "bg-slate-300"
                            }`}
                          />

                          {isActive ? "Working" : "Waiting"}
                        </div>

                        <div className="mt-1 flex gap-1">
                          {[0, 1, 2].map((dot) => (
                            <span
                              key={dot}
                              className={`h-1 w-1 rounded-full ${
                                isActive
                                  ? "bg-indigo-400"
                                  : "bg-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ========================================================
                BOY IMAGE — BOTTOM LEFT
            ======================================================== */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}
              className="pointer-events-none absolute bottom-0 left-[-25px] z-[10] h-[330px] w-[475px] xl:left-[-10px] xl:h-[350px] xl:w-[500px]"
            >
              <img
                src={boyImage}
                alt="Creator working with AI"
                className="h-full w-full object-contain object-bottom"
              />
            </motion.div>

            {/* ========================================================
                FLOATING ICONS
            ======================================================== */}
            <div className="pointer-events-none absolute bottom-[215px] left-[105px] z-[12] flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)]">
              <span className="text-[22px] font-bold">in</span>
            </div>

            <div className="pointer-events-none absolute bottom-[180px] left-[38px] z-[12] flex h-12 w-12 items-center justify-center rounded-xl border border-white bg-white/90 text-indigo-500 shadow-[0_8px_25px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="h-2 w-2 rounded-full bg-violet-500" />
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-[155px] left-[315px] z-[12] flex h-12 w-12 items-center justify-center rounded-xl border border-white bg-white/90 text-indigo-500 shadow-[0_8px_25px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="flex gap-1">
                <span className="h-5 w-1.5 rounded-full bg-indigo-300" />
                <span className="h-7 w-1.5 rounded-full bg-indigo-400" />
                <span className="h-9 w-1.5 rounded-full bg-indigo-500" />
              </div>
            </div>

            {/* ========================================================
                BOTTOM TRUST
            ======================================================== */}
            <div className="absolute bottom-7 left-10 z-30 flex items-center gap-5 text-[10px] font-medium text-slate-400">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                AI agents online
              </span>

              <span>•</span>
              <span>Fast</span>

              <span>•</span>
              <span>Intelligent</span>

              <span>•</span>
              <span>Built for creators</span>
            </div>
          </div>
        </section>

        {/* ============================================================
            RIGHT LOGIN
        ============================================================ */}
        <section className="relative flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 py-8 sm:px-8 lg:px-10 xl:px-16">

          <div className="w-full max-w-[480px]">

            {/* Back */}
            <motion.button
              type="button"
              onClick={() => navigate("/")}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-7 inline-flex items-center gap-2 text-[13px] font-medium text-slate-500 transition hover:text-slate-900"
            >
              <ArrowLeft size={15} />
              Back to Home
            </motion.button>

            {/* Login Card */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 18, scale: 0.985 }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="rounded-[26px] border border-slate-200 bg-white px-7 py-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:px-9 sm:py-9"
            >

              {/* Icon */}
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-[15px] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 shadow-sm">
                <Sparkles size={23} />
              </div>

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-[30px] font-bold tracking-[-0.035em] text-slate-950">
                  Welcome back
                </h2>

                <p className="mt-2 max-w-[310px] text-[14px] leading-6 text-slate-500">
                  Sign in to continue to your AI content workspace.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2.5 block text-[13px] font-semibold text-slate-700"
                  >
                    Email address
                  </label>

                  <div className="group relative">
                    <Mail
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-500"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      disabled={loading}
                      className="h-[54px] w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-[14px] text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2.5 block text-[13px] font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <div className="group relative">
                    <LockKeyhole
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-indigo-500"
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                      disabled={loading}
                      className="h-[54px] w-full rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-[14px] text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={loading}
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-2.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <div className="flex items-center justify-between">
                  <label className="flex cursor-pointer items-center gap-2 text-[12px] text-slate-500">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-[12px] font-medium text-indigo-600 transition hover:text-indigo-700"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* SIGN IN */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={
                    shouldReduceMotion || loading
                      ? {}
                      : { y: -1 }
                  }
                  whileTap={
                    shouldReduceMotion || loading
                      ? {}
                      : { scale: 0.99 }
                  }
                  className="group relative mt-2 flex h-[54px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-[14px] font-semibold text-white shadow-[0_12px_25px_rgba(79,70,229,0.22)] transition-all hover:shadow-[0_15px_32px_rgba(79,70,229,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {!loading && (
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  )}

                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Security */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck
                  size={14}
                  className="text-emerald-500"
                />

                <span>Secure authentication</span>

                <span className="text-slate-300">•</span>

                <span>Your data stays protected</span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-100" />

              {/* Register */}
              <p className="text-center text-[12px] text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-indigo-600 transition hover:text-indigo-700"
                >
                  Create your account →
                </Link>
              </p>
            </motion.div>

            {/* Mobile */}
            <div className="mt-7 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 lg:hidden">
              <Check size={12} className="text-emerald-500" />
              AI-powered content workspace
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;