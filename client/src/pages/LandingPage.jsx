// // import { useNavigate } from 'react-router-dom'
// // import { Bot, FileText, Sparkles, Hash, Wand2, TrendingUp, Layers, Repeat, ArrowRight, CheckCircle } from 'lucide-react'
// // import { motion } from 'framer-motion'

// // const features = [
// //   { icon: FileText, title: 'AI Post Generator', desc: 'Generate professional LinkedIn posts with optimized structure and CTAs.' },
// //   { icon: Sparkles, title: 'Hook Generator', desc: 'Create scroll-stopping hooks that capture attention instantly.' },
// //   { icon: Hash, title: 'Hashtag Optimizer', desc: 'Get the perfect mix of hashtags to maximize your reach.' },
// //   { icon: Wand2, title: 'Post Improver', desc: 'Transform your existing posts into high-performing content.' },
// //   { icon: TrendingUp, title: 'Viral Score', desc: 'Analyze your posts and predict their viral potential.' },
// //   { icon: Layers, title: 'Carousel Creator', desc: 'Build multi-slide carousel content for maximum engagement.' },
// //   { icon: Repeat, title: 'Content Repurposer', desc: 'Turn any content into LinkedIn posts, Twitter threads, and blogs.' },
// // ]

// // const LandingPage = () => {
// //   const navigate = useNavigate()

// //   return (
// //     <div className="min-h-screen bg-secondary-50">
// //       <nav className="bg-white border-b border-secondary-200">
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// //           <div className="flex items-center gap-3">
// //             <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
// //               <Bot size={20} className="text-white" />
// //             </div>
// //             <div>
// //               <h1 className="font-bold text-lg text-secondary-900 leading-tight">LinkedIn Post Generator</h1>
// //               <p className="text-xs text-secondary-500 font-medium">Agentic AI</p>
// //             </div>
// //           </div>
// //           <div className="flex items-center gap-4">
// //             <button
// //               onClick={() => navigate('/login')}
// //               className="text-secondary-700 font-medium hover:text-primary-600 transition-colors"
// //             >
// //               Sign In
// //             </button>
// //             <button
// //               onClick={() => navigate('/register')}
// //               className="btn-primary text-sm"
// //             >
// //               Get Started
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       <section className="pt-20 pb-16 px-6">
// //         <div className="max-w-5xl mx-auto text-center">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-8">
// //               <Sparkles size={16} />
// //               Powered by OpenRouter AI
// //             </div>
// //             <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
// //               Generate LinkedIn Posts<br />
// //               <span className="gradient-text">10x Faster with AI</span>
// //             </h1>
// //             <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-10 leading-relaxed">
// //               Our Agentic AI workflow analyzes trends, plans content, writes posts, and reviews quality
// //               to deliver professional LinkedIn content that drives engagement.
// //             </p>
// //             <div className="flex items-center justify-center gap-4 mb-12">
// //               <button
// //                 onClick={() => navigate('/register')}
// //                 className="btn-primary flex items-center gap-2"
// //               >
// //                 Start Creating Free
// //                 <ArrowRight size={18} />
// //               </button>
// //               <button
// //                 onClick={() => navigate('/login')}
// //                 className="btn-outline"
// //               >
// //                 Sign In
// //               </button>
// //             </div>
// //             <div className="flex items-center justify-center gap-8 text-sm text-secondary-500">
// //               <span className="flex items-center gap-2"><CheckCircle size={16} className="text-success-500" /> Multiple AI Models</span>
// //               <span className="flex items-center gap-2"><CheckCircle size={16} className="text-success-500" /> Agentic Workflow</span>
// //               <span className="flex items-center gap-2"><CheckCircle size={16} className="text-success-500" /> Free to Start</span>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       <section className="py-16 px-6 bg-white">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-bold text-secondary-900 mb-4">Everything You Need</h2>
// //             <p className="text-secondary-600">A complete toolkit for LinkedIn content creation</p>
// //           </div>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {features.map((feature, index) => {
// //               const Icon = feature.icon
// //               return (
// //                 <motion.div
// //                   key={feature.title}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.4, delay: index * 0.1 }}
// //                   className="card hover:shadow-md transition-shadow duration-200"
// //                 >
// //                   <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
// //                     <Icon size={22} className="text-primary-600" />
// //                   </div>
// //                   <h3 className="font-semibold text-secondary-900 mb-2">{feature.title}</h3>
// //                   <p className="text-sm text-secondary-600 leading-relaxed">{feature.desc}</p>
// //                 </motion.div>
// //               )
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-16 px-6 bg-secondary-900">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Amazing LinkedIn Content?</h2>
// //           <p className="text-secondary-400 mb-8">Join thousands of professionals using AI to grow their LinkedIn presence.</p>
// //           <button
// //             onClick={() => navigate('/register')}
// //             className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
// //           >
// //             Get Started Free
// //             <ArrowRight size={20} />
// //           </button>
// //         </div>
// //       </section>

// //       <footer className="bg-secondary-950 py-8 px-6">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <p className="text-secondary-500 text-sm"> LinkedIn Post Generator Agent. Built with Agentic AI.</p>
// //         </div>
// //       </footer>
// //     </div>
// //   )
// // }

// // export default LandingPage






// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Bot,
//   Sparkles,
//   ArrowRight,
//   CheckCircle2,
//   BrainCircuit,
//   Search,
//   PenLine,
//   ShieldCheck,
//   Hash,
//   Wand2,
//   TrendingUp,
//   Layers3,
//   Repeat2,
//   BarChart3,
//   Menu,
//   X,
//   ChevronRight,
//   Zap,
//   Target,
//   FileText,
//   Clock3,
//   Lightbulb,
//   Activity,
//   Send,
//   CircleDot,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const agents = [
//   {
//     icon: Search,
//     name: "Research Agent",
//     description: "Finds useful context, trends and topic insights before writing begins.",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     icon: Target,
//     name: "Strategy Agent",
//     description: "Turns your idea into a clear content angle, structure and direction.",
//     color: "from-violet-500 to-purple-500",
//   },
//   {
//     icon: PenLine,
//     name: "Writer Agent",
//     description: "Creates engaging LinkedIn content built around your chosen topic.",
//     color: "from-indigo-500 to-blue-500",
//   },
//   {
//     icon: ShieldCheck,
//     name: "Reviewer Agent",
//     description: "Reviews clarity, structure, tone and overall content quality.",
//     color: "from-emerald-500 to-teal-500",
//   },
//   {
//     icon: Hash,
//     name: "Hashtag Agent",
//     description: "Generates relevant hashtags to complement your finished content.",
//     color: "from-orange-500 to-amber-500",
//   },
//   {
//     icon: Wand2,
//     name: "Optimization Agent",
//     description: "Refines readability and engagement potential before publishing.",
//     color: "from-pink-500 to-rose-500",
//   },
// ];

// const features = [
//   {
//     icon: FileText,
//     title: "AI Post Generator",
//     description: "Turn a simple idea into polished LinkedIn content.",
//   },
//   {
//     icon: Sparkles,
//     title: "Hook Generator",
//     description: "Create stronger opening lines designed to stop the scroll.",
//   },
//   {
//     icon: Hash,
//     title: "Hashtag Generator",
//     description: "Generate relevant hashtag suggestions for your content.",
//   },
//   {
//     icon: Wand2,
//     title: "Post Improver",
//     description: "Transform existing drafts into cleaner, stronger content.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Viral Score",
//     description: "Analyze your content and identify opportunities to improve it.",
//   },
//   {
//     icon: Layers3,
//     title: "Carousel Generator",
//     description: "Turn ideas into structured multi-slide LinkedIn content.",
//   },
//   {
//     icon: Repeat2,
//     title: "Content Repurposing",
//     description: "Repurpose existing content into different formats.",
//   },
//   {
//     icon: Clock3,
//     title: "Content History",
//     description: "Keep your previous AI-generated content organized.",
//   },
//   {
//     icon: BarChart3,
//     title: "Analytics",
//     description: "Understand your content creation activity over time.",
//   },
// ];

