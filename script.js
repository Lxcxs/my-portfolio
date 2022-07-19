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
  const sections = document.querySelectorAll('.content');
  console.log(sections)

  setTimeout(() => {
    for (let i = 0; i < links.length; i++) {
        setTimeout(() => {
            links[i].classList.add('activeSmooth')
        }, 350 * i)
    }
  }, 500);

  setTimeout(() => {
    for (let i = 0; i < skills.length; i++) {
        setTimeout(() => {
            skills[i].classList.add('activeSmooth')
        }, 300 * i)
    }
  }, 1500);

  setTimeout(() => {
    for (let i = 0; i < sections.length; i++) {
      setTimeout(() => {
        sections[i].classList.add('activeSmooth')
      }, 500 * i)
    }
  }, 1000)

  
}
initOpenSmooth();

function openEmail() {
  const email = document.querySelector('.email');
  const li = document.querySelector('#emailover');

  li.addEventListener('mouseover', () => {
    email.classList.add('ativo');
  });
  li.addEventListener('mouseout', () => {
    email.classList.remove('ativo');
  });
}
openEmail();
