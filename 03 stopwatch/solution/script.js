let seconds = 0
let m_seconds = 0
const displayMSeconds = document.getElementById('m_seconds')
const displaySeconds = document.getElementById('seconds')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
let interval

// 綁定 buttonStart 按鈕的觸發事件
buttonStart.onclick = () => {
  clearInterval(interval)
  interval = setInterval(timer, 10)
}

// 綁定 buttonStop 按鈕的觸發事件
buttonStop.onclick = () => {
  clearInterval(interval)
}

// 綁定 buttonReset 按鈕的觸發事件
buttonReset.onclick = () => {
  clearInterval(interval)
  m_seconds = 0
  seconds = 0
  displayMSeconds.innerHTML = `0${m_seconds}`
  displaySeconds.innerHTML = `0${seconds}`
}

// 碼錶讀取方法
const timer = () => {
  m_seconds++

  if (Number(m_seconds) <= 9) {
    displayMSeconds.innerHTML = `0${m_seconds}`
  }

  if (Number(m_seconds) > 9) {
    displayMSeconds.innerHTML = m_seconds
  }

  if (Number(m_seconds) > 99) {
    console.log('seconds')
    seconds++
    displaySeconds.innerHTML = `0${seconds}`
    m_seconds = 0
    displayMSeconds.innerHTML = `0${m_seconds}`
  }

  if (Number(seconds) > 9) {
    displaySeconds.innerHTML = seconds
  }
}
