import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm">
        <div>Built with ❤️ by Cookies</div>
        <div className="mt-4 text-xs text-muted">© {new Date().getFullYear()} — Cookies</div>
      </div>
    </footer>
  )
}