// const workflow = [
//   {
//     label: "Research",
//     icon: Search,
//     text: "Analyzing your topic",
//   },
//   {
//     label: "Strategy",
//     icon: Target,
//     text: "Building the content angle",
//   },
//   {
//     label: "Writer",
//     icon: PenLine,
//     text: "Drafting your LinkedIn post",
//   },
//   {
//     label: "Reviewer",
//     icon: ShieldCheck,
//     text: "Improving clarity and quality",
//   },
//   {
//     label: "Hashtag",
//     icon: Hash,
//     text: "Finding relevant hashtags",
//   },
// ];

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [activeAgent, setActiveAgent] = useState(0);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveAgent((current) => (current + 1) % workflow.length);
//     }, 2200);

//     return () => clearInterval(interval);
//   }, []);

//   const scrollTo = (id) => {
//     setMobileMenu(false);

//     const element = document.getElementById(id);

//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-[#080A0F] dark:text-slate-100">
//       {/* =========================================================
//           NAVBAR
//       ========================================================= */}
//       <nav
//         className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#080A0F]/85"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
//           <button
//             onClick={() => scrollTo("home")}
//             className="group flex items-center gap-3"
//             aria-label="LinkedIn AI home"
//           >
//             <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
//               <Bot size={21} className="text-white" />
//               <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400 dark:border-[#080A0F]" />
//             </div>

//             <div className="hidden sm:block text-left">
//               <div className="text-[15px] font-bold tracking-tight text-slate-950 dark:text-white">
//                 LinkedIn AI
//               </div>
//               <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">
//                 Agentic Content
//               </div>
//             </div>
//           </button>

//           <div className="hidden items-center gap-7 lg:flex">
//             <button onClick={() => scrollTo("features")} className="nav-link">
//               Features
//             </button>
//             <button onClick={() => scrollTo("agents")} className="nav-link">
//               AI Agents
//             </button>
//             <button onClick={() => scrollTo("workflow")} className="nav-link">
//               Workflow
//             </button>
//             <button onClick={() => scrollTo("analytics")} className="nav-link">
//               Analytics
//             </button>
//             <button onClick={() => scrollTo("pricing")} className="nav-link">
//               Pricing
//             </button>
//             <button onClick={() => scrollTo("about")} className="nav-link">
//               About
//             </button>
//           </div>

//           <div className="hidden items-center gap-3 sm:flex">
//             <button
//               onClick={() => navigate("/login")}
//               className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
//             >
//               Sign In
//             </button>

//             <button
//               onClick={() => navigate("/register")}
//               className="group inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-400"
//             >
//               Get Started
//               <ArrowRight
//                 size={15}
//                 className="transition-transform group-hover:translate-x-0.5"
//               />
//             </button>
//           </div>

//           <button
//             onClick={() => setMobileMenu((value) => !value)}
//             className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 sm:hidden dark:text-slate-300 dark:hover:bg-white/[0.05]"
//             aria-label="Toggle navigation"
//           >
//             {mobileMenu ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>

//         <AnimatePresence>
//           {mobileMenu && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="border-t border-slate-200 bg-white px-5 py-5 sm:hidden dark:border-white/[0.06] dark:bg-[#10131A]"
//             >
//               <div className="flex flex-col gap-1">
//                 {[
//                   ["Features", "features"],
//                   ["AI Agents", "agents"],
//                   ["Workflow", "workflow"],
//                   ["Analytics", "analytics"],
//                   ["Pricing", "pricing"],
//                   ["About", "about"],
//                 ].map(([label, id]) => (
//                   <button
//                     key={id}
//                     onClick={() => scrollTo(id)}
//                     className="rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.05]"
//                   >
//                     {label}
//                   </button>
//                 ))}

//                 <div className="mt-3 flex gap-2 border-t border-slate-200 pt-4 dark:border-white/[0.06]">
//                   <button
//                     onClick={() => navigate("/login")}
//                     className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold dark:border-white/[0.08]"
//                   >
//                     Sign In
//                   </button>

//                   <button
//                     onClick={() => navigate("/register")}
//                     className="flex-1 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white"
//                   >
//                     Get Started
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* =========================================================
//           HERO
//       ========================================================= */}
//       <main id="home">
//         <section className="relative isolate overflow-hidden pt-32 sm:pt-40">
//           <div className="pointer-events-none absolute inset-0 -z-10">
//             <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-indigo-500/[0.10] blur-3xl dark:bg-indigo-500/[0.12]" />
//             <div className="absolute right-[5%] top-40 h-80 w-80 rounded-full bg-violet-500/[0.08] blur-3xl dark:bg-violet-500/[0.10]" />
//           </div>

//           <div className="mx-auto max-w-7xl px-5 sm:px-8">
//             <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//               >
//                 <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-indigo-700 shadow-sm dark:border-indigo-500/20 dark:bg-white/[0.03] dark:text-indigo-300">
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
//                   </span>
//                   AI Content Command Center
//                 </div>

//                 <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[70px] lg:leading-[1.03] dark:text-white">
//                   Your AI team for
//                   <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
//                     LinkedIn content.
//                   </span>
//                 </h1>

//                 <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
//                   Turn a simple idea into polished LinkedIn content with a
//                   team of specialized AI agents that research, strategize,
//                   write, review and optimize your post.
//                 </p>

//                 <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//                   <button
//                     onClick={() => navigate("/register")}
//                     className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
//                   >
//                     Start Creating Free
//                     <ArrowRight
//                       size={17}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </button>

//                   <button
//                     onClick={() => scrollTo("workflow")}
//                     className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/[0.09] dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.06]"
//                   >
//                     <CircleDot size={16} />
//                     See How AI Works
//                   </button>
//                 </div>

//                 <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500 dark:text-slate-500">
//                   <span className="flex items-center gap-2">
//                     <CheckCircle2 size={15} className="text-emerald-500" />
//                     Specialized AI agents
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <CheckCircle2 size={15} className="text-emerald-500" />
//                     Multiple AI capabilities
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <CheckCircle2 size={15} className="text-emerald-500" />
//                     Start free
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Hero workflow */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.97, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.15 }}
//                 className="relative"
//               >
//                 <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/[0.08] dark:border-white/[0.08] dark:bg-[#10131A] dark:shadow-black/30 sm:p-5">
//                   <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/[0.06]">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
//                         <BrainCircuit size={18} />
//                       </div>
//                       <div>
//                         <p className="text-sm font-bold text-slate-900 dark:text-white">
//                           AI Content Workflow
//                         </p>
//                         <p className="text-[11px] text-slate-500">
//                           Your agents are ready
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/[0.08] dark:text-emerald-400">
//                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                       ONLINE
//                     </div>
//                   </div>

//                   <div className="mt-5 space-y-3">
//                     {workflow.map((item, index) => {
//                       const Icon = item.icon;
//                       const active = index === activeAgent;
//                       const completed = index < activeAgent;

//                       return (
//                         <div key={item.label}>
//                           <motion.div
//                             animate={{
//                               scale: active ? 1.015 : 1,
//                               borderColor: active
//                                 ? "rgba(99,102,241,0.45)"
//                                 : undefined,
//                             }}
//                             className={`relative flex items-center gap-3 rounded-xl border p-3 transition-all duration-500 ${
//                               active
//                                 ? "border-indigo-300 bg-indigo-50/70 shadow-lg shadow-indigo-500/[0.08] dark:border-indigo-500/30 dark:bg-indigo-500/[0.07]"
//                                 : "border-slate-100 bg-slate-50/70 dark:border-white/[0.05] dark:bg-white/[0.02]"
//                             }`}
//                           >
//                             <div
//                               className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
//                                 active
//                                   ? "bg-indigo-600 text-white"
//                                   : completed
//                                   ? "bg-emerald-500 text-white"
//                                   : "bg-slate-200 text-slate-500 dark:bg-white/[0.07] dark:text-slate-400"
//                               }`}
//                             >
//                               {completed ? (
//                                 <CheckCircle2 size={17} />
//                               ) : (
//                                 <Icon size={17} />
//                               )}
//                             </div>

