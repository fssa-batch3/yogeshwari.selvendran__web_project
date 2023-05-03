const url = window.location.search //"?pro_id=89"
console.log(url);
const urlparams = new URLSearchParams(url); //"pro_id"
console.log(urlparams);
const order_id = urlparams.get("prod_id")
console.log(order_id);
let selected;
const order_array = JSON.parse(localStorage.getItem("orders"))
const orders1 = order_array.find(function (pro){
    selected=pro
    console.log(selected,"nitthi")
if(pro["productid"] == order_id){
    return true
}
else{
    return false
}
})

// let pro_sample = JSON.parse(localStorage.getItem("orders"));
// let user = JSON.parse(localStorage.getItem("active_user"));
// let total = 0;
// if (pro_sample == null) {

// }
// else {
//     // cart_sample.find((e) => {
//     for (let i = 0; i < pro_sample.length; i++){
//         if (user["user_email"] == pro_sample[i]["user_email"]){
            // for(let i=0; i<=cart.length; i++){
            // Create First div
            // total += Number(cart_sample[i]["product_price"])

            // console.log(total)
            const cart = document.createElement("div")
            cart.setAttribute("class", "cart")
            document.querySelector(".top-head").prepend(cart)

            const first = document.createElement("div")
            first.setAttribute("class", "first-cart")
            cart.prepend(first)

            // Create a img tag
            const picture = document.createElement("img")
            picture.setAttribute("src", orders1["pr_img_1"])
            first.append(picture)
            console.log(picture)
            // Create a second cart
            const second = document.createElement("div")
            second.setAttribute("class", "second-cart")
            document.querySelector(".cart").append(second)
            // Product name
            const name1 = document.createElement("p")
            name1.setAttribute("id", "name")
            name1.innerHTML = orders1["product_name"]
            second.append(name1)
            // Product price
            const price = document.createElement("p")
            price.setAttribute("class", "price")
            price.setAttribute("data-keyword", orders1["product_price"])
            price.innerText = "price:" + orders1["product_price"];
            second.append(price)
            console.log(price)
            // create a count
            const countquantity = document.createElement("div")
            countquantity.setAttribute("class", "count")
            second.append(countquantity)
            // Create minus
            const minus1 = document.createElement("span")
            minus1.setAttribute("class", "minus")
            minus1.innerHTML = "-"
            countquantity.append(minus1)
            // Create num count 
            const numcount = document.createElement("span")
            numcount.setAttribute("class", "num")
            countquantity.append(numcount)

            const digit = document.createElement("p")
            digit.setAttribute("class", "digit")
            digit.innerText = "1"
            numcount.append(digit)
            // Create plus count
            const plus1 = document.createElement("span")
            plus1.setAttribute("class", "plus")
            plus1.innerHTML = "+"
            countquantity.append(plus1)
          

const plus = document.querySelectorAll(".plus"),
    minus = document.querySelectorAll(".minus"),
    num = document.querySelectorAll(".num");

// Amount Total card
let totalAmount = document.getElementById("total_count");
let totalAmount1 = document.getElementById("total_count1");
let a = 1;
plus.forEach((plusbtn) => {
    console.log(plusbtn);
    plusbtn.addEventListener("change", () => {

    });

})
// This is  count product quantuty 

const plus_btn = document.querySelectorAll(".plus")
const minus_btn = document.querySelectorAll(".minus")
const num_digit = document.querySelectorAll(".digit")
const price_pr = document.querySelectorAll(".price")

    

for (let i = 0; i < plus_btn.length; i++) {
    function getQty() {
        let default_price = parseFloat(price_pr[i].dataset.keyword)
        let value = default_price * parseFloat(num_digit[i].innerText);
        price_pr[i].innerText = "price:" + value
        let total1 = 0
        for (let j = 0; j < price_pr.length - 1; j++) {
            let price = parseFloat(price_pr[j].innerHTML.slice(6))
            total1 = total1 + price
        }
        // console.log(total1);
        totalAmount.innerText = total1;
        totalAmount1.innerText = total1
    }
    // THis is plus count
    plus_btn[i].addEventListener("click", function () {

        let number1 = parseFloat(num_digit[i].innerText)
        number1 = number1 + 1
        num_digit[i].innerText = number1

        getQty();



    })
    getQty();
    // This is minus count
    minus_btn[i].addEventListener("click", function () {

        if (num_digit[i].innerHTML !== "1") {
            let number1 = parseFloat(num_digit[i].innerText)
            number1 = number1 - 1
            num_digit[i].innerText = number1


            getQty();

        }

    })
}
//  This is gat address 

// const user = JSON.parse(localStorage.getItem("user_data"))
// const loginuser = JSON.parse(localStorage.getItem("active_user"))

// const usermobile = document.getElementById("use-phone")

// if (loginuser["user_email"] == user["user_email"]){
//     usermobile.value = user["mobile"]
// }
// console.log(usermobile);
// const editBtn = document.getElementById("edit_btn")

// editBtn.addEventListener("submit", (e)=>{
//     if()
// })


let product_detail=JSON.parse(localStorage.getItem(""))
const expand=document.getElementById("expand");
const hidden=document.getElementById("hidden");
const cash=document.getElementById("cash_pay")

 expand.addEventListener("click",function(){
hidden.innerHTML=`<div class="card-details">
<h3>Enter card details</h3>

<div class="cards-numbers">
    <form id="payment-form">
        <div class="field">
          <label>Card Number<input type="tel" id="cc-number" placeholder="•••• •••• •••• ••••" data-payment='cc-number'></label>
            
        </div>
        <div class="field">
          <label>CVC<input type="password" id="cc-cvc" placeholder="•••" data-payment='cc-cvc'>
          </label>
        </div>
        <div class="field">
          <label>Card Expiry (MM/YYYY)<input type="tel" id="cc-exp" placeholder="•• / ••••" data-payment='cc-exp'></label>
          
        </div>
        
        <div class="paybutton">
           
         <button class="card-button" type="submit">Pay now</button> 
        </div>
    </form>
</div>

</div>
`
 })
 cash.addEventListener("click",function(){
    hidden.innerHTML=""
 })

// This is user address
 const user = JSON.parse(localStorage.getItem("user_data"))
 const profile_email = localStorage.getItem("active_user");
console.log(user)

console.log(profile_email);
for (let i = 0; i < user.length; i++) {
    if (user[i].emailid == profile_email) {
console.log(user[i].emailid)
        document.getElementById("use-phone").value = user[i]["mobile"];
        document.getElementById("use_address").value = user[i]["address1 "];
        // document.getElementById("email").value = user[i]["emailid"];
        break;
    }
}
document.querySelector(".update1").addEventListener("click", () => {
    console.log("fjng");
    for (let i = 0; i < user.length; i++) {
    if (last_email == user[i]["emailid"]) {
    user[i]["address1"] = document.getElementById("use_address").value;
    // user[i]["pin_number"] = document.getElementById("pin_number").value;
    user[i]["mobile"] = document.getElementById("use-phone").value;
    localStorage.setItem("user_data", JSON.stringify(user));
    }
    }
})









