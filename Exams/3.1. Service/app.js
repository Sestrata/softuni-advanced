window.addEventListener('load', solve);

function solve() {
    let [type, description, name, phone] = Array.from(document.querySelectorAll('form select, form textarea, form input'));
    let receivedOrders = document.querySelector('section#received-orders');
    let completedOrders = document.querySelector('section#completed-orders');
    let sendBtn = document.querySelector('form button[type="submit"]');
    let clearBtn = document.querySelector('button.clear-btn');

    function createTag(tag, text, className = null) {
        let el = document.createElement(tag);
        if (text != '') {
            el.textContent = text;
        }
        if (className) {
            el.className = className;
        }
        return el;
    }

    sendBtn.addEventListener('click', onSend);
    function onSend(e) {
        e.preventDefault();
        if (type.value && description.value && name.value && phone.value) {
            let div = createTag('div', '', 'container');

            let product = createTag('h2', 'Product type for repair: ' + type.value);
            div.appendChild(product);
            let client = createTag('h3', 'Client information: ' + name.value + ', ' + phone.value);
            div.appendChild(client);
            let descriptionText = createTag('h4', 'Description of the problem: ' + description.value);
            div.appendChild(descriptionText);
          
            let startBtn = createTag('button', 'Start repair', 'start-btn');
            div.appendChild(startBtn);
            let finishBtn = createTag('button', 'Finish repair', 'finish-btn');
            finishBtn.disabled = true;
            div.appendChild(finishBtn);

            receivedOrders.appendChild(div);

            [type, description, name, phone].forEach(el => el.value = '');

            startBtn.addEventListener('click', onStart);
            finishBtn.addEventListener('click', onFinish);
        }
    }

    function onStart(e) {
        e.target.disabled = true;
        e.target.nextElementSibling.disabled = false;
    }

    function onFinish(e) {
        completedOrders.appendChild(e.target.parentElement);
        e.target.previousElementSibling.remove();
        e.target.remove();
    }

    clearBtn.addEventListener('click', (e) => {
        let completedOrders = Array.from(document.querySelectorAll('section#completed-orders div.container'));
        completedOrders.forEach(el => el.remove());
    });
}
