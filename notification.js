var TOKEN = "1599034139:AAH2zHXZUAndu2-8-yeOb8HuWbsyfBq2-10";
var chat = "-484766622";
var api = "https://api.telegram.org/bot" + TOKEN + "/sendMessage?chat_id="+chat+"&text=";

var firstName = document.getElementById('first');
var lastName = document.getElementById('last');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var message = document.getElementById('message');

var button = document.getElementById('submit').addEventListener('click', function() {
    sendMessage(firstName.value, lastName.value, email.value, phone.value, message.value)
});

function sendMessage(firstName, lastName, email, phone, message) {
    var name = firstName + " " + lastName;
    message = message.split('\n').join('%0A');
    var call = "New message from " + name + ".%0AEmail: " + email + "%0APhone: " + phone +"%0A" + message;
    fetch(api + call)
        .then(res => {
            if(res.ok) {
                console.log("Sucess!");
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent. I\'ll answer ASAP!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            } else{
                console.log("Error: " + res.status); 
                Swal.fire({
                    title: 'Error!',
                    text: 'Your message couldn\'t be sent. Please try that again.',
                    icon: 'error',
                    confirmButtonText: 'Retry :('
                  })
            }
        }
    )
}


