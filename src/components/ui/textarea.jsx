import React from 'react'

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
      {...props}
    />
  )
}