//                             <div className="min-w-0 flex-1">
//                               <div className="flex items-center justify-between gap-3">
//                                 <p className="text-xs font-bold text-slate-900 dark:text-white">
//                                   {item.label} Agent
//                                 </p>

//                                 <span
//                                   className={`text-[10px] font-semibold ${
//                                     active
//                                       ? "text-indigo-600 dark:text-indigo-400"
//                                       : completed
//                                       ? "text-emerald-600 dark:text-emerald-400"
//                                       : "text-slate-400"
//                                   }`}
//                                 >
//                                   {active
//                                     ? "Working"
//                                     : completed
//                                     ? "Completed"
//                                     : "Waiting"}
//                                 </span>
//                               </div>

//                               <p className="mt-1 truncate text-[11px] text-slate-500 dark:text-slate-500">
//                                 {active
//                                   ? item.text
//                                   : completed
//                                   ? "Task completed successfully"
//                                   : "Waiting for previous agent"}
//                               </p>

//                               {active && (
//                                 <div className="mt-2 h-1 overflow-hidden rounded-full bg-indigo-100 dark:bg-indigo-500/10">
//                                   <motion.div
//                                     className="h-full rounded-full bg-indigo-500"
//                                     initial={{ width: "10%" }}
//                                     animate={{ width: "78%" }}
//                                     transition={{
//                                       duration: 2,
//                                       ease: "easeInOut",
//                                     }}
//                                   />
//                                 </div>
//                               )}
//                             </div>
//                           </motion.div>

//                           {index < workflow.length - 1 && (
//                             <div className="ml-7 h-3 border-l border-dashed border-slate-300 dark:border-white/[0.1]" />
//                           )}
//                         </div>
//                       );
//                     })}
//                   </div>

//                   <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-white/[0.05] dark:bg-white/[0.02]">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[11px] font-semibold text-slate-500">
//                         Workflow
//                       </span>
//                       <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
//                         {Math.round(((activeAgent + 1) / workflow.length) * 100)}%
//                       </span>
//                     </div>

//                     <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/[0.07]">
//                       <motion.div
//                         className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
//                         animate={{
//                           width: `${((activeAgent + 1) / workflow.length) * 100}%`,
//                         }}
//                         transition={{ duration: 0.5 }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             PRODUCT STATEMENT
//         ========================================================= */}
//         <section className="border-y border-slate-200/80 bg-white py-10 dark:border-white/[0.05] dark:bg-[#0C0F15]">
//           <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-3">
//             {[
//               {
//                 icon: BrainCircuit,
//                 title: "Specialized agents",
//                 text: "Each step has a focused AI responsibility.",
//               },
//               {
//                 icon: Zap,
//                 title: "One connected workflow",
//                 text: "Research, strategy, writing and optimization work together.",
//               },
//               {
//                 icon: Send,
//                 title: "Ready-to-publish content",
//                 text: "Go from idea to polished LinkedIn content faster.",
//               },
//             ].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.08 }}
//                   className="flex items-start gap-4"
//                 >
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/[0.08] dark:text-indigo-400">
//                     <Icon size={18} />
//                   </div>

//                   <div>
//                     <h3 className="text-sm font-bold text-slate-900 dark:text-white">
//                       {item.title}
//                     </h3>
//                     <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-500">
//                       {item.text}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </section>

//         {/* =========================================================
//             LIVE AI DEMO
//         ========================================================= */}
//         <section id="workflow" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
//           <div className="mx-auto max-w-6xl">
//             <div className="mx-auto max-w-2xl text-center">
//               <p className="section-eyebrow">THE WORKFLOW</p>

//               <h2 className="section-title">
//                 See your AI team
//                 <span className="gradient-heading"> work together.</span>
//               </h2>

//               <p className="section-description">
//                 Your idea moves through a connected workflow where each
//                 specialized agent handles a different part of the content
//                 creation process.
//               </p>
//             </div>

//             <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/[0.05] dark:border-white/[0.07] dark:bg-[#10131A] dark:shadow-black/20">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/[0.06]">
//                 <div className="flex items-center gap-3">
//                   <Activity size={17} className="text-indigo-500" />
//                   <span className="text-sm font-bold text-slate-900 dark:text-white">
//                     Live AI Generation
//                   </span>
//                 </div>

//                 <span className="flex items-center gap-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
//                   <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                   Product preview
//                 </span>
//               </div>

//               <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
//                 <div className="border-b border-slate-100 p-6 lg:border-b-0 lg:border-r dark:border-white/[0.06]">
//                   <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
//                     Your idea
//                   </p>

//                   <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/[0.07] dark:bg-white/[0.025]">
//                     <p className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200">
//                       "How AI is changing the way developers build products"
//                     </p>

//                     <div className="mt-5 flex flex-wrap gap-2">
//                       {["Technology", "AI", "Development"].map((tag) => (
//                         <span
//                           key={tag}
//                           className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.03]"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => navigate("/register")}
//                     className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white transition hover:bg-indigo-700"
//                   >
//                     Start with your idea
//                     <ArrowRight size={14} />
//                   </button>
//                 </div>

//                 <div className="p-6">
//                   <div className="space-y-4">
//                     {workflow.map((item, index) => {
//                       const Icon = item.icon;
//                       const active = activeAgent === index;
//                       const completed = index < activeAgent;

//                       return (
//                         <motion.div
//                           key={item.label}
//                           animate={{
//                             opacity: active || completed ? 1 : 0.5,
//                           }}
//                           className="flex items-center gap-4"
//                         >
//                           <div
//                             className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
//                               active
//                                 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
//                                 : completed
//                                 ? "bg-emerald-500 text-white"
//                                 : "bg-slate-100 text-slate-400 dark:bg-white/[0.06]"
//                             }`}
//                           >
//                             {completed ? (
//                               <CheckCircle2 size={16} />
//                             ) : (
//                               <Icon size={16} />
//                             )}
//                           </div>

//                           <div className="min-w-0 flex-1">
//                             <div className="flex justify-between gap-3">
//                               <span className="text-xs font-bold text-slate-900 dark:text-white">
//                                 {item.label} Agent
//                               </span>

//                               <span className="text-[10px] font-semibold text-slate-400">
//                                 {active
//                                   ? "Working"
//                                   : completed
//                                   ? "Done"
//                                   : "Waiting"}
//                               </span>
//                             </div>

//                             <p className="mt-1 text-[11px] text-slate-500">
//                               {item.text}
//                             </p>

//                             {active && (
//                               <div className="mt-2 h-1 overflow-hidden rounded-full bg-indigo-100 dark:bg-indigo-500/10">
//                                 <motion.div
//                                   className="h-full w-1/3 rounded-full bg-indigo-500"
//                                   animate={{
//                                     x: ["-100%", "300%"],
//                                   }}
//                                   transition={{
//                                     duration: 1.3,
//                                     repeat: Infinity,
//                                     ease: "linear",
//                                   }}
//                                 />
//                               </div>
//                             )}
//                           </div>
//                         </motion.div>
//                       );
//                     })}
//                   </div>

//                   <div className="mt-7 border-t border-slate-100 pt-5 dark:border-white/[0.06]">
//                     <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
//                       <CheckCircle2 size={16} />
//                       Content Ready
//                     </div>

//                     <p className="mt-2 text-xs leading-5 text-slate-500">
//                       Your AI team has completed the connected content
//                       workflow and prepared the final output.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             BEFORE / AFTER
//         ========================================================= */}
//         <section className="bg-slate-100/70 px-5 py-24 dark:bg-[#0C0F15] sm:px-8">
//           <div className="mx-auto max-w-5xl">
//             <div className="text-center">
//               <p className="section-eyebrow">A BETTER WORKFLOW</p>
//               <h2 className="section-title">
//                 Stop creating content alone.
//               </h2>
//             </div>

