"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Lock, User, Eye, EyeOff, Facebook, Github, Loader2 } from "lucide-react"

const socialProviders = [
  { name: "Google", icon: "/google.svg", bg: "bg-white", text: "text-gray-800" },
  { name: "Facebook", icon: <Facebook className="w-5 h-5 text-blue-600" />, bg: "bg-white", text: "text-blue-600" },
  { name: "GitHub", icon: <Github className="w-5 h-5 text-gray-800" />, bg: "bg-white", text: "text-gray-800" },
]

export default function RegisterPage() {
  const [tab, setTab] = useState<'login' | 'signup'>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setError('This is a demo. No real authentication.')
    }, 1200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Floating Logo Top Left - responsive for mobile */}
      <a href="/" className="fixed top-2 left-2 z-20 flex items-center group sm:top-6 sm:left-6">
        <img src="https://in.admybrand.com/assets/svg/web_logo.svg" alt="ADmyBRAND Logo" className="h-7 w-auto drop-shadow-lg transition-transform group-hover:scale-110 sm:h-10" />
      </a>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Large orbs */}
        <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <motion.div animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.9, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }} className="absolute top-2/3 right-1/4 w-44 h-44 sm:w-80 sm:h-80 bg-pink-500/20 rounded-full blur-3xl" />
        <motion.div animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl" />
        {/* Animated grid overlay for extra depth */}
        <div className="absolute inset-0 opacity-10 hidden sm:block">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }} />
        </div>
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + (i * 10) % 80}%`,
              top: `${10 + (i * 7) % 80}%`,
            }}
          />
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-md mx-auto px-1 sm:px-0 mt-16 sm:mt-0">
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl sm:rounded-3xl shadow-xl backdrop-blur-xl p-2 sm:p-8">
          <div className="flex justify-center mb-4 sm:mb-8">
            <div className="inline-flex bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-3 py-1 sm:px-6 sm:py-2">
              <span className="text-base sm:text-lg font-bold text-white tracking-wide">Welcome to ADmyBRAND</span>
            </div>
          </div>
          <div className="flex justify-center mb-4 sm:mb-8">
            <button onClick={() => setTab('login')} className={`px-3 py-2 sm:px-6 rounded-l-full font-semibold transition-all duration-300 ${tab === 'login' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-white/5 text-gray-300 hover:text-white'}`}>Login</button>
            <button onClick={() => setTab('signup')} className={`px-3 py-2 sm:px-6 rounded-r-full font-semibold transition-all duration-300 ${tab === 'signup' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-white/5 text-gray-300 hover:text-white'}`}>Sign Up</button>
          </div>
          <AnimatePresence mode="wait">
            {tab === 'login' ? (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <div className="relative">
                    <Input type="email" name="email" autoComplete="email" required value={form.email} onChange={handleChange} className="pl-10" placeholder="you@email.com" />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <Input type={showPassword ? "text" : "password"} name="password" autoComplete="current-password" required value={form.password} onChange={handleChange} className="pl-10 pr-10" placeholder="Password" />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button type="button" className="text-sm text-purple-400 hover:underline">Forgot password?</button>
                  <button type="button" className="text-sm text-gray-400 hover:underline" onClick={() => setTab('signup')}>Create account?</button>
                </div>
                {error && <div className="text-red-400 text-sm text-center">{error}</div>}
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg py-4 flex items-center justify-center">
                  {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                  Login
                </Button>
                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-white/10" />
                  <span className="mx-4 text-gray-400 text-sm">or continue with</span>
                  <div className="flex-grow border-t border-white/10" />
                </div>
                <div className="flex gap-2 sm:gap-4 justify-center">
                  <button type="button" className="bg-white rounded-full p-2 sm:p-3 shadow hover:scale-105 transition-transform">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="Google" className="w-5 h-5" />
                  </button>
                  <button type="button" className="bg-white rounded-full p-2 sm:p-3 shadow hover:scale-105 transition-transform"><Facebook className="w-5 h-5 text-blue-600" /></button>
                  <button type="button" className="bg-white rounded-full p-2 sm:p-3 shadow hover:scale-105 transition-transform"><Github className="w-5 h-5 text-gray-800" /></button>
                </div>
              </motion.form>
            ) : (
              <motion.form
                key="signup"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <div className="relative">
                    <Input type="text" name="name" autoComplete="name" required value={form.name} onChange={handleChange} className="pl-10" placeholder="Your Name" />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <div className="relative">
                    <Input type="email" name="email" autoComplete="email" required value={form.email} onChange={handleChange} className="pl-10" placeholder="you@email.com" />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <Input type={showPassword ? "text" : "password"} name="password" autoComplete="new-password" required value={form.password} onChange={handleChange} className="pl-10 pr-10" placeholder="Password" />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}</button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Input type={showPassword ? "text" : "password"} name="confirmPassword" autoComplete="new-password" required value={form.confirmPassword} onChange={handleChange} className="pl-10 pr-10" placeholder="Confirm Password" />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button type="button" className="text-sm text-purple-400 hover:underline">Forgot password?</button>
                  <button type="button" className="text-sm text-gray-400 hover:underline" onClick={() => setTab('login')}>Already have an account?</button>
                </div>
                {error && <div className="text-red-400 text-sm text-center">{error}</div>}
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg py-4 flex items-center justify-center">
                  {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                  Sign Up
                </Button>
                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-white/10" />
                  <span className="mx-4 text-gray-400 text-sm">or continue with</span>
                  <div className="flex-grow border-t border-white/10" />
                </div>
                <div className="flex gap-2 sm:gap-4 justify-center">
                  <button type="button" className="bg-white rounded-full p-2 sm:p-3 shadow hover:scale-105 transition-transform">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                  </button>
                  <button type="button" className="bg-white rounded-full p-2 sm:p-3 shadow hover:scale-105 transition-transform"><Facebook className="w-5 h-5 text-blue-600" /></button>
                  <button type="button" className="bg-white rounded-full p-2 sm:p-3 shadow hover:scale-105 transition-transform"><Github className="w-5 h-5 text-gray-800" /></button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
} 