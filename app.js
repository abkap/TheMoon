const button = document.querySelector('button')
const body = document.querySelector('body');

button.addEventListener("click", () => {
    if(body.style.backgroundColor == 'black') {
        body.style.backgroundColor = "white"
        button.innerHTML = "Light Mode"
        
    } else {
    body.style.backgroundColor = "black";
    button.innerHTML = "Dark Mode"
}

});

console.log(body.style.backgroundColor);