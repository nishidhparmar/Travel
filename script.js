const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')
const navlist = document.querySelector('.navlist')
const header = document.querySelector('.header')
const home = document.querySelector('.home')
const up = document.querySelector('.up')


console.log(navlist);
menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('active')

})
window.addEventListener('scroll', (e) => {
    header.classList.toggle('active', window.scrollY > 50)
})
window.addEventListener('scroll', (e) => {
    up.classList.toggle('active', window.scrollY > 200)
})
window.addEventListener('scroll', (e) => {
    home.classList.toggle('scroll', window.scrollY > 300)
})

document.addEventListener('click', (e) => {
    if (e.target != navlist && e.target != menu) {
        navbar.classList.remove('active')
        menu.classList.remove('active')
    }

})