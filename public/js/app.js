const weatherForm = document.querySelector('form');
const input = document.querySelector('form input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
weatherForm.addEventListener( 'submit', (e) => {
    e.preventDefault();
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch('/weather?address='+input.value).then(function(response){
    response.json().then((data) =>{
        if(data.error){
            messageOne.textContent = data.error;
        }
        else{
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
    });
});
});