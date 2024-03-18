const menuLink = document.querySelectorAll('.menu__link[data-goto]')
if (menuLink.length > 0) {
    menuLink.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.nav').offsetHeight

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
            iconMenu.classList.remove('_active')
            menuWrapper.classList.remove('_active')
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault()
        }
    }
}

const iconMenu = document.querySelector('.burger')
const menuWrapper = document.querySelector('.menu__wrapper')
if(iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuWrapper.classList.toggle('_active')
    })
}