//             <div className="mt-12 grid gap-5 md:grid-cols-2">
//               <div className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/[0.06] dark:bg-[#10131A]">
//                 <div className="mb-6 flex items-center gap-3">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/[0.06]">
//                     <Clock3 size={17} className="text-slate-500" />
//                   </div>

//                   <h3 className="font-bold text-slate-900 dark:text-white">
//                     Before
//                   </h3>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     "Staring at a blank LinkedIn composer",
//                     "Struggling to find content ideas",
//                     "Spending too long editing drafts",
//                     "Trying to create stronger hooks",
//                     "Managing every step manually",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-start gap-3 text-sm text-slate-500"
//                     >
//                       <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-7 dark:border-indigo-500/20 dark:from-indigo-500/[0.08] dark:to-[#10131A]">
//                 <div className="mb-6 flex items-center gap-3">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
//                     <Sparkles size={17} />
//                   </div>

//                   <h3 className="font-bold text-slate-900 dark:text-white">
//                     With your AI team
//                   </h3>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     "Start with a simple content idea",
//                     "AI researches useful context",
//                     "Agents create the content strategy",
//                     "AI writes and reviews the draft",
//                     "Content gets optimized for publishing",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
//                     >
//                       <CheckCircle2
//                         size={16}
//                         className="mt-0.5 shrink-0 text-emerald-500"
//                       />
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             AGENTS
//         ========================================================= */}
//         <section id="agents" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
//           <div className="mx-auto max-w-7xl">
//             <div className="max-w-2xl">
//               <p className="section-eyebrow">YOUR AI CONTENT TEAM</p>

//               <h2 className="section-title">
//                 Meet the agents behind
//                 <span className="gradient-heading"> every post.</span>
//               </h2>

//               <p className="section-description">
//                 Instead of asking one model to do everything, the workflow
//                 separates content creation into focused AI responsibilities.
//               </p>
//             </div>

//             <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//               {agents.map((agent, index) => {
//                 const Icon = agent.icon;

//                 return (
//                   <motion.div
//                     key={agent.name}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.06 }}
//                     whileHover={{ y: -4 }}
//                     className="group rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-slate-900/[0.05] dark:border-white/[0.07] dark:bg-[#10131A] dark:hover:shadow-black/20"
//                   >
//                     <div
//                       className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${agent.color} text-white shadow-lg`}
//                     >
//                       <Icon size={19} />
//                     </div>

//                     <div className="mt-5 flex items-center justify-between gap-3">
//                       <h3 className="font-bold text-slate-900 dark:text-white">
//                         {agent.name}
//                       </h3>

//                       <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
//                         <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                         Ready
//                       </span>
//                     </div>

//                     <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-500">
//                       {agent.description}
//                     </p>

//                     <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-indigo-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-indigo-400">
//                       Agent capability
//                       <ChevronRight size={13} />
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             HOW IT WORKS
//         ========================================================= */}
//         <section className="border-y border-slate-200 bg-white px-5 py-24 dark:border-white/[0.05] dark:bg-[#0C0F15] sm:px-8">
//           <div className="mx-auto max-w-6xl">
//             <div className="mx-auto max-w-2xl text-center">
//               <p className="section-eyebrow">HOW IT WORKS</p>

//               <h2 className="section-title">
//                 From idea to
//                 <span className="gradient-heading"> publish-ready.</span>
//               </h2>
//             </div>

//             <div className="relative mt-14 grid gap-8 md:grid-cols-4">
//               <div className="absolute left-[12%] right-[12%] top-7 hidden border-t border-dashed border-slate-300 dark:border-white/[0.1] md:block" />

//               {[
//                 ["01", Lightbulb, "Choose your topic", "Start with an idea, topic or direction."],
//                 ["02", Search, "AI researches", "Your agents gather useful context and direction."],
//                 ["03", PenLine, "AI writes & reviews", "The team drafts, reviews and improves your content."],
//                 ["04", Send, "Ready to publish", "Get polished LinkedIn content ready for your workflow."],
//               ].map(([number, Icon, title, text], index) => (
//                 <motion.div
//                   key={number}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="relative text-center"
//                 >
//                   <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-indigo-600 shadow-sm dark:border-white/[0.08] dark:bg-[#10131A] dark:text-indigo-400">
//                     <Icon size={20} />
//                   </div>

//                   <div className="mt-5 text-[10px] font-bold tracking-[0.18em] text-indigo-500">
//                     {number}
//                   </div>

//                   <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-white">
//                     {title}
//                   </h3>

//                   <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-500">
//                     {text}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             PRODUCT PREVIEW
//         ========================================================= */}
//         <section id="analytics" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
//           <div className="mx-auto max-w-7xl">
//             <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
//               <div>
//                 <p className="section-eyebrow">ONE WORKSPACE</p>

//                 <h2 className="section-title">
//                   Create, improve and
//                   <span className="gradient-heading"> understand your content.</span>
//                 </h2>

//                 <p className="section-description">
//                   Keep your content workflow in one place — from the first
//                   idea through generation, improvement and analytics.
//                 </p>

//                 <div className="mt-8 space-y-4">
//                   {[
//                     "Generate and improve LinkedIn posts",
//                     "Analyze content quality",
//                     "Work with multiple AI tools",
//                     "Keep your generated content organized",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
//                     >
//                       <CheckCircle2 size={17} className="text-indigo-500" />
//                       {item}
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => navigate("/register")}
//                   className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-400"
//                 >
//                   Explore the workspace
//                   <ArrowRight
//                     size={16}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </button>
//               </div>

//               <div className="relative">
//                 <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/[0.08] dark:border-white/[0.07] dark:bg-[#10131A]">
//                   <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/[0.06]">
//                     <div className="flex gap-1.5">
//                       <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
//                       <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
//                       <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
//                     </div>

//                     <span className="text-[10px] font-semibold text-slate-400">
//                       AI Content Workspace
//                     </span>

//                     <div className="h-2 w-2 rounded-full bg-emerald-500" />
//                   </div>

//                   <div className="grid md:grid-cols-[0.65fr_1.35fr]">
//                     <div className="border-b border-slate-100 p-5 md:border-b-0 md:border-r dark:border-white/[0.06]">
//                       <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
//                         AI Tools
//                       </p>

//                       <div className="mt-4 space-y-1.5">
//                         {[
//                           [Sparkles, "Generate Post"],
//                           [PenLine, "Generate Hook"],
//                           [Hash, "Hashtags"],
//                           [Wand2, "Improve Post"],
//                           [TrendingUp, "Viral Score"],
//                           [Layers3, "Carousel"],
//                         ].map(([Icon, label], index) => (
//                           <div
//                             key={label}
//                             className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[10px] font-semibold ${
//                               index === 0
//                                 ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/[0.1] dark:text-indigo-300"
//                                 : "text-slate-500 dark:text-slate-500"
//                             }`}
//                           >
//                             <Icon size={13} />
//                             {label}
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="p-5">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
//                             Generated Post
//                           </p>
//                           <h3 className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
//                             AI-generated LinkedIn content
//                           </h3>
//                         </div>

//                         <div className="rounded-lg bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600 dark:bg-emerald-500/[0.08] dark:text-emerald-400">
//                           Reviewed
//                         </div>
//                       </div>

//                       <div className="mt-5 rounded-xl border border-slate-200 p-4 dark:border-white/[0.07]">
//                         <div className="space-y-2">
//                           <div className="h-2.5 w-[88%] rounded bg-slate-100 dark:bg-white/[0.07]" />
//                           <div className="h-2.5 w-full rounded bg-slate-100 dark:bg-white/[0.07]" />
//                           <div className="h-2.5 w-[94%] rounded bg-slate-100 dark:bg-white/[0.07]" />
//                           <div className="h-2.5 w-[75%] rounded bg-slate-100 dark:bg-white/[0.07]" />
//                         </div>

//                         <div className="mt-5 rounded-lg bg-indigo-50 p-3 dark:bg-indigo-500/[0.07]">
//                           <div className="flex items-center justify-between">
//                             <span className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400">
//                               AI suggestion
//                             </span>
//                             <Sparkles size={12} className="text-indigo-500" />
//                           </div>

