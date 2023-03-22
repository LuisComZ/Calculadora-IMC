const firstDiv = document.querySelector(".firstStep")
const secondDiv = document.querySelector(".secondStep")
const finalDiv = document.querySelector(".finalStep")

function go(currentStep, nextStep) {
  let displayNone, displayBlock

  if (currentStep == 1) {
    displayNone = firstDiv
  } else if (currentStep == 2) {
    displayNone = secondDiv
  } else {
    displayNone = finalDiv
  }

  displayNone.style.display = "none"

  if (nextStep == 1) {
    displayBlock = firstDiv
  } else if (nextStep == 2) {
    displayBlock = secondDiv
  } else {
    displayBlock = finalDiv
  }

  displayBlock.style.display = "block"
}
