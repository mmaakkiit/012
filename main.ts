input.onButtonPressed(Button.A, function () {
    停止 = 0
})
input.onGesture(Gesture.Shake, function () {
    停止 = 1
})
input.onButtonPressed(Button.AB, function () {
    秒数 = 0
    停止 = 1
    basic.showString("Reset")
    basic.clearScreen()
    basic.showNumber(秒数)
})
let 停止 = 0
let 秒数 = 0
秒数 = 0
停止 = 1
basic.showNumber(秒数)
basic.forever(function () {
    while (停止 == 0) {
        let 最初の明るさ = 0
        if (input.lightLevel() < 最初の明るさ - 20) {
            停止 = 1
        } else {
            basic.pause(1000)
            秒数 += 1
            basic.showNumber(秒数)
        }
    }
})
