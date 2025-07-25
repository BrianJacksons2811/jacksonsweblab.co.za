// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector(link.getAttribute('href')).scrollIntoView({ 
      behavior:'smooth'
    });
  });
});

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
  }

  document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    

    document.body.classList.toggle('no-scroll');
  });
  
  
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
});


// Back to Top button functionality
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 20px';
backToTop.style.background = '#ff9900';
backToTop.style.color = '#fff';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '5px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = 1000;

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior:'smooth' });
});

window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);

//contact form error and success message//

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(form);
    const action = form.action;

    try {
      const response = await fetch(action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.innerHTML = "✅ Message sent successfully!";
        status.style.color = "#00ff99";
        form.reset();
      } else {
        status.innerHTML = "❌ Oops! Something went wrong. Try again.";
        status.style.color = "#ff4444";
      }
    } catch (error) {
      status.innerHTML = "❌ Network error. Please try again.";
      status.style.color = "#ff4444";
    }
  }

  form.addEventListener("submit", handleSubmit);
//quote page//

 document.addEventListener("DOMContentLoaded", function () {
      emailjs.init("YOUR_EMAILJS_USER_ID");

      document.getElementById("quote-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const form = this;
        const status = document.getElementById("form-status");

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
          .then(() => {
            status.textContent = "✅ Your quote request has been sent successfully!";
            form.reset();
          }, (error) => {
            status.textContent = "❌ Failed to send. Please try again.";
            console.error(error);
          });
      });
    });