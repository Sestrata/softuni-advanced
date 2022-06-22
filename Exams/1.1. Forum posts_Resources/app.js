window.addEventListener("load", solve)

function solve() {
  const inputTitle = document.getElementById("post-title");
  const inputCategory = document.getElementById("post-category");
  const inputAddContent = document.getElementById("post-content");

  const publishBtn = document.getElementById("publish-btn");
  publishBtn.addEventListener('click', eventPublish);

  const ulList = document.getElementById('review-list');
  const ulListPublish = document.getElementById('published-list');
  const clearBtn = document.getElementById('clear-btn');

  function eventPublish() {
    if (inputTitle.value !== '' && inputCategory.value !== '' && inputAddContent.value !== '') {
      const li = document.createElement('li');
      li.className = 'rpost';

      const article = document.createElement('article');
      const h4 = document.createElement('h4');
      const paragr1 = document.createElement('p');
      const paragr2 = document.createElement('p');

      h4.textContent = inputTitle.value;
      const inputCategoryP1 = inputCategory.value;
      const inputCategoryP2 = inputAddContent.value;
      paragr1.textContent = 'Category:' + ' ' + inputCategory.value;
      paragr2.textContent = 'Content:' + ' ' + inputAddContent.value;

      const btnEdit = document.createElement('button');
      btnEdit.className = 'action-btn edit';
      btnEdit.textContent = 'Edit';

      const btnApprove = document.createElement('button');
      btnApprove.className = 'action-btn approve';
      btnApprove.textContent = 'Approve';

      ulList.appendChild(li);
      li.appendChild(article)
      article.appendChild(h4);
      article.appendChild(paragr1);
      article.appendChild(paragr2);
      li.appendChild(btnEdit);
      li.appendChild(btnApprove);

      inputTitle.value = '';
      inputCategory.value = '';
      inputAddContent.value = '';

      btnEdit.addEventListener('click', eventReturn);
      function eventReturn() {
        inputTitle.value = h4.textContent;
        inputCategory.value = inputCategoryP1;
        inputAddContent.value = inputCategoryP2;
        ulList.removeChild(li);
      }

      btnApprove.addEventListener('click', eventApprove);
      function eventApprove() {
        const liPublish = document.createElement('li');
        liPublish.className = 'rpost';
        const articlePublish = document.createElement('article');
        const h4Publish = document.createElement('h4');
        const paragr1Publish = document.createElement('p');
        const paragr2Publish = document.createElement('p');

        h4Publish.textContent = h4.textContent;
        paragr1Publish.textContent = paragr1.textContent;
        paragr2Publish.textContent = paragr2.textContent;

        liPublish.appendChild(articlePublish)
        articlePublish.appendChild(h4Publish);
        articlePublish.appendChild(paragr1Publish);
        articlePublish.appendChild(paragr2Publish);
        ulListPublish.appendChild(liPublish);

        ulList.textContent = '';
        btnEdit.remove();
        btnApprove.remove();
      }

      clearBtn.addEventListener('click', clearText);
      function clearText() {
        ulListPublish.textContent = '';
      }
    }
  }
}
