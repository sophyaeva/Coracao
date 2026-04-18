const ui = document.getElementById("ui");

//fórula do coração
function heart(t) {
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) 
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);
    return { x, y };
}
let total=400;

for (let i = 0; i < total; i++) {
    let t = Math.PI * 2 * (i / total);
    let pos = heart(t);

    let span = document.createElement("span");
    span.className = "love_word love_horizontal";
    span.innerText = "I LOVE YOU";

    span.style.left =(window.innerWidth / 2 + pos.x * 12) + "px";
    span.style.top = (window.innerHeight / 2 - pos.y * 12) + "px";

    span.style.setProperty("--i", i);

    ui.appendChild(span);
}