//                           <p className="mt-1 text-[10px] leading-4 text-slate-600 dark:text-slate-400">
//                             Strengthen the opening hook to make the first
//                             sentence more compelling.
//                           </p>
//                         </div>

//                         <div className="mt-4 flex gap-2">
//                           <button className="rounded-lg bg-indigo-600 px-3 py-2 text-[9px] font-bold text-white">
//                             Improve
//                           </button>
//                           <button className="rounded-lg border border-slate-200 px-3 py-2 text-[9px] font-bold text-slate-600 dark:border-white/[0.08] dark:text-slate-400">
//                             Regenerate
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             FEATURES
//         ========================================================= */}
//         <section id="features" className="scroll-mt-24 bg-slate-100/70 px-5 py-24 dark:bg-[#0C0F15] sm:px-8">
//           <div className="mx-auto max-w-7xl">
//             <div className="mx-auto max-w-2xl text-center">
//               <p className="section-eyebrow">THE TOOLKIT</p>

//               <h2 className="section-title">
//                 Everything you need to
//                 <span className="gradient-heading"> create better content.</span>
//               </h2>

//               <p className="section-description">
//                 A focused set of AI capabilities designed around the complete
//                 LinkedIn content workflow.
//               </p>
//             </div>

//             <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//               {features.map((feature, index) => {
//                 const Icon = feature.icon;

//                 return (
//                   <motion.div
//                     key={feature.title}
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.045 }}
//                     whileHover={{ y: -3 }}
//                     className="group rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-slate-900/[0.04] dark:border-white/[0.06] dark:bg-[#10131A]"
//                   >
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/[0.09] dark:text-indigo-400">
//                       <Icon size={18} />
//                     </div>

//                     <h3 className="mt-5 text-sm font-bold text-slate-900 dark:text-white">
//                       {feature.title}
//                     </h3>

//                     <p className="mt-2 text-xs leading-5 text-slate-500">
//                       {feature.description}
//                     </p>

//                     <div className="mt-5 flex items-center gap-1 text-[10px] font-bold text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100">
//                       Explore capability
//                       <ArrowRight size={12} />
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             PRICING / TRUST
//         ========================================================= */}
//         <section id="pricing" className="scroll-mt-24 px-5 py-24 sm:px-8">
//           <div className="mx-auto max-w-5xl">
//             <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/[0.04] dark:border-white/[0.07] dark:bg-[#10131A] sm:p-12">
//               <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
//                 <div>
//                   <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-600 dark:bg-indigo-500/[0.09] dark:text-indigo-400">
//                     <Sparkles size={12} />
//                     Start creating
//                   </div>

//                   <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
//                     Build your next LinkedIn post with AI.
//                   </h2>

//                   <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
//                     Start with an idea and let your AI content team help take
//                     it through research, strategy, writing and optimization.
//                   </p>

//                   <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
//                     <span className="flex items-center gap-2">
//                       <CheckCircle2 size={14} className="text-emerald-500" />
//                       AI-powered workflow
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <CheckCircle2 size={14} className="text-emerald-500" />
//                       Multiple AI tools
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <CheckCircle2 size={14} className="text-emerald-500" />
//                       No fake promises
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => navigate("/register")}
//                   className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
//                 >
//                   Get Started
//                   <ArrowRight
//                     size={16}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             ABOUT
//         ========================================================= */}
//         <section
//           id="about"
//           className="scroll-mt-24 border-t border-slate-200 bg-white px-5 py-20 dark:border-white/[0.05] dark:bg-[#0C0F15] sm:px-8"
//         >
//           <div className="mx-auto max-w-4xl text-center">
//             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/[0.09] dark:text-indigo-400">
//               <Bot size={21} />
//             </div>

//             <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
//               Built around an agent-first content workflow.
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
//               LinkedIn AI is designed around the idea that high-quality content
//               can benefit from specialized AI responsibilities rather than a
//               single generic generation step.
//             </p>
//           </div>
//         </section>
//       </main>

//       {/* =========================================================
//           FOOTER
//       ========================================================= */}
//       <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/[0.05] dark:bg-[#080A0F]">
//         <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
//           <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//             <div className="sm:col-span-2 lg:col-span-1">
//               <button
//                 onClick={() => scrollTo("home")}
//                 className="flex items-center gap-3"
//               >
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
//                   <Bot size={18} className="text-white" />
//                 </div>

//                 <div className="text-left">
//                   <div className="text-sm font-bold text-slate-900 dark:text-white">
//                     LinkedIn AI
//                   </div>
//                   <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                     Agentic Content
//                   </div>
//                 </div>
//               </button>

//               <p className="mt-4 max-w-xs text-xs leading-5 text-slate-500">
//                 An AI-powered content command center built around specialized
//                 AI agents.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900 dark:text-white">
//                 Product
//               </h3>

//               <div className="mt-4 space-y-3">
//                 {[
//                   ["AI Post Generator", "features"],
//                   ["AI Agents", "agents"],
//                   ["Analytics", "analytics"],
//                   ["Features", "features"],
//                 ].map(([label, id]) => (
//                   <button
//                     key={label}
//                     onClick={() => scrollTo(id)}
//                     className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400"
//                   >
//                     {label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900 dark:text-white">
//                 Resources
//               </h3>

//               <div className="mt-4 space-y-3">
//                 <button
//                   onClick={() => scrollTo("workflow")}
//                   className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400"
//                 >
//                   Workflow
//                 </button>

//                 <button
//                   onClick={() => navigate("/login")}
//                   className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400"
//                 >
//                   Sign In
//                 </button>

//                 <button
//                   onClick={() => navigate("/register")}
//                   className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400"
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900 dark:text-white">
//                 Company
//               </h3>

//               <div className="mt-4 space-y-3">
//                 <button
//                   onClick={() => scrollTo("about")}
//                   className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400"
//                 >
//                   About
//                 </button>

//                 <button
//                   onClick={() => scrollTo("features")}
//                   className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400"
//                 >
//                   Product
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center dark:border-white/[0.06]">
//             <p className="text-[11px] text-slate-500">
//               © {new Date().getFullYear()} LinkedIn AI. Built with Agentic AI.
//             </p>

//             <div className="flex items-center gap-2 text-[11px] text-slate-500">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//               AI workflow ready
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* =========================================================
//           LOCAL LANDING PAGE STYLES
//       ========================================================= */}
//       <style>{`
//         .nav-link {
//           font-size: 0.78rem;
//           font-weight: 600;
//           color: rgb(100 116 139);
//           transition: color 180ms ease;
//         }

//         .nav-link:hover {
//           color: rgb(79 70 229);
//         }

//         .section-eyebrow {
//           font-size: 0.65rem;
//           font-weight: 800;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: rgb(99 102 241);
//         }

//         .section-title {
//           margin-top: 0.75rem;
//           font-size: clamp(2rem, 4vw, 3.25rem);
//           line-height: 1.08;
//           letter-spacing: -0.04em;
//           font-weight: 750;
//           color: rgb(15 23 42);
//         }

//         .dark .section-title {
//           color: rgb(248 250 252);
//         }

//         .section-description {
//           margin-top: 1rem;
//           max-width: 38rem;
//           font-size: 0.95rem;
//           line-height: 1.7;
//           color: rgb(100 116 139);
//         }

//         .gradient-heading {
//           display: inline;
//           margin-left: 0.25rem;
//           background: linear-gradient(
//             90deg,
//             rgb(79 70 229),
//             rgb(124 58 237)
//           );
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }

//         @media (max-width: 640px) {
//           .section-title {
//             font-size: 2rem;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *,
//           *::before,
//           *::after {
//             scroll-behavior: auto !important;
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BrainCircuit,
  Search,
  PenLine,
  ShieldCheck,
  Hash,
  Wand2,
  TrendingUp,
  Layers3,
  Repeat2,
  BarChart3,
  Menu,
  X,
  ChevronRight,
  Zap,
  Target,
  FileText,
  Clock3,
  Lightbulb,
  Send,
  CircleDot,
  Activity,
  Check,
  Layers,
  Repeat,
} from "lucide-react";

