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

const date = new Date(parseInt(import.meta.env.BUILD, 10))
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const version = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}${seconds.toString().padStart(2, '0')}`
document.title = `${document.title} - ${version}`
