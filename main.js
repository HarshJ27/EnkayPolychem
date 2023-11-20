// select element function
const selectElement = function(element){
    return document.querySelector(element)

};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');

});
// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.animate-left',{
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 100

});
sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 100
});

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 100
  
});
sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 100
});


const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    if (currentIndex < carouselSlides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(currentIndex);
function sendEmail() {
    (function () {
        emailjs.init("PYDjk0CGgafNzQG_E");
     })();
    var params = {
        from_name: document.getElementById("name").value,
        contact:document.getElementById("number").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value,
    }

    

    emailjs.send("service_dqo1vvf","template_af2ymc8",params).then(window.alert('email has been sent'));

}
function sendEmail2(){
    (function () {
        emailjs.init("PYDjk0CGgafNzQG_E");
     })();
     var params = {
        from_name: document.getElementById("dropmail").value,
        reply_to: "rayush237@gmail.com",
    }
    emailjs.send("service_dqo1vvf","template_sl00nbi",params).then(window.alert('email has been sent'));
}