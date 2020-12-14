basic.showIcon(IconNames.Heart)
basic.forever(function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("")
})
