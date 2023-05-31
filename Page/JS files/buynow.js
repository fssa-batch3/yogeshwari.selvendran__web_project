let pro_detail = JSON.parse(localStorage.getItem("product_detail"));
const formbuynowdata = document.getElementById("buyform")
formbuynowdata.addEventListener("submit", (m) => {
    m.preventDefault();
    collectData();
})

const profile_id = JSON.parse(localStorage.getItem("active_user"));
const last_id = profile_id["user_id"];
const call_address = JSON.parse(localStorage.getItem("user_address"));

const formAddress = document.getElementById("ex-add")
console.log(formAddress, "logu")
formAddress.addEventListener("submit", (s) => {
    s.preventDefault();
    collectAddress();
})
const url = window.location.search //"?pro_id=89"
console.log(url);
const urlparams = new URLSearchParams(url); //"pro_id"
console.log(urlparams);
const order_id = urlparams.get("id")
console.log(order_id);
let selected;
let picture;
let price;
let name1;
let numcount;
if (order_id == Number(order_id)){

    const orders1 = pro_detail.find(function (pro) {
        selected = pro
        console.log(selected, "nitthi")
        if (pro["productid"] == order_id) {
            return true
        }
        else {
            return false
        }
    })
    const cart = document.createElement("div")
    cart.setAttribute("class", "cart")
    document.querySelector(".top-head").prepend(cart)

    const first = document.createElement("div")
    first.setAttribute("class", "first-cart")
    cart.prepend(first)

    // Create a img tag
    picture = document.createElement("img")
    picture.setAttribute("src", orders1["pr_img_1"])
    first.append(picture)
    console.log(picture)
    // Create a second cart
    const second = document.createElement("div")
    second.setAttribute("class", "second-cart")
    document.querySelector(".cart").append(second)
    // Product name
    name1 = document.createElement("p")
    name1.setAttribute("id", "name")
    name1.innerHTML = orders1["about_product"]
    second.append(name1)
    // Product price
    price = document.createElement("p")
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
    numcount = document.createElement("span")
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
}
else {
    const carts = JSON.parse(localStorage.getItem("cart"));
    let user = JSON.parse(localStorage.getItem("active_user"));
    let activeruseremail = user["user_email"];
    if (carts == null) {

    }
    else {
        let cardsDetails = carts.find(function (v) {
            // selected=pro

            if (v.user_email == activeruseremail) {
                // return true
                const cart = document.createElement("div")
                cart.setAttribute("class", "cart")
                document.querySelector(".top-head").prepend(cart)

                const first = document.createElement("div")
                first.setAttribute("class", "first-cart")
                cart.prepend(first)

                // Create a img tag
                picture = document.createElement("img")
                picture.setAttribute("src", v["pr_img_1"])
                picture.setAttribute("id", "or_img")
                first.append(picture)
                console.log(picture)
                // Create a second cart
                const second = document.createElement("div")
                second.setAttribute("class", "second-cart")
                document.querySelector(".cart").append(second)
                // Product name
                name1 = document.createElement("p")
                name1.setAttribute("id", "name")
                name1.innerHTML = v["about_product"]
                second.append(name1)
                // Product price
                price = document.createElement("p")
                price.setAttribute("class", "price")
                price.setAttribute("data-keyword", v["product_price"])
                price.innerText = "price:" + v["product_price"];
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
                numcount = document.createElement("span")
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
            }

        });

    }

}
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

// let product_detail=JSON.parse(localStorage.getItem(""))
const expand = document.getElementById("expand");
const hidden = document.getElementById("hidden");
const cash = document.getElementById("cash_pay")

expand.addEventListener("click", function () {
    hidden.innerHTML = `<div class="card-details">
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
           
         <button id="pay-now" class="card-button" type="submit">Pay now</button> 
        </div>
    </form>
</div>

</div>
`
})
cash.addEventListener("click", function () {
    hidden.innerHTML = ""
})
// Add address section form page
const mainDiv = document.querySelector("main")
const add_form = document.getElementById("add-detail");
const hidd_add = document.querySelector(".ex-address");
const backBtn = document.getElementById("remove");
add_form.addEventListener("click", () => {
    hidd_add.style.display = "block"
    mainDiv.style.filter = `blur(${5}px)`;

})
backBtn.addEventListener("click", () => {
    hidd_add.style.display = "none"
    mainDiv.style.filter = `blur(${0}px)`;
})

