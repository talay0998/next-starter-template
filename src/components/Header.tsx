'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:scale-105 transition-transform">
            TALAY
          </Link>
          
          <nav className={`hidden md:flex gap-8 items-center`}>
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              首页
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              关于我们
            </Link>
            <Link 
              href="/services" 
              className={`font-medium transition-colors ${
                isActive('/services') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              服务
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              联系我们
            </Link>
          </nav>

          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link 
              href="/" 
              className={`font-medium py-2 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              首页
            </Link>
            <Link 
              href="/about" 
              className={`font-medium py-2 ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              关于我们
            </Link>
            <Link 
              href="/services" 
              className={`font-medium py-2 ${
                isActive('/services') ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              服务
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium py-2 ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              联系我们
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
