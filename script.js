
let result = document.querySelector("h2");
let btn = document.querySelector("button");
btn.addEventListener('click', () => {
    result.textContent = Math.trunc(Math.random() * 1000 + 1);
    result.style.color="#D3E4CD"
});