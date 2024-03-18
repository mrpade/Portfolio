let menuItem = document.querySelectorAll(".menu-item");
let section = document.querySelectorAll(".section");
let aboutMe = document.getElementById('about-me');
let navBtn = document.querySelectorAll('.btn');

let contacts = document.querySelector('.contacts');
let contactsCloseBtn = document.querySelector('.close-btn');
let contactsButton = document.querySelector('#contacts-btn');
let socialsButton = document.querySelector('#socials-btn');
let portfolioButton = document.querySelector('#portfolio-btn');

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    menuItem.forEach((item) => {
      item.classList.remove("menu-item-active");
    });
    item.classList.add("menu-item-active");
    aboutMe.style.transform = 'translateY(-100%)';
    aboutMe.style.display = 'none';
    
    section.forEach(section => {
      section.classList.remove('section-active')
    })
    let id = item.getAttribute('data-id');
    let activeSection = Array.from(section).filter(section => {
      return section.dataset.id === id
    })
    activeSection.forEach(section => {
      section.classList.add('section-active');
    })
  });
});

navBtn.forEach(element => {
  element.addEventListener('click', () => {
    navBtn.forEach(element => {
      element.classList.remove('btn-active');
    })
    element.classList.add('btn-active');
  })
})

contactsButton.addEventListener('click', ()=>{
  contacts.style.opacity = '1';
  contacts.style.visibility = 'visible';
  contacts.style.transform = 'translateY(0)';
})
contactsCloseBtn.addEventListener('click', () => {
  contacts.style.opacity = '0';
  contacts.style.visibility = 'hidden';
  contacts.style.transform = 'translateY(100%)';
  contactsButton.classList.remove('btn-active');
  portfolioButton.classList.add('btn-active');
})