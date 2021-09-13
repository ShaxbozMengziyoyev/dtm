var elForme = document.querySelector(".header-form");
var elResult = document.querySelector(".main-js");
var elNameJs = document.querySelector(".header-js")

var BUDGET = 120;
var CONTRACT = 80;
var SUPER_CONTRACT = 56;

elForme.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elEnterInput = parseFloat(document.querySelector(".enter-score").value, 10);
  var elName = document.querySelector(".name-input").value;
  var elSureName = document.querySelector(".surename-input").value;

  if (elEnterInput >= BUDGET) {
    elResult.textContent = "Tabriklaymiz o'qishga grant asasida kirdingiz!"
    elNameJs.textContent = `${elName} ${elSureName}`
    document.querySelector(".main-js").style.color = "green"

  } else if (elEnterInput >= CONTRACT) {
    elResult.textContent = "Tabrikalymiz o'qishga kontrakt asasida kirdingiz!"
    elNameJs.textContent = `${elName} ${elSureName}`
    document.querySelector(".main-js").style.color = "yellow"
  } else if (elEnterInput >= SUPER_CONTRACT) {
    elResult.textContent = "Tabrikalymiz o'qishga Super kontrakt asasida kirdingiz!"
    elNameJs.textContent = `${elName} ${elSureName}`
    document.querySelector(".main-js").style.color = "green"
  } else {
    elResult.textContent = "Uzur o'qishga qabul qilinmadingiz!"
    elNameJs.textContent = `${elName} ${elSureName}`
    document.querySelector(".main-js").style.color = "red"
  }
})

var pageLoader = document.querySelector('.loader')
window.addEventListener('load', function(e){
  pageLoader.remove();
});