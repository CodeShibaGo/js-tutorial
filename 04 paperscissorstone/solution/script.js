/*
剪刀石頭布 🚀🔥
此專案涵蓋的概念
👉 迴圈
👉 DOM 操作
👉 變數
👉 條件語句 (if else if)
👉 樣板字面值
👉 事件監聽器
👉 高階函數 (Math.random())
*/

// ** getComputerChoice 函數隨機從 stone paper scissors 選擇一個並返回該字串 **
// getComputerChoice() 👉 '石頭'
// getComputerChoice() 👉 '剪刀'
function getComputerChoice() {
  let pssChoices = ['Stone', 'Paper', 'Scissors']
  let computerChoice = pssChoices[Math.floor(Math.random() * 3)]
  return computerChoice
}
// ** getResult 函數比較 playerChoice 和 computerChoice 並相應地返回得分 **
// 玩家贏 - getResult('石頭', '剪刀') 👉 1
// 玩家輸 - getResult('剪刀', '石頭') 👉 -1
// 平手 - getResult('石頭', '石頭') 👉 0
function getResult(playerChoice, computerChoice) {
  
  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  } else if (playerChoice === 'Stone' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Stone") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1

  // Otherwise human loses (aka set score to -1)
  } else {
    score = -1
  }

  // return score
  return score
}

// showResult 函數根據得分在 DOM 上更新為 你贏了 或 你輸了 或 平手！，
// 同時顯示玩家的選擇和電腦的選擇

function showResult(score, playerChoice, computerChoice) {
// 提示：在得分為 -1 的情況下，
// 應該將 result.innerText 設置為 'You Lose!'
// 不要忘記抓取 id 為 'result' 的 div！
  
  let result = document.getElementById('result')
  switch (score) {
    case -1:
      result.innerText = `你輸了！\n你出了${playerChoice}\n電腦出了${computerChoice}`
      break;
    case 0:
      result.innerText = `平手。\n你出了${playerChoice}\n電腦出了${computerChoice}`
      break;
    case 1:
      result.innerText = `你贏了！\n你出了${playerChoice}\n電腦出了${computerChoice}`
      break;
  }
}
// ** 計算誰贏了並在屏幕上顯示 **
function onClickPSS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score, playerChoice.value, computerChoice)
}

// ** 讓剪刀石頭布按鈕 actively 監聽點擊事件，一旦檢測到點擊就執行某些動作 **
function playGame() {
  // 使用 querySelector 選擇所有的 按鈕
  // * 為每個剪刀石頭布按鈕添加點擊事件監聽器，每次單擊時，它都會使用上次單擊的 PSS 按鈕調用 onClickPSS 函數 *
  let pssButtons = document.querySelectorAll('.pssButton')


  // 1. 使用 forEach 迴圈遍歷按鈕
  // 2. 為每個按鈕添加 'click' 事件監聽器
  // 3. 每當有人單擊時調用 onClickPSS 函數
  // 4. 確保將當前選定的剪刀石頭布按鈕作為引數傳遞
  

  pssButtons.forEach(pssButton => {
    pssButton.onclick = () => onClickPSS(pssButton)
  })

  // 添加 click 事件監聽器到結束遊戲按鈕上，單擊時運行 endGame() 函數

  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}



// ** endGame 函數清除 DOM 上的所有文本 **
function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()
