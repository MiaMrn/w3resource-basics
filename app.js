displayDateAndHour();
printWindow();
displayDate();
mesureArea(5, 6, 7);
animateString("target");
isLeapYear();
findJanuaryFirst();
findRandomNumber();
howLongBeforeChristmas()
multiplyOrDivide();
fahrenheitOrCelsius(document.querySelectorAll(".celsiusAndFahrenheit input"));

function displayDateAndHour() {
    const dateElement = document.querySelector(".date-hour");
    const date = new Date();

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const days = date.getDay();
    const day = document.createElement("p");
    day.textContent = "Today is : " + weekday[days];
    dateElement.appendChild(day);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour = document.createElement("p");
    hour.textContent = "Curren time is : " + hours + ":" + minutes + ":" + seconds + " " + ampm;
    dateElement.appendChild(hour);
}

function printWindow() {
    document.querySelector(".print button").addEventListener("click", function () {
        window.print();
    })
}

function displayDate() {
    const date = new Date();

    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    const currentDate = document.createElement("p");
    currentDate.textContent = "Today is : " + day + "/" + month + "/" + year;
    document.querySelector(".date").appendChild(currentDate);
}

function mesureArea(a, b, c) {
    // 1 - Calculer le demi périmètre
    const p = (a + b + c) / 2;

    // 2 - Calculer l'aire du triangle
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);

    // 3 - Afficher
    const areaContent = document.createElement("p");
    areaContent.textContent = `The area of a triangle with ${a}cm, ${b}cm and ${c}cm sides is ${area}cm².`;
    document.querySelector(".triangleArea").appendChild(areaContent);
}

function animateString(id) {
    const element = document.getElementById(id);
    const textNode = element.childNodes[0];
    let text = textNode.data;

    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

function isLeapYear() {
    yearInput = document.querySelector("#yearInput");
    yearInput.addEventListener("change", function (e) {
        let answerPara = document.querySelector(".answer");
        answerPara.textContent = "Answer : ";
        yearValue = e.target.value;
        let answer;

        if (yearValue % 100 === 0) {
            answer = "a leap year";
        } else if (yearValue % 400 === 0) {
            answer = "not a leap year";
        } else if (yearValue % 4 === 0) {
            answer = "a leap year";
        } else {
            answer = "not a leap year";
        }

        answerPara.textContent += yearValue + " is " + answer;
    })
}

function findJanuaryFirst() {
    let januaryFirsts = [];
    let year = 2014;

    while (year < 2050) {
        year++;
        let date = new Date(year, 0, 1);
        let day = date.getDay();
        if (day === 0) {
            januaryFirsts.push(year);
        }
    }
    let answer = document.createElement("p");
    let januaryYears = januaryFirsts.toString().split(",").join(", ");;
    answer.textContent = `In ${januaryYears}, January 1st have been or will be a Sunday.`;
    document.querySelector(".januaryFirst").appendChild(answer);
}

function findRandomNumber() {
    let tries = 3;

    document.querySelector(".findRandomNumber button").addEventListener("click", function () {
        let randomNumber = Math.round(Math.random() * 10);
        console.log(randomNumber);
        while (tries > 0) {
            let userGuess = prompt("Guess a number between 0 and 10 ?");

            if (userGuess > randomNumber) {
                alert('Your guess is too high.');
            } else if (userGuess < randomNumber) {
                alert('Your guess is too low');
            } else {
                alert("Good work !");
                break;
            }
            tries = tries - 1;
        }
        if (tries == 0) {
            alert('You ran out of tries.  The number was ' + randomNumber + '.');
        }
    });
}

function howLongBeforeChristmas() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmas = new Date(currentYear, 11, 25);

    if (today.getMonth == 11 && today.getDay > 25) {
        christmas.setFullYear(christmas.getFullYear + 1);
    }

    const millisecondsInAHour = 86400000;
    let daysLeft = christmas.getTime() - today.getTime();
    daysLeft = Math.ceil(daysLeft / millisecondsInAHour);
    const answerElt = document.querySelector(".christmasAnswer");
    answerElt.textContent = `They are ${daysLeft} days left until next Christmas.`;



}

function multiplyOrDivide() {
    let resultElt = document.getElementById("resultElt");
    const buttons = document.querySelectorAll(".multiplyOrDivide button");
    buttons.forEach(button => {

        button.addEventListener("click", function () {
            resultElt.textContent = "";
            const firstNumber = document.getElementById("firstNumber").value;
            const secondNumber = document.getElementById("secondNumber").value;
            let answer = null;
            if (button.dataset.operation == "/") {
                answer = firstNumber / secondNumber;
            } else {
                answer = firstNumber * secondNumber;
            }
            resultElt.textContent += answer;
        })
    })
}

function fahrenheitOrCelsius(inputs) {
    const celsius = document.querySelector('input[data-degre="c"]');
    const fahrenheit = document.querySelector('input[data-degre="f"]');

    inputs.forEach(input => {
        input.addEventListener("input", function (e) {
            let number = e.target.value;

            if (input.dataset.degre == "f") {
                let resultat = Math.round(((number - 32) / 9) * 5);
                celsius.value = resultat;
            } else {
                let resultat = Math.round(((number / 5) * 9) + 32);
                fahrenheit.value = resultat;
            }
        })
    })
}