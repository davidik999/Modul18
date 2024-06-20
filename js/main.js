var slides = document.querySelectorAll('#completedproject__slides .completedproject__slide');
var prevButton = document.querySelector('.completed__buttonsleft');
var nextButton = document.querySelector('.completed__buttonsright');
var slideCount = slides.length;
let slideIndex = 0;
var indicator = document.querySelectorAll('.completed__slidenow');
var textnavigate = document.querySelectorAll('.completedproject__navli');

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    indicator[slideIndex].className = 'completed__slidenow';
    textnavigate[slideIndex].className = 'completedproject__navli';
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    indicator[slideIndex].className='completed__slidenow completed__slidenowactive';
    textnavigate[slideIndex].className = 'completedproject__navli completedproject__navliactive';
    updateSlider();
}

  // Функция для показа следующего слайда
function showNextSlide() {
    indicator[slideIndex].className = 'completed__slidenow';
    textnavigate[slideIndex].className = 'completedproject__navli';
    slideIndex = (slideIndex + 1) % slideCount;
    indicator[slideIndex].className='completed__slidenow completed__slidenowactive';
    textnavigate[slideIndex].className = 'completedproject__navli completedproject__navliactive';
    updateSlider();
}

  // Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
/*         indicator[slideIndex].className = 'completed__slidenow'; */
      }
    });
}
function showAdmiral() {
  indicator[slideIndex].className = 'completed__slidenow';
  textnavigate[slideIndex].className = 'completedproject__navli';
  slideIndex = 0;
  indicator[slideIndex].className='completed__slidenow completed__slidenowactive';
  textnavigate[slideIndex].className = 'completedproject__navli completedproject__navliactive';
  updateSlider();
}
function showSochi() {
  indicator[slideIndex].className = 'completed__slidenow';
  textnavigate[slideIndex].className = 'completedproject__navli';
  slideIndex = 1;
  indicator[slideIndex].className='completed__slidenow completed__slidenowactive';
  textnavigate[slideIndex].className = 'completedproject__navli completedproject__navliactive';
  updateSlider();
}
function showPatriotic() {
  indicator[slideIndex].className = 'completed__slidenow';
  textnavigate[slideIndex].className = 'completedproject__navli';
  slideIndex = 2;
  indicator[slideIndex].className='completed__slidenow completed__slidenowactive';
  textnavigate[slideIndex].className = 'completedproject__navli completedproject__navliactive';
  updateSlider();
}
updateSlider();

// нижний мобильный слайдер
var slidesbottom = document.querySelectorAll('#realize__slides .realize__slide');
var prevButtonslidesbottom = document.querySelector('.realize__buttonsleft');
var nextButtonslidesbottom = document.querySelector('.realize__buttonsright');
var slideCountslidesbottom = slidesbottom.length;
let slideIndexslidesbottom = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonslidesbottom.addEventListener('click', showPreviousSlideBottom);
nextButtonslidesbottom.addEventListener('click', showNextSlideBottom);

// Функция для показа предыдущего слайда
function showPreviousSlideBottom() {
    slideIndexslidesbottom = (slideIndexslidesbottom - 1 + slideCountslidesbottom) % slideCountslidesbottom;
    updateSliderBottom();
}

  // Функция для показа следующего слайда
function showNextSlideBottom() {
    slideIndexslidesbottom = (slideIndexslidesbottom + 1) % slideCountslidesbottom;
    updateSliderBottom();
}

  // Функция для обновления отображения слайдера
function updateSliderBottom() {
    slidesbottom.forEach((slide, index) => {
      if (index === slideIndexslidesbottom) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
}
updateSliderBottom();

//слайдер для секции Realize

let navLinksdesktop = document.querySelectorAll("#realize__typelist .realize__typeli");
let slidesdesktop = document.querySelectorAll("#realize__slidesdesk .realize__slidesdeskli");
let maxZIndexdesktop = navLinksdesktop.length;
slidesdesktop[0].classList.add("slidesdeskliactive");
navLinksdesktop[0].classList.add("realize__typeliactive");

navLinksdesktop.forEach((navLink, activeIndex) => {

  navLink.addEventListener("click", (event) => {
    // nav-link
    // console.log(activeIndex);
    navLinksdesktop.forEach(navLink => navLink.classList.remove("realize__typeliactive"));
    navLink.classList.add("realize__typeliactive");
    // slide
    let currentSlide = document.querySelector(".slidesdeskliactive");
     let slideFadeOut = currentSlide.animate(
      [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(5%)", opacity: 0 }
      ],
      {
        duration: 600,
        easing: "ease-in",
        fill: "forwards"
      }
    );
    slideFadeOut.onfinish = () => {
      slidesdesktop.forEach(slide => slide.classList.remove("slidesdeskliactive"));
      let activeSlide = slidesdesktop[activeIndex];
      activeSlide.classList.add("slidesdeskliactive");
      activeSlide.animate(
        [
          {
            transform: "translateX(5%)",
            opacity: 0
          },
          {
            transform: "translateX(0)",
            opacity: 1
          }
        ],
        { duration: 600, easing: "ease-out", fill: "forwards" }
      );
    };
    // overlay
  });
});
