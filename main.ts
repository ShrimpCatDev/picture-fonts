//% color="#88af92"
//% inlineInputMode=inline

namespace pictureFonts {
let fontChars = ""
let cH = 0
let cW = 0
let tempImage: Image = null
let currentFont: Image[] = []
currentFont = []
//% block="draw font text $text x $X y $y background $colorBG foreground $colorFG output image $output"
//% inlineInputMode=inline
//% output.shadow=screen_image_picker
export function drawFont (text: string, X: number, Y: number, colorBG: number, colorFG: number, output: Image) {
    tempImage = image.create(cW * text.length, cH)
    for (let index = 0; index <= text.length - 1; index++) {
        spriteutils.drawTransparentImage(currentFont[fontChars.indexOf(text.charAt(index))], tempImage, index * 8, 0)
    }
    tempImage.replace(1, colorFG)
    tempImage.replace(15, colorBG)
    spriteutils.drawTransparentImage(tempImage, output, X, Y)
}
//% block="set font image $fontImg char width $charWidth height $charHeight image width $imageWidth image height $imageHeight font text $fontText"
//% fontImg.shadow=screen_image_picker
//% inlineInputMode=inline
export function importFont (fontImg: Image, charWidth: number, charHeight: number, imageWidth: number, imageHeight: number, fontText: string) {
    fontChars = fontText
    cW = charWidth
    cH = charHeight
    for (let y = 0; y <= imageHeight / charHeight - 1; y++) {
        for (let x = 0; x <= imageWidth / charWidth - 1; x++) {
            currentFont.push(image.create(charWidth, charHeight))
            advancedBlocks.blit(currentFont[currentFont.length - 1], 0, 0, charWidth, charHeight, fontImg, x * charWidth, y * charHeight, charWidth, charHeight)
        }
    }
}

}