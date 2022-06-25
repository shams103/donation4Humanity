let menu = document.querySelector('#menu-btn');
let navbar =  document.querySelector('.menu');

    menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');

}

function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        alert("Please Enter Name");
    }
    else if (email == "") {
        alert("Please Enter Email Id");
    }
    else if (subject == "") {
        alert("Please Enter subject");
    }
    else if (message == "") {
        alert("Please Write Message");
    }
    else {
        alert("Message Send Successfully !");

    }
}