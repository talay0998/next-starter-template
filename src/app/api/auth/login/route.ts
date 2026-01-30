import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // 验证账号密码
    if (username === 'admin' && password === 'admin') {
      // 创建简单的 session token
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64')
      
      // 设置 cookie
      const cookieStore = await cookies()
      cookieStore.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7天
      })

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: '账号或密码错误' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: '登录失败' },
      { status: 500 }
    )
  }
}
