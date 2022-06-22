function solve() {

    const recipientName = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');

    const addToTheListBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const ulList = document.getElementById('list');

    resetBtn.addEventListener('click', clearFuncFromList);
    function clearFuncFromList(e) {
        e.preventDefault();

        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    addToTheListBtn.addEventListener('click', addToListFunc);
    function addToListFunc(e) {
        e.preventDefault();
        if (recipientName.value != '' && title.value !== '' && message.value !== '') {
            const li = document.createElement('li');
            const h4Title = document.createElement('h4');
            const h4RecipienName = document.createElement('h4');
            const span = document.createElement('span');
            const divEl = document.createElement('div');
            divEl.setAttribute('id', 'list-action');

            const sendBtn = document.createElement('button');
            sendBtn.setAttribute('type', 'submit');
            sendBtn.setAttribute('id', 'send');
            sendBtn.textContent = 'Send';
            divEl.appendChild(sendBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('type', 'submit');
            deleteBtn.setAttribute('id', 'delete');
            deleteBtn.textContent = 'Delete';
            divEl.appendChild(deleteBtn);

            const tabTitle = 'Title:';
            const valueTitle = title.value;
            h4Title.textContent = tabTitle + ' ' + valueTitle;

            const tabTo = 'Recipient Name:';
            const valueTo = recipientName.value;
            h4RecipienName.textContent = tabTo + ' ' + valueTo;

            span.textContent = message.value;

            li.appendChild(h4Title);
            li.appendChild(h4RecipienName);
            li.appendChild(span);
            li.appendChild(divEl);

            ulList.appendChild(li);

            recipientName.value = '';
            title.value = '';
            message.value = '';

            sendBtn.addEventListener('click', sendFunc);
            function sendFunc(e) {
                const ulSendList = document.querySelector('.sent-list');
                const liToSend = document.createElement('li');

                const spanTo = document.createElement('span');
                spanTo.textContent = 'To:' + '' + valueTo;

                const spanTitle = document.createElement('span');
                spanTitle.textContent = h4Title.textContent;

                const div = document.createElement('div');
                div.className = 'btn';
                const buttonDelete = document.createElement('button');
                buttonDelete.setAttribute('type', 'submit');
                buttonDelete.className = 'delete';
                buttonDelete.textContent = 'Delete';
                div.appendChild(buttonDelete);

                liToSend.appendChild(spanTo);
                liToSend.appendChild(spanTitle);
                liToSend.appendChild(div);
                ulSendList.appendChild(liToSend);

                const delElement = e.target.parentNode.parentNode;
                delElement.remove();

                buttonDelete.addEventListener('click', deleteFunc);
                function deleteFunc(e) {
                    const delUl = document.querySelector('ul.delete-list');
                    const delLi = document.createElement('li');
                    const delSpanTo = document.createElement('span');
                    delSpanTo.textContent = spanTo.textContent;
                    const delSpanTitle = document.createElement('span');
                    delSpanTitle.textContent = spanTitle.textContent;
                    delLi.appendChild(delSpanTo);
                    delLi.appendChild(delSpanTitle);
                    delUl.appendChild(delLi);

                    const curr = e.target.parentNode.parentNode;
                    curr.remove();
                    delElement.remove();
                }
            }
            deleteBtn.addEventListener('click', deleteFunc);
            function deleteFunc(e) {
                const delUl = document.querySelector('ul.delete-list');
                const delLi = document.createElement('li');
                const delSpanTo = document.createElement('span');
                delSpanTo.textContent = 'To:' + '' + valueTo;
                const delSpanTitle = document.createElement('span');
                delSpanTitle.textContent = h4Title.textContent;
                delLi.appendChild(delSpanTo);
                delLi.appendChild(delSpanTitle);
                delUl.appendChild(delLi);

                const delElement = e.target.parentNode.parentNode;
                delElement.remove();
            }
        }
    }
}
