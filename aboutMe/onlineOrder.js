console.log('Pizza')

let show = false;

let button = document.getElementById('check');

const validZip = ["20170", "20171", "20172", "20190", "20191", "20192", "20194", "20195", "20196", "20598", "22095", "22096"];

button.addEventListener('click', () => {
    
    show = !show;

    let zipResult = document.getElementById('zipResult');
    let sadPizza = document.getElementById('sadPizza');

    let result = document.getElementById('zip').value;
    console.log(result);

    if (console.log(validZip.includes(result))) {
        zipResult.style.display = 'block';
    }
    else {
        sadPizza.style.display = 'block';
    }
})