// Collect the data in form page
const user_data1 = JSON.parse(localStorage.getItem("user_data"));
const profile_email = JSON.parse(localStorage.getItem("active_user"));
const last_use = profile_email["user_id"];
console.log(last_use, "yogi");

function collectAddress() {
    const userHno = document.getElementById("autocomplete").value;
    const user_street = document.getElementById("street").value;
    const user_city = document.getElementById("inputCity").value;
    const user_state = document.getElementById("inputState").value;
    const user_zip = document.getElementById("inputZip").value;
    let address_id = Math.floor(Math.random() * 100)
    let addressRecords = new Array();
    addressRecords = JSON.parse(localStorage.getItem("user_address")) ?
        JSON.parse(localStorage.getItem("user_address")) : []
    if (addressRecords.some((p) => {
        return p.address_id == address_id
    })) {
        alert("Already address added")

    }
    else {
        addressRecords.push({
            "address_id": address_id,
            "user_id": last_use,
            "user_houseNo": userHno,
            "user_street": user_street,
            "user_city": user_city,
            "user_state": user_state,
            "pincode": user_zip,
        })
    }
    alert("address added")
    localStorage.setItem("user_address", JSON.stringify(addressRecords));

    const info = document.createElement("div")
    info.setAttribute("class", "address_info")
    document.querySelector(".ues-add").prepend(info)

    // <input type="radio" name="" id="check">
    const inputType = document.createElement("input")
    inputType.setAttribute("type", "radio")
    inputType.setAttribute("data-keyword", address_id)
    inputType.setAttribute("name", "Address")
    inputType.setAttribute("id", "check")
    inputType.setAttribute("class", "radio_btn")
    info.append(inputType)
    // <div id="location_info">
    const locInfo = document.createElement("div")
    locInfo.setAttribute("id", "location_info")
    info.append(locInfo)
    // <p id="location">
    const addInfo = document.createElement("p")
    addInfo.setAttribute("id", "location")
    addInfo.innerText = userHno + "" + user_street + "" + user_city + "" + user_state;
    locInfo.append(addInfo)

    // <p>600096</p>
    const addPin = document.createElement("p")
    addPin.setAttribute("id", "sec1")
    addPin.innerText = user_zip
    addInfo.append(addPin)
}



// This is collect the  address data in local storage 
// const profile_id = JSON.parse(localStorage.getItem("active_user"));
// const last_id = profile_id["user_id"];
// const call_address = JSON.parse(localStorage.getItem("user_address"));
for (let i = 0; i < call_address.length; i++) {
    if (last_id == call_address[i]["user_id"]) {
        //  Create <div class="address_info">
        const info = document.createElement("div")
        info.setAttribute("class", "address_info")
        document.querySelector(".ues-add").prepend(info)

        // <input type="radio" name="" id="check">
        const inputType = document.createElement("input")
        inputType.setAttribute("type", "radio")
        inputType.setAttribute("data-keyword", call_address[i]["address_id"])
        inputType.setAttribute("name", "Address")
        inputType.setAttribute("id", "check")
        inputType.setAttribute("class", "radio_btn")
        inputType.setAttribute("required","")
        info.append(inputType)
        // <div id="location_info">
        const locInfo = document.createElement("div")
        locInfo.setAttribute("id", "location_info")
        info.append(locInfo)
        // <p id="location">
        const addInfo = document.createElement("p")
        addInfo.setAttribute("id", "location")
        addInfo.innerText = call_address[i]["user_houseNo"] + "," + call_address[i]["user_street"] + "," + call_address[i]["user_city"] + "," + call_address[i]["user_state"]
        locInfo.append(addInfo)

        // <p>600096</p>
        const addPin = document.createElement("p")
        addPin.setAttribute("id", "sec1")
        addPin.innerText = call_address[i]["pincode"]
        addInfo.append(addPin)
    }

}
// This is user address

let input = document.querySelectorAll(".radio_btn")
let address_id;
for (let i = 0; i < input.length; i++) {

    input[i].addEventListener("click", function () {
        address_id = input[i].dataset.keyword

    })
}
// const user = JSON.parse(localStorage.getItem("user_data"));
// console.log(user);
// const profile_email = JSON.parse(localStorage.getItem("active_user"));
// const last_email = profile_email["user_email"]

// const number1 = document.getElementById("use-phone")
// const address2 = document.getElementById("use-address")

