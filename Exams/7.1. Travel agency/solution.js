function solution() {
  let inputsFormDivs = Array.from(document.querySelectorAll('#form div'));
  let submitBtn = document.getElementById('submitBTN');
  
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');
  let infoPreview = document.getElementById('infoPreview');

  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  submitBtn.addEventListener('click', () => {
    let fullName = document.getElementById('fname');
    let email = document.getElementById('email');
    if (fullName.value && email.value) {
      inputsFormDivs.forEach(div => {
        let label = div.getElementsByTagName('label')[0];  // връща се масив и се взима първи елемент
        let text = div.getElementsByTagName('input')[0];   // връща се масив и се взима първи елемент
        let li = document.createElement('li');
        li.textContent = `${label.textContent} ${text.value}`;
        infoPreview.appendChild(li);
        
        text.value = '';
        submitBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;
      });
    }
  });

  editBtn.addEventListener('click', () => {
    let liS = Array.from(document.querySelectorAll('#infoPreview li'));
    let inputs = Array.from(document.querySelectorAll('#form input'));

    for (let i = 0; i < liS.length; i++) {
      let inputInfo = liS[i].textContent.split(': ')[1];
      inputs[i].value = inputInfo;
      liS[i].remove();
    }
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  });

  continueBtn.addEventListener('click', () => {
    let blockDiv = document.getElementById('block');
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    blockDiv.innerHTML = '';
    blockDiv.appendChild(h3);
  });
}
