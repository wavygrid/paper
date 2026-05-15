'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans text-[#111111] flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-zinc-200">
      
      <motion.div 
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         className="sm:mx-auto sm:w-full sm:max-w-md mb-8"
      >
        <Link href="/" className="flex items-center justify-center gap-2 group cursor-pointer shrink-0 absolute top-8 left-8 sm:static sm:mb-8 text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h2 className="mt-6 text-center text-4xl font-semibold tracking-tight text-zinc-900">
          Sign in to your vault
        </h2>
        <p className="mt-3 text-center text-sm text-zinc-500">
          Or <Link href="/contact" className="font-medium text-[#111111] hover:text-zinc-800 underline underline-offset-4">request enterprise access</Link>
        </p>
      </motion.div>

      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.1 }}
         className="sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-10 px-4 shadow-xl shadow-black/5 sm:rounded-2xl sm:px-10 border border-zinc-200">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-sm border border-zinc-300 px-4 py-3 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm bg-[#F9F9F9]"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
                  Password
                </label>
                <div className="text-sm">
                  <Link href="/contact" className="font-medium text-zinc-500 hover:text-zinc-900">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-sm border border-zinc-300 px-4 py-3 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm bg-[#F9F9F9]"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-900">
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-sm border border-transparent bg-[#111111] py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-zinc-500 font-mono text-xs uppercase tracking-widest">Single Sign-On</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                className="flex w-full justify-center items-center gap-3 rounded-sm border border-zinc-300 bg-white py-3 px-4 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Microsoft 365
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
