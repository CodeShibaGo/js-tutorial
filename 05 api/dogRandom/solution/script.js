// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming

// stuff you don't have to wait for
console.log('開始')

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// stuff you have to wait for
const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      dogImageDiv.innerHTML = `<img src='${json.message}' height=500 width=300/>`
    })
}

dogButton.onclick = () => getNewDog()
  
console.log('結束')