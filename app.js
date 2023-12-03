const nav = document.querySelector('header nav')
window.onscroll = () => {
    if (window.scrollY > 0) {
        nav.classList.add('white')
    }
    else {
        nav.classList.remove('white')
    }
}