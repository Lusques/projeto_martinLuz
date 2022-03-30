let contadorDesktop = 0;
const carouselContainer = document.querySelector(".carousel_container");
const carouselCards = document.querySelectorAll(".carousel_container_card");
const buttonsCarousel = document.querySelectorAll(".main_info-2_arrow_button");

const modalDisplay = document.querySelector(".main_calculator_modal_container");
const amountTransfer = document.querySelector(".amount_transfer");
const calculationInputValue = document.querySelector('.calculation_input_value');
const calculationTolltip = document.getElementById('calculation_tolltip');
const valueTransfer = document.getElementById("valueTransfer");
const calculationButton = document.querySelector(".calculation_input-2_button");
const buttonModalClose = document.querySelector(".modal_card_close");
const modalResult = document.querySelector('.modal_card_text > span')

buttonsCarousel.forEach((button, index) => {
  button.addEventListener("click", () => {
    const windowSize = window.outerWidth;
    if (windowSize > 1200) {
      for (let i = 0; i < carouselCards.length; i++) {
        carouselCards[i].style.left = `${0}px`;
      }
      if (index % 2 === 0) {
        contadorDesktop -= 1;
        contadorDesktop = contadorDesktop < 0 ? 3 : contadorDesktop;
        carouselContainer.style.left = `${-465 * contadorDesktop}px`;
      } else {
        contadorDesktop += 1;
        contadorDesktop = contadorDesktop > 3 ? 0 : contadorDesktop;
        carouselContainer.style.left = `${-465 * contadorDesktop}px`;
      }
    } else {
      carouselContainer.style.left = `${0}px`;
      if (index % 2 === 0) {
        contadorDesktop -= 1;
        contadorDesktop = contadorDesktop < 0 ? 5 : contadorDesktop;
        for (let i = 0; i < carouselCards.length; i++) {
          carouselCards[i].style.left = `${-410 * contadorDesktop}px`;
        }
      } else {
        contadorDesktop += 1;
        contadorDesktop = contadorDesktop > 5 ? 0 : contadorDesktop;
        for (let i = 0; i < carouselCards.length; i++) {
          carouselCards[i].style.left = `${-410 * contadorDesktop}px`;
        }
      }
    }
  });
});

buttonModalClose.addEventListener("click", () => {
  modalDisplay.classList.add("display-none");
});

calculationButton.addEventListener("click", () => {
  if (valueTransfer.value <= 0){
    return alert('Informe o valor pago por pix!');
  }
  modalDisplay.classList.remove("display-none");
  const resultado = (amountTransfer.value * valueTransfer.value) * 0.43;
  modalResult.innerText = resultado
  console.log(resultado);

});

document.getElementById("myinput").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #0285c9 0%, #0285c9 ' + value + '%, #84888c ' + value + '%, #84888c 100%)'
    calculationInputValue.style.left = `calc(${value}%)`
    calculationTolltip.innerText = amountTransfer.value == 1000 ? '+1000' : amountTransfer.value;

};
