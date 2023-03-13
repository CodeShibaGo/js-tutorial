/* 🚀🔥
黃綠紅 你要哪一個？

此專案涵蓋的概念
👉 DOM 操作
👉 迴圈
👉 變數指派
👉 條件語句 (if else if)
👉 樣板字面值
👉 事件監聽器
*/

console.log('hello')

// changeTitle 

function changeTitle(){
  // 取得 title 元素
  let titleDiv = document.getElementById('title')
  console.log('before: ', titleDiv.innerText)
  let message = '報告阿柴，標題已經切換！'
  titleDiv.innerText = message;
  console.log('after: ', titleDiv.innerText)
  titleDiv.innerHTML = `<p>${message}</p>`
  titleDiv.style.color = 'blue'
}


function clickEventHandler(){
  // 取得 title 元素
  let titleDiv = document.getElementById('title')
  console.log('before: ', titleDiv.innerText)
  let message = '報告班長，標題已經切換！'
  titleDiv.innerText = message;
  console.log('after: ', titleDiv.innerText)
  titleDiv.innerHTML = `<p>${message}</p>`
  titleDiv.style.color = 'blue'
}

let changeButton = document.getElementById('changeButton')
changeButton.addEventListener("click", clickEventHandler);
// changeTitle()


const squares = document.querySelectorAll('.colorSquare')
const output = document.getElementById('output')
// forEach
squares.forEach(square => {
  square.onclick = () => {
    _id = square.getAttribute('id')
    output.innerHTML = `<div class=".colorSquare" id="${_id}">${_id}</div>`;
  }
})


