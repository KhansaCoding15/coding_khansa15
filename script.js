const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF', '#FF8C33', '#33FFF5', '#8CFF33', '#FF333A', '#33FF8C',
    '#5733FF', '#33FFF5', '#FFB833', '#33D5FF', '#FF3361', '#FF5733', '#FFC133', '#FF33F5', '#5733A8', '#FF3333',
    '#33FFA8', '#FFC833', '#33F5FF', '#A833FF', '#FF333A', '#8C33FF', '#33FF33', '#5733FF', '#FF5733', '#FF33B8',
    '#F5FF33', '#33A8FF', '#B833FF', '#33FF57', '#FFB833', '#5733FF', '#F5FF33', '#33F5FF', '#FF33D5', '#33B8FF',
    '#FF5733', '#33FF8C', '#A833FF', '#FF3357', '#FF5733', '#B8FF33', '#33F5FF', '#8CFF33', '#33FF33', '#FF3357'
];

const colorNameDiv = document.getElementById('color-name');

function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];
    document.body.style.backgroundColor = newColor;
    colorNameDiv.textContent = newColor;
}

document.body.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        changeColor();
    }
});

document.body.addEventListener('touchstart', () => {
    changeColor();
});
