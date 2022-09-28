basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
})
