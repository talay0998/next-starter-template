'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('感谢您的留言！我们会尽快与您联系。')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl opacity-95">我们期待与您合作</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">联系方式</h2>
              
              <div className="flex gap-4">
                <div className="text-3xl">🏢</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">公司名称</h3>
                  <p className="text-gray-700">喀什财运商标代理有限责任公司</p>
                  <p className="text-sm text-gray-500 mt-1">Kashgar Caiyun Trademark Agency Co., Ltd.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">注册地址</h3>
                  <p className="text-gray-700">
                    新疆喀什地区莎车县古勒巴格镇<br/>其格万社区古城西路69号2楼201-202室
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📋</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">统一社会信用代码</h3>
                  <p className="text-gray-700">91653125MA78MQT612</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">👤</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">法定代表人</h3>
                  <p className="text-gray-700">阿力木江·阿布力克木</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📅</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">成立日期</h3>
                  <p className="text-gray-700">2020年4月14日</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">发送消息</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2 text-gray-900">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的姓名"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2 text-gray-900">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2 text-gray-900">
                    电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="请输入您的电话"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-semibold mb-2 text-gray-900">
                    留言 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="请输入您的留言"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none resize-vertical"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