// for (let i = 0; i < user.length; i++) {
//     if (user[i]["user_email"] == profile_email["user_email"]) {
//         number1.value = user[i]["mobile"];
//         address2.value = user[i]["address1"];
//         break;
//     }
// }

// const updateAdd = document.querySelector("#updatebtn");
// updateAdd.addEventListener("click", () => {
//     for (let i = 0; i < user.length; i++) {
//         if (last_email == user[i]["user_email"]) {
//             user[i]["address1"] = address2.value;
//             user[i]["mobile"] = number1.value;
//             localStorage.setItem("user_data", JSON.stringify(user));
//         }
//     }
// })

// This is store a data in local storage
// let newdate;
//       let dateObj = new Date();
//       let month = dateObj.getUTCMonth() + 1; //months from 1-12
//       let day = dateObj.getUTCDate();
//       let year = dateObj.getUTCFullYear();
//       newdate = day + "/" + month + "/" + year;
//       console.log(newdate);
//       // orders id code
//       let order_id = Date.now();
//       console.log(order_id);


const activemail = JSON.parse(localStorage.getItem("active_user"));
let currentEmail = activemail["user_email"];

function collectData() {

    // const orderAddress = address2.value;

    // const orderPhone = number1.value;

    const payMethod = document.querySelector('input[name="payment"]:checked').value;

    const orderPrice = price.innerText.substring(6);

    const order_pro_image1 = picture.src;

    const or_pro_name = name1.innerText;

    const or_pro_quan = numcount.innerText;

    let orderhis_id = Math.floor(Math.random() * 1000)

    let orderRecords = new Array();
    orderRecords = JSON.parse(localStorage.getItem("order_history")) ?
        JSON.parse(localStorage.getItem("order_history")) : [];
    // if (orderRecords.some((y) => {
    //     return y.his_id == orderhis_id
    // })) {
    //     alert("Product is already added")
    // }
    // else {
    //         orderRecords.push({

    //             "his_id": orderhis_id,
    //             // "order_address": orderAddress,
    //             // "order_phone": orderPhone,
    //             "payment": payMethod,
    //             "order_price": orderPrice,
    //             "or_pro_img": order_pro_image1,
    //             "or_pro_name": or_pro_name,
    //             "or_pro_quantity": or_pro_quan,
    //             "user_email": currentEmail,
    //             "address_id" : address_id
    //         })

    //     // }
    //     alert("order confirmed")
    //     localStorage.setItem("order_history", JSON.stringify(orderRecords));
    //     // window.location.href =""

    if (order_id == Number(order_id)) {
        const arr = {}

        arr.his_id = orderhis_id,
            arr.payment = payMethod,
            arr.order_price = orderPrice,
            arr.or_pro_img = order_pro_image1,
            arr.or_pro_name = or_pro_name,
            arr.or_pro_quantity = or_pro_quan,
            arr.user_email = currentEmail,
            arr.address_id = address_id

        orderRecords.push(arr);
        localStorage.setItem("order_history", JSON.stringify(orderRecords));
        window.location.href = "../../Page/User-Profile/user-order.html"

    }
    else {
        let cart_sample = JSON.parse(localStorage.getItem("cart"));
        const profile_email = JSON.parse(localStorage.getItem("active_user"));

        cart_sample.find((e) => {
            if (e.user_email == profile_email.user_email) {
                const arr = {}
                arr.his_id = orderhis_id,
                    arr.payment = payMethod,
                    arr.order_price = e.product_price,
                    arr.or_pro_img = e.pr_img_1,
                    arr.or_pro_name = e.product_name,
                    arr.or_pro_quantity = or_pro_quan,
                    arr.user_email = currentEmail,
                    arr.address_id = address_id

                orderRecords.push(arr);
                localStorage.setItem("order_history", JSON.stringify(orderRecords));
                window.location.href = "../../Page/User-Profile/user-order.html"
            }
        })
        const Cartitem = JSON.parse(localStorage.getItem("cart"));
        const useract = JSON.parse(localStorage.getItem("active_user"));
        //this filter for delete the cart which buy by user
        let cart_obj = Cartitem.filter(function (obj) {
            if (obj["user_email"] === useract["user_email"]){
                return false;
            } else{
                return true;
            }
        });
        localStorage.setItem("cart", JSON.stringify(cart_obj));
    }
}

// };