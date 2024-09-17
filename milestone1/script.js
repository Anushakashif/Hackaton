var toggleButton = document.querySelector('.toggle-sec');
var projects = document.querySelector('.projects');
toggleButton.addEventListener('click', function () {
    if (projects.style.display === 'none') {
        projects.style.display = 'block';
    }
    else {
        projects.style.display = 'none';
    }
});
