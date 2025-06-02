let IRwaarde = 0
IR.IR_init()
basic.forever(function () {
    IRwaarde = IR.IR_read()
})
basic.forever(function () {
    basic.showNumber(IRwaarde)
})
