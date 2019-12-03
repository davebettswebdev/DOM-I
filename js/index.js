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

let codeImg = document.getElementById("cta-img");
  codeImg.setAttribute('src', siteContent["cta"]["img-src"])

let codeMiddleImg = document.getElementById("middle-img");
  codeMiddleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navLinks = document.getElementsByTagName("a");
  navLinks[0].innerHTML = siteContent["nav"]["nav-item-1"]
  navLinks[1].innerHTML = siteContent["nav"]["nav-item-2"]
  navLinks[2].innerHTML = siteContent["nav"]["nav-item-3"]
  navLinks[3].innerHTML = siteContent["nav"]["nav-item-4"]
  navLinks[4].innerHTML = siteContent["nav"]["nav-item-5"]
  navLinks[5].innerHTML = siteContent["nav"]["nav-item-6"]

let navigation = document.querySelector('nav');
let newOne = document.createElement('a');
  newOne.setAttribute('href', '#');
  newOne.innerHTML = 'New One';
  navigation.prepend(newOne);

let newTwo = document.createElement('a');
  newTwo.setAttribute('href', '#');
  newTwo.innerHTML = 'New Two';
  navigation.appendChild(newTwo);

for (let i = 0; i <navLinks.length; i++){
  navLinks[i].style.color = "green";
}

let ctaText = document.getElementsByTagName('h1');
  ctaText[0].innerHTML = siteContent['cta']['h1']

  for (let i = 0; i <ctaText.length; i++){
    ctaText[i].style.color = "red";
  }

let ctaButton = document.getElementsByTagName('button');
  ctaButton[0].innerHTML = siteContent['cta']['button']

let mainHeader = document.getElementsByTagName('h4');
  mainHeader[0].innerHTML = siteContent['main-content']['features-h4']
  mainHeader[1].innerHTML = siteContent['main-content']['about-h4']
  mainHeader[2].innerHTML = siteContent['main-content']['services-h4']
  mainHeader[3].innerHTML = siteContent['main-content']['product-h4']
  mainHeader[4].innerHTML = siteContent['main-content']['vision-h4']

let mainText = document.getElementsByTagName('p');
  mainText[0].innerHTML = siteContent['main-content']['features-content']
  mainText[1].innerHTML = siteContent['main-content']['about-content']
  mainText[2].innerHTML = siteContent['main-content']['services-content']
  mainText[3].innerHTML = siteContent['main-content']['product-content']
  mainText[4].innerHTML = siteContent['main-content']['vision-content']

  for (let i = 0; i <mainText.length; i++){
    mainText[i].style.color = "blue";
    mainText[i].style.fontFamily = "timesnewroman";
  }

let contactHeader = document.getElementsByTagName('h4');
  contactHeader[5].innerHTML = siteContent['contact']['contact-h4']

let contactText = document.getElementsByTagName('p');
  contactText[5].innerHTML = siteContent['contact']['address']
  contactText[6].innerHTML = siteContent['contact']['phone']
  contactText[7].innerHTML = siteContent['contact']['email']

let footerText = document.getElementsByTagName('p');
  footerText[8].innerHTML = siteContent['footer']['copyright']
















