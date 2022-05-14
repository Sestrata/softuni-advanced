function encodeAndDecodeMessages() {

    let textarea = document.getElementsByTagName('textarea');
    [...document.getElementsByTagName('button')].forEach(b => b.addEventListener('click', message));
   
    function message(en) {
        if (en.target.textContent === 'Encode and send it') {
            let finalEncode = [...textarea[0].value].map(e => String.fromCharCode(e.charCodeAt(0) + 1)).join('');
            textarea[1].value = finalEncode;
            textarea[0].value = '';

        } else if (en.target.textContent === 'Decode and read it') {
            let finalDecode = [...textarea[1].value].map(e => String.fromCharCode(e.charCodeAt(0) - 1)).join('');
            textarea[1].value = finalDecode;
        }
    }
}