/* ───────────────────────── DATA ───────────────────────── */

const agents = [
  {
    icon: Search,
    name: "Research Agent",
    description: "Finds useful context, trends and topic insights before writing begins.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    name: "Strategy Agent",
    description: "Turns your idea into a clear content angle, structure and direction.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: PenLine,
    name: "Writer Agent",
    description: "Creates engaging LinkedIn content built around your chosen topic.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: ShieldCheck,
    name: "Reviewer Agent",
    description: "Reviews clarity, structure, tone and overall content quality.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Hash,
    name: "Hashtag Agent",
    description: "Generates relevant hashtags to complement your finished content.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Wand2,
    name: "Optimization Agent",
    description: "Refines readability and engagement potential before publishing.",
    color: "from-pink-500 to-rose-500",
  },
];

const features = [
  { icon: FileText, title: "AI Post Generator", description: "Turn a simple idea into polished LinkedIn content." },
  { icon: Sparkles, title: "Hook Generator", description: "Create stronger opening lines designed to stop the scroll." },
  { icon: Hash, title: "Hashtag Generator", description: "Generate relevant hashtag suggestions for your content." },
  { icon: Wand2, title: "Post Improver", description: "Transform existing drafts into cleaner, stronger content." },
  { icon: TrendingUp, title: "Viral Score", description: "Analyze your content and identify opportunities to improve it." },
  { icon: Layers3, title: "Carousel Generator", description: "Turn ideas into structured multi-slide LinkedIn content." },
  { icon: Repeat2, title: "Content Repurposing", description: "Repurpose existing content into different formats." },
  { icon: Clock3, title: "Content History", description: "Keep your previous AI-generated content organized." },
  { icon: BarChart3, title: "Analytics", description: "Understand your content creation activity over time." },
];

const workflow = [
  { label: "Research", icon: Search, text: "Analyzing your topic" },
  { label: "Strategy", icon: Target, text: "Building the content angle" },
  { label: "Writer", icon: PenLine, text: "Drafting your LinkedIn post" },
  { label: "Reviewer", icon: ShieldCheck, text: "Improving clarity and quality" },
  { label: "Hashtag", icon: Hash, text: "Finding relevant hashtags" },
];

const howItWorks = [
  { num: "01", icon: Lightbulb, title: "Choose your topic", text: "Start with an idea, topic or direction." },
  { num: "02", icon: Search, title: "AI researches", text: "Your agents gather useful context and direction." },
  { num: "03", icon: PenLine, title: "AI writes & reviews", text: "The team drafts, reviews and improves your content." },
  { num: "04", icon: Send, title: "Ready to publish", text: "Get polished LinkedIn content ready for your workflow." },
];

/* ───────────────────────── COMPONENT ───────────────────────── */

