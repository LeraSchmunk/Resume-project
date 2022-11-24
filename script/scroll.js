const anchors = document.querySelectorAll(".header a, .description__links a")
anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault(); //Отмена изначального перехода
        // console.log("скролл")

        const id = this.getAttribute("href").substring(1)
        const elem = document.getElementById(id)

        window.scroll({
            top: elem.offsetTop - 90,
            behavior: 'smooth'
        })
    })
})