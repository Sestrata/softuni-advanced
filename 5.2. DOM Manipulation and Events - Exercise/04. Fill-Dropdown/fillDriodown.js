function addItem() {

    const newText = document.getElementById('newItemText').value;
    const newValue = document.getElementById('newItemValue').value;

    const option = document.createElement('option');
    option.text = newText;
    option.value = newValue;

    const menu = document.getElementById('menu');

    if (newText !== '' && newValue !== '') {
        menu.appendChild(option);
    }

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
