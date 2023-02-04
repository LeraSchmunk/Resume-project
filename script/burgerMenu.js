const btnBurger = document.querySelector('.humburger-menu')
const humbergerMenu = document.querySelector('.header__nav')
    // console.dir(btnBurger)

const toggleMenu = () => {
    btnBurger.classList.toggle('humburger-menu-active');
    humbergerMenu.classList.toggle('header__nav-active')
}

btnBurger.addEventListener('click', () => {
    toggleMenu()
})
humbergerMenu.addEventListener('click', () => {
    toggleMenu()
})