'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ContentEditor from './components/ContentEditor'

interface Service {
  icon: string
  title: string
  description: string
}

interface ContentData {
  home?: {
    hero?: {
      title?: string
      subtitle?: string
      button1?: string
      button2?: string
    }
    techStack?: {
      title?: string
      subtitle?: string
    }
    capabilities?: {
      title?: string
    }
    dataInsights?: {
      languages?: string
      projects?: string
      platforms?: string
    }
  }
  about?: {
    title?: string
    description?: string
    companyInfo?: string
  }
  services?: {
    title?: string
    subtitle?: string
    items?: Service[]
  }
  contact?: {
    phone?: string
    email?: string
    address?: string
  }
  footer?: {
    companyName?: string
    description?: string
  }
}

export default function AdminDashboard() {
  const router = useRouter()
  const [content, setContent] = useState<ContentData>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'about' | 'contact' | 'footer'>('home')

  useEffect(() => {
    loadContent()
  }, [])

  const loadContent = async () => {
    try {
      const response = await fetch('/api/content')
      if (response.status === 401) {
        router.push('/admin/login')
        return
      }
      const data = await response.json()
      setContent(data)
    } catch (error) {
      console.error('加载内容失败:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveContent = async () => {
    setSaving(true)
    setMessage('')
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      })

      if (response.ok) {
        setMessage('保存成功！')
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('保存失败，请重试')
      }
    } catch (error) {
      setMessage('保存失败，请重试')
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const updateService = (index: number, field: keyof Service, value: string) => {
    const services = [...(content.services?.items || [])]
    if (!services[index]) {
      services[index] = { icon: '', title: '', description: '' }
    }
    services[index] = { ...services[index], [field]: value }
    setContent({
      ...content,
      services: {
        ...content.services,
        items: services
      }
    })
  }

  const addService = () => {
    const services = [...(content.services?.items || [])]
    services.push({ icon: '📝', title: '新服务', description: '服务描述' })
    setContent({
      ...content,
      services: {
        ...content.services,
        items: services
      }
    })
  }

  const removeService = (index: number) => {
    const services = [...(content.services?.items || [])]
    services.splice(index, 1)
    setContent({
      ...content,
      services: {
        ...content.services,
        items: services
      }
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">加载中...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">后台管理系统</h1>
          <div className="flex gap-4 items-center">
            <Link href="/" className="text-blue-600 hover:underline" target="_blank">
              查看网站
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              退出登录
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.includes('成功') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {message}
          </div>
        )}

        {/* 标签页导航 */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'home' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              首页
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'services' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              服务
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'about' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              关于我们
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'contact' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              联系方式
            </button>
            <button
              onClick={() => setActiveTab('footer')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'footer' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              页脚
            </button>
          </div>
        </div>

        {/* 首页内容编辑 */}
        {activeTab === 'home' && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">首页内容</h2>
            
            <div className="space-y-4">
              <ContentEditor
                label="Hero 标题"
                value={content.home?.hero?.title || ''}
                onChange={(value) => setContent({
                  ...content,
                  home: {
                    ...content.home,
                    hero: {
                      ...content.home?.hero,
                      title: value
                    }
                  }
                })}
                placeholder="专业软件开发 · 商标服务平台"
              />

              <ContentEditor
                label="Hero 副标题"
                value={content.home?.hero?.subtitle || ''}
                onChange={(value) => setContent({
                  ...content,
                  home: {
                    ...content.home,
                    hero: {
                      ...content.home?.hero,
                      subtitle: value
                    }
                  }
                })}
                placeholder="Talay · 多语言开发 · 商标服务 · 开源项目"
              />

              <div className="grid grid-cols-2 gap-4">
                <ContentEditor
                  label="按钮1文字"
                  value={content.home?.hero?.button1 || ''}
                  onChange={(value) => setContent({
                    ...content,
                    home: {
                      ...content.home,
                      hero: {
                        ...content.home?.hero,
                        button1: value
                      }
                    }
                  })}
                  placeholder="商标平台"
                />
                <ContentEditor
                  label="按钮2文字"
                  value={content.home?.hero?.button2 || ''}
                  onChange={(value) => setContent({
                    ...content,
                    home: {
                      ...content.home,
                      hero: {
                        ...content.home?.hero,
                        button2: value
                      }
                    }
                  })}
                  placeholder="项目咨询"
                />
              </div>

              <ContentEditor
                label="技术栈标题"
                value={content.home?.techStack?.title || ''}
                onChange={(value) => setContent({
                  ...content,
                  home: {
                    ...content.home,
                    techStack: {
                      ...content.home?.techStack,
                      title: value
                    }
                  }
                })}
                placeholder="核心技术栈"
              />

              <ContentEditor
                label="技术栈副标题"
                value={content.home?.techStack?.subtitle || ''}
                onChange={(value) => setContent({
                  ...content,
                  home: {
                    ...content.home,
                    techStack: {
                      ...content.home?.techStack,
                      subtitle: value
                    }
                  }
                })}
                placeholder="掌握多种前沿技术，为您提供最适合的解决方案"
              />

              <div className="grid grid-cols-3 gap-4">
                <ContentEditor
                  label="支持编程语言数"
                  value={content.home?.dataInsights?.languages || ''}
                  onChange={(value) => setContent({
                    ...content,
                    home: {
                      ...content.home,
                      dataInsights: {
                        ...content.home?.dataInsights,
                        languages: value
                      }
                    }
                  })}
                  placeholder="10+"
                />
                <ContentEditor
                  label="成功交付项目数"
                  value={content.home?.dataInsights?.projects || ''}
                  onChange={(value) => setContent({
                    ...content,
                    home: {
                      ...content.home,
                      dataInsights: {
                        ...content.home?.dataInsights,
                        projects: value
                      }
                    }
                  })}
                  placeholder="100+"
                />
                <ContentEditor
                  label="运营平台数量"
                  value={content.home?.dataInsights?.platforms || ''}
                  onChange={(value) => setContent({
                    ...content,
                    home: {
                      ...content.home,
                      dataInsights: {
                        ...content.home?.dataInsights,
                        platforms: value
                      }
                    }
                  })}
                  placeholder="3"
                />
              </div>
            </div>
          </div>
        )}

        {/* 服务内容编辑 */}
        {activeTab === 'services' && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">服务内容</h2>
              <button
                onClick={addService}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                + 添加服务
              </button>
            </div>

            <div className="space-y-4 mb-4">
              <ContentEditor
                label="服务页面标题"
                value={content.services?.title || ''}
                onChange={(value) => setContent({
                  ...content,
                  services: {
                    ...content.services,
                    title: value
                  }
                })}
                placeholder="我们的服务"
              />

              <ContentEditor
                label="服务页面副标题"
                value={content.services?.subtitle || ''}
                onChange={(value) => setContent({
                  ...content,
                  services: {
                    ...content.services,
                    subtitle: value
                  }
                })}
                placeholder="提供全方位的专业服务"
              />
            </div>

            <div className="space-y-6">
              {(content.services?.items || []).map((service, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">服务 #{index + 1}</h3>
                    <button
                      onClick={() => removeService(index)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors text-sm"
                    >
                      删除
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ContentEditor
                      label="图标（Emoji）"
                      value={service.icon}
                      onChange={(value) => updateService(index, 'icon', value)}
                      placeholder="📝"
                    />
                    <ContentEditor
                      label="标题"
                      value={service.title}
                      onChange={(value) => updateService(index, 'title', value)}
                      placeholder="服务标题"
                    />
                    <ContentEditor
                      label="描述"
                      value={service.description}
                      onChange={(value) => updateService(index, 'description', value)}
                      type="textarea"
                      rows={3}
                      placeholder="服务描述"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 关于我们内容编辑 */}
        {activeTab === 'about' && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">关于我们</h2>
            
            <div className="space-y-4">
              <ContentEditor
                label="页面标题"
                value={content.about?.title || ''}
                onChange={(value) => setContent({
                  ...content,
                  about: {
                    ...content.about,
                    title: value
                  }
                })}
                placeholder="关于我们"
              />

              <ContentEditor
                label="公司简介"
                value={content.about?.description || ''}
                onChange={(value) => setContent({
                  ...content,
                  about: {
                    ...content.about,
                    description: value
                  }
                })}
                type="textarea"
                rows={6}
                placeholder="公司简介内容..."
              />
            </div>
          </div>
        )}

        {/* 联系方式编辑 */}
        {activeTab === 'contact' && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">联系方式</h2>
            
            <div className="space-y-4">
              <ContentEditor
                label="电话"
                value={content.contact?.phone || ''}
                onChange={(value) => setContent({
                  ...content,
                  contact: {
                    ...content.contact,
                    phone: value
                  }
                })}
                placeholder="15569488599"
              />

              <ContentEditor
                label="邮箱"
                value={content.contact?.email || ''}
                onChange={(value) => setContent({
                  ...content,
                  contact: {
                    ...content.contact,
                    email: value
                  }
                })}
                placeholder="talayweb@qq.com"
              />

              <ContentEditor
                label="地址"
                value={content.contact?.address || ''}
                onChange={(value) => setContent({
                  ...content,
                  contact: {
                    ...content.contact,
                    address: value
                  }
                })}
                type="textarea"
                rows={3}
                placeholder="新疆喀什地区莎车县古勒巴格镇其格万社区古城西路69号2楼201-202室"
              />
            </div>
          </div>
        )}

        {/* 页脚内容编辑 */}
        {activeTab === 'footer' && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">页脚内容</h2>
            
            <div className="space-y-4">
              <ContentEditor
                label="公司名称"
                value={content.footer?.companyName || ''}
                onChange={(value) => setContent({
                  ...content,
                  footer: {
                    ...content.footer,
                    companyName: value
                  }
                })}
                placeholder="TALAY"
              />

              <ContentEditor
                label="公司描述"
                value={content.footer?.description || ''}
                onChange={(value) => setContent({
                  ...content,
                  footer: {
                    ...content.footer,
                    description: value
                  }
                })}
                type="textarea"
                rows={3}
                placeholder="专业软件开发 · 商标服务平台"
              />
            </div>
          </div>
        )}

        {/* 保存按钮 */}
        <div className="flex justify-end">
          <button
            onClick={saveContent}
            disabled={saving}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? '保存中...' : '保存所有更改'}
          </button>
        </div>
      </div>
    </div>
  )
}
