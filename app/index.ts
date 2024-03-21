import responsive from '@/services/responsive'
import disableZoom from '@/services/disableZoom'
import { isMobile } from './services/device'
import App from '@/components/App'

disableZoom()
window.addEventListener('resize', () => responsive())
responsive()

const app = App.createElement()
document.body.appendChild(app)

isMobile && document.documentElement.classList.add('mobile')
