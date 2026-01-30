export const metadata = {
  title: '关于我们 - 喀什财运商标代理',
  description: '了解喀什财运商标代理有限责任公司的故事和使命',
}

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl opacity-95">了解喀什财运商标代理有限责任公司的故事和使命</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">公司简介</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  喀什财运商标代理有限责任公司成立于 2020 年 4 月 14 日，是一家专业从事知识产权服务的有限责任公司。
                  公司位于新疆喀什地区莎车县，致力于为企业和个人提供全方位的知识产权服务。
                </p>
                <p>
                  公司主要经营范围包括：知识产权服务、商标代理、版权代理、市场主体登记注册代理、
                  软件开发、人工智能应用软件开发、物联网技术研发、云计算装备技术服务等。
                  我们以专业、高效、诚信的服务理念，为客户创造价值。
                </p>
                <div className="mt-6 space-y-2">
                  <p><strong>法定代表人：</strong>阿力木江·阿布力克木</p>
                  <p><strong>统一社会信用代码：</strong>91653125MA78MQT612</p>
                  <p><strong>注册资本：</strong>50万人民币</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-12 flex items-center justify-center">
              <div className="text-6xl">📊</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">我们的价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">专业</h3>
              <p className="text-gray-600">以专业的态度和技能服务每一位客户</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">诚信</h3>
              <p className="text-gray-600">诚实守信，建立长期信任关系</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">创新</h3>
              <p className="text-gray-600">持续创新，追求卓越</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">服务</h3>
              <p className="text-gray-600">以客户为中心，提供优质服务</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
