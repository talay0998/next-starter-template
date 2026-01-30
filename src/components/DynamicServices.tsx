'use client'

import { useEffect, useState } from 'react'
import { getContent } from '@/lib/content'

interface Service {
  icon: string
  title: string
  description: string
}

export default function DynamicServices() {
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

  const services = content.services?.items || []
  const defaultServices: Service[] = [
    { icon: '📝', title: '知识产权服务', description: '商标代理、版权代理、专利咨询等全方位知识产权保护服务，专业团队提供高效解决方案' },
    { icon: '💻', title: '软件开发', description: '定制化软件开发，包括AI应用、物联网系统、云计算平台等前沿技术解决方案' },
    { icon: '🤖', title: '人工智能', description: '深度学习算法开发、智能决策系统、自然语言处理等AI核心技术应用' },
    { icon: '🌐', title: '互联网数据服务', description: '大数据处理与分析、云计算服务、互联网安全解决方案' },
    { icon: '🔐', title: '软件代理与承包', description: '专业软件代理服务，承接各类软件开发项目，提供技术咨询与系统集成' },
    { icon: '📊', title: '科技中介服务', description: '科技成果转化、技术咨询服务、认证咨询等专业服务' },
    { icon: '🌐', title: 'ICP备案代理', description: '网站、APP、小程序备案代理服务，专业团队协助完成备案流程，快速通过审核' },
    { icon: '📜', title: '软件著作权', description: '软著申请代理服务，专业撰写材料，提高通过率，保护您的软件知识产权' },
    { icon: '©️', title: '版权登记', description: '版权代理服务，包括文字、图片、音视频等各类作品的版权登记和保护' },
    { icon: '™️', title: '商标注册', description: '商标代理服务，商标查询、注册申请、续展、变更等一站式商标服务' },
    { icon: '🏢', title: '市场主体代办', description: '工商注册、市场主体登记注册代理，一站式企业注册服务' },
    { icon: '🔗', title: '物联网技术', description: '物联网技术研发、智能设备开发，连接万物互联的未来' }
  ]

  const displayServices = services.length > 0 ? services : defaultServices

  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {content.services?.title || '我们的服务'}
          </h1>
          <p className="text-xl opacity-95">
            {content.services?.subtitle || '提供全方位的专业服务'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((service: Service, index: number) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">服务流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">需求分析</h3>
              <p className="text-gray-600">深入了解客户需求，制定项目方案</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">方案设计</h3>
              <p className="text-gray-600">设计详细的实施方案和时间计划</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">开发实施</h3>
              <p className="text-gray-600">专业的团队执行项目开发</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">测试交付</h3>
              <p className="text-gray-600">严格测试，确保质量后交付</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
