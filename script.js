const check = document.querySelector('#switch')
const enter = document.querySelector('#enter')
const exit = document.querySelector('#exit')
const btn = document.querySelector('#conver')

const intToRoman = (int) => {
if(Number(int)){
    const romanToInt = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let roman = ''
    for (let key in romanToInt) {
        while (int >= romanToInt[key]) {
            roman += key
            int -= romanToInt[key]
        }
        exit.value = roman
    }
}
else exit.value='incorrect data'
}

const romanToInt = (rom) => {

const  myRe = /^[IVXLCDM]+$/

if(myRe.test(enter.value)===true){
    const romToInt = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (i = 0; i < rom.length; i++) {
        const current = romToInt[rom[i]];
        const next = romToInt[rom[i + 1]];

        if (current < next) {
            result += next - current // IX ->10- 1 = 9
            i++
        } else {
            result += current
        }
    }
   
     exit.value = result;

}
else exit.value='incorrect data'
}

btn.addEventListener('click', () => {
    if (check.checked === true) {
        intToRoman(enter.value)
    } else {
        romanToInt(enter.value)
    }
})