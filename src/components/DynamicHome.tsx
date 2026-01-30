'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getContent } from '@/lib/content'

export default function DynamicHome() {
  const [content, setContent] = useState<any>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadContent()
  }, [])

  const loadContent = async () => {
    const data = await getContent()
    setContent(data)
    setLoading(false)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">加载中...</div>
  }

  const hero = content.home?.hero || {}
  const techStack = content.home?.techStack || {}
  const dataInsights = content.home?.dataInsights || {}

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {hero.title || '专业软件开发 · 商标服务平台'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            {hero.subtitle || 'Talay · 多语言开发 · 商标服务 · 开源项目'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link 
              href="https://talay.cc" 
              target="_blank"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {hero.button1 || '商标平台'}
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {hero.button2 || '项目咨询'}
            </Link>
          </div>
          <div className="text-4xl animate-bounce">↓</div>
          <p className="mt-4 text-lg opacity-80">探索更多</p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            {techStack.title || '核心技术栈'}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {techStack.subtitle || '掌握多种前沿技术，为您提供最适合的解决方案'}
          </p>
          
          {/* 技术栈内容保持不变 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">后端开发</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔷</span>
                  <span className="text-gray-700">C# / .NET</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐍</span>
                  <span className="text-gray-700">Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">☕</span>
                  <span className="text-gray-700">Java</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🟢</span>
                  <span className="text-gray-700">Node.js</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">前端开发</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚛️</span>
                  <span className="text-gray-700">React</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💚</span>
                  <span className="text-gray-700">Vue.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🅰️</span>
                  <span className="text-gray-700">Angular</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span className="text-gray-700">React Native</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">数据库</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🗄️</span>
                  <span className="text-gray-700">SQL Server</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐘</span>
                  <span className="text-gray-700">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍃</span>
                  <span className="text-gray-700">MongoDB</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔴</span>
                  <span className="text-gray-700">Redis</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">云服务</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">☁️</span>
                  <span className="text-gray-700">Azure</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-gray-700">AWS</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐳</span>
                  <span className="text-gray-700">Docker</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚙️</span>
                  <span className="text-gray-700">Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Insights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">核心数据洞察</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {dataInsights.languages || '10+'}
              </div>
              <div className="text-xl text-gray-600">支持编程语言</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {dataInsights.projects || '100+'}
              </div>
              <div className="text-xl text-gray-600">成功交付项目</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {dataInsights.platforms || '3'}
              </div>
              <div className="text-xl text-gray-600">运营平台数量</div>
            </div>
          </div>
        </div>
      </section>

      {/* 其他部分保持不变，可以继续添加更多动态内容 */}
      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">商业赋能引擎</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">多语言软件开发</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                精通 C#、C++、.NET、Python、Node.js、Java、PHP 等多种编程语言，提供全栈开发服务，满足不同技术栈需求。
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                查看技术栈 →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">商标服务平台</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                提供专业的商标注册、查询、管理服务，通过 talay.cc 平台为您提供一站式商标解决方案。
              </p>
              <Link href="https://talay.cc" target="_blank" className="text-blue-600 font-semibold hover:underline">
                访问商标平台 →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">开源项目</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                致力于开源社区贡献，访问 kod.talay.ltd 查看我们的开源项目，共同推动技术发展。
              </p>
              <Link href="https://kod.talay.ltd" target="_blank" className="text-blue-600 font-semibold hover:underline">
                查看开源项目 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">准备开始您的项目？</h2>
          <p className="text-xl mb-8 opacity-95">
            让我们一起讨论您的需求，为您提供最适合的解决方案
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              立即咨询
            </Link>
            <a 
              href={`tel:${content.contact?.phone || '15569488599'}`}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              电话联系
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h3 className="text-lg font-semibold mb-2">电话联系</h3>
              <a href={`tel:${content.contact?.phone || '15569488599'}`} className="text-blue-100 hover:text-white">
                {content.contact?.phone || '15569488599'}
              </a>
            </div>
            <div>
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold mb-2">邮箱联系</h3>
              <a href={`mailto:${content.contact?.email || 'talayweb@qq.com'}`} className="text-blue-100 hover:text-white">
                {content.contact?.email || 'talayweb@qq.com'}
              </a>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-lg font-semibold mb-2">服务地区</h3>
              <p className="text-blue-100">新疆</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
