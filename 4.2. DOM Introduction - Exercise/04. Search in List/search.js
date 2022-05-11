function search() {

   let userWord = document.getElementById('searchText').value;
   let townsEl = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let count = 0;

   for (let town of townsEl) {
      if (town.textContent.includes(userWord) && userWord !== '') {
         count++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   match.textContent = (`${count} matches found`);
}
