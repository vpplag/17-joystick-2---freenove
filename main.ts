input.onButtonPressed(Button.A, function () {
    CalibrateX = P2In
    CalibrateY = P1In
})
let y = 0
let x = 0
let P1In = 0
let P2In = 0
let CalibrateY = 0
let CalibrateX = 0
CalibrateX = 512
CalibrateY = 512
basic.forever(function () {
    P1In = pins.analogReadPin(AnalogPin.P1)
    P2In = pins.analogReadPin(AnalogPin.P2)
    x = Math.round(Math.map(P2In, 0, CalibrateX * 2, 1, -1))
    y = Math.round(Math.map(P1In, 0, CalibrateY * 2, -1, 1))
    basic.clearScreen()
    if (x == -1 && y == 1) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (x == 1 && y == 1) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (x == 0 && y == 1) {
        basic.showArrow(ArrowNames.South)
    } else if (x == -1 && y == 0) {
        basic.showArrow(ArrowNames.West)
    } else if (x == 1 && y == 0) {
        basic.showArrow(ArrowNames.East)
    } else if (x == 0 && y == -1) {
        basic.showArrow(ArrowNames.North)
    } else if (x == 1 && y == -1) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (x == -1 && y == -1) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
