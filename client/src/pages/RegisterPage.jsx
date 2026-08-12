// // import { useState } from 'react'
// // import { useNavigate, Link } from 'react-router-dom'
// // import { useAuth } from '../context/AuthContext.jsx'
// // import { Bot, Eye, EyeOff, Loader2 } from 'lucide-react'
// // import toast from 'react-hot-toast'

// // const RegisterPage = () => {
// //   const [name, setName] = useState('')
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [showPassword, setShowPassword] = useState(false)
// //   const [loading, setLoading] = useState(false)
// //   const { register } = useAuth()
// //   const navigate = useNavigate()

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     if (!name || !email || !password) {
// //       toast.error('Please fill in all fields')
// //       return
// //     }
// //     if (password.length < 6) {
// //       toast.error('Password must be at least 6 characters')
// //       return
// //     }
// //     setLoading(true)
// //     try {
// //       await register(name, email, password)
// //       toast.success('Account created successfully!')
// //       navigate('/dashboard')
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Registration failed')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-secondary-50 flex items-center justify-center p-4">
// //       <div className="w-full max-w-md">
// //         <div className="text-center mb-8">
// //           <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4">
// //             <Bot size={28} className="text-white" />
// //           </div>
// //           <h1 className="text-2xl font-bold text-secondary-900">Create Account</h1>
// //           <p className="text-secondary-500 mt-1">Start generating LinkedIn posts with AI</p>
// //         </div>

// //         <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8">
// //           <form onSubmit={handleSubmit} className="space-y-5">
// //             <div>
// //               <label className="block text-sm font-medium text-secondary-700 mb-2">Full Name</label>
// //               <input
// //                 type="text"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 placeholder="John Doe"
// //                 className="input-field"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-secondary-700 mb-2">Email Address</label>
// //               <input
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="you@example.com"
// //                 className="input-field"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-secondary-700 mb-2">Password</label>
// //               <div className="relative">
// //                 <input
// //                   type={showPassword ? 'text' : 'password'}
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   placeholder="Min 6 characters"
// //                   className="input-field pr-12"
// //                   required
// //                   minLength={6}
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                   className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
// //                 >
// //                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //                 </button>
// //               </div>
// //             </div>
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
// //             >
// //               {loading ? <Loader2 size={18} className="animate-spin" /> : null}
// //               Create Account
// //             </button>
// //           </form>
// //         </div>

// //         <p className="text-center mt-6 text-sm text-secondary-500">
// //           Already have an account?{' '}
// //           <Link to="/login" className="text-primary-600 font-medium hover:text-primary-700">
// //             Sign in
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   )
// // }

// // export default RegisterPage




// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext.jsx'

// import {
//   Bot,
//   Eye,
//   EyeOff,
//   Loader2,
//   Mail,
//   User,
//   LockKeyhole,
//   ArrowRight,
//   ShieldCheck,
//   Sparkles,
//   Check,
// } from 'lucide-react'

// import { motion, useReducedMotion } from 'framer-motion'
// import toast from 'react-hot-toast'

// import boyImage from '../assets/boyimage.png'
// import aiImage from '../assets/aiimage.png'


