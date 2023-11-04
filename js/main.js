let profileImage = document.querySelector('.profile__image'),
  auth = document.querySelector('.auth')
sidebar = document.querySelector('.sidebar')
burgerMenuButton = document.querySelector('.burger__menu')
getMoney = document.querySelector('.get__money')
popup = document.querySelectorAll('.popup')
getMoneyContent = document.querySelector('.getMoneyContent')
authContent = document.querySelector('.auth__content')
ethWalletRub = document.querySelector('.eth__wallet__rub')

window.onload = () => {
  document.querySelector('#preloader').style.display = 'none'
}




auth.addEventListener('click', () => {
  auth.style.display = 'none'
  popup.forEach((i) => {
    i.style.display = 'none'
  })
  StopScroll(true)
})


profileImage.addEventListener('click', () => {
  auth.style.display = 'block'
  authContent.style.display = 'flex'
  StopScroll(false)
})


function StopScroll(scroll) {
  if (scroll === true) {
    document.querySelector('body').style.overflow = 'auto'
  } else if (scroll === false) {
    document.querySelector('body').style.overflow = 'hidden'
  }
}



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
  if (sidebar.style.left === '0px') {
    // if burger menu if close
    sidebar.style.left = '-100%'
    StopScroll(true)
  } else if (sidebar.style.left === '-100%') {
    // if burger menu open
    sidebar.style.left = '0'
    StopScroll(false)
  }
})


getMoney.addEventListener('click', () => {
  auth.style.display = 'block'
  StopScroll(false)
  getMoneyContent.style.display = 'block'
})


// ethWalletRub.addEventListener('mouseenter', () => {
//   ethWalletRub.style.padding = '6px'
//   ethWalletRub.style.width = '260px'
//
//   setTimeout(() => {
//     ethWalletRub.querySelector('.get__money').style.width = 'fit-content'
//     ethWalletRub.querySelector('.get__money').style.opacity = '1'
//     ethWalletRub.querySelector('.get__money').style.padding = '4px 28px'
//   }, 200);
// })
//
//
// ethWalletRub.addEventListener('mouseleave', () => {
//   ethWalletRub.querySelector('.get__money').style.width = '0px'
//   ethWalletRub.querySelector('.get__money').style.opacity = '0'
//   ethWalletRub.querySelector('.get__money').style.padding = '0px 0px'
//
//   setTimeout(() => {
//     ethWalletRub.style.padding = '6px'
//     ethWalletRub.style.width = '173px'
//   }, 200);
// })