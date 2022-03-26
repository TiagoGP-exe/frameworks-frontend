const date = new Date();
const year = date.getFullYear();
const yearCopyright = document.querySelector("#copy");

console.log(year);

yearCopyright.textContent = `${year}`;
