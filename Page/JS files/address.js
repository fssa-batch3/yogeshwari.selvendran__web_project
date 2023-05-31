// // This is user address
// const user = JSON.parse(localStorage.getItem("user_data"));
// const profile_email = JSON.parse(localStorage.getItem("active_user"));
// console.log(profile_email)
// console.log(user)


// const form_Address = document.getElementById("ex-add");
// form_Address.addEventListener("submit", (s) =>{

//     s.preventDefault();
//     for(let i=0; i<user.length; i++){
//         if(profile_email==user[i]["user_email"]){
//             console.log ([i],"nitthi")
//         }
//     }
//     collectAddress();
// })
// function collectAddress(){
//     const userHno = document.getElementById("autocomplete").value;
// console.log(userHno)
//     const user_street = document.getElementById("street").value;

//     const user_city = document.getElementById("inputCity").value;

//     const user_state = document.getElementById("inputState").value;

//     const user_zip = document.getElementById("inputZip").value;
//     let address_id = Math.floor(Math.random() * 100)
//     let addressRecords = new Array();
//     addressRecords = JSON.parse(localStorage.getItem("user_address"))?
//     JSON.parse(localStorage.getItem("user_address")) : []
//     if(addressRecords.some((p)=>{
//         return p.address_id == address_id
//     })){
//         alert("Already address added")
//         console.log("Already address added");
//     }
//     else{
//         addressRecords.push({
//             "address_id": address_id,
//             // "user_id": user1_id,
//             "user_email": user1_email,
//             "user_houseNo": userHno,
//             "user_street":user_street,
//             "user_city":user_city,
//             "user_state":user_state,
//             "pincode": user_zip,
//         })
//     }
//     alert("address added")
//     localStorage.setItem("user_address",JSON.stringify(addressRecords));
// }