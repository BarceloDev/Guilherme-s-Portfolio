/*================
NAVBAR
================*/

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", (event) => {
  event.stopPropagation(); // prevents immediate close
  navMenu.classList.toggle("active");
});

// Prevent clicks inside the menu from closing it
navMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Click anywhere else closes the menu
document.addEventListener("click", () => {
  navMenu.classList.remove("active");
});


/*================
FORM
================*/

feather.replace();

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            
            document.getElementById('cookieConsent').style.display = 'flex';

            
            window.aceitarCookies = function () {
                document.getElementById('cookieConsent').style.display = 'none';
            };

        
            document.querySelector('.contact-form').addEventListener('submit', function (event) {
                const email = document.getElementById('email').value;
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {
                    alert('Por favor, insira um e-mail válido.');
                    event.preventDefault();
                }
            });
        });
        
        
/*===================
FOOTER
===================*/

var getYear = new Date();
var year = getYear.getFullYear();
var span = document.getElementById('year')

span.textContent = `${year}`
