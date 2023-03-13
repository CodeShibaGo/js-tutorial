// 範本
// 內建方法介紹 console.log() => 印出
console.log('Hello world')
console.log('程式柴 CodeShiba')

// 變數 (var、const、let)
let name = 'Peter Pan'
console.log(name)

let sentence = '今天過得如何？很高興見到你，希望你有美好的一天！'
console.log(sentence)

// 內建方法介紹 prompt() 與 alert()
// food = prompt('這餐食物花費多少錢？')
// tipPercentage = prompt('小費幾趴？') / 100
fruit = prompt('你最喜歡的水果是什麼？')
console.log(fruit)

food = Number(prompt('這餐食物花費多少錢？'))
tipPercentage = Number(prompt('小費幾趴？')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount

console.log('小費金額', tipAmount)
console.log('總共金額', total)
alert(tipAmount)

