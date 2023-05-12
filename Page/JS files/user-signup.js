

const formsData = document.getElementById("form-page1")
formsData.addEventListener('submit', (e) => {
    e.preventDefault();
    getData();
})
function getData() {

    //This is for get a data in form
    const firstName = document.getElementById("user-firstname").value;
    const lastName = document.getElementById("user-lastname").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    const number = document.getElementById("user-number").value;
    // const address = document.getElementById("user-address").value;
    const pincodeAddress = document.getElementById("user-pincode").value;
    const password2 = document.getElementById("confirm-password").value;
    let userid = Math.floor(Math.random() * 100)

    //This is for store data in localstorage
    let userRecords = new Array();
    userRecords = JSON.parse(localStorage.getItem("user_data")) ?
        JSON.parse(localStorage.getItem("user_data")) : []
    if (userRecords.some((y) => {return y.user_email == email
    })) {
        alert("email id is already taken")
    }
     else{
        userRecords.push({
            "user_id":userid,
            "user_Firstname": firstName,
            "user_lastname": lastName,
            "gender": gender,
            "user_email": email,
            "password": password,
            "mobile": number,
            // "address1": address,
            "pinaddress": pincodeAddress,
            "imagename":"",
            "url":""

        })
        
    }
    localStorage.setItem("user_data",JSON.stringify(userRecords));
    window.location.href = "./Page/create_accound/signin.html"
}
