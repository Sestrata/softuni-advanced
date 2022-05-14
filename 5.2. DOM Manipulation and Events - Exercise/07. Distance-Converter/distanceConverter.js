function attachEventsListeners() {

    let [inputField, outputField] = document.querySelectorAll('textarea]'); //взима полето, което се попълва и полето, на което излиза конвертираната стойност

    let fromOption = document.querySelector('#inputUnits');
    let toOption = document.querySelector('#outputUnits');
    let convertBtn = document.getElementById('convert');

    convertBtn.addEventListener('click', operation);

    function operation() {
        let convert = Number(inputField.value);
        let result = 0;

        if (fromOption.value == 'km') {
            convert *= 1000;
        } else if (fromOption.value == 'm') {
            convert = convert;
        } else if (fromOption.value == 'cm') {
            convert *= 0.01;
        } else if (fromOption.value == 'mm') {
            convert *= 0.001;
        } else if (fromOption.value == 'mi') {
            convert *= 1609.34;
        } else if (fromOption.value == 'yrd') {
            convert *= 0.9144;
        } else if (fromOption.value == 'ft') {
            convert *= 0.3048;
        } else if (fromOption.value == 'in') {
            convert *= 0.0254;
        }

        if (toOption.value == 'km') {
            result = convert / 1000;
        } else if (toOption.value == 'm') {
            result = convert;
        } else if (toOption.value == 'cm') {
            result = convert / 0.01;
        } else if (toOption.value == 'mm') {
            result = convert / 0.001;
        } else if (toOption.value == 'mi') {
            result = convert / 1609.34;
        } else if (toOption.value == 'yrd') {
            result = convert / 0.9144;
        } else if (toOption.value == 'ft') {
            result = convert / 0.3048;
        } else if (toOption.value == 'in') {
            result = convert / 0.0254;
        }
        outputField.value = result;
    }
}
