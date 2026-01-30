# 喀什财运商标代理有限责任公司官网

基于 Next.js 16 构建的现代化公司官网，部署在 Cloudflare Workers。

## 项目信息

- **公司名称**: 喀什财运商标代理有限责任公司
- **英文名称**: Kashgar Caiyun Trademark Agency Co., Ltd.
- **域名**: talay.work
- **统一社会信用代码**: 91653125MA78MQT612
- **法定代表人**: 阿力木江·阿布力克木
- **成立日期**: 2020年4月14日

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- OpenNext Cloudflare Adapter

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 多页面路由（首页、关于我们、服务、联系我们）
- ✅ 现代化 UI 设计
- ✅ 表单提交功能
- ✅ SEO 友好
- ✅ 部署到 Cloudflare Workers
- ✅ **后台管理系统** - 精准控制前端每一个细节

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 部署到 Cloudflare
npm run deploy
```

## 部署到 Cloudflare

### 方式一：通过 GitHub 自动部署（推荐）

1. 在 Cloudflare Dashboard 中：
   - 进入 Workers & Pages
   - 创建新项目或连接现有项目
   - 选择 "连接到 Git"
   - 选择仓库：`talay0998/next-starter-template`

2. 构建配置：
   - **构建命令**: `npm run build && opennextjs-cloudflare build`
   - **根目录**: `/`
   - **生产分支**: `main`

3. 保存并部署，Cloudflare 会自动构建和部署

### 方式二：使用 Wrangler CLI

```bash
# 登录 Cloudflare
npx wrangler login

# 部署
npm run deploy
```

## 后台管理系统

### 访问地址
- 登录页面：`/admin/login`
- 管理后台：`/admin/dashboard`

### 登录信息
- **账号**: `admin`
- **密码**: `admin`

### 功能说明
后台管理系统支持精准控制前端每一个细节：

1. **首页内容管理**
   - Hero 区域标题、副标题、按钮文字
   - 技术栈标题和副标题
   - 数据洞察（支持语言数、项目数、平台数）

2. **服务内容管理**
   - 服务页面标题和副标题
   - 服务列表（可添加、编辑、删除）
   - 每个服务包含：图标、标题、描述

3. **关于我们管理**
   - 页面标题
   - 公司简介内容

4. **联系方式管理**
   - 电话
   - 邮箱
   - 地址

5. **页脚内容管理**
   - 公司名称
   - 公司描述

### 数据存储
- 内容数据存储在 `data/content.json` 文件中
- 所有更改会实时保存到文件系统
- 前端页面会自动读取最新内容

## 项目结构

```
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # 首页
│   │   ├── about/        # 关于我们
│   │   ├── services/     # 服务
│   │   ├── contact/      # 联系我们
│   │   ├── admin/        # 后台管理
│   │   │   ├── login/    # 登录页面
│   │   │   └── dashboard/ # 管理后台
│   │   ├── api/          # API 路由
│   │   │   ├── auth/     # 认证 API
│   │   │   └── content/  # 内容管理 API
│   │   ├── layout.tsx    # 根布局
│   │   └── globals.css   # 全局样式
│   ├── components/       # 组件
│   │   ├── Header.tsx    # 头部导航
│   │   ├── Footer.tsx    # 页脚
│   │   ├── DynamicHome.tsx    # 动态首页
│   │   ├── DynamicServices.tsx # 动态服务页
│   │   └── DynamicFooter.tsx  # 动态页脚
│   └── lib/              # 工具函数
│       ├── auth.ts       # 认证工具
│       └── content.ts    # 内容工具
├── data/                 # 数据存储（自动创建）
│   └── content.json      # 内容数据文件
├── public/               # 静态资源
├── next.config.ts        # Next.js 配置
├── open-next.config.ts   # OpenNext 配置
├── middleware.ts         # 中间件（路由保护）
└── wrangler.jsonc        # Wrangler 配置
```

## 主要业务

- ICP备案代理（网站、APP、小程序）
- 软件著作权申请
- 版权登记
- 商标注册
- 软件开发
- 市场主体代办
- 人工智能应用
- 物联网技术
- 云计算服务
- 信息安全
- 数据处理
- 设计服务

## 联系方式

- **地址**: 新疆喀什地区莎车县古勒巴格镇其格万社区古城西路69号2楼201-202室
- **统一社会信用代码**: 91653125MA78MQT612

## License

Copyright © 2024 喀什财运商标代理有限责任公司
