// Toggle the Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function redirectToContest1() {
    // Replace this URL with the contest URL for Chance 1
    const contestUrl1 = "https://www.example.com/chance1";
    window.location.href = contestUrl1;
}

function redirectToContest2() {
    // Replace this URL with the contest URL for Chance 2
    const contestUrl2 = "https://www.example.com/chance2";
    window.location.href = contestUrl2;
}

