input.onButtonPressed(Button.A, function () {
    最初の明るさ = input.lightLevel()
    停止 = 0
})
input.onButtonPressed(Button.AB, function () {
    秒数 = 0
    停止 = 1
    basic.showString("Reset")
    basic.clearScreen()
    basic.showNumber(秒数)
})
input.onButtonPressed(Button.B, function () {
    停止 = 1
})
let 最初の明るさ = 0
let 停止 = 0
let 秒数 = 0
秒数 = 0
停止 = 1
basic.showString("Hello!")
basic.clearScreen()
basic.showString("Ready!")
basic.clearScreen()
if (停止 == 0) {
	
}
basic.showNumber(秒数)
basic.forever(function () {
    while (停止 == 0) {
        if (input.lightLevel() < 最初の明るさ - 20) {
            停止 = 1
        } else {
            basic.pause(1000)
            秒数 += 1
            basic.showNumber(秒数)
        }
    }
})
