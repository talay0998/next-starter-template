import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const CONTENT_FILE = path.join(process.cwd(), 'data', 'content.json')

// 公共 API，无需认证，供前端页面读取内容
export async function GET() {
  try {
    try {
      const data = await fs.readFile(CONTENT_FILE, 'utf-8')
      return NextResponse.json(JSON.parse(data))
    } catch {
      // 如果文件不存在，返回空对象
      return NextResponse.json({})
    }
  } catch (error) {
    return NextResponse.json({}, { status: 200 })
  }
}
