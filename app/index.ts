import responsive from '@/services/responsive'
import qrcode from '@/services/qrcode'
import App from '@/components/App'

const node = App.createElement()
document.body.appendChild(node)

window.addEventListener('resize', () => responsive())
responsive()

qrcode()
