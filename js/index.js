const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//========== NAV BAR =============

//appending new items to the end of the nav

const newNavItem1 = document.createElement('a');
const newNavItem2 = document.createElement('a');

newNavItem1.href = '#';
newNavItem2.href = '#';

newNavItem1.textContent = 'COOL';
newNavItem2.textContent = 'BEANS';

const parentToNavItems = document.querySelector('nav');

parentToNavItems.prepend(newNavItem1);
parentToNavItems.appendChild(newNavItem2);




//including our nav items into our doc via the object

const secondNavItem = document.querySelector('a:nth-of-type(2)');
const thirdNavItem = document.querySelector('a:nth-of-type(3)');
const fourthNavItem = document.querySelector('a:nth-of-type(4)');
const fifthNavItem = document.querySelector('a:nth-of-type(5)');
const sixthNavItem = document.querySelector('a:nth-of-type(6)');

secondNavItem.textContent = siteContent.nav["nav-item-1"];
thirdNavItem.textContent = siteContent.nav["nav-item-2"];
fourthNavItem.textContent = siteContent.nav["nav-item-4"];
fifthNavItem.textContent = siteContent.nav["nav-item-5"];
sixthNavItem.textContent = siteContent.nav["nav-item-6"];


//change color of nav text to green

const navItems = document.querySelectorAll('a');
navItems.forEach( item => item.style.color = 'green' );





//========= FIRST SECTION / CTA ==========

const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const firstImage = document.querySelector('#cta-img');

h1.textContent = siteContent.cta.h1;
button.textContent = siteContent.cta.button;
firstImage.src = siteContent.cta["img-src"];


//stretch goal, add event to button that manipulates the dom on click

const zaksAwesome = () => {
  h1.textContent = 'But Zak is way more awesome';
}

button.addEventListener('click', zaksAwesome);




//======== MAIN CONTENT ========

//top content
const featureH4 = document.querySelector('.top-content .text-content:first-of-type h4');
const featureP = document.querySelector('.top-content .text-content:first-of-type p');

const aboutH4 = document.querySelector('.top-content .text-content:last-of-type h4');
const aboutP = document.querySelector('.top-content .text-content:last-of-type p');


featureH4.textContent = siteContent["main-content"]["features-h4"];
featureP.textContent = siteContent["main-content"]["features-content"];

aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutP.textContent = siteContent["main-content"]["about-content"]

//Add image to main content

const middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];

//bottom content

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesP = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');

const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const productP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');

const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');


servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesP.textContent = siteContent["main-content"]["services-content"];

productH4.textContent = siteContent["main-content"]["product-h4"];
productP.textContent = siteContent["main-content"]["product-content"];

visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionP.textContent = siteContent["main-content"]["vision-content"];

//mouseover event for vision

visionH4.addEventListener('mouseover', function(){
  visionH4.textContent = "Seriously, hes pretty cool";
})




//====== contact =======

const contactH4 = document.querySelector('.contact h4');
const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
const contactPhone = document.querySelector('.contact p:nth-of-type(2)');
const contactEmail = document.querySelector('.contact p:last-of-type');

contactH4.textContent = siteContent["contact"]["contact-h4"];
contactAddress.textContent = siteContent.contact.address;
contactPhone.textContent = siteContent.contact.phone;
contactEmail.textContent = siteContent.contact.email;