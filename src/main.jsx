import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from '../layout.jsx'
import AppContent from './App'

function Root() {
  return (
    <Layout>
  <AppContent />
    </Layout>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Root />)
