import responsive from '@/services/responsive'
import qrcode from '@/services/qrcode'
import disableZoom from '@/services/disableZoom'
import App from '@/components/App'
import Firefly from '@/components/Firefly'

disableZoom()
window.addEventListener('resize', () => responsive())
responsive()

const app = App.createElement()
document.body.appendChild(app)

const firefly = Firefly.createElement()
document.body.appendChild(firefly)

qrcode()
