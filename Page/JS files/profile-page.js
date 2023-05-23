
const orderhis = JSON.parse(localStorage.getItem("order_history"));
console.log(orderhis);
const loginuser = JSON.parse(localStorage.getItem("active_user"));
console.log(loginuser.user_email);
const use_address = JSON.parse(localStorage.getItem("user_address"));

let filterOrder;

if(orderhis==null){
}
else{


 filterOrder = orderhis.filter((data) => {
    return data.user_email == loginuser["user_email"];
      // console.log(filterOrder);

})

for (const order of filterOrder) {
    const { address_id } = order
    const address = use_address.find(data =>
        data.address_id == address_id

    )
    order["user_address"] = address
}
console.log(filterOrder);

for (let i = 0; i < filterOrder.length; i++) {
    // if (orderhis[i]["user_email"] == loginuser["user_email"]) {

    // Create order history page in JSON
    // Create a <div class="or-contain">
    const orderContain = document.createElement("div")
    orderContain.setAttribute("class", "or-contain")
    document.querySelector(".order-his").prepend(orderContain)
    // Create <div class="order-pic">
    const orPic = document.createElement("div")
    orPic.setAttribute("class", "order-pic")
    orderContain.append(orPic)

    // img id="order-image1">
    const orderPicture = document.createElement("img")
    orderPicture.setAttribute("id", "order-image1")
    orderPicture.setAttribute("src", filterOrder[i]["or_pro_img"])
    orPic.append(orderPicture)
    // Create <div class="order-ditail">
    const orDitail = document.createElement("div")
    orDitail.setAttribute("class", "order-ditail")
    orderContain.append(orDitail)
    // Create <h4 id="order-name"
    const orName = document.createElement("h3")
    orName.setAttribute("id", "order-name")
    orName.innerText =filterOrder[i]["or_pro_name"]
    orDitail.append(orName)
    // Create <p id="order-quantity">
    const orQuan = document.createElement("p")
    orQuan.setAttribute("id", "order-quantity")
    orQuan.innerText ="Quantity:" + filterOrder[i]["or_pro_quantity"]
    orDitail.append(orQuan)
    // Create <div class="order-price">
    const orPrice = document.createElement("div")
    orPrice.setAttribute("class", "order-price")
    orderContain.append(orPrice)
    // Create <p id="order-price">
    const orderPrice = document.createElement("p")
    orderPrice.setAttribute("id", "order-price")
    orderPrice.innerText = filterOrder[i]["order_price"]
    orPrice.append(orderPrice)
    // create <div class="oeder-address">
    const orAdd = document.createElement("div")
    orAdd.setAttribute("class", "oeder-address")
    orderContain.append(orAdd)
    // Create <span id="hno">sf</span>
    const orHouse = document.createElement("span")
    orHouse.setAttribute("id", "hno")
    orHouse.innerText = filterOrder[i]["user_address"]["user_houseNo"]
    orAdd.append(orHouse)
    // Create <span id="orStreet">fbvtg</span>
    const orStreet = document.createElement("span")
    orStreet.setAttribute("id", "orStreet")
    orStreet.innerText = filterOrder[i]["user_address"]["user_street"]
    orAdd.append(orStreet)
    // Create <span id="city">dcec</span>
    const orCity = document.createElement("span")
    orCity.setAttribute("id", "city")
    orCity.innerText = filterOrder[i]["user_address"]["user_city"]
    orAdd.append(orCity)
    //    Create <span id="state">ded</span>
    const orState = document.createElement("span")
    orState.setAttribute("id", "state")
    orState.innerText = filterOrder[i]["user_address"]["user_state"]
    orAdd.append(orState)
    // Create <span id="pincode">eded</span>
    const orPin = document.createElement("span")
    orPin.setAttribute("id", "pincode")
    orPin.innerText ="-"+ filterOrder[i]["user_address"]["pincode"]+"."
    orAdd.append(orPin)
}
}


// This is booking data get in localStorage 
const book = JSON.parse(localStorage.getItem("book_data"));

const active_user = JSON.parse(localStorage.getItem("active_user"));


if(book==null){
    const appointmentpage =document.createElement("h3")
    appointmentpage.innerHTML="You have no appointment"
document.querySelector(".heading").prepend(appointmentpage)
}
else{



let filterappointment = book.filter((data) => {
    return data.User_id == active_user["user_id"]

})
filterappointment.forEach(item => {
    
    document.querySelector(".table_row").innerHTML += ` <tr>
                                <td>${item.Booking_id}</td>
                                <td>${item.Vehicle_type}</td>
                                <td>${item.Booking_time}</td>
                                <td>${item.Booking_date}</td>
                                <td>${item.cus_phone}</td>
                                <td>${item.Booking_service}</td>
                                <td>${item.cus_hNo+" "+item.cus_street+" "+item.cus_city+" "+item.cus_state}</td>
                            </tr>`
});

}