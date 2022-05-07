function extractText() {

    const items = document.getElementById('items').children;
    const result = [];

    for (const item of Array.from(items)) { // чете масива
        result.push(item.textContent);
    }
    document.getElementById('result').textContent = result.join('\n');
}
