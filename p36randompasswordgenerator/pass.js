const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%&^*()_+/"

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataSet) => {
  //   console.log("dataSet", dataSet)
  //   console.log(
  //     "dataSet[Math.floor(Math.random() * dataSet.length)]",
  //     dataSet[Math.floor(Math.random() * dataSet.length)]
  //   )
  return dataSet[Math.floor(Math.random() * dataSet.length)]
}
const generatePassword = (password = "") => {
  try {
    if (upperInput.checked) {
      password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
      password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
      password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
      password += getRandomData(symbolSet)
    }
    // if (password.length <= totalChar.value) {
    //   console.log("here 5")
    //   return generatePassword(password)
    // }
    passBox.innerText = truncateString(password, totalChar.value)
  } catch (e) {
    console.log("Error", e)
  }
}

generatePassword()
document.getElementById("btn").addEventListener("click", function () {
  generatePassword()
})
function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num)
    return subStr
  } else {
    return str
  }
}
