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

function validate() {
  const peso = document.getElementById("peso")
  const altura = document.getElementById("altura")

  peso.style.border = "none"
  altura.style.border = "none"

  if (!peso.value || !altura.value) {
    if (!peso.value && !altura.value) {
      peso.style.border = "1px solid red"
      altura.style.border = "1px solid red"
    } else if (!peso.value) {
      peso.style.border = "1px solid red"
    } else {
      altura.style.border = "1px solid red"
    }
  } else {
    let imc = peso.value / (altura.value * altura.value)
    const result = document.getElementById("resultado")

    if (imc < 18.5) {
      result.innerHTML = "Magreza | Obesidade 0"
      result.style.color = "yellow"
    } else if (imc >= 18.5 && imc < 25) {
      result.innerHTML = "Normal | Obesidade 0"
      result.style.color = "#51FF22"
    } else if (imc >= 25 && imc < 30) {
      result.innerHTML = "Sobrepeso | Obesidade 1"
      result.style.color = "yellow"
    } else if (imc >= 30 && imc < 40) {
      result.innerHTML = "Obesidade | Obesidade 2"
      result.style.color = "#FF7000"
    } else if (imc >= 40) {
      result.innerHTML = "Obesidade Grave | Obesidade 3"
      result.style.color = "#FF2222"
    }

    go(2, 3)
  }
}
