let crono
let number = 0
let h1 = document.querySelector("h1")

start = () => {
    crono = setInterval(() => {
        number++
        h1.innerHTML = number
    }, 1000);
}

reset = () => {
    number = 0
    h1.innerHTML = number
}

stop = () => {
    clearInterval(crono)
}