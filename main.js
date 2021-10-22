const hamburger = document.getElementById('hamburger')
const nav = document.querySelector('nav')
const anchor = document.querySelectorAll('a')
const header = document.querySelector('header')
const arrow = document.getElementById('arrow')

const show = () =>{
    hamburger.src = './assets/icons/icon-hamburger-close.svg'
    nav.classList.add('toggle')
}

const hide = () =>{
    hamburger.src = './assets/icons/icon-hamburger.svg'
    nav.classList.remove('toggle')
}

const toggle = () => {
    if(hamburger.attributes.src.value === './assets/icons/icon-hamburger-close.svg'){
        hide()
    }else{
        show()
    }
}

const arrowClick = () =>{
    window.scrollTo(0,header.scrollHeight)
    console.log('hola')
}

document.addEventListener('scroll',hide)
anchor.forEach(e=>e.addEventListener('click',hide))
arrow.addEventListener('click',arrowClick)

console.log()
