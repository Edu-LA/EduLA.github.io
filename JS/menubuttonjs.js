const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const topbar = document.querySelector('.topbar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    topbar.classList.toggle('menu-open');
    toggleBtn.classList.toggle('active');

});