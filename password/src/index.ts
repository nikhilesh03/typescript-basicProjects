const inp = document.getElementById('password') as HTMLInputElement | null;
const btn = document.getElementById('toggleVisibility') as HTMLButtonElement | null;

if (inp && btn) {
    btn.textContent = '👁️'; // Initial icon
    btn.addEventListener('click', () => {
        if (inp.type === 'password') {
            inp.type = 'text';
            btn.textContent = '🙈';
        } else {
            inp.type = 'password';
            btn.textContent = '👁️';
        }
    });
}
