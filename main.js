let leftButton = document.querySelectorAll('.button-left');
let rightButton = document.querySelectorAll('.button-right');

let base = 'RUB';
let target = 'USD';

let inputLeft = document.querySelector('.input-left-calculate');
let inputRight = document.querySelector('.input-right-calculate');

let inputText = document.querySelectorAll('.input-text');



inputLeft.addEventListener('input', () => {


    let letters = /^[A-Za-z]+$/;


    if (inputLeft.value.match(letters)) {
        inpt.value = ''
    } else {

        if (inputLeft.value.match(',')) {
            let newValue = inputLeft.value.replace(',', '.');
            inputLeft.value = newValue
        }

    }
    getValue(base, target)
})


inputRight.addEventListener('input', () => {

    let letters = /^[A-Za-z]+$/;


    if (inputRight.value.match(letters)) {
        inputRight.value = ''
    } else {

        if (inputRight.value.match(',')) {
            let newValue = inputRight.value.replace(',', '.');
            inputRight.value = newValue
        }

    }


    getValue1(base,target);

});

function getValue(base, target) {
    var requestURL = `https://api.exchangerate.host/convert?from=${base}&to=${target}`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var response = request.response;
        console.log(response);

        inputRight.value = response.result * inputLeft.value

        inputText[0].innerText = `1 ${base} = ${response.result} ${target}`
        inputText[1].innerText = `1 ${target} = ${1 / response.result} ${base}`
    }
}

function getValue1(base, target) {
    var requestURL = `https://api.exchangerate.host/convert?from=${base}&to=${target}`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var response = request.response;
        console.log(response);

        inputLeft.value = 1/response.result * inputRight.value

        inputText[0].innerText = `1 ${base} = ${response.result} ${target}`
        inputText[1].innerText = `1 ${target} = ${1 / response.result} ${base}`
    }
}


function getButtonChangeColor() {

    leftButton.forEach(button => {
        button.addEventListener('click', function () {

            base = button.innerText

            leftButton.forEach(oldButton => {
                oldButton.classList.remove('active');
                oldButton.classList.add('remove');



            });
            this.classList.remove('remove');
            this.classList.add('active');

            getValue(base, target);

        });
    });

    rightButton.forEach(button => {
        button.addEventListener('click', function () {

            target = button.innerText

            rightButton.forEach(oldButton => {
                oldButton.classList.remove('active');
                oldButton.classList.add('remove');
            });
            this.classList.remove('remove');
            this.classList.add('active');

            getValue(base, target)

        });
    });
}


getButtonChangeColor()
getValue(base, target);
getValue1(base,target)