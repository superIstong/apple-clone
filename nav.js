const showSideBar = document.querySelector('.showSideBar');
const hideSideBar = document.querySelector('.hideSideBar');
const sideBar = document.querySelector('.sideBar');

showSideBar.addEventListener('click', () => {
    sideBar.classList.toggle ('open');
});

hideSideBar.addEventListener('click', () => {
    sideBar.classList.toggle ('close')
});

