console.log('I am so beautiful');

document.title = 'I am so beautiful.';

let notification = 'I think you should go to class.';

alert(notification);

if (false) {
    let name = prompt('What is your name?');
    let areYouDrunk = confirm('Are you drunk?')

    let text = '${name} is ${isDrunk ? '' : 'NOT'} drunk';

    let h2 = document.createElement('h2');
}

let ids = [25,59,64,124];

fetch('https://pokeapi.co/api/v2/pokemon/25' + id)
    .then(res => res.json())
    .then(data => {
        let image = data.sprites.front_default;
        let img = document.createElement('img');
        img.src = image;

        document.body.append(img);
    })
    