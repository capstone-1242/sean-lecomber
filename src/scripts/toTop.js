let toTop = document.getElementById('to-top')
toTop.classList.add('hidden')
window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        toTop.classList.remove('hidden')
        toTop.classList.add('block')
    } else{
        toTop.classList.remove('block')
        toTop.classList.add('hidden')
    }
})

toTop.onclick = function () {
    window.scrollTo({
        top: 0
    })
}