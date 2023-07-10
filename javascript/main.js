const menuDesktop = document.querySelector('.menu__desktop');
const menuMobile = document.querySelector('.menu__mobile');

const header = document.querySelector('header');

const menuButton = document.querySelector('.menu--button');

const checkScreenSize = () => {
    console.log(window.innerWidth);

    if (window.innerWidth <= 768) {
        menuMobile.style.display = 'block';
        menuDesktop.style.display = 'none';

        header.style.backgroundColor = '#567e32';
    } else {
        menuMobile.style.display = 'none';
        menuDesktop.style.display = 'flex';
    }
};

checkScreenSize();

window.addEventListener('resize', checkScreenSize);

const openMobileMenu = () => {
    if (menuMobile.classList.contains('active')) {
        menuMobile.classList.remove('active');
        header.style.backgroundColor = '#567e32';

        document.body.classList.add('no-scroll');
    } else {
        menuMobile.classList.toggle('active');
        header.style.backgroundColor = '#297C35';

        document.body.classList.add('no-scroll');
    }
};

menuButton.addEventListener('click', openMobileMenu);

const handleResize = () => {
    if (window.innerWidth >= 769) {
        menuMobile.classList.remove('active');
        header.style.backgroundColor = '#e9e9e9';
    }
};

window.addEventListener('resize', handleResize);