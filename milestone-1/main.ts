const button = document.getElementById("toggle-skills") as HTMLButtonElement;

const changecolor = ()  => {
document.body.style.backgroundColor = 'grey'

}

button.addEventListener('click',changecolor)