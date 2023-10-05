console.log('Pizza')

let show = false;

let button = document.getElementById('check');

let count = 0;

button.addEventListener('click', () => {
    show = !show;

    let result = document.getElementById('orderResult');

    if (show) {
        result.style.display = 'block';
    }
    else {
        result.style.display = 'none';
    }
})

const validZip = ["20170", "20171", "20172", "20190", "20191", "20192", "20194", "20195", "20196", "20598", "22095", "22096"];