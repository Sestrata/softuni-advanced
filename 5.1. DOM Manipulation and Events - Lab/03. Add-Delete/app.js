function addItem() {
   
    const input = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeEl);
    liElement.appendChild(button);

    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function removeEl(ev){
        const parent = ev.target.parentNode;
        parent.remove();
    }
}
