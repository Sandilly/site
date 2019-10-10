import Home from './views/pages/Home.js';
import About from './views/pages/About.js';
import Error404 from './views/pages/Error404.js';
import PostShow from './views/pages/PostShow.js';
import Contact from '/views/pages/Contact.js';

import Navigation from './views/components/Navigation.js';
import Footer  from './views/components/Footer.js';

import Utils from './services/Utils.js'
;

const routes = {
    '/' : Home,
    '/about' : About,
    '/p/:id' : PostShow,
    '/contact' : Contact
};

const router = async() => {
    const headerContainer = null || document.getElementById("header");
    const contentContainer = null || document.getElementById("page");
    const footerContainer = null || document.getElementById("footer");

    headerContainer.innerHTML = await Navigation.render();
    await Navigation.afterRender();
    footerContainer.innerHTML = await Footer.render();
    await Footer.afterRender();

    let req = Utils.parseReqUrl();
    let parsedURL = (req.resource ? '/' + req.resource : '/') + (req.id ? '/:id' : '') + (req.verb ? '/' + req.verb : '')
    let page = routes[parsedURL] ? routes[parsedURL] : Error404;

    contentContainer.innerHTML = await page.render();
    await page.afterRender();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);



// // List of supported routes. Any url other than these routes will throw a 404 error
// const routes = {
//     '/'             : Home
//     , '/about'      : About
//     , '/p/:id'      : PostShow
//     , '/register'   : Register
// };


// // The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
// const router = async () => {

//     // Lazy load view element:
//     const content = null || document.getElementById('page_container');

//     // Get the parsed URl from the addressbar
//     let request = Utils.parseRequestURL()

//     // Parse the URL and if it has an id part, change it with the string ":id"
//     let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

//     // Get the page from our hash of supported routes.
//     // If the parsed URL is not in our list of supported routes, select the 404 page instead
//     let page = routes[parsedURL] ? routes[parsedURL] : Error404
//     content.innerHTML = await page.render();
//     await page.after_render();

// }

// // Listen on hash change:
// window.addEventListener('hashchange', router);

// // Listen on page load:
// window.addEventListener('load', router);