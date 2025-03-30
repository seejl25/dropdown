function visibility() {
    const ul = document.querySelector("ul");
    ul.style.visibility = "hidden";
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        if (ul.style.visibility === "hidden"){
            ul.style.visibility = "visible";
        } else {
            ul.style.visibility = "hidden";
        }
    })
}
visibility()

moddule.exports = visibility