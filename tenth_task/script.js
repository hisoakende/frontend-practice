function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  
  } else {
    return str;
  }
}

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    let userInput = prompt("Введите число:", "");

    if (!isNaN(parseFloat(userInput)) && isFinite(userInput)) {
      this.value += parseFloat(userInput);

    } else {
      alert("Вы ввели не число. Попробуйте ещё раз.");
    }
  };
}

const text1 = "Средний средний средний средний текст";
const text2 = "Короткий текст";
const text3 = "Длинный длинный длинный длинный длинный длинный длинный длинный длинный длинный длинный" +
              "длинный длинный длинный длинный длинный длинный длинный длинный длинный длинный";

document.querySelector("#card1").textContent = truncate(text1, 50);
document.querySelector("#card2").textContent = truncate(text2, 50);
document.querySelector("#card3").textContent = truncate(text3, 50);

const startingValueElement = document.querySelector("#start");
const accumulator = new Accumulator(parseInt(startingValueElement.textContent));

function getCapcha() {
  let letters = [];

  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }
  for (let i = 97; i <= 122; i++) {
    letters.push(String.fromCharCode(i));
  }

  letters = shuffleArray(letters);
  return letters.slice(0, 5).join("");
}


document.querySelector("#active").addEventListener("click", function () {
  let capcha = getCapcha();
  let usersEnter = prompt(`Для активации кнопки введите капчу ${capcha}`);
  if (usersEnter != capcha) {
    let numb1, numb2;
    numb1 =  Math.floor(Math.random() * 100) + 1;
    numb2 =  Math.floor(Math.random() * 100) + 1;
    usersEnter = prompt(`Ошибка! Решите ${numb1} + ${numb2}`);
    if (numb1 + numb2 == usersEnter) {
      alert("Верно!");
      document.querySelector("#number").disabled = false;
      return true;

    } else{
      alert("Неверно! Попробуйте снова");
      return false;
    }
  } else {
    alert("Вы верно ввели капчу!");
    document.querySelector("#number").disabled = false;
    return true;
  }
})

document.querySelector("#number").addEventListener("click", function () {
  accumulator.read();
  startingValueElement.textContent = accumulator.value;
  alert("Текущее значение: " + accumulator.value);
});

function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}
