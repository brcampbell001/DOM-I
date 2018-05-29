const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo

// Images

const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const midImg = document.getElementById("middle-img");
midImg.setAttribute("alt", "");
midImg.setAttribute("src", siteContent["main-content"]["middle-image-src"]);

// Navigation


const navBar = document.getElementsByTagName("a");
navBar[0].innerHTML = siteContent["nav"]["nav-item-1"];
navBar[1].innerHTML = siteContent["nav"]["nav-item-2"];
navBar[2].innerHTML = siteContent["nav"]["nav-item-3"];
navBar[3].innerHTML = siteContent["nav"]["nav-item-4"];
navBar[4].innerHTML = siteContent["nav"]["nav-item-5"];
navBar[5].innerHTML = siteContent["nav"]["nav-item-6"];

// Create links

const nav = document.querySelector("nav");
const a1 = document.createElement("a");
a1.setAttribute("href", "#");
a1.innerHTML = "Home";
nav.prepend(a1);

const a2 = document.createElement("a");
a2.setAttribute("href", "#");
a2.innerHTML = "End";
nav.append(a2);

// CTA

const ctaText = document.getElementsByTagName("h1");
ctaText[0].innerHTML = siteContent["cta"]["h1"];

const ctaButton = document.getElementsByTagName("button");
ctaButton[0].innerHTML = siteContent["cta"]["button"];

// Main Titles

const mainTitle = document.getElementsByTagName("h4");
mainTitle[0].innerText = "Features";
mainTitle[1].innerText = "About";
mainTitle[2].innerText = "Services";
mainTitle[3].innerText = "Product";
mainTitle[4].innerText = "Vision";

// Main Content

const mainContent = document.getElementsByTagName("p");
mainContent[0].innerText = siteContent["main-content"]["features-content"];
mainContent[1].innerText = siteContent["main-content"]["about-content"];
mainContent[2].innerText = siteContent["main-content"]["services-content"];
mainContent[3].innerText = siteContent["main-content"]["product-content"];
mainContent[4].innerText = siteContent["main-content"]["vision-content"];

// Contact Title

const contactTitle = document.getElementsByTagName("h4");
contactTitle[5].innerHTML = siteContent["contact"]["contact-h4"];

// Contact Content

const contactContent = document.getElementsByTagName("p");
contactContent[5].innerHTML = siteContent["contact"]["address"];
contactContent[6].innerHTML = siteContent["contact"]["phone"];
contactContent[7].innerHTML = siteContent["contact"]["email"];

//Footer

const footer = document.getElementsByTagName("p");
contactContent[8].innerHTML = siteContent["footer"]["copyright"];
