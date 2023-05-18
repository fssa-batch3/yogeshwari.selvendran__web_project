const bike_service = document.getElementById("bike");
const car_service = document.getElementById("car");
const service_bike = document.getElementById("check-Box");
const service_car = document.getElementById("check-Box1");
bike_service.addEventListener("click", () => {
    service_bike.style.display = "block";
    service_car.style.display = "none";
})
car_service.addEventListener("click", () => {
    service_car.style.display = "block";
    service_bike.style.display = "none";
})




const appData = document.getElementById("app-book")
appData.addEventListener('submit', (s) => {
    s.preventDefault();
    collectData();
})

const cus_data =JSON.parse(localStorage.getItem("active_user"));
console.log(cus_data);
const cus_id = cus_data["user_id"];
console.log(cus_id,"yogi");
function collectData() {
    // const vehicleYear = document.getElementById("vehicleyear").value;

    // const vehicleMileage = document.getElementById("vehiclemileage").value;
    const date1 = document.getElementById("date").value;
    const time1 = document.getElementById("time").value;
    const typeVehicle = document.querySelector('input[name="vehicle-type"]:checked').value;
    // console.log(typeVehicle);
    // const company1 = document.getElementById("company").value;
    const contactName = document.getElementById("contactname").value;
    const contactEmail = document.getElementById("contactemail").value;
    const contactPhone = document.getElementById("contactphone").value;
    const contactAddress = document.getElementById("address").value;
    let bookingid = Math.floor(Math.random() * 100)

    let checkValue;
    // check box

    const check1 = document.querySelectorAll("input[type=checkbox]")
    check1.forEach((e) => {
        if (e.checked) {
            checkValue = e.value
        }
    })
    // const contactMessage = document.getElementById("contactmessage").value;

    //This is for store data in localstorage
    let cusBook = new Array();
    cusBook = JSON.parse(localStorage.getItem("book_data")) ?
        JSON.parse(localStorage.getItem("book_data")) : []
    if (cusBook.some((s) => { return s.customer_email == contactEmail })) {
        alert("already booked")
    }
    else {
        cusBook.push({

            "Booking_id": bookingid,
            "Booking_date": date1,
            "Booking_time": time1,
            "Vehicle_type": typeVehicle,
            "Booking_service": checkValue,
            "customer_name": contactName,
            "customer_email": contactEmail,
            "customer_phone": contactPhone,
            "customer_address": contactAddress,
            "User_id": cus_id
        })
        window.location.href = "../../Page/Home/profile.html"
    }
    localStorage.setItem("book_data", JSON.stringify(cusBook));
}

// Customar reviews
const reviewData = document.getElementById("reviews")
reviewData.addEventListener('submit', (p) => {
    p.preventDefault();
    addData();
})
function addData() {
    let username = document.getElementById("review-username").value;
    let message = document.getElementById("rewiew_message").value;
    // let userimage = $("#review-userimage").val(); 
    let review = new Array();
    review = JSON.parse(localStorage.getItem("user_review")) ?
        JSON.parse(localStorage.getItem("user_review")) : []
    if (review.some((p) => { return p.cust_name == username })) {
        alert("already added")
    }
    else {
        review.push({
            // "review_id":reviewid,
            "cust_name": username,
            "cust_message": message
        })
    }
    alert("Thank you")
    localStorage.setItem("user_review", JSON.stringify(review));
}
