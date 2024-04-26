let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;
    
    sections.forEach(sec => {
        let offsetTop = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (scrollY >= offsetTop && scrollY < offsetTop + sec.offsetHeight) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};
