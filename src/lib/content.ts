// 客户端获取内容的工具函数
export async function getContent() {
  try {
    const response = await fetch('/api/content/public', {
      cache: 'no-store'
    })
    if (response.ok) {
      return await response.json()
    }
    return {}
  } catch (error) {
    console.error('获取内容失败:', error)
    return {}
  }
}

// 服务端获取内容的工具函数
export async function getContentServer() {
  try {
    const fs = await import('fs/promises')
    const path = await import('path')
    const contentFile = path.join(process.cwd(), 'data', 'content.json')
    
    try {
      const data = await fs.readFile(contentFile, 'utf-8')
      return JSON.parse(data)
    } catch {
      return {}
    }
  } catch (error) {
    return {}
  }
}
