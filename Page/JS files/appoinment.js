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


const date = document.getElementById("date");
console.log(date);
// let today = new Date().toISOString().split("T")[0];
const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
date.setAttribute("min", today);

const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');

timeInput.addEventListener('change', validateTime);

function validateTime() {
  const selectedDate = dateInput.value;
  const selectedTime = timeInput.value;

  if (!selectedDate) {
    return; // If date is not selected, do not perform validation
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  const formattedCurrentDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
  const formattedCurrentTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;

  const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
  const currentDateTime = new Date(`${formattedCurrentDate}T${formattedCurrentTime}`);

  if (selectedDateTime <= currentDateTime) {
    alert('Please select a time in the future.');
    timeInput.value = ''; // Clear the time input value
  }
  }





// let startTimeValue= null;
// // let endTimeValue=null;
// const timePicker={
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: "h:i K",
//     time_24hr: false,
//   minuteIncrement: 10,
// //   defaultDate: "12:00 AM",
//   onChange: function(selectedDates, dateStr) {
//     // Store selected start and end times in global variables
//     if (this.input.id === "time") {
//       startTime = dateStr;
//     } 
//     // localStorage.setItem("startTime", startTime);
//     // localStorage.setItem("endTime", endTime);
//   }
// }
// const timePicker = {
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: "h:i K",
//     time_24hr: false,
//     minuteIncrement: 60,
//     onChange: function(selectedDates, dateStr) {
//       const currentTime = new Date(); // Get the current time
//       const selectedTime = new Date(dateStr); // Convert selected time string to Date object
//       if (selectedTime <= currentTime) {
//         // The selected time has already passed, hide it
//         this.clear(); // Clear the selected time
//         console.log("Selected time has already passed. It will be hidden.");
//       }
//     }
//   };
//   const startTimepicker = flatpickr("#startTime", timePicker);

// const timePicker = {
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: "h:i K",
//     time_24hr: false,
//     minuteIncrement: 60,
//     onChange: function(selectedDates, dateStr) {
//       const currentTime = new Date(); // Get the current time
//       const selectedTime = new Date(dateStr); // Convert selected time string to Date object
      
//       if (selectedTime <= currentTime) {
//         // The selected time has already passed, disable it
//         this.config.disable.push({ from: "00:00", to: dateStr });
//         this.redraw();
//         console.log("Selected time has already passed. It will be hidden.");
//       }
//     }
//   };
//   const startTimepicker = flatpickr("#startTime", timePicker);

// const timePicker = {
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: "h:i K",
//     time_24hr: false,
//     minuteIncrement: 60,
//     minTime: "12:00 AM", // Initial minimum selectable time
//     onChange: function(selectedDates, dateStr) {
//       const currentTime = new Date(); // Get the current time
//       const selectedTime = new Date(dateStr); // Convert selected time string to Date object
      
//       if (selectedTime <= currentTime) {
//         // The selected time has already passed, update the minimum selectable time
//         const currentHour = currentTime.getHours();
//         const currentMinute = currentTime.getMinutes();
//         const currentAMPM = currentHour < 12 ? "AM" : "PM";
//         const minTime = `${currentHour}:${currentMinute} ${currentAMPM}`;
//         this.set("minTime", minTime); // Update the minimum selectable time
//         this.setDate(null); // Clear the selected time
//         console.log("Selected time has already passed. It will be hidden.");
//       }
//     }
//   };
//   const startTimepicker = flatpickr("#startTime", timePicker);
// // const startTimepicker = flatpickr("#time", timePicker);
// const endTimepicker = flatpickr("#endTime", timePicker);
const check1 = document.querySelectorAll("input[type=radio]")
console.log(check1);

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
    const contactPhone = document.getElementById("contactphone").value;
    // const company1 = document.getElementById("company").value;
    const homeHouse = document.getElementById("home-num").value;
    const homeStreet = document.getElementById("home-street").value;
    const homeCity = document.getElementById("home-city").value;
    const homeState = document.getElementById("home-state").value;
    // const contactEmail = document.getElementById("contactemail").value;

    const homePincoded = document.getElementById("address").value;
    let bookingid = Math.floor(Math.random() * 1000000)

    let checkValue;
    // check box

    const check1 = document.querySelectorAll("input[type=radio]")
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
    // if (cusBook.some((s) => { return s.customer_email == contactEmail })) {
    //     alert("already booked")
    // }
    // else {
        cusBook.push({

            "Booking_id": bookingid,
            "Booking_date": date1,
            "Booking_time": time1,
            "Vehicle_type": typeVehicle,
            "Booking_service": checkValue,
            "cus_hNo": homeHouse,
            "cus_street": homeStreet,
            "cus_city":homeCity,
            "cus_state":homeState,
            "cus_phone": contactPhone,
            "cus_pincode": homePincoded,
            "User_id": cus_id
        })
        window.location.href = "../../Page/User-Profile/user-appointment.html"
    // }
    localStorage.setItem("book_data", JSON.stringify(cusBook));
    alert("")
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
