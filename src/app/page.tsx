import Link from 'next/link'

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 min-h-[80vh] flex items-center">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl md:text-7xl font-bold mb-6">
						专业软件开发 · 商标服务平台
					</h1>
					<p className="text-xl md:text-2xl mb-8 opacity-95">
						Talay · 多语言开发 · 商标服务 · 开源项目
					</p>
					<div className="flex gap-4 justify-center flex-wrap mb-12">
						<Link 
							href="https://talay.cc" 
						target="_blank"
							className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
						>
							商标平台
						</Link>
						<Link 
							href="/contact" 
							className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
						>
							项目咨询
						</Link>
					</div>
					<div className="text-4xl animate-bounce">↓</div>
					<p className="mt-4 text-lg opacity-80">探索更多</p>
				</div>
			</section>

			{/* Technology Stack */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-4 text-gray-900">核心技术栈</h2>
					<p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
						掌握多种前沿技术，为您提供最适合的解决方案
					</p>
					
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

			{/* Data Insights */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 text-gray-900">核心数据洞察</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="text-6xl font-bold text-blue-600 mb-2">10+</div>
							<div className="text-xl text-gray-600">支持编程语言</div>
						</div>
						<div className="text-center">
							<div className="text-6xl font-bold text-blue-600 mb-2">100+</div>
							<div className="text-xl text-gray-600">成功交付项目</div>
						</div>
						<div className="text-center">
							<div className="text-6xl font-bold text-blue-600 mb-2">3</div>
							<div className="text-xl text-gray-600">运营平台数量</div>
						</div>
					</div>
				</div>
			</section>

			{/* Workflow */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 text-gray-900">我们的服务流程</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div className="bg-white p-6 rounded-xl shadow-md text-center">
							<div className="text-4xl mb-4">💡</div>
							<h3 className="text-xl font-semibold mb-2 text-gray-900">需求分析</h3>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md text-center">
							<div className="text-4xl mb-4">✍️</div>
							<h3 className="text-xl font-semibold mb-2 text-gray-900">方案设计</h3>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md text-center">
							<div className="text-4xl mb-4">🛠️</div>
							<h3 className="text-xl font-semibold mb-2 text-gray-900">执行落地</h3>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md text-center">
							<div className="text-4xl mb-4">✅</div>
							<h3 className="text-xl font-semibold mb-2 text-gray-900">成果交付</h3>
						</div>
					</div>
				</div>
			</section>

			{/* Trusted Partners / Client Cases */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 text-gray-900">部分客户案例</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-gray-50 p-6 rounded-xl">
							<h4 className="text-lg font-semibold mb-2 text-gray-900">商标服务平台</h4>
							<p className="text-gray-600">talay.cc - 专业的商标注册与管理平台。</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl">
							<h4 className="text-lg font-semibold mb-2 text-gray-900">企业官网</h4>
							<p className="text-gray-600">talay.ltd - 公司官方网站展示。</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl">
							<h4 className="text-lg font-semibold mb-2 text-gray-900">开源项目平台</h4>
							<p className="text-gray-600">kod.talay.ltd - 开源代码与项目展示。</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl">
							<h4 className="text-lg font-semibold mb-2 text-gray-900">多语言开发</h4>
							<p className="text-gray-600">支持 C#、Python、Java、PHP 等多种语言。</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl">
							<h4 className="text-lg font-semibold mb-2 text-gray-900">定制软件开发</h4>
							<p className="text-gray-600">为企业提供专业的软件定制开发服务。</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl">
							<h4 className="text-lg font-semibold mb-2 text-gray-900">商标服务平台</h4>
							<p className="text-gray-600">talay.cc - 专业的商标注册与管理平台。</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 text-gray-900">我们的优势</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-4xl mb-4">⚡</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">快速交付</h3>
							<p className="text-gray-600">敏捷开发流程，快速响应需求变化，确保项目按时高质量交付。</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-4xl mb-4">🛡️</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">安全可靠</h3>
							<p className="text-gray-600">严格的代码审查和安全测试，确保系统稳定性和数据安全。</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-4xl mb-4">🎯</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">精准定制</h3>
							<p className="text-gray-600">深入了解业务需求，提供量身定制的解决方案。</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-4xl mb-4">🔧</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">持续维护</h3>
							<p className="text-gray-600">提供长期技术支持和系统维护服务，保障系统稳定运行。</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-4xl mb-4">💡</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">创新技术</h3>
							<p className="text-gray-600">紧跟技术前沿，采用最新的开发框架和最佳实践。</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-4xl mb-4">🤝</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">专业团队</h3>
							<p className="text-gray-600">经验丰富的开发团队，提供专业的技术咨询和解决方案。</p>
						</div>
					</div>
				</div>
			</section>

			{/* Success Stories */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 text-gray-900">成功案例</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
							<div className="text-4xl mb-4">🏢</div>
							<h3 className="text-2xl font-semibold mb-3 text-gray-900">商标服务平台 - talay.cc</h3>
							<p className="text-gray-700 mb-4 leading-relaxed">
								专业的商标注册、查询、管理一站式服务平台，为企业和个人提供全方位的商标保护服务。
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								<span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Web开发</span>
								<span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">数据库设计</span>
								<span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">API接口</span>
							</div>
							<Link href="https://talay.cc" target="_blank" className="text-blue-600 font-semibold hover:underline">
								访问平台 →
							</Link>
						</div>
						
						<div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
							<div className="text-4xl mb-4">💻</div>
							<h3 className="text-2xl font-semibold mb-3 text-gray-900">开源项目平台 - kod.talay.ltd</h3>
							<p className="text-gray-700 mb-4 leading-relaxed">
								开源代码展示和项目管理平台，促进技术交流和开源社区发展。
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								<span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">开源</span>
								<span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">项目管理</span>
								<span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">社区</span>
							</div>
							<Link href="https://kod.talay.ltd" target="_blank" className="text-green-600 font-semibold hover:underline">
								查看项目 →
							</Link>
						</div>
						
						<div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
							<div className="text-4xl mb-4">🌐</div>
							<h3 className="text-2xl font-semibold mb-3 text-gray-900">企业官网 - talay.ltd</h3>
							<p className="text-gray-700 mb-4 leading-relaxed">
								现代化企业官方网站，展示公司实力和服务能力，提升品牌形象。
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								<span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">响应式设计</span>
								<span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">SEO优化</span>
								<span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">品牌展示</span>
							</div>
							<Link href="https://talay.ltd" target="_blank" className="text-purple-600 font-semibold hover:underline">
								访问网站 →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Process */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 text-gray-900">详细服务流程</h2>
					<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-4">01</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">需求调研</h3>
							<p className="text-gray-600 mb-3">深入了解客户业务需求，分析技术可行性，制定初步方案。</p>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>• 业务需求分析</li>
								<li>• 技术方案评估</li>
								<li>• 项目范围确定</li>
							</ul>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-4">02</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">方案设计</h3>
							<p className="text-gray-600 mb-3">制定详细的技术方案和项目计划，确保项目顺利进行。</p>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>• 系统架构设计</li>
								<li>• 数据库设计</li>
								<li>• 接口规范制定</li>
							</ul>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-4">03</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">开发实施</h3>
							<p className="text-gray-600 mb-3">按照敏捷开发流程，分阶段实施开发，确保质量和进度。</p>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>• 模块化开发</li>
								<li>• 代码审查</li>
								<li>• 单元测试</li>
							</ul>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-4">04</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">测试部署</h3>
							<p className="text-gray-600 mb-3">全面测试系统功能，确保稳定性，完成生产环境部署。</p>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>• 功能测试</li>
								<li>• 性能测试</li>
								<li>• 生产部署</li>
							</ul>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-4">05</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">维护支持</h3>
							<p className="text-gray-600 mb-3">提供持续的技术支持和系统维护，确保系统稳定运行。</p>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>• 技术支持</li>
								<li>• 系统维护</li>
								<li>• 功能升级</li>
							</ul>
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
							href="tel:15569488599" 
							className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
						>
							电话联系
						</a>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
						<div>
							<div className="text-3xl mb-2">📞</div>
							<h3 className="text-lg font-semibold mb-2">电话联系</h3>
							<a href="tel:15569488599" className="text-blue-100 hover:text-white">15569488599</a>
						</div>
						<div>
							<div className="text-3xl mb-2">✉️</div>
							<h3 className="text-lg font-semibold mb-2">邮箱联系</h3>
							<a href="mailto:talayweb@qq.com" className="text-blue-100 hover:text-white">talayweb@qq.com</a>
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
	);
}
