const toggleButton = document.querySelector('.toggle-sec') as HTMLElement;
const projects = document.querySelector('.projects') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if(projects.style.display === 'none') {
        projects.style.display = 'block'
    } else {
        projects.style.display = 'none'
    }
})
