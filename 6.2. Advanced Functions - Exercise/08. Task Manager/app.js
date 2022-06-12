function solve() {
    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    };

    const [_, openSection, progressSection, finishedSection] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]); //когато искаме да изкараме определени елементи, но преди това има друг, който не желаем - прави се с долна черта.

    document.getElementById('add').addEventListener('click', addTask);
    function addTask(e) {
        e.preventDefault();

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = input.name.value;
        article.appendChild(h3); // последните 3 реда могат да бъдат написани така: article.appendChild(createElement('h3', input.name.value)); Долните два реда са така.

        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.date.value}`));

        const div = createElement('div', '', 'flex'); // flex е класа;
        const startBtn = createElement('button', 'Start', 'green');
        const deleteBtn = createElement('button', 'Delete', 'red');
        const finishBtn = createElement('button', 'Finish', 'orange');
        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        article.appendChild(div);

        openSection.appendChild(article);
        Object.values(input).forEach(i => i.value = ''); //valueS !!!

        startBtn.addEventListener('click', onStart);
        deleteBtn.addEventListener('click', onDelete);
        finishBtn.addEventListener('click', onFinish);
        function onDelete() {
            article.remove();
        }
        function onStart(){
            startBtn.remove();
            div.appendChild(finishBtn);
            progressSection.appendChild(article);
        }
        function onFinish(){
            div.remove();
            finishedSection.appendChild(article);
        }
    }

    function createElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }
}
