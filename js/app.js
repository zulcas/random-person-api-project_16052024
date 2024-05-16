// Tu código aquí
button = document.querySelector("#btn");
button.addEventListener('click', getPerson);

async function getPerson(){
    const result = await fetch('https://randomuser.me/api/');
    const data = await result.json();
    console.log(data);
    displayData(data);
}

function displayData(data){

    document.querySelector('#photo').src = data.results[0].picture.medium;//Photo
    document.querySelector('#first').textContent = data.results[0].name.first.toUpperCase();//Name
    document.querySelector('#last').textContent = data.results[0].name.last.toUpperCase();//Last name
    document.querySelector('#country').textContent = data.results[0].location.country.toUpperCase();//Country
    document.querySelector('#phone').textContent = data.results[0].cell.toUpperCase();//Phone
    document.querySelector('#email').textContent = data.results[0].email.toUpperCase();//Email
}

