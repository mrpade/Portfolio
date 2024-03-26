let nextBtn = document.querySelector('#next');
let slider = document.querySelector('.slider');
let image = document.querySelector('#image1');

/*nextBtn.addEventListener('click', () => {
    let sliderPosition = slider.getBoundingClientRect();
    let sliderXPosition = sliderPosition.left;
    let imageWidth = image.getBoundingClientRect().width;
    slider.style.transform = `translateX(${sliderXPosition - 380}px)`;
})*/

nextBtn.addEventListener('click', () => {
    let imageWidth = image.getBoundingClientRect().width;
    slider.scrollLeft += 300;
})