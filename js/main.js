let sidebar = document.querySelector('.sidebar')
let burgerMenuButton = document.querySelector('.burger__menu')



window.onload = () => {
  document.querySelector('#preloader').style.display = 'none'
}


let profileImage = document.querySelector('.profile__image'),
auth = document.querySelector('.auth'),
authContent = document.querySelector('.auth__content')

auth.addEventListener('click',()=> {
  auth.style.display = 'none'
  authContent.style.display = 'none'
})


profileImage.addEventListener('click', ()=> {
  auth.style.display = 'block'
  authContent.style.display = 'flex'
})



function myFunction(x) {
  if (x.matches) { // If media query matches
    sidebar.style.left = "-100%";
  } else {
    sidebar.style.left = "0";
  }
}

var x = window.matchMedia("(max-width: 1152px)")
myFunction(x) 

//Burger Menu
burgerMenuButton.addEventListener('click', () => {
  console.log(sidebar.style.left);
  if (sidebar.style.left === '0px') {
    // if burger menu if close
    sidebar.style.left = '-100%'
    document.querySelector('body').style.overflow = 'scroll'
  } else if (sidebar.style.left === '-100%') {
    // if burger menu open
    sidebar.style.left = '0'
    document.querySelector('body').style.overflow = 'hidden'
  }
})