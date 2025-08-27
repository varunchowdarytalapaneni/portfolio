import React from 'react'

export function Card({ className = '', children }) {
  return (
    <div className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${className}`}>
      {children}
    </div>
  )
}
