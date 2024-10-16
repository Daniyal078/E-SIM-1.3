


document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.mask').style.display = 'block'
})

document.querySelector('.nav-close').addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.remove('show')
    document.querySelector('.mask').style.display = 'none'
})




document.querySelector('.mob-search-tog').addEventListener('click', () => {
    document.querySelector('.mob-search').style.top = '0'
    document.querySelector('.mask').style.display = 'block'
})
document.querySelector('.mob-search-cut').addEventListener('click', () => {
    document.querySelector('.mob-search').style.top = '-100%'
    document.querySelector('.mask').style.display = 'none'
})


document.querySelector('.mask').addEventListener('click', () => {
    document.querySelector('.mask').style.display = 'none'
    document.querySelector('.navbar-collapse').classList.remove('show')
    document.querySelector('.mob-search').style.top = '-100%'
})