// const RegisterPage = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const { register } = useAuth()
//   const navigate = useNavigate()
//   const shouldReduceMotion = useReducedMotion()

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!name || !email || !password) {
//       toast.error('Please fill in all fields')
//       return
//     }

//     if (password.length < 6) {
//       toast.error('Password must be at least 6 characters')
//       return
//     }

//     setLoading(true)

//     try {
//       await register(name, email, password)
//       toast.success('Account created successfully!')
//       navigate('/dashboard')
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Registration failed')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A]">

//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}

//       <div className="pointer-events-none fixed inset-0 overflow-hidden">
//         <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-500/[0.07] blur-3xl" />

//         <div className="absolute bottom-[-220px] left-[28%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.07] blur-3xl" />

//         <div className="absolute right-[-200px] top-[15%] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.04] blur-3xl" />
//       </div>


//       <div className="relative min-h-screen lg:grid lg:grid-cols-[60%_40%]">

//         {/* =========================================================
//             LEFT — AI CONTENT WORKSPACE
//         ========================================================= */}

//         <section className="relative hidden min-h-screen overflow-hidden border-r border-slate-200/80 bg-white lg:flex">

//           {/* Soft grid */}
//           <div
//             className="absolute inset-0 opacity-[0.28]"
//             style={{
//               backgroundImage:
//                 'linear-gradient(rgba(79,70,229,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.045) 1px, transparent 1px)',
//               backgroundSize: '42px 42px',
//               maskImage:
//                 'linear-gradient(to bottom, black 0%, transparent 90%)',
//               WebkitMaskImage:
//                 'linear-gradient(to bottom, black 0%, transparent 90%)',
//             }}
//           />

//           {/* Ambient glow */}
//           <div className="absolute left-[35%] top-[30%] h-80 w-80 rounded-full bg-indigo-500/[0.07] blur-[110px]" />

//           <div className="absolute bottom-[5%] left-[15%] h-72 w-72 rounded-full bg-violet-500/[0.06] blur-[110px]" />


//           <div className="relative z-10 flex min-h-screen w-full flex-col px-10 py-8 xl:px-14 xl:py-9">

//             {/* =====================================================
//                 BRAND
//             ===================================================== */}

//             <motion.div
//               initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45 }}
//               className="flex items-start justify-between"
//             >

//               <div className="flex items-center gap-3">

//                 <div className="relative flex h-14 w-14 items-center justify-center rounded-[17px] bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">

//                   <Bot
//                     size={28}
//                     strokeWidth={2}
//                     className="text-white"
//                   />

//                   <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-500" />

//                 </div>


//                 <div>
//                   <div className="text-[25px] font-bold tracking-[-0.04em] text-slate-950">
//                     LinkedIn AI
//                   </div>

//                   <div className="mt-0.5 text-[10px] font-semibold tracking-[0.22em] text-slate-400">
//                     AI CONTENT WORKSPACE
//                   </div>
//                 </div>

//               </div>


//               {/* Agentic AI pill */}

//               <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[12px] font-medium text-slate-500 shadow-sm xl:flex">

//                 <Sparkles
//                   size={14}
//                   className="text-indigo-500"
//                 />

//                 Agentic AI

//               </div>

//             </motion.div>


//             {/* =====================================================
//                 CONTENT
//             ===================================================== */}

//             <motion.div
//               initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.08 }}
//               className="relative z-20 mt-14 xl:mt-16"
//             >

//               {/* Online pill */}

//               <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[12px] font-medium text-slate-500 shadow-sm">

//                 <span className="relative flex h-2.5 w-2.5">

//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

//                   <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />

//                 </span>

//                 AI Agents Online

//               </div>


//               <h1 className="max-w-[580px] text-[42px] font-bold leading-[1.08] tracking-[-0.045em] text-slate-950 xl:text-[52px]">

//                 Build your AI-powered

//                 <br />

//                 <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
//                   content workspace.
//                 </span>

//               </h1>


//               <p className="mt-6 max-w-[500px] text-[16px] leading-7 text-slate-500 xl:text-[17px]">
//                 Create your account and let specialized AI agents
//                 research, write, review and optimize your LinkedIn
//                 content automatically.
//               </p>

//             </motion.div>


//             {/* =====================================================
//                 IMAGE AREA
//             ===================================================== */}

//             <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[51%]">

//               {/* AI robot image */}

//               <motion.div
//                 initial={
//                   shouldReduceMotion
//                     ? false
//                     : { opacity: 0, y: 25, scale: 0.98 }
//                 }
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.25,
//                 }}
//                 className="absolute left-[39%] top-[-5%] z-10 w-[48%] max-w-[530px]"
//               >

//                 <div className="relative">

//                   <div className="absolute left-[25%] top-[30%] h-36 w-36 rounded-full bg-indigo-500/[0.12] blur-3xl" />

//                   <img
//                     src={aiImage}
//                     alt="AI assistant"
//                     className="relative w-full object-contain drop-shadow-[0_20px_40px_rgba(79,70,229,0.10)]"
//                   />

//                 </div>

//               </motion.div>


//               {/* Boy image */}

//               <motion.div
//                 initial={
//                   shouldReduceMotion
//                     ? false
//                     : { opacity: 0, x: -25 }
//                 }
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 transition={{
//                   duration: 0.75,
//                   delay: 0.35,
//                 }}
//                 className="absolute bottom-0 left-[-3%] z-20 w-[53%] max-w-[570px]"
//               >

//                 <img
//                   src={boyImage}
//                   alt="Creator using LinkedIn AI"
//                   className="w-full object-contain"
//                 />

//               </motion.div>


//               {/* Floating LinkedIn icon */}

//               <motion.div
//                 animate={
//                   shouldReduceMotion
//                     ? {}
//                     : { y: [0, -8, 0] }
//                 }
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//                 className="absolute bottom-[42%] left-[13%] z-30 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2] text-lg font-bold text-white shadow-lg shadow-blue-500/20"
//               >
//                 in
//               </motion.div>


//               {/* Floating message */}

//               <motion.div
//                 animate={
//                   shouldReduceMotion
//                     ? {}
//                     : { y: [0, 7, 0] }
//                 }
//                 transition={{
//                   duration: 4.5,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//                 className="absolute bottom-[34%] left-[7%] z-30 flex h-12 w-16 items-center justify-center rounded-xl border border-white bg-white/90 shadow-lg"
//               >

//                 <div className="flex gap-1.5">
//                   <span className="h-2 w-2 rounded-full bg-indigo-400" />
//                   <span className="h-2 w-2 rounded-full bg-indigo-400" />
//                   <span className="h-2 w-2 rounded-full bg-indigo-400" />
//                 </div>

//               </motion.div>


//               {/* Floating analytics */}

//               <motion.div
//                 animate={
//                   shouldReduceMotion
//                     ? {}
//                     : { y: [0, -6, 0] }
//                 }
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//                 className="absolute bottom-[40%] right-[11%] z-30 flex h-12 w-16 items-center justify-center rounded-xl border border-white bg-white/90 shadow-lg"
//               >

//                 <div className="flex items-end gap-1">

//                   <span className="h-3 w-1.5 rounded-sm bg-indigo-300" />
//                   <span className="h-5 w-1.5 rounded-sm bg-indigo-400" />
//                   <span className="h-7 w-1.5 rounded-sm bg-indigo-500" />
//                   <span className="h-4 w-1.5 rounded-sm bg-violet-400" />

//                 </div>

//               </motion.div>


//               {/* Bottom gradient */}

//               <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/30 to-transparent" />

//             </div>


//             {/* =====================================================
//                 TRUST ROW
//             ===================================================== */}

//             <motion.div
//               initial={shouldReduceMotion ? false : { opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//               className="relative z-40 mt-auto flex items-center gap-5 pt-8 text-[11px] font-medium text-slate-400"
//             >

//               <span className="flex items-center gap-2">

//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />

//                 AI agents online

//               </span>

//               <span className="text-slate-300">•</span>

//               <span>Fast</span>

//               <span className="text-slate-300">•</span>

//               <span>Intelligent</span>

//               <span className="text-slate-300">•</span>

//               <span>Built for creators</span>

//             </motion.div>

//           </div>

//         </section>


//         {/* =========================================================
//             RIGHT — REGISTER
//         ========================================================= */}

//         <section className="relative flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:px-10 xl:px-14">

//           <div className="w-full max-w-[480px]">

//             {/* Mobile brand */}

//             <motion.div
//               initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45 }}
//               className="mb-7 flex items-center gap-3 lg:hidden"
//             >

//               <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">

//                 <Bot
//                   size={22}
//                   className="text-white"
//                 />

//                 <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#F8FAFC] bg-emerald-500" />

//               </div>

//               <div>

//                 <div className="text-[16px] font-bold text-slate-950">
//                   LinkedIn AI
//                 </div>

//                 <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
//                   AI CONTENT WORKSPACE
//                 </div>

//               </div>

//             </motion.div>


//             {/* =====================================================
//                 REGISTER CARD
//             ===================================================== */}

//             <motion.div
//               initial={
//                 shouldReduceMotion
//                   ? false
//                   : {
//                       opacity: 0,
//                       y: 20,
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
//                 ease: 'easeOut',
//               }}
//               className="rounded-[26px] border border-slate-200/90 bg-white p-7 shadow-[0_25px_80px_rgba(15,23,42,0.09)] sm:p-9"
//             >

//               {/* Header */}

//               <div className="mb-8">

//                 <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 ring-1 ring-indigo-100">

//                   <Sparkles size={21} />

//                 </div>


//                 <h2 className="text-[30px] font-bold tracking-[-0.035em] text-slate-950">
//                   Create your account
//                 </h2>


//                 <p className="mt-2 max-w-[340px] text-[14px] leading-6 text-slate-500">
//                   Join LinkedIn AI and start creating better content
//                   with your autonomous AI team.
//                 </p>

//               </div>


//               {/* FORM */}

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-5"
//               >

//                 {/* Full Name */}

//                 <div>

//                   <label
//                     htmlFor="name"
//                     className="mb-2 block text-[13px] font-semibold text-slate-700"
//                   >
//                     Full Name
//                   </label>

//                   <div className="group relative">

//                     <User
//                       size={17}
//                       aria-hidden="true"
//                       className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
//                     />

//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="John Doe"
//                       autoComplete="name"
//                       required
//                       disabled={loading}
//                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 text-[14px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
//                     />

//                   </div>

//                 </div>


//                 {/* Email */}

//                 <div>

//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-[13px] font-semibold text-slate-700"
//                   >
//                     Email Address
//                   </label>

//                   <div className="group relative">

//                     <Mail
//                       size={17}
//                       aria-hidden="true"
//                       className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
//                     />

//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="you@example.com"
//                       autoComplete="email"
//                       required
//                       disabled={loading}
//                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 text-[14px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
//                     />

//                   </div>

//                 </div>


//                 {/* Password */}

//                 <div>

//                   <label
//                     htmlFor="password"
//                     className="mb-2 block text-[13px] font-semibold text-slate-700"
//                   >
//                     Password
//                   </label>

//                   <div className="group relative">

//                     <LockKeyhole
//                       size={17}
//                       aria-hidden="true"
//                       className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
//                     />

//                     <input
//                       id="password"
//                       name="password"
//                       type={showPassword ? 'text' : 'password'}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Min 6 characters"
//                       autoComplete="new-password"
//                       required
//                       minLength={6}
//                       disabled={loading}
//                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-12 text-[14px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
//                     />


//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       disabled={loading}
//                       aria-label={
//                         showPassword
//                           ? 'Hide password'
//                           : 'Show password'
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


//                   <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-400">

//                     <Check
//                       size={13}
//                       className="text-emerald-500"
//                     />

//                     Minimum 6 characters

//                   </div>

//                 </div>


//                 {/* Submit */}

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
//                   className="group relative mt-2 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-[14px] font-semibold text-white shadow-lg shadow-indigo-500/20 outline-none transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 hover:shadow-xl hover:shadow-indigo-500/25 focus-visible:ring-4 focus-visible:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
//                 >

//                   {!loading && (
//                     <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.13] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                   )}


//                   {loading ? (
//                     <>
//                       <Loader2
//                         size={18}
//                         className="animate-spin"
//                       />

//                       Creating account...
//                     </>
//                   ) : (
//                     <>
//                       Create Account

//                       <ArrowRight
//                         size={16}
//                         className="transition-transform duration-200 group-hover:translate-x-0.5"
//                       />
//                     </>
//                   )}

//                 </motion.button>

//               </form>


//               {/* Security */}

//               <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-400">

//                 <ShieldCheck
//                   size={14}
//                   className="text-emerald-500"
//                 />

//                 <span>Secure authentication</span>

//                 <span className="text-slate-300">
//                   •
//                 </span>

//                 <span>Your data stays protected</span>

//               </div>


//               {/* Divider */}

//               <div className="my-6 h-px bg-slate-100" />


//               {/* Login */}

//               <p className="text-center text-[13px] text-slate-500">

//                 Already have an account?{' '}

//                 <Link
//                   to="/login"
//                   className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
//                 >
//                   Sign in →
//                 </Link>

//               </p>

//             </motion.div>


//             {/* Bottom trust */}

//             <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">

//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

//               AI-powered content workspace

//             </div>

//           </div>

//         </section>

//       </div>

//     </main>
//   )
// }

// export default RegisterPage





import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

import {
  Bot,
  Eye,
  EyeOff,
  Loader2,
  Mail,
  User,
  Lock,
  Sparkles,
  Search,
  Target,
  PenLine,
  ShieldCheck,
  Hash,
  WandSparkles,
  ArrowRight,
  Check,
  Zap,
  Shield,
  BarChart3,
} from 'lucide-react'

import { motion, useReducedMotion } from 'framer-motion'
import toast from 'react-hot-toast'

import boyImage from '../assets/boyimage.png'
import aiImage from '../assets/aiimage.png'

const agents = [
  {
    icon: Search,
    name: 'Research Agent',
    description: 'Analyzing your topic',
    color: 'blue',
  },
  {
    icon: Target,
    name: 'Strategy Agent',
    description: 'Building the right angle',
    color: 'violet',
  },
  {
    icon: PenLine,
    name: 'Writer Agent',
    description: 'Crafting your LinkedIn post',
    color: 'blue',
  },
  {
    icon: ShieldCheck,
    name: 'Reviewer Agent',
    description: 'Improving clarity & quality',
    color: 'green',
  },
  {
    icon: Hash,
    name: 'Hashtag Agent',
    description: 'Finding relevant hashtags',
    color: 'orange',
  },
  {
    icon: WandSparkles,
    name: 'Optimization Agent',
    description: 'Enhancing engagement',
    color: 'pink',
  },
]

const features = [
  {
    icon: Search,
    title: 'AI-Powered Content Creation',
    description: 'Intelligent agents that understand your topic and audience.',
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'Faster & Smarter',
    description: 'Create high-quality LinkedIn content 10x faster.',
    color: 'violet',
  },
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Your data is safe with enterprise-grade security.',
    color: 'green',
  },
  {
    icon: BarChart3,
    title: 'Better Engagement',
    description: 'Optimized content designed to increase reach and impact.',
    color: 'orange',
  },
]

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeAgent, setActiveAgent] = useState(0)

  const { register } = useAuth()
  const navigate = useNavigate()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agents.length)
    }, 2200)

    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      toast.error('Please fill in all fields')
      return
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      await register(name, email, password)
      toast.success('Account created successfully!')
      navigate('/dashboard')
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Registration failed'
      )
    } finally {
      setLoading(false)
    }
  }

  const getAgentIconClasses = (color, active) => {
    const colors = {
      blue: active
        ? 'bg-blue-600 text-white shadow-blue-500/25'
        : 'bg-blue-50 text-blue-600',
      violet: active
        ? 'bg-violet-600 text-white shadow-violet-500/25'
        : 'bg-violet-50 text-violet-600',
      green: active
        ? 'bg-emerald-600 text-white shadow-emerald-500/25'
        : 'bg-emerald-50 text-emerald-600',
      orange: active
        ? 'bg-orange-500 text-white shadow-orange-500/25'
        : 'bg-orange-50 text-orange-500',
      pink: active
        ? 'bg-pink-500 text-white shadow-pink-500/25'
        : 'bg-pink-50 text-pink-500',
    }

    return colors[color]
  }

  const getFeatureIconClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 ring-blue-100',
      violet: 'bg-violet-50 text-violet-600 ring-violet-100',
      green: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
      orange: 'bg-orange-50 text-orange-500 ring-orange-100',
    }

    return colors[color]
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A]">
      {/* ============================================================
          BACKGROUND ATMOSPHERE
      ============================================================ */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-500/[0.055] blur-[110px]" />

        <div className="absolute left-[25%] top-[35%] h-[450px] w-[450px] rounded-full bg-violet-500/[0.055] blur-[120px]" />

        <div className="absolute bottom-[-180px] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-400/[0.045] blur-[120px]" />

        <div className="absolute right-[-150px] top-[25%] h-[500px] w-[500px] rounded-full bg-indigo-400/[0.04] blur-[120px]" />
      </div>

      {/* ============================================================
          MAIN LAYOUT
      ============================================================ */}

      <div className="relative min-h-screen lg:grid lg:grid-cols-[60%_40%] xl:grid-cols-[61%_39%]">

        {/* ============================================================
            LEFT SIDE
        ============================================================ */}

        <section className="relative hidden min-h-screen overflow-hidden border-r border-slate-200/70 bg-white/50 lg:block">

          {/* Soft grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(79,70,229,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.055) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
              maskImage:
                'linear-gradient(to bottom, black 0%, transparent 88%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, black 0%, transparent 88%)',
            }}
          />

          {/* ============================================================
              BRAND
          ============================================================ */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: -12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-7 right-7 top-6 z-30 flex items-start justify-between xl:left-10 xl:right-10"
          >
            <div className="flex items-center gap-3">

              <div className="relative flex h-14 w-14 items-center justify-center rounded-[17px] bg-gradient-to-br from-indigo-500 to-violet-600 shadow-[0_12px_30px_rgba(79,70,229,0.24)]">

                <Bot
                  size={29}
                  strokeWidth={2}
                  className="text-white"
                />

                <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-500" />
              </div>

              <div>
                <h1 className="text-[25px] font-bold tracking-[-0.04em] text-slate-950 xl:text-[27px]">
                  LinkedIn AI
                </h1>

                <p className="mt-0.5 text-[10px] font-semibold tracking-[0.22em] text-slate-500">
                  AI CONTENT WORKSPACE
                </p>
              </div>
            </div>

            {/* Agentic AI */}
            <div className="flex items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-3.5 py-2 text-[11px] font-semibold text-indigo-600 shadow-[0_5px_20px_rgba(79,70,229,0.07)] backdrop-blur-xl">
              <Sparkles size={13} />
              Agentic AI
            </div>
          </motion.div>

          {/* ============================================================
              CONTENT
          ============================================================ */}

          <div className="relative z-10 h-screen px-7 pt-[132px] xl:px-10">

            {/* Top pill */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 10 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-slate-500 shadow-sm backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span>Your AI Content Team</span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 18 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-5 max-w-[410px] xl:mt-6 xl:max-w-[440px]"
            >
              <h2 className="text-[38px] font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 xl:text-[43px]">
                Your AI team is
                <br />

                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
                  ready to create.
                </span>
              </h2>

              <p className="mt-5 max-w-[390px] text-[14px] leading-[1.7] text-slate-500 xl:text-[15px]">
                Research, write, review and optimize LinkedIn
                content with specialized AI agents working
                together behind the scenes.
              </p>
            </motion.div>

            {/* ========================================================
                FEATURE LIST
            ======================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: -15 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute left-7 top-[335px] w-[285px] xl:left-10 xl:top-[340px] xl:w-[300px]"
            >
              <div className="space-y-0">

                {features.map((feature, index) => {
                  const Icon = feature.icon

                  return (
                    <motion.div
                      key={feature.title}
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : { x: 3 }
                      }
                      className={`flex gap-3 py-2.5 ${
                        index !== features.length - 1
                          ? 'border-b border-slate-200/70'
                          : ''
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] ring-1 ${getFeatureIconClasses(
                          feature.color
                        )}`}
                      >
                        <Icon size={18} strokeWidth={2.2} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-slate-800">
                          {feature.title}
                        </p>

                        <p className="mt-0.5 text-[9px] leading-[1.35] text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
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
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: 'easeOut',
              }}
              className="pointer-events-none absolute left-[300px] top-[65px] z-10 h-[260px] w-[410px] xl:left-[320px] xl:top-[68px] xl:h-[280px] xl:w-[440px]"
            >
              <img
                src={aiImage}
                alt="AI robot working"
                className="h-full w-full object-contain"
              />
            </motion.div>

            {/* ========================================================
                AUTONOMOUS WORKFLOW
            ======================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: 20 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute left-[370px] top-[265px] z-20 w-[300px] xl:left-[385px] xl:top-[270px] xl:w-[325px]"
            >

              {/* Workflow title */}
              <div className="mb-3 flex items-center gap-2 pl-1">
                <Sparkles
                  size={12}
                  className="text-indigo-500"
                />

                <span className="text-[11px] font-bold text-slate-700">
                  Autonomous Workflow
                </span>
              </div>

              {/* Connector */}
              <div className="absolute left-[7px] top-[42px] bottom-[27px] w-px bg-gradient-to-b from-blue-400 via-violet-400 via-emerald-400 to-pink-400" />

              <div className="space-y-2">

                {agents.map((agent, index) => {
                  const Icon = agent.icon
                  const isActive = index === activeAgent

                  return (
                    <motion.div
                      key={agent.name}
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              scale: isActive ? 1.01 : 1,
                            }
                      }
                      transition={{
                        duration: 0.3,
                      }}
                      className={`relative flex min-h-[52px] items-center gap-2.5 rounded-xl border px-2.5 py-2 backdrop-blur-xl transition-all duration-300 ${
                        isActive
                          ? 'border-indigo-200 bg-white shadow-[0_10px_30px_rgba(79,70,229,0.13)]'
                          : 'border-slate-200/80 bg-white/90 shadow-[0_5px_18px_rgba(15,23,42,0.045)]'
                      }`}
                    >

                      {/* Connector node */}
                      <span
                        className={`absolute -left-[19px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-white ${
                          isActive
                            ? 'bg-indigo-500'
                            : index < activeAgent
                            ? 'bg-emerald-400'
                            : 'bg-slate-300'
                        }`}
                      />

                      {/* Icon */}
                      <div
                        className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] shadow-sm ${getAgentIconClasses(
                          agent.color,
                          isActive
                        )}`}
                      >
                        <Icon
                          size={17}
                          strokeWidth={2.2}
                        />

                        {isActive && (
                          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-bold text-slate-800">
                          {agent.name}
                        </p>

                        <p className="mt-0.5 truncate text-[9px] text-slate-400">
                          {agent.description}
                        </p>
                      </div>

                      {/* Status */}
                      <div className="flex shrink-0 items-center gap-1 rounded-full bg-slate-50 px-1.5 py-1">

                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isActive
                              ? 'bg-emerald-500'
                              : 'bg-slate-300'
                          }`}
                        />

                        <span
                          className={`text-[8px] font-medium ${
                            isActive
                              ? 'text-emerald-600'
                              : 'text-slate-400'
                          }`}
                        >
                          {isActive
                            ? 'Working'
                            : 'Waiting'}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* ========================================================
                BOY IMAGE
            ======================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="pointer-events-none absolute bottom-0 left-[-5px] z-10 h-[250px] w-[430px] xl:h-[280px] xl:w-[475px]"
            >
              <img
                src={boyImage}
                alt="Creator working with LinkedIn AI"
                className="h-full w-full object-contain object-bottom"
              />
            </motion.div>

            {/* Bottom glow */}
            <div className="pointer-events-none absolute bottom-[-100px] left-[5%] h-[280px] w-[600px] rounded-full bg-indigo-400/[0.07] blur-[90px]" />

            {/* Floating particles */}
            <div className="pointer-events-none absolute left-[36%] top-[380px] h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.7)]" />

            <div className="pointer-events-none absolute left-[45%] top-[465px] h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.7)]" />

            <div className="pointer-events-none absolute left-[52%] top-[600px] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.7)]" />

          </div>
        </section>

        {/* ============================================================
            RIGHT SIDE
        ============================================================ */}

        <section className="relative flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 py-8 sm:px-8 lg:px-8 xl:px-12">

          {/* Right ambient glow */}
          <div className="pointer-events-none absolute right-[-150px] top-[20%] h-[400px] w-[400px] rounded-full bg-indigo-500/[0.04] blur-[100px]" />

          <div className="relative z-10 w-full max-w-[420px]">

            {/* ========================================================
                MOBILE BRAND
            ======================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: -8 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-7 flex items-center gap-3 lg:hidden"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg">
                <Bot
                  size={22}
                  className="text-white"
                />

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#F8FAFC] bg-emerald-500" />
              </div>

              <div>
                <div className="text-[16px] font-bold text-slate-950">
                  LinkedIn AI
                </div>

                <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                  AI CONTENT WORKSPACE
                </div>
              </div>
            </motion.div>

            {/* ========================================================
                REGISTER CARD
            ======================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                      scale: 0.985,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.55,
                ease: 'easeOut',
              }}
              className="rounded-[24px] border border-slate-200/90 bg-white px-7 py-7 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:px-10 sm:py-8"
            >

              {/* Header */}
              <div className="mb-6">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Sparkles size={21} />
                </div>

                <h2 className="text-[29px] font-bold tracking-[-0.035em] text-slate-950 sm:text-[31px]">
                  Create your account
                </h2>

                <p className="mt-2 max-w-[290px] text-[14px] leading-[1.55] text-slate-500">
                  Join thousands of creators using AI to grow their personal brand.
                </p>
              </div>

              {/* ======================================================
                  FORM
              ====================================================== */}

              <form
                onSubmit={handleSubmit}
                className="space-y-4.5"
              >

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[12px] font-bold text-slate-700"
                  >
                    Full Name
                  </label>

                  <div className="group relative">
                    <User
                      size={17}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                      disabled={loading}
                      className="h-[44px] w-full rounded-[10px] border border-slate-200 bg-white pl-10 pr-4 text-[13px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/[0.07] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[12px] font-bold text-slate-700"
                  >
                    Email address
                  </label>

                  <div className="group relative">
                    <Mail
                      size={17}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      disabled={loading}
                      className="h-[44px] w-full rounded-[10px] border border-slate-200 bg-white pl-10 pr-4 text-[13px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/[0.07] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[12px] font-bold text-slate-700"
                  >
                    Password
                  </label>

                  <div className="group relative">
                    <Lock
                      size={17}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
                    />

                    <input
                      id="password"
                      name="password"
                      type={
                        showPassword
                          ? 'text'
                          : 'password'
                      }
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      placeholder="Create a password"
                      autoComplete="new-password"
                      required
                      minLength={6}
                      disabled={loading}
                      className="h-[44px] w-full rounded-[10px] border border-slate-200 bg-white pl-10 pr-11 text-[13px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/[0.07] disabled:cursor-not-allowed disabled:opacity-60"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      disabled={loading}
                      aria-label={
                        showPassword
                          ? 'Hide password'
                          : 'Show password'
                      }
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>

                  {/* Password requirements */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        className="text-emerald-500"
                      />
                      At least 6 characters
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        className="text-emerald-500"
                      />
                      One number or symbol
                    </span>
                  </div>
                </div>

                {/* Submit */}
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
                  className="group relative mt-2 flex h-[46px] w-full items-center justify-center gap-2 overflow-hidden rounded-[11px] bg-gradient-to-r from-indigo-600 to-violet-600 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(79,70,229,0.25)] transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 hover:shadow-[0_14px_32px_rgba(79,70,229,0.3)] focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {!loading && (
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.13] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  )}

                  {loading ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </motion.button>
              </form>

              {/* ======================================================
                  SECURITY
              ====================================================== */}

              <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <ShieldCheck
                  size={14}
                  className="text-emerald-500"
                />

                <span>
                  Secure authentication
                </span>

                <span className="text-slate-300">
                  •
                </span>

                <span>
                  Your data stays protected
                </span>
              </div>

              {/* Divider */}
              <div className="my-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-[11px] font-medium text-slate-400">
                  or
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Login */}
              <p className="text-center text-[12px] text-slate-500">
                Already have an account?{' '}

                <Link
                  to="/login"
                  className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
                >
                  Sign in here
                  <span className="ml-1">
                    →
                  </span>
                </Link>
              </p>
            </motion.div>

            {/* Mobile bottom text */}
            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.1em] text-slate-400 lg:hidden">
              <Check
                size={12}
                className="text-emerald-500"
              />
              AI-powered content workspace
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default RegisterPage