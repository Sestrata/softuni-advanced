function listProcessors(arr) {
    let result = [];

    let r = {
        add: (arr, str) => {
            arr.push(str);
            return arr;
        },
        remove: (arr, str) => {
            let filtered = arr.filter((e) => e != str);
            return filtered;
        },
        print: (arr) => {
            console.log(arr.join(","));
            return arr;
        },
    };

    arr.forEach((e) => {
        let [command, str] = e.split(" ");
        result = r[command](result, str); // const fn = r[command]; return fn(result, str);
    });
}
