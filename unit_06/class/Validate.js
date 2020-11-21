class Validate {
    constructor(a) {
        this.a = a
    }
    static isNumber(n) {
        return typeof n === 'number'
    }
    static isInt(n) {
        return typeof n === 'number' ?  Number.isInteger(n) :  false
    }
    static isFloat(n) {
        return typeof n === 'number' ?  !Number.isInteger(n) :  false
    }
    static isChar(s) {
        return typeof s === 'string' && s.length === 1
    }
    static isString(s) {
        return typeof s === 'string'
    }
    static isBoolean(b) {
        return typeof b === 'boolean'
    }
    static isArray(arr) {
        return Array.isArray(arr)
    }
    static toMoney(num) {
        num = String(num)
        let newNum = ''
        let j = 1
        for(let i = num.length - 1; i >= 0; i--) {
            if(j % 3 === 1 && j !== 1) newNum += ' '
            newNum += num[i]
            j++
        }
        return newNum.split('').reverse().join('') + '.00'
    }
}