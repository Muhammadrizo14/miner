document.querySelector('.copy__icon').addEventListener('click', () => {
  navigator.clipboard.writeText('https://etheriums.online/?bonus=24655');
})


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