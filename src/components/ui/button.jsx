import React from 'react'

export function Button({ children, className = '', variant = 'default', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-lg transition-colors'
  const sizes = {
    icon: 'w-9 h-9',
    md: 'px-4 py-2',
    lg: 'px-6 py-3'
  }
  const variants = {
    default: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900',
    outline: 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-transparent',
    ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800'
  }
  return (
    <button className={`${base} ${sizes[size] || ''} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </button>
  )
}
