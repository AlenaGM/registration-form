const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userFirstName = document.getElementById("userFirstName");
const userLastName = document.getElementById("userLastName");
const userAddress = document.getElementById("userAddress");
const userPostcode = document.getElementById("userPostcode");
const userCity = document.getElementById("userCity");
const userCountry = document.getElementById("userCountry");
const userPhone = document.getElementById("userPhone");

let emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+.+.[a-zA-Z]{2,4}$/i;
let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let nameValid = /^[-a-zàáâäåæçèéêëìíîïñòóôöùúûüA-ZÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖÙÚÛÜ\s']+$/;
let postcodeValid = /^[-a-zA-Z0-9\s]+$/;
let countryValid = /^[-a-zA-Z\s]+$/;
let phoneValid = /^[- ()+.0-9\s]+$/;

const cb = document.querySelector('#accept');

//Ниже код, в основном, из лекции: перебирает инпуты и собирает коллекцию ошибок, которую выводит списком в конце

let errors = [];

function checkValidity (input) {

    let validity = input.validity;

    if(validity.valueMissing) {
        errors.push(input.placeholder + ' is required!');
    }

    if(validity.patternMismatch) {
        errors.push(input.placeholder + ' format is not valid');
    }

    if(validity.tooLong) {
        let maxlength = getAttributeValue(input, 'maxlength');
        errors.push('Maximum number of symbols is ' + maxlength);
    }

    if(errors.length!=0 && cb.checked == ''){
        document.getElementById('errorsInfo').innerHTML = '';
    }else{
        document.getElementById('successMessage').innerHTML = '';
    }

}

function checkAll() {

    errors = [];

    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorsInfo').innerHTML = errors.join('. <br>');

}

document.querySelector('#fullSteamAhead').addEventListener('click', function(event){
    event.preventDefault();
    checkAll();
});

//Ниже чуть доработанный код из 15-й недели
//Нужен для оформления: каждое поле проходит валидацию по мере заполнения формы и радует пользователя галочкой
// и жизнерадостным зеленым цветом, в отличие от красного, который появляется только в конце после нажатия на кнопку
//(Ну и жалко было столько кода выкидывать)

document.querySelector('#userEmail').addEventListener('change', function addFilledEmail(){//Эл.почта

    userEmail.classList.add ('filled');
    document.getElementById('emailRequired').innerHTML = '';

    if (userEmail.value == '') {
        userEmail.classList.remove ('filled');
        userEmail.classList.remove ('input_valid');

    } else if (!emailValid.test(userEmail.value)) {
        userEmail.classList.remove ('input_valid');
        document.getElementById('emailRequired').innerHTML = 'Enter a valid e-mail address';

        } else {
            userEmail.classList.add ('input_valid');
    }

    document.querySelector('#userEmail').value = userEmail.value.trim().toLowerCase();//чтобы лучше смотрелось

    checkAll();
});


document.querySelector('#userPassword').addEventListener('change', function addFilledPassword(){//Пароль

    userPassword.classList.add ('filled');
    document.getElementById('passwordRequired').innerHTML = '';

    if (userPassword.value == '') {
        userPassword.classList.remove ('input_valid');
        userPassword.classList.remove ('filled');

    } else if(!passwordValid.test(userPassword.value)){
        userPassword.classList.remove ('input_valid');
        document.getElementById('passwordRequired').innerHTML = 'Enter a valid password';

    } else {
        userPassword.classList.add ('input_valid');
    };

    checkAll();
});


document.querySelector('#userFirstName').addEventListener('change', function addFilledFirstName(){//Имя

    userFirstName.classList.add ('filled');
    document.getElementById('firstNameRequired').innerHTML = '';

    if (userFirstName.value == '') {
        userFirstName.classList.remove ('input_valid');
        userFirstName.classList.remove ('filled');

    } else if(!nameValid.test(userFirstName.value)){
        userFirstName.classList.remove ('input_valid');
        document.getElementById('firstNameRequired').innerHTML = 'Enter a valid first name';

    } else {
        userFirstName.classList.add ('input_valid');
    };

    document.querySelector('#userFirstName').value = userFirstName.value.trim().toUpperCase();//чтобы везде было одинаково и много кода не писать

    checkAll();
});


document.querySelector('#userLastName').addEventListener('change', function addFilledLastName(){//Фамилия

    userLastName.classList.add ('filled');
    document.getElementById('lastNameRequired').innerHTML = '';

    if (userLastName.value == '') {
        userLastName.classList.remove ('input_valid');
        userLastName.classList.remove ('filled');

    } else if(!nameValid.test(userLastName.value)){
        userLastName.classList.remove ('input_valid');
        document.getElementById('lastNameRequired').innerHTML = 'Enter a valid last name';

    } else {
        userLastName.classList.add ('input_valid');
    };

    document.querySelector('#userLastName').value = userLastName.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userAddress').addEventListener('change', function addFilledAddress(){//Адрес

    userAddress.classList.add ('filled');

    if (userAddress.value != '') {
        userAddress.classList.add ('input_valid');

    } else {
        userAddress.classList.remove ('input_valid');
        userAddress.classList.remove ('filled');
    };

    document.querySelector('#userAddress').value = userAddress.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userPostcode').addEventListener('change', function addFilledPostcode(){//Индекс

    userPostcode.classList.add ('filled');
    document.getElementById('postcodeRequired').innerHTML = '';

    if (userPostcode.value == '') {
        userPostcode.classList.remove ('input_valid');
        userPostcode.classList.remove ('filled');

    } else if(!postcodeValid.test(userPostcode.value)){
        userPostcode.classList.remove ('input_valid');
        document.getElementById('postcodeRequired').innerHTML = 'Enter a valid postcode';

    } else {
        userPostcode.classList.add ('input_valid');
    };

    document.querySelector('#userPostcode').value = userPostcode.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userCity').addEventListener('change', function addFilledCity(){//Город

    userCity.classList.add ('filled');
    document.getElementById('cityRequired').innerHTML = '';

    if (userCity.value == '') {
        userCity.classList.remove ('input_valid');
        userCity.classList.remove ('filled');

    } else if(!nameValid.test(userCity.value)){
        userCity.classList.remove ('input_valid');
        document.getElementById('cityRequired').innerHTML = 'Enter a valid city';

    } else {
        userCity.classList.add ('input_valid');
    };

    document.querySelector('#userCity').value = userCity.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userCountry').addEventListener('change', function addFilledCountry(){//Страна

    userCountry.classList.add ('filled');
    document.getElementById('countryRequired').innerHTML = '';

    if (userCountry.value == '') {
        userCountry.classList.remove ('input_valid');
        userCountry.classList.remove ('filled');

    } else if(!countryValid.test(userCountry.value)){
        userCountry.classList.remove ('input_valid');
        document.getElementById('countryRequired').innerHTML = 'Enter a valid country';

    } else {
        userCountry.classList.add ('input_valid');
    };

    document.querySelector('#userCountry').value = userCountry.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userPhone').addEventListener('change', function addFilledPhone(){//Тел.

    userPhone.classList.add ('filled');
    document.getElementById('phoneRequired').innerHTML = '';

    if (userPhone.value == '') {
        userPhone.classList.remove ('input_valid');
        userPhone.classList.remove ('filled');

    } else if(!phoneValid.test(userPhone.value)){
        userPhone.classList.remove ('input_valid');
        document.getElementById('phoneRequired').innerHTML = 'Enter a valid phone';

    } else {
        userPhone.classList.add ('input_valid');
    };

    checkAll();
});


document.querySelector('#accept').addEventListener('change', function addAccept(){//Согласие с условиями

    if (cb.checked == ''){
        document.getElementById('acceptRequired').innerHTML = 'You must agree to Terms & Conditions and Privacy Policy';
    } else {
        document.getElementById('acceptRequired').innerHTML = '';
    };

    checkAll();
});


//Еще немного остатков предыдущего кода, главным образом нужного для оформительских целей.
//При нажатии "Создать аккаунт" либо выводит поздравление либо подчеркивает красным и ругается под каждым конкретным полем
//Сделала "на изменение", а не "на клик", чтобы не пугать пользователя большим количеством красного с места в карьер

document.querySelector('#fullSteamAhead').addEventListener('click', function addRequired() {

    if(errors.length==0 && cb.checked != ''){//Все ОК, аккаунт создан
        document.getElementById('successMessage').innerHTML = `Congratulations, ${userFirstName.value}!<br>Your new account has been successfully created!`;
    }

    if (userEmail.value == '') {//Нужна эл.почта
        userEmail.classList.remove ('input_valid');
        userEmail.classList.add ('input_error');
        document.getElementById('emailRequired').innerHTML = 'E-mail is required';
    } else {
        document.getElementById('emailRequired').innerHTML = '';
    };

    if (userPassword.value == '') {//Нужен пароль
        userPassword.classList.remove ('input_valid');
        userPassword.classList.add ('input_error');
        document.getElementById('passwordRequired').innerHTML = 'Password is required';
    } else {
        document.getElementById('passwordRequired').innerHTML = '';
    };

    if (userFirstName.value == '') {//Нужно имя
        userFirstName.classList.remove ('input_valid');
        userFirstName.classList.add ('input_error');
        document.getElementById('firstNameRequired').innerHTML = 'First name is required';
    } else {
        document.getElementById('firstNameRequired').innerHTML = '';
    };

    if (userLastName.value == '') {//Нужна фамилия
        userLastName.classList.remove ('input_valid');
        userLastName.classList.add ('input_error');
        document.getElementById('lastNameRequired').innerHTML = 'Last name is required';
    } else {
        document.getElementById('lastNameRequired').innerHTML = '';
    };

    if (userPostcode.value == '') {//Нужен индекс
        userPostcode.classList.remove ('input_valid');
        userPostcode.classList.add ('input_error');
        document.getElementById('postcodeRequired').innerHTML = 'Postcode is required';
    } else {
        document.getElementById('postcodeRequired').innerHTML = '';
    };

    if (userCity.value == '') {//Нужен город
        userCity.classList.remove ('input_valid');
        userCity.classList.add ('input_error');
        document.getElementById('cityRequired').innerHTML = 'City name is required';
    } else {
        document.getElementById('cityRequired').innerHTML = '';
    };

    if (userCountry.value == '') {//Нужна страна
        userCountry.classList.remove ('input_valid');
        userCountry.classList.add ('input_error');
        document.getElementById('countryRequired').innerHTML = 'Country is required';
    } else {
        document.getElementById('countryRequired').innerHTML = '';
    };

    if (userPhone.value == '') {//Нужен тел.
        userPhone.classList.remove ('input_valid');
        userPhone.classList.add ('input_error');
        document.getElementById('phoneRequired').innerHTML = 'Phone is required';
    } else {
        document.getElementById('phoneRequired').innerHTML = '';
    };

    if (cb.checked == '') {//Нужно согласие с условиями
        document.getElementById('acceptRequired').innerHTML = 'You must agree to Terms & Conditions and Privacy Policy';
    } else {
        document.getElementById('acceptRequired').innerHTML = '';
    };

});

/* Для меня, на всякий случай, тест regex
let text = "06.11.12.12.12"; let pattern = /^[- ()+.0-9\s]+$/;
let result = pattern.test(text);
console.log(result)
*/
