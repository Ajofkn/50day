const button = document.querySelectorAll('button');

button.forEach(button => {
    
    button.addEventListener('click', (e) =>{
        parent = button.parentNode;
        parent.classList.toggle('active')
    })
})