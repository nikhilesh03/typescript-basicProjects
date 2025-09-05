let passwordLength = document.getElementById("passwordLength") as HTMLInputElement;
let passwordGenerate = document.querySelector('.buttons') as HTMLButtonElement | null;
let passwordDisplay = document.getElementById('password') as HTMLInputElement;

passwordGenerate?.addEventListener('click', (event) => {
    let password = ''
    const char =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";
    for (let i = 0; i < parseInt(passwordLength.value); i++) {
        const ind = Math.floor(Math.random() * char.length);
        password += char[ind];
    }
    passwordDisplay.value = password;
})