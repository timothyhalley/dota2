import client from 'webpack-theme-color-replacer/client'
import generate from '@ant-design/colors/lib/generate'

export default {
  primaryColor: '#1890ff', // TODO Dark pit to be processed
  getAntdSerials (color) {
    // Fade (ie less tint)
    const lightens = new Array(9).fill().map((t, i) => {
      return client.varyColor.lighten(color, i / 10)
    })
    // colorPalette transform to get the color value
    const colorPalettes = generate(color)
    return lightens.concat(colorPalettes)
  },
  changeColor (newColor) {
    var lastColor = this.lastColor || this.primaryColor
    var options = {
      cssUrl: '/css/theme-colors.css', // TODO Dark pit to be processed
      oldColors: this.getAntdSerials(lastColor), // current colors array. The same as `matchColors`
      newColors: this.getAntdSerials(newColor) // new colors array, one-to-one corresponde with `oldColors`
    }
    var promise = client.changer.changeColor(options, Promise)
    this.lastColor = lastColor
    return promise
  }
}