const LandingPage = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAgent, setActiveAgent] = useState(0);

  /* Scroll listener for navbar glass effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Workflow auto-advance */
  useEffect(() => {
    const id = setInterval(() => {
      setActiveAgent((c) => (c + 1) % workflow.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    setMobileMenu(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const motionProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay, duration: 0.5 } };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] transition-colors duration-500 dark:bg-[#080A0F] dark:text-[#F8FAFC]">
      {/* ─────────── AMBIENT BACKGROUND ─────────── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-indigo-500/[0.10] blur-3xl dark:bg-indigo-500/[0.12]" />
        <div className="absolute right-[5%] top-40 h-80 w-80 rounded-full bg-violet-500/[0.08] blur-3xl dark:bg-violet-500/[0.10]" />
      </div>

      {/* ═══════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════ */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#080A0F]/85"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="group flex items-center gap-3" aria-label="LinkedIn AI home">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
              <Bot size={21} className="text-white" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400 dark:border-[#080A0F]" />
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-[15px] font-bold tracking-tight text-slate-950 dark:text-white">LinkedIn AI</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">Agentic Content</div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {[
              ["Features", "features"],
              ["AI Agents", "agents"],
              ["Workflow", "workflow"],
              ["Analytics", "analytics"],
              ["Pricing", "pricing"],
              ["About", "about"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link">
                {label}
              </button>
            ))}
          </div>

          {/* Desktop auth */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={() => navigate("/login")}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/register")}
              className="group inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-400"
            >
              Get Started
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenu((v) => !v)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 sm:hidden dark:text-slate-300 dark:hover:bg-white/[0.05]"
            aria-label="Toggle navigation"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-200 bg-white px-5 py-5 sm:hidden dark:border-white/[0.06] dark:bg-[#10131A]"
            >
              <div className="flex flex-col gap-1">
                {[
                  ["Features", "features"],
                  ["AI Agents", "agents"],
                  ["Workflow", "workflow"],
                  ["Analytics", "analytics"],
                  ["Pricing", "pricing"],
                  ["About", "about"],
                ].map(([label, id]) => (
                  <button key={id} onClick={() => scrollTo(id)} className="rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.05]">
                    {label}
                  </button>
                ))}
                <div className="mt-3 flex gap-2 border-t border-slate-200 pt-4 dark:border-white/[0.06]">
                  <button onClick={() => navigate("/login")} className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold dark:border-white/[0.08]">
                    Sign In
                  </button>
                  <button onClick={() => navigate("/register")} className="flex-1 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ═══════════════════════════════════════
          MAIN
      ═══════════════════════════════════════ */}
      <main id="home">
        {/* ─────────── HERO ─────────── */}
        <section className="relative isolate overflow-hidden pt-32 sm:pt-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              {/* Left copy */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-indigo-700 shadow-sm dark:border-indigo-500/20 dark:bg-white/[0.03] dark:text-indigo-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  AI Content Command Center
                </div>

                <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[70px] lg:leading-[1.03] dark:text-white">
                  Your AI team for
                  <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
                    LinkedIn content.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                  Turn a simple idea into polished LinkedIn content with a team of specialized AI agents that research, strategize, write, review and optimize your post.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => navigate("/register")}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                  >
                    Start Creating Free
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => scrollTo("workflow")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/[0.09] dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.06]"
                  >
                    <CircleDot size={16} />
                    See How AI Works
                  </button>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500 dark:text-slate-500">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    Specialized AI agents
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    Multiple AI capabilities
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    Start free
                  </span>
                </div>
              </motion.div>

              {/* Right — AI Workflow Card */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/[0.08] dark:border-white/[0.08] dark:bg-[#10131A] dark:shadow-black/30 sm:p-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <BrainCircuit size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">AI Content Workflow</p>
                        <p className="text-[11px] text-slate-500">Your agents are ready</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/[0.08] dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      ONLINE
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {workflow.map((item, index) => {
                      const Icon = item.icon;
                      const active = index === activeAgent;
                      const completed = index < activeAgent;
                      return (
                        <div key={item.label}>
                          <motion.div
                            animate={{ scale: active ? 1.015 : 1 }}
                            className={`relative flex items-center gap-3 rounded-xl border p-3 transition-all duration-500 ${
                              active
                                ? "border-indigo-300 bg-indigo-50/70 shadow-lg shadow-indigo-500/[0.08] dark:border-indigo-500/30 dark:bg-indigo-500/[0.07]"
                                : "border-slate-100 bg-slate-50/70 dark:border-white/[0.05] dark:bg-white/[0.02]"
                            }`}
                          >
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                active ? "bg-indigo-600 text-white" : completed ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-500 dark:bg-white/[0.07] dark:text-slate-400"
                              }`}
                            >
                              {completed ? <CheckCircle2 size={17} /> : <Icon size={17} />}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-xs font-bold text-slate-900 dark:text-white">{item.label} Agent</p>
                                <span
                                  className={`text-[10px] font-semibold ${
                                    active ? "text-indigo-600 dark:text-indigo-400" : completed ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"
                                  }`}
                                >
                                  {active ? "Working" : completed ? "Completed" : "Waiting"}
                                </span>
                              </div>
                              <p className="mt-1 truncate text-[11px] text-slate-500 dark:text-slate-500">
                                {active ? item.text : completed ? "Task completed successfully" : "Waiting for previous agent"}
                              </p>
                              {active && (
                                <div className="mt-2 h-1 overflow-hidden rounded-full bg-indigo-100 dark:bg-indigo-500/10">
                                  <motion.div className="h-full rounded-full bg-indigo-500" initial={{ width: "10%" }} animate={{ width: "78%" }} transition={{ duration: 2, ease: "easeInOut" }} />
                                </div>
                              )}
                            </div>
                          </motion.div>
                          {index < workflow.length - 1 && <div className="ml-7 h-3 border-l border-dashed border-slate-300 dark:border-white/[0.1]" />}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-white/[0.05] dark:bg-white/[0.02]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">Workflow</span>
                      <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">{Math.round(((activeAgent + 1) / workflow.length) * 100)}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/[0.07]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        animate={{ width: `${((activeAgent + 1) / workflow.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─────────── PRODUCT STATEMENT ─────────── */}
        <section className="border-y border-slate-200/80 bg-white py-10 dark:border-white/[0.05] dark:bg-[#0C0F15]">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-3">
            {[
              { icon: BrainCircuit, title: "Specialized agents", text: "Each step has a focused AI responsibility." },
              { icon: Zap, title: "One connected workflow", text: "Research, strategy, writing and optimization work together." },
              { icon: Send, title: "Ready-to-publish content", text: "Go from idea to polished LinkedIn content faster." },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/[0.08] dark:text-indigo-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-500">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ─────────── LIVE AI DEMO ─────────── */}
        <section id="workflow" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-eyebrow">THE WORKFLOW</p>
              <h2 className="section-title">
                See your AI team
                <span className="gradient-heading"> work together.</span>
              </h2>
              <p className="section-description">
                Your idea moves through a connected workflow where each specialized agent handles a different part of the content creation process.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/[0.05] dark:border-white/[0.07] dark:bg-[#10131A] dark:shadow-black/20">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <Activity size={17} className="text-indigo-500" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Live AI Generation</span>
                </div>
                <span className="flex items-center gap-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Product preview
                </span>
              </div>

              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* Idea input */}
                <div className="border-b border-slate-100 p-6 lg:border-b-0 lg:border-r dark:border-white/[0.06]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Your idea</p>
                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/[0.07] dark:bg-white/[0.025]">
                    <p className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200">
                      "How AI is changing the way developers build products"
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Technology", "AI", "Development"].map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.03]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/register")}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white transition hover:bg-indigo-700"
                  >
                    Start with your idea
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* Agent execution */}
                <div className="p-6">
                  <div className="space-y-4">
                    {workflow.map((item, index) => {
                      const Icon = item.icon;
                      const active = activeAgent === index;
                      const completed = index < activeAgent;
                      return (
                        <motion.div
                          key={item.label}
                          animate={{ opacity: active || completed ? 1 : 0.5 }}
                          className="flex items-center gap-4"
                        >
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                              active
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                                : completed
                                ? "bg-emerald-500 text-white"
                                : "bg-slate-100 text-slate-400 dark:bg-white/[0.06]"
                            }`}
                          >
                            {completed ? <CheckCircle2 size={16} /> : <Icon size={16} />}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex justify-between gap-3">
                              <span className="text-xs font-bold text-slate-900 dark:text-white">{item.label} Agent</span>
                              <span className="text-[10px] font-semibold text-slate-400">{active ? "Working" : completed ? "Done" : "Waiting"}</span>
                            </div>
                            <p className="mt-1 text-[11px] text-slate-500">{item.text}</p>
                            {active && (
                              <div className="mt-2 h-1 overflow-hidden rounded-full bg-indigo-100 dark:bg-indigo-500/10">
                                <motion.div
                                  className="h-full bg-indigo-500"
                                  animate={{ x: ["-100%", "100%"] }}
                                  transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
                                />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-7 border-t border-slate-100 pt-5 dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={16} />
                      Content Ready
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Your AI team has completed the connected content workflow and prepared the final output.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── BEFORE / AFTER ─────────── */}
        <section className="bg-slate-100/70 px-5 py-24 dark:bg-[#0C0F15] sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="section-eyebrow">A BETTER WORKFLOW</p>
              <h2 className="section-title">Stop creating content alone.</h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/[0.06] dark:bg-[#10131A]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/[0.06]">
                    <Clock3 size={17} className="text-slate-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Before</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Staring at a blank LinkedIn composer",
                    "Struggling to find content ideas",
                    "Spending too long editing drafts",
                    "Trying to create stronger hooks",
                    "Managing every step manually",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-500">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-7 dark:border-indigo-500/20 dark:from-indigo-500/[0.08] dark:to-[#10131A]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    <Sparkles size={17} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white">With your AI team</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Start with a simple content idea",
                    "AI researches useful context",
                    "Agents create the content strategy",
                    "AI writes and reviews the draft",
                    "Content gets optimized for publishing",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── AI AGENTS ─────────── */}
        <section id="agents" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="section-eyebrow">YOUR AI CONTENT TEAM</p>
              <h2 className="section-title">
                Meet the agents behind
                <span className="gradient-heading"> every post.</span>
              </h2>
              <p className="section-description">
                Instead of asking one model to do everything, the workflow separates content creation into focused AI responsibilities.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent, index) => {
                const Icon = agent.icon;
                return (
                  <motion.div
                    key={agent.name}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-slate-900/[0.05] dark:border-white/[0.07] dark:bg-[#10131A] dark:hover:shadow-black/20"
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${agent.color} text-white shadow-lg`}>
                      <Icon size={19} />
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <h3 className="font-bold text-slate-900 dark:text-white">{agent.name}</h3>
                      <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Ready
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-500">{agent.description}</p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-indigo-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-indigo-400">
                      Agent capability
                      <ChevronRight size={13} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────── HOW IT WORKS ─────────── */}
        <section className="border-y border-slate-200 bg-white px-5 py-24 dark:border-white/[0.05] dark:bg-[#0C0F15] sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-eyebrow">HOW IT WORKS</p>
              <h2 className="section-title">
                From idea to
                <span className="gradient-heading"> publish-ready.</span>
              </h2>
            </div>

            <div className="relative mt-14 grid gap-8 md:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-7 hidden border-t border-dashed border-slate-300 dark:border-white/[0.1] md:block" />
              {howItWorks.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-indigo-600 shadow-sm dark:border-white/[0.08] dark:bg-[#10131A] dark:text-indigo-400">
                      <Icon size={20} />
                    </div>
                    <div className="mt-5 text-[10px] font-bold tracking-[0.18em] text-indigo-500">{step.num}</div>
                    <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-500">{step.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────── PRODUCT PREVIEW ─────────── */}
        <section id="analytics" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-eyebrow">ONE WORKSPACE</p>
                <h2 className="section-title">
                  Create, improve and
                  <span className="gradient-heading"> understand your content.</span>
                </h2>
                <p className="section-description">
                  Keep your content workflow in one place — from the first idea through generation, improvement and analytics.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Generate and improve LinkedIn posts",
                    "Analyze content quality",
                    "Work with multiple AI tools",
                    "Keep your generated content organized",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={17} className="text-indigo-500" />
                      {item}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate("/register")}
                  className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-400"
                >
                  Explore the workspace
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/[0.08] dark:border-white/[0.07] dark:bg-[#10131A]">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/[0.06]">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400">AI Content Workspace</span>
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>

                  <div className="grid md:grid-cols-[0.65fr_1.35fr]">
                    <div className="border-b border-slate-100 p-5 md:border-b-0 md:border-r dark:border-white/[0.06]">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">AI Tools</p>
                      <div className="mt-4 space-y-1.5">
                        {[
                          [Sparkles, "Generate Post"],
                          [PenLine, "Generate Hook"],
                          [Hash, "Hashtags"],
                          [Wand2, "Improve Post"],
                          [TrendingUp, "Viral Score"],
                          [Layers3, "Carousel"],
                        ].map(([Icon, label], idx) => (
                          <div
                            key={label}
                            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[10px] font-semibold ${
                              idx === 0 ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/[0.1] dark:text-indigo-300" : "text-slate-500 dark:text-slate-500"
                            }`}
                          >
                            <Icon size={13} />
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Generated Post</p>
                          <h3 className="mt-1 text-sm font-bold text-slate-900 dark:text-white">AI-generated LinkedIn content</h3>
                        </div>
                        <div className="rounded-lg bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600 dark:bg-emerald-500/[0.08] dark:text-emerald-400">Reviewed</div>
                      </div>

                      <div className="mt-5 rounded-xl border border-slate-200 p-4 dark:border-white/[0.07]">
                        <div className="space-y-2">
                          <div className="h-2.5 w-[88%] rounded bg-slate-100 dark:bg-white/[0.07]" />
                          <div className="h-2.5 w-full rounded bg-slate-100 dark:bg-white/[0.07]" />
                          <div className="h-2.5 w-[94%] rounded bg-slate-100 dark:bg-white/[0.07]" />
                          <div className="h-2.5 w-[75%] rounded bg-slate-100 dark:bg-white/[0.07]" />
                        </div>

                        <div className="mt-5 rounded-lg bg-indigo-50 p-3 dark:bg-indigo-500/[0.07]">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400">AI suggestion</span>
                            <Sparkles size={12} className="text-indigo-500" />
                          </div>
                          <p className="mt-1 text-[10px] leading-4 text-slate-600 dark:text-slate-400">
                            Strengthen the opening hook to make the first sentence more compelling.
                          </p>
                        </div>

                        <div className="mt-4 flex gap-2">
                          <button className="rounded-lg bg-indigo-600 px-3 py-2 text-[9px] font-bold text-white">Improve</button>
                          <button className="rounded-lg border border-slate-200 px-3 py-2 text-[9px] font-bold text-slate-600 dark:border-white/[0.08] dark:text-slate-400">Regenerate</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── FEATURES ─────────── */}
        <section id="features" className="scroll-mt-24 bg-slate-100/70 px-5 py-24 dark:bg-[#0C0F15] sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-eyebrow">THE TOOLKIT</p>
              <h2 className="section-title">
                Everything you need to
                <span className="gradient-heading"> create better content.</span>
              </h2>
              <p className="section-description">
                A focused set of AI capabilities designed around the complete LinkedIn content workflow.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.045 }}
                    whileHover={{ y: -3 }}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-slate-900/[0.04] dark:border-white/[0.06] dark:bg-[#10131A]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/[0.09] dark:text-indigo-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-5 text-sm font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{feature.description}</p>
                    <div className="mt-5 flex items-center gap-1 text-[10px] font-bold text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100">
                      Explore capability
                      <ArrowRight size={12} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────── ANALYTICS ─────────── */}
        <section className="px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="order-2 lg:order-1">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/[0.05] dark:border-white/[0.07] dark:bg-[#10131A] dark:shadow-black/20">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <BarChart3 size={17} className="text-indigo-500" />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">Content Analytics</span>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400">Last 30 days</span>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Posts", val: "24", color: "bg-indigo-500" },
                        { label: "Hooks", val: "18", color: "bg-violet-500" },
                        { label: "Carousels", val: "6", color: "bg-emerald-500" },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-slate-100 p-4 text-center dark:border-white/[0.06]">
                          <div className={`mx-auto mb-2 h-8 w-8 rounded-full ${stat.color}/10 flex items-center justify-center`}>
                            <span className={`h-2 w-2 rounded-full ${stat.color}`} />
                          </div>
                          <div className="text-xl font-bold text-slate-900 dark:text-white">{stat.val}</div>
                          <div className="mt-1 text-[10px] font-medium text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 space-y-3">
                      {[
                        { label: "AI Post Generator", pct: 85 },
                        { label: "Hook Generator", pct: 62 },
                        { label: "Content Repurposing", pct: 45 },
                      ].map((bar) => (
                        <div key={bar.label}>
                          <div className="mb-1 flex justify-between text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                            <span>{bar.label}</span>
                            <span>{bar.pct}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/[0.07]">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${bar.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <p className="section-eyebrow">ANALYTICS</p>
                <h2 className="section-title">
                  Understand your
                  <span className="gradient-heading"> content activity.</span>
                </h2>
                <p className="section-description">
                  Track your generation history, content types and AI usage to build better LinkedIn habits over time.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Track posts, hooks and carousels created",
                    "See which AI tools you use most",
                    "Review your content improvement history",
                    "Keep saved posts organized",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <Check size={16} className="text-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── CTA ─────────── */}
        <section id="pricing" className="scroll-mt-24 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/[0.04] dark:border-white/[0.07] dark:bg-[#10131A] sm:p-12">
              <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-600 dark:bg-indigo-500/[0.09] dark:text-indigo-400">
                    <Sparkles size={12} />
                    Start creating
                  </div>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                    Build your next LinkedIn post with AI.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                    Start with an idea and let your AI content team help take it through research, strategy, writing and optimization.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      AI-powered workflow
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      Multiple AI tools
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      No fake promises
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/register")}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Get Started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── ABOUT ─────────── */}
        <section id="about" className="scroll-mt-24 border-t border-slate-200 bg-white px-5 py-20 dark:border-white/[0.05] dark:bg-[#0C0F15] sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/[0.09] dark:text-indigo-400">
              <Bot size={21} />
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              Built around an agent-first content workflow.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              LinkedIn AI is designed around the idea that high-quality content can benefit from specialized AI responsibilities rather than a single generic generation step.
            </p>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/[0.05] dark:bg-[#080A0F]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
                  <Bot size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">LinkedIn AI</div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">Agentic Content</div>
                </div>
              </button>
              <p className="mt-4 max-w-xs text-xs leading-5 text-slate-500">
                An AI-powered content command center built around specialized AI agents.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900 dark:text-white">Product</h3>
              <div className="mt-4 space-y-3">
                {[
                  ["AI Post Generator", "features"],
                  ["AI Agents", "agents"],
                  ["Analytics", "analytics"],
                  ["Features", "features"],
                ].map(([label, id]) => (
                  <button key={label} onClick={() => scrollTo(id)} className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400">
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900 dark:text-white">Resources</h3>
              <div className="mt-4 space-y-3">
                <button onClick={() => scrollTo("workflow")} className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400">
                  Workflow
                </button>
                <button onClick={() => navigate("/login")} className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400">
                  Sign In
                </button>
                <button onClick={() => navigate("/register")} className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400">
                  Get Started
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900 dark:text-white">Company</h3>
              <div className="mt-4 space-y-3">
                <button onClick={() => scrollTo("about")} className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400">
                  About
                </button>
                <button onClick={() => scrollTo("features")} className="block text-xs text-slate-500 transition hover:text-indigo-600 dark:hover:text-indigo-400">
                  Product
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center dark:border-white/[0.06]">
            <p className="text-[11px] text-slate-500">© {new Date().getFullYear()} LinkedIn AI. Built with Agentic AI.</p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              AI workflow ready
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════
          LOCAL STYLES
      ═══════════════════════════════════════ */}
      <style>{`
        .nav-link {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgb(100 116 139);
          transition: color 180ms ease;
        }
        .nav-link:hover { color: rgb(79 70 229); }

        .section-eyebrow {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgb(99 102 241);
        }

        .section-title {
          margin-top: 0.75rem;
          font-size: clamp(2rem, 4vw, 3.25rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 750;
          color: rgb(15 23 42);
        }
        .dark .section-title { color: rgb(248 250 252); }

        .section-description {
          margin-top: 1rem;
          max-width: 38rem;
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgb(100 116 139);
        }

        .gradient-heading {
          display: inline;
          margin-left: 0.25rem;
          background: linear-gradient(90deg, rgb(79 70 229), rgb(124 58 237));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @media (max-width: 640px) {
          .section-title { font-size: 2rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;