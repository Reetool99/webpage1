

//1. form :- document.forms["form name"]["filename"]
// 2. form :- document.getElementById


function validateform() {

    let email = document.forms["validate"]['email'].value;
    // console.log(email);
    let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailregex.test(email)) {
        console.log(email);
    }
    else {
        alert("wrong email");
    }


    let psword = document.forms["validate"]['password'].value
    let pswordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (pswordregex.test(psword)) {
        console.log(psword);
    }
    else {
        alert("wrong password");
    }

    let number = document.forms["validate"]["number"].value
    let numberregex = /^[0-9][A-Za-z0-9 -]*$/;
    if (numberregex.test(number)) {
        console.log(number);
    }
    else {
        alert("invalid number");
    }

    let checkBoxes = document.getElementsByClassName('fOOd');
    let values = [];
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            values.push(checkBoxes[i].value);

        }
    };
    console.log(values);

    // if (isChecked) {
    //     alert('At least one checkbox checked!');
    // }
    // } else {
    //     alert('Please, check at least one checkbox!');
    // }


    return false
}


function myfunction() {
    document.getElementById('uplod_btn').style.display = "none"
}

var input = document.getElementById('upload');
var infoArea = document.getElementById('file_name');

input.addEventListener('change', showFileName);

function showFileName(event) {
    var input = event.srcElement;
    var fileName = input.files[0].name;
    infoArea.textContent = fileName;
}

function myreset() {
    infoArea.style.display = "none";
    document.getElementById('uplod_btn').style.display = "inline"
}