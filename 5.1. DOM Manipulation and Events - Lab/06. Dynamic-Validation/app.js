function validate() {

    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(ev.target.value)) {
            ev.target.classList.remove('error'); // премахва class = "error" в инпът полето на html-a, ако има такъв
        } else {
            ev.target.classList.add('error'); // създава class = "error" в инпът полето на html-a
        }
    }
}
