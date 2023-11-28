const increBtn = document.getElementById('increase')
const decreBtn = document.getElementById('decrease')
const quantityEL = document.getElementById('quantity')
const actionBtn = document.getElementById('actionBtn')
const cartIcon = document.querySelector('.cart-icon')

const menu = document.querySelector(".mobile-nav-items")
const hamburger = document.querySelector('.hamburger-menu')
const closeBtn = document.querySelector('.close-btn')
const menuItems = document.querySelectorAll('.menu_item')
const menuBtn = document.querySelector(".mobile-nav")

const leftArw = document.querySelector(".left")
const rightArw = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".slide")
const length = images.length;
const slideWidth = 100;



let activeCount = 0;
let slideNumber = 1;

increBtn.addEventListener('click', () => {
    activeCount++;
    quantityEL.innerText = activeCount;
})

decreBtn.addEventListener('click', () => {
    if(activeCount > 0) {
        activeCount--;
        quantityEL.innerText = activeCount;
    }
    
})

cartIcon.addEventListener('click', toggleCart);

function toggleCart() {
    const cartContent = document.querySelector('.overlay-box')

    if (cartContent.classList.contains('d-block')) {
        cartContent.classList.remove('d-block')
        cartContent.classList.remove('height')
    } else {
        cartContent.classList.add('d-block')
        cartContent.classList.add('height')
        
    }
}

const empCart = document.querySelector('.emptyCart')
const actCart = document.querySelector('.activeCart')
const itemDet = document.querySelector('.itemDetails')
const price = 125; // Set your default price

function displayCart() {
  let total = 0;

  if (activeCount > 0) {
    toggleCart()
    empCart.classList.remove('show')
    actCart.classList.add('show')

    // Calculate the total based on the quantity and price
    const quantity = activeCount; // Assign activeCount to quantity
    const total = price * quantity

    itemDet.innerHTML = 
    `
      <div class="price-details">
        <p>Fall Limited Edition Sneakers</p>
        $ ${price}.00 x <span>${quantity}</span> <span id="total">$ ${total}.00</span>
      </div>
    `
  } else {
    // If activeCount is less than 1 or if the value is not defined, hide the activeCart and show the emptyCart.
    actCart.classList.remove('show')
    empCart.classList.add('show')
    toggleCart()
  }
}

actionBtn.addEventListener('click', () => {
  displayCart();
});


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeBtn.style.display = "none";
      hamburger.style.display = "block";
  } else {
      menu.classList.add("showMenu");
      closeBtn.style.display = "block";
      hamburger.style.display = "none";
  }
}

menuBtn.addEventListener("click", toggleMenu);

  
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * slideWidth}%)`;  
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * slideWidth}%)`;  
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * slideWidth}%)`;
  slideNumber = length;
};

rightArw.addEventListener('click', () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
})

leftArw.addEventListener('click', () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
})