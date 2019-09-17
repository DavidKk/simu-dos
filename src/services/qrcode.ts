import QRCodeServ from 'qrcode'
import i18n from '../conf/i18n'

export class QRCode {
  private getBox (width: number, height: number) {
    return {
      string: '+',
      style: `font-size:1px;padding:${Math.floor(height / 2)}px ${width}px;line-height:${height}px;`
    }
  }

  private printImage (url: string, scale: number = 1): Promise<string[]> {
    return new Promise((resolve, reject) => {
      let image = new Image()

      image.onload = () => {
        let width = image.width * scale
        let height = image.height * scale
        let dim = this.getBox(width, height)
        resolve([`%c ${dim.string}`, `${dim.style}background:url(${url}) no-repeat;background-size:cover;color:transparent;`])
      }

      image.onerror = (error) => {
        reject(error)
      }

      image.src = url
    })
  }

  public convert (url: string = document.location.href): Promise<string> {
    return QRCodeServ.toDataURL(url)
  }

  public print (url: string = document.location.href): void {
    this.convert(url).then((qrcode: string) => {
      return this.printImage(qrcode).then((codes) => {
        window.console.log(`%c ${i18n.qrcode.label}`, 'font-size:14px;font-weight:bold;')
        window.console.log(...codes)
      })
    })
  }
}

export default new QRCode()
