import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import fs from 'fs/promises'
import path from 'path'

const CONTENT_FILE = path.join(process.cwd(), 'data', 'content.json')

// 验证认证
async function checkAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')
  return !!token
}

// 确保数据目录存在
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// 读取内容
export async function GET() {
  try {
    if (!(await checkAuth())) {
      return NextResponse.json({ error: '未授权' }, { status: 401 })
    }

    await ensureDataDir()
    
    try {
      const data = await fs.readFile(CONTENT_FILE, 'utf-8')
      return NextResponse.json(JSON.parse(data))
    } catch {
      // 如果文件不存在，返回默认内容
      return NextResponse.json({})
    }
  } catch (error) {
    return NextResponse.json(
      { error: '读取内容失败' },
      { status: 500 }
    )
  }
}

// 更新内容
export async function POST(request: NextRequest) {
  try {
    if (!(await checkAuth())) {
      return NextResponse.json({ error: '未授权' }, { status: 401 })
    }

    const content = await request.json()
    
    await ensureDataDir()
    await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2), 'utf-8')

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: '保存内容失败' },
      { status: 500 }
    )
  }
}
