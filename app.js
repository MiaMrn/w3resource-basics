displayDateAndHour();
printWindow();
displayDate();
mesureArea(5, 6, 7);
animateString("target");
isLeapYear();

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