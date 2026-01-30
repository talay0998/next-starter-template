import Link from 'next/link'

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl md:text-6xl font-bold mb-6">喀什财运商标代理</h1>
					<p className="text-xl md:text-2xl mb-8 opacity-95">
						专业的知识产权服务提供商<br/>
						ICP备案 · 软著 · 版权 · 商标 · 软件开发
					</p>
					<div className="flex gap-4 justify-center flex-wrap">
						<Link 
							href="/services" 
							className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
						>
							了解服务
						</Link>
						<Link 
							href="/contact" 
							className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
						>
							联系我们
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-4 text-gray-900">我们的优势</h2>
					<p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
						专业、可靠、高效的服务体验
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
							<div className="text-5xl mb-4">🌐</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">ICP备案代理</h3>
							<p className="text-gray-600">
								网站、APP、小程序备案代理，专业团队快速完成备案流程
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
							<div className="text-5xl mb-4">📜</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">软件著作权</h3>
							<p className="text-gray-600">
								软著申请代理服务，专业撰写材料，提高通过率
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
							<div className="text-5xl mb-4">™️</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">商标版权</h3>
							<p className="text-gray-600">
								商标注册、版权登记等知识产权服务，保护您的创新成果
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
							<div className="text-5xl mb-4">💻</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">软件开发</h3>
							<p className="text-gray-600">
								软件定制开发、人工智能应用、物联网技术研发
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-blue-600 text-white py-20">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-4">准备开始您的项目？</h2>
					<p className="text-xl mb-8 opacity-95">
						联系我们，获取专业的咨询和解决方案
					</p>
					<Link 
						href="/contact" 
						className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
					>
						立即咨询
					</Link>
				</div>
			</section>
		</>
	);
}
