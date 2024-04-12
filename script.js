let tarolo = document.getElementById("container")

let betoltKepek = async function() {
    return (await (await fetch("/lista.txt")).text()).trim().split("\n")
}

let betoltott = await betoltKepek()
for (let index = 0; index < betoltott.length; index++) {
    let kartya = document.createElement("div")
    let kep = document.createElement("img")
    kartya.classList.add("kartya")
    kep.classList.add("kep-main")
    kep.src = `images/${betoltott[index]}`
    kartya.appendChild(kep)
    tarolo.appendChild(kartya)
}

window.addEventListener("resize", () => {
    let valasztott = "kep1"
    if (window.matchMedia("min-width: 1280px").matches) {
        valasztott = "kep3"
    } else if (window.matchMedia("min-width: 768px").matches) {
        valasztott = "kep2"
    }
    let query = document.querySelectorAll(".kartya img")
    for (let index = 0; index < query.length; index++) {
        query[index].classList.remove("kep1")
        query[index].classList.remove("kep2")
        query[index].classList.remove("kep3")
        query[index].classList.add(valasztott)
    }
})