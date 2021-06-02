// console.log("great akky keep it up!");

let username = document.getElementById("inputusername");
let email = document.getElementById("inputEmail4");
let password = document.getElementById("inputPassword4");
let phone = document.getElementById("inputphone");
let city = document.getElementById("inputCity");
let state = document.getElementById("inputState");
let zip_code = document.getElementById("inputZip");
// let check_box = document.getElementById("gridCheck");
let submit_btn = document.getElementById("submit_btn");

let username_valid = false;
let email_valid = false;
let password_valid = false;
// let address_valid = false;
let phone_valid = false;
let city_valid = false;
let state_valid = false;
let zip_code_valid = false;

// let username_valid = "false";



username.addEventListener("blur", () => {

    let regexp = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = username.value;

    // console.log(regexp,str);
    if (regexp.test(str)) {

        // console.log("username valid");
        username_valid = true;
        username.classList.remove(`is-invalid`);

    }
    else {
        // console.log("username not valid");
        username_valid = false;
        username.classList.add(`is-invalid`);
    }

});

email.addEventListener("blur", () => {

    regexp = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    str = email.value;

    if (regexp.test(str)) {
        email_valid = true;
        email.classList.remove(`is-invalid`);
    }
    else {
        console.log("Email not valid");
        email_valid = false;
        email.classList.add(`is-invalid`);
    }

});


password.addEventListener("blur", () => {

    regexp = /^([a-zA-Z0-9]+){8,15}$/;
    str = password.value;

    if (regexp.test(str)) {
        password_valid = true;
        password.classList.remove(`is-invalid`);
    }
    else {
        password_valid = false;
        password.classList.add(`is-invalid`);
    }

});

phone.addEventListener("blur", () => {

    regexp = /^[0-9]{10}$/;
    str = phone.value;

    if (regexp.test(str)) {
        phone_valid = true;
        phone.classList.remove(`is-invalid`);
    }
    else {

        phone_valid = false;
        phone.classList.add(`is-invalid`);
    }

});

city.addEventListener("blur", () => {

    regexp = /^[a-zA-Z]([a-zA-Z0-9]){2,12}$/;
    str = city.value;

    if (regexp.test(str)) {
        city_valid = true;
        city.classList.remove(`is-invalid`);
    }
    else {
        city_valid = false;
        city.classList.add(`is-invalid`);
    }

});



state.addEventListener("blur", () => {

    regexp = /^(?!Choose...$)/;
    str = state.value;

    if (regexp.test(str)) {
        state_valid = true;
        state.classList.remove(`is-invalid`);
    }
    else {
        state_valid = false;
        state.classList.add(`is-invalid`);
    }

});


zip_code.addEventListener("blur", () => {

    regexp = /^[0-9]{6}$/;
    str = zip_code.value;

    if (regexp.test(str)) {
        zip_code_valid = true;
        zip_code.classList.remove(`is-invalid`);

    }
    else {
        zip_code_valid = false;
        zip_code.classList.add(`is-invalid`);
    }

});

// Event Listner on submit button==============
submit_btn.addEventListener("click", (e) => {
 
e.preventDefault();

let confirm_btn = confirm("Do you wnt to submit");

console.log("clicked on sumbmit btn")
let form = document.getElementById("formgroup");

    if (confirm_btn && password_valid && email_valid && username_valid && phone_valid && city_valid && state_valid && zip_code_valid){

        console.log("all validiated");
        // alert("all done ready to submit");

       document.getElementById("alert_msg").innerHTML =  ` <div class="alert alert-success alert-dismissible fade show alert_msg" role="alert">
        <strong>Hey ${username.value}! </strong>  You have submitted successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;

      formgroup.reset();
    }  

    else{
        console.log("plz fill all details");
        document.getElementById("alert_msg").innerHTML =  ` <div class="alert alert-danger alert-dismissible fade show alert_msg" role="alert">
        <strong>Hey! </strong>    You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      
    }

 });