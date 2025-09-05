var passwordLength = document.getElementById("passwordLength");
var passwordGenerate = document.querySelector('.buttons');
var passwordDisplay = document.getElementById('password');
passwordGenerate === null || passwordGenerate === void 0 ? void 0 : passwordGenerate.addEventListener('click', function (event) {
    var password = '';
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";
    for (var i = 0; i < parseInt(passwordLength.value); i++) {
        var ind = Math.floor(Math.random() * char.length);
        password += char[ind];
    }
    passwordDisplay.value = password;
});
