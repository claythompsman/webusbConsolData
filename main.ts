basic.showIcon(IconNames.Heart)
basic.forever(function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    led.toggle(randint(0, 4), randint(0, 4))
})
