export const metadata = {
  title: '我们的服务 - 喀什财运商标代理',
  description: '提供全方位的专业服务',
}

const services = [
  {
    icon: '🌐',
    title: 'ICP备案代理',
    description: '网站、APP、小程序备案代理服务，专业团队协助完成备案流程，快速通过审核'
  },
  {
    icon: '📜',
    title: '软件著作权',
    description: '软著申请代理服务，专业撰写材料，提高通过率，保护您的软件知识产权'
  },
  {
    icon: '©️',
    title: '版权登记',
    description: '版权代理服务，包括文字、图片、音视频等各类作品的版权登记和保护'
  },
  {
    icon: '™️',
    title: '商标注册',
    description: '商标代理服务，商标查询、注册申请、续展、变更等一站式商标服务'
  },
  {
    icon: '💻',
    title: '软件开发',
    description: '软件定制开发、软件外包服务，包括Web应用、移动应用、小程序等开发'
  },
  {
    icon: '🏢',
    title: '市场主体代办',
    description: '工商注册、市场主体登记注册代理，一站式企业注册服务'
  },
  {
    icon: '🤖',
    title: '人工智能应用',
    description: '人工智能应用软件开发、AI技术解决方案，助力企业智能化转型'
  },
  {
    icon: '🔗',
    title: '物联网技术',
    description: '物联网技术研发、智能设备开发，连接万物互联的未来'
  },
  {
    icon: '☁️',
    title: '云计算服务',
    description: '云计算装备技术服务、数据处理和存储支持，提供稳定可靠的技术支撑'
  },
  {
    icon: '🔒',
    title: '信息安全',
    description: '网络与信息安全软件开发、互联网安全服务，保障您的数据安全'
  },
  {
    icon: '📊',
    title: '数据处理',
    description: '互联网数据服务、数据处理服务，让数据创造价值'
  },
  {
    icon: '🎨',
    title: '设计服务',
    description: '平面设计、广告设计、图文设计制作，提升品牌形象'
  }
]

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">我们的服务</h1>
          <p className="text-xl opacity-95">提供全方位的专业服务</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
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
