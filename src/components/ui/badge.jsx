import React from 'react'

export function Badge({ children, className = '', variant = 'default', ...props }) {
  const variants = {
    default: 'bg-slate-200 text-slate-800',
    outline: 'border border-slate-300 text-slate-700'
  }
  return (
    <span className={`inline-flex items-center rounded-full text-xs font-medium px-2 py-1 ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </span>
  )
}
