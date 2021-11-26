const scaleFactor = 1 / 20;

function toggleModal() {
  document.body.classList.toggle('modal--open');
}

function toggleContrast() {
  document.body.classList.toggle('dark-theme');
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  
  emailjs.sendForm(
    'service_a8u4ro4', 
    'template_w9n32qk', 
    event.target,
    'user_KIiQm8iGq366DwEw61uI0'
).then(() => {
loading.classList.remove('modal__overlay--visible');
success.classList += ' modal__overlay--visible';
}).catch(() => {
    loading.classList.remove('modal__overlay--visible');
    alert(
        'The email service is temporarily unavailable. Please contact me directly on yhajiali7@gmail.com'
    );
})  
}

