"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
let count = 0;
function updateCounter() {
    counter.textContent = count.toString();
}
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});
decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});
resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});
//# sourceMappingURL=app.js.map