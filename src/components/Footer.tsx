import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">TALAY</h3>
            <p className="text-gray-400 leading-relaxed">
              喀什财运代理有限责任公司<br/>
              专业软件开发 · 商标服务平台
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  服务
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-400">
              <li>电话: <a href="tel:15569488599" className="hover:text-blue-400">15569488599</a></li>
              <li>邮箱: <a href="mailto:talayweb@qq.com" className="hover:text-blue-400">talayweb@qq.com</a></li>
              <li>地址: 新疆喀什地区莎车县古勒巴格镇其格万社区古城西路69号2楼201-202室</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>电话：<strong>15569488599</strong> | 邮箱：<strong>talayweb@qq.com</strong></p>
          <p className="mt-2">地址：<strong>新疆喀什地区莎车县古勒巴格镇其格万社区古城西路69号2楼201-202室</strong></p>
          <p className="mt-2">© {currentYear} 喀什财运代理有限责任公司 版权所有 | 新ICP备2024012863号-2</p>
        </div>
      </div>
    </footer>
  )
}
