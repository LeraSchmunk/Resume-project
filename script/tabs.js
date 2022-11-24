const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");



// Функция скрывает tabs и убирает active у кнопок
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

// Функция показывает переданный номер tab и делает соответствующую ему кнопку активной
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));



hideTabs();
showTab(1);