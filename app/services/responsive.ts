import { ROOT_FONT_SIZE, DESIGN_CLIENT_WITH } from '@/constants/definations'

/** 是否是异常设备 */
export function unusual(): boolean {
  // 如果是苹果设备，则返回 false
  if (navigator.appVersion.match(/(iphone|ipad|ipod)/gi)) {
    return false
  }

  // 获取 userAgent
  let userAgent = navigator.userAgent
  // 获取 WebKit 版本号
  let webKitVersionMatch = userAgent.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)
  // 如果 WebKit 版本号大于 534，则返回 false
  if (webKitVersionMatch && parseInt(webKitVersionMatch[1], 10) > 534) {
    return false
  }

  // 获取 UC 版本号
  let UCVersionMatch = navigator.userAgent.match(/U3\/((\d+|\.){5,})/i)

  // 如果 UC 版本号小于 80，则返回 true
  if (UCVersionMatch) {
    let UCVersion = parseInt(UCVersionMatch[1].split('.').join(''), 10)
    if (UCVersion < 80) {
      return true
    }
  }

  // 否则，返回 false
  return false
}

/** 获取根字体大小 */
export function getRootFontSize(rootFontSize = ROOT_FONT_SIZE, designClientWidth = DESIGN_CLIENT_WITH): number {
  let meta = document.querySelector('meta[name="viewport"]')

  // 如果不存在，则创建一个
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'viewport')
    document.head.appendChild(meta)
  }

  // 获取原始缩放比例
  let originScale = 1
  const viewPortContent = meta.getAttribute('content')
  if (viewPortContent) {
    // 将 viewport 内容按逗号分隔成数组
    const viewPortQuery = viewPortContent.split(',').map((values) => values.split('=') as [string, string])
    // 将 viewport 内容转换为对象
    const viewPortParams = Object.fromEntries(new Map(viewPortQuery))
    // 获取原始缩放比例
    originScale = parseFloat(viewPortParams['initial-scale']) || 1
  }

  const docElement = document.documentElement
  const originClientWidth = docElement.clientWidth * originScale
  const flexRatio = designClientWidth / originClientWidth
  const screenPixelRatio = unusual() ? 1 : 1 / window.devicePixelRatio
  meta.setAttribute('content', `width=device-width,user-scalable=no,initial-scale=${screenPixelRatio},maximum-scale=${screenPixelRatio},minimum-scale=${screenPixelRatio}`)

  // 检测是否支持 meta viewport 缩放
  return originClientWidth === docElement.clientWidth ? (rootFontSize * docElement.clientWidth) / designClientWidth : (rootFontSize / flexRatio) * window.devicePixelRatio
}

/** 设置 meta 缩放 */
export function metaFlex(rootFontSize = ROOT_FONT_SIZE, designClientWidth = DESIGN_CLIENT_WITH) {
  let docElement = document.documentElement
  docElement.style.fontSize = `${getRootFontSize(rootFontSize, designClientWidth)}px`
  docElement.style.display = 'none'

  // 强制重新渲染 - 对新安卓设备很重要
  // tslint:disable-next-line no-unused-expression
  docElement.clientWidth
  docElement.style.display = ''
}

// 响应式函数
export default function responsive(rootFontSize = ROOT_FONT_SIZE, designWidth = DESIGN_CLIENT_WITH) {
  return metaFlex(rootFontSize, designWidth)
}
