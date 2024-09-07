const button = document.getElementById("toggle-skills") as HTMLButtonElement;

const changecolor = ()  => {
document.body.style.backgroundColor = 'grey'
document.body.style.backgroundColor = '#f4f4f4'
}

button.addEventListener('click',changecolor)