export const metadata = {
  title: '关于我们 - TALAY',
  description: '了解 TALAY 的故事和使命 - 专业软件开发 · 商标服务平台',
}

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl opacity-95">了解 TALAY 的故事和使命</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">公司简介</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  喀什财运商标代理有限责任公司成立于2020年04月14日，法定代表人阿力木江·阿布力克木。我们是一家专注于知识产权服务、软件开发和人工智能应用的科技创新企业，致力于为客户提供从商标注册到智能化解决方案的一站式服务。
                </p>
                <p>
                  公司位于新疆喀什地区莎车县古勒巴格镇其格万社区古城西路69号2楼201-202室，拥有专业的技术团队和丰富的行业经验，为各类企业提供专业的知识产权保护和科技创新服务。
                </p>
                <p>
                  公司主要经营范围包括：多语言软件开发（C#、Python、Java、Node.js、PHP等）、商标代理、版权代理、ICP备案代理、
                  软件著作权申请、市场主体登记注册代理、人工智能应用软件开发、物联网技术研发、云计算装备技术服务等。
                  我们以专业、高效、诚信的服务理念，为客户创造价值。
                </p>
                <p>
                  TALAY 运营多个专业平台：<strong>talay.cc</strong>（商标服务平台）、<strong>talay.ltd</strong>（企业官网）、
                  <strong>kod.talay.ltd</strong>（开源项目平台），为不同需求的客户提供专业服务。
                </p>
                <div className="mt-6 space-y-2">
                  <p><strong>法定代表人：</strong>阿力木江·阿布力克木</p>
                  <p><strong>统一社会信用代码：</strong>91653125MA78MQT612</p>
                  <p><strong>注册资本：</strong>50万人民币</p>
                  <p><strong>成立日期：</strong>2020年04月14日</p>
                  <p><strong>注册地址：</strong>新疆喀什地区莎车县古勒巴格镇其格万社区古城西路69号2楼201-202室</p>
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
