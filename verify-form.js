let form = document.querySelector(".card__info__container");
let successfullSection = document.querySelector(".complete__state__section");
let continueButton = document.querySelector(".continue__submit")


form.addEventListener("click", (event)=> {

  if(event.target.nodeName == "BUTTON") {
    event.preventDefault();
    console.log(event)
    inputId()
    verifyBoolean();
    if (verifyBoolean()==true) {
      
      successfullSection.classList.add("complete__state__section__active");

      form.classList.add("card__info__container__desactivate");
    } else {
      changeCardBox();
    }
  }
});

continueButton.addEventListener("click", ()=>{
  successfullSection.classList.remove("complete__state__section__active");

  form.classList.remove("card__info__container__desactivate");
})




function inputId() {
  let input = [...document.querySelectorAll(".item__user__input")];
  console.log(input);

  for (let i = 0; i < input.length; i++) {
    console.log(input[i].id);
    switch (input[i].id) {

      case "name":
        verifyName();
      break;

      case "card":
        verifyCardNumber();
      break;

      case "month":
        verifyDate();
      break;

      case "cvv":
        verifyCV();
      break;
    }
    
  }

}

function verifyName() {
  let cardName = document.querySelector("#name[type='text']");
  let fillName = document.querySelector(".card__container__name");
  if (cardName.value.length === 0) {
  } else {
    return true;
  }
}

function verifyDate(){
  let month = document.querySelector("#month[type='number']");
  let year = document.querySelector("#year[type='number']");
  let warningText = document.querySelector("#warning__text__activate__section");
    
    if(month.value.length != 2 && year.value.length != 2 ) {
      warningText.classList.add("warning__text__show");
      month.value = "";
      year = "";
    } else {
      warningText.classList.remove("warning__text__show");
      return true;
    }
}

function verifyCardNumber() {
  let cardNumber = document.querySelector("#card[type='number']");
  let warningText = document.querySelector("#wrong__card__number");

    if(cardNumber.value.length != 16) {
      warningText.classList.add("warning__text__show");
      cardNumber.value = "";
      return false;
    } else {
      warningText.classList.remove("warning__text__show");
      return true;
    }
}

function verifyCV () {
  let cvvCard =document.querySelector("#cvv");
  let warningText = document.querySelector("#wrong__card__cvv");

    if (cvvCard.value.length === 0) {
      warningText.classList.add("warning__text__show");
      cvvCard.value = "";
      return false;
    } else {
      warningText.classList.remove("warning__text__show");
      return true;
    }
}

function verifyBoolean () {
  let array = [verifyName(), verifyDate(), verifyCardNumber(), verifyCV()];
  let contador = 0;

    for(var i = 0; i <array.length; i++) {
      if(array[i] == true) {
        contador++;
      }
    }

    if (contador == 4) {
      return true;
    }

}

function changeCardBox () {
  let cardName = document.querySelector("#name[type='text']");
  let cardBoxName = document.querySelector(".card__container__name");
  let month = document.querySelector("#month[type='number']");
  let year = document.querySelector("#year[type='number']");
  let cardED = document.querySelector(".card__container__ed");

  cardBoxName.innerHTML = `${cardName.value}`
  cardED.innerHTML = `${month.value}/${year.value}`

}