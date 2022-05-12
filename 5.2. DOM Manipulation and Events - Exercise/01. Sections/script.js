function create(words) {

   const content = document.getElementById('content');

   for (let word of words) {
      const div = document.createElement('div');
      const paragr = document.createElement('p');
      paragr.textContent = word;
      paragr.style.display = 'none';
      div.appendChild(paragr);

      div.addEventListener('click', reveal);
      content.appendChild(div);

      function reveal(e) {
         e.currentTarget.children[0].style.display = '';
      }
   }
}
