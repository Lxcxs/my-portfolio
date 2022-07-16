function animationMenu() {
  const sectionMenu = document.querySelector('.js-mobile')
  const menu = document.querySelector('.js-menu')
  const socialMedia = document.querySelector('.js-social')

  function active() {
    menu.classList.toggle('activeMenu')
    socialMedia.classList.toggle('activeMenu')
    sectionMenu.classList.toggle('activeSmooth')
  }

  sectionMenu.addEventListener('click', active)
}

animationMenu()

function initOpenSmooth() {
  const links = document.querySelectorAll('#js-smooth');
  const skills = document.querySelectorAll('#js-skill');

  setTimeout(() => {
    for (let i = 0; i < links.length; i++) {
        setTimeout(() => {
            links[i].classList.add('activeSmooth')
        }, 200 * i)
    }
  }, 200);

  setTimeout(() => {
    for (let i = 0; i < skills.length; i++) {
        setTimeout(() => {
            skills[i].classList.add('activeSmooth')
        }, 200 * i)
    }
  }, 800);

  
}
initOpenSmooth();

function initLetter() {
  const texto = document.querySelector('#js-letter');
  const textArr = Array.from(texto.innerText);
  texto.innerText = '';
  console.log(texto)

  setTimeout(() => {
      for (let i = 0; i < textArr.length; i++) {
          setTimeout(() => {
              texto.innerHTML += textArr[i];
          }, 150 * i)
      }
  }, 200)
}
// initLetter();