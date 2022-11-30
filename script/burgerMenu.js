function burgerMenu() {
    const menuBtn = document.getElementById('burger-menu')
    const window = document.getElementById('menu-window')

    menuBtn.addEventListener('click', menu);

    function menu(e) {
        e.preventDefault();
        menu.classList.toggle("open")
            // console.log('меню')
    }
}

burgerMenu()