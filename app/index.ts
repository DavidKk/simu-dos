import responsive from '@/services/responsive'
import qrcode from '@/services/qrcode'
import disableZoom from '@/services/disableZoom'
import App from '@/components/App'

disableZoom()
window.addEventListener('resize', () => responsive())
responsive()

const node = App.createElement()
document.body.appendChild(node)

qrcode()
