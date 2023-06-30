let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

function copyHref() {
    var link = document.querySelector(".fas fa-link");
    var hrefValue = link.getAttribute("href");
    navigator.clipboard.writeText(hrefValue)
        .then(function () {
            console.log("Href value copied: " + hrefValue);
            alert("Href value copied: " + hrefValue);
        })
        .catch(function (error) {
            console.log("Error copying href value: ", error);
            alert("Error copying href value: " + error);
        });
}


/*    Light/Dark Mode    */
const checkbox = document.querySelector('.toggle-checkbox');
const box = document.querySelectorAll('.box');
const icons_box = document.querySelectorAll('.icons');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    header.classList.toggle('dark');
    box.forEach(box => {
        box.classList.toggle('dark');
    })
    icons_box.forEach(icons_box => {
        icons_box.classList.toggle('dark');
    });
}
);

function toggleNavbar() {
    var navbarMenu = document.querySelector("navbar");
    navbarMenu.classList.toggle("show");
  }
  