
const new_account = document.querySelector('.account')
const logged_in_user = document.querySelector('.user')

function removeRegisterButton_IfLogin(){
    let token = false;
    if (token == true) {
        new_account.classList.add("display-none")
        console.log("token found user appear");
    }
    logged_in_user.classList.add('display-block')
    console.log("no token resister appear");

}
removeRegisterButton_IfLogin()

