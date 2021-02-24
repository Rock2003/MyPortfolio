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
    var name = firstName.replace(/ /g, '%20') + "%20" + lastName.replace(/ /g, '%20');
    email = email.replace(/ /g, '%20');
    phone = phone.replace(/ /g, '%20');
    message = message.replace(/ /g,"%20");
    fetch(api + "New%20Message%20From%20" + name + "%20at%20" + email + "%20at%20" + phone +":%20\n" + message)
        .then(res => {
            if(res.ok) {
                alert("Success! Your message has been sent.");
                console.log("email: " + email + " and ' " + message + " ' sent.");
            } else{
                alert("Eroor: Please try sending a message again.");
                console.log("Error: " + res.status);
                console.log("email: " + email + " and ' " + message + " ' failed to send.");
            }
        })
}

