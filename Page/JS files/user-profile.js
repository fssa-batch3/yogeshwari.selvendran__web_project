    const user = JSON.parse(localStorage.getItem("user_data"))
     const loginUser = JSON.parse(localStorage.getItem("active_user"))
        

        //This is for get a data in form
        const firstName = document.getElementById("user-firstname");
        const lastName = document.getElementById("user-lastname");
        const email = document.getElementById("user-email");
        const userMobile = document.getElementById("user-number");
        // const address = document.getElementById("user-address");
        const pincodeAddress = document.getElementById("user-pincode");

        //console.log();
        //This is for store data in localstorage

        // view

        for (let i = 0; i < user.length; i++) {
            if (loginUser["user_email"] == user[i]["user_email"]) {
                firstName.value = user[i]["user_Firstname"]
                lastName.value = user[i]["user_lastname"]
                email.value = user[i]["user_email"]
                userMobile.value = user[i]["mobile"]
                // address.value = user[i]["address1"]
                pincodeAddress.value = user[i]["pinaddress"]
            }
        }



        // localStorage.setItem("profile",JSON.stringify(user))
        // update 
        const formBtn = document.getElementById("form");

        const btn = document.getElementById("btn")

        formBtn.addEventListener("submit", (e) => {
            e.preventDefault();


            if (btn.innerHTML == "Edit") {
                btn.innerHTML = "Save"
                firstName.removeAttribute("disabled")
                lastName.removeAttribute("disabled")

                userMobile.removeAttribute("disabled")
                // address.removeAttribute("disabled")
                pincodeAddress.removeAttribute("disabled")

            }
            else if (btn.innerHTML = "Edit") {
                firstName.setAttribute("disabled", "")
                lastName.setAttribute("disabled", "")

                userMobile.setAttribute("disabled", "")
                // address.setAttribute("disabled", "")
                pincodeAddress.setAttribute("disabled", "")


                const userid = JSON.parse(localStorage.getItem("user_data"))
                // const userlist = JSON.parse(localStorage.getItem("profile"))
                userid.find(element => {
                    if (loginUser["user_email"] == element["user_email"]) {

                        element["user_Firstname"] = firstName.value
                        element["user_lastname"] = lastName.value
                        element["mobile"] = userMobile.value
                        // element["address1"] = address.value
                        element["pinaddress"] = pincodeAddress.value
                        localStorage.setItem("user_data", JSON.stringify(userid))
                        // localStorage.setItem("profile", JSON.stringify(element))
                    }
                })
            }
        })

        const use_pro = document.getElementById("log")

        use_pro.addEventListener("click", function () {
            console.log("sethu");
            const erase = delete loginUser

            window.location.href = "../../index.html"
            localStorage.setItem("active_user", JSON.stringify(erase))

        })
        // Profile image
        const imageUpload = document.getElementById("upload-file");
        const pro_name = document.querySelector(".pro_image")
        imageUpload.addEventListener("change", (e) => {
            const file = e.target.files[0];

            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                pro_name.src = e.target.result;
                const userRecords = JSON.parse(localStorage.getItem("user_data"))
                const user_active = JSON.parse(localStorage.getItem("active_user"));
                for (let i = 0; i < userRecords.length; i++) {
                    if (user_active["user_email"] == userRecords[i]["user_email"]) {
                        userRecords[i]["imagename"] = file.name;
                        userRecords[i]["url"] = e.target.result;
                        break;
                    };

                }
                localStorage.setItem("user_data", JSON.stringify(userRecords));
            };
            fileReader.readAsDataURL(file);
        });
        // refresh
        const userRecords = JSON.parse(localStorage.getItem("user_data"));
        const user_active = JSON.parse(localStorage.getItem("active_user"));
        for (let i = 0; i < userRecords.length; i++) {
            if (user_active["user_email"] == userRecords[i]["user_email"]) {
                const savedImage = userRecords[i];
                console.log(savedImage);
                if (savedImage && savedImage.url) {
                    pro_name.src = savedImage.url;
                }
                else {
                    pro_name.src = "https://iili.io/HkW7U4S.jpg"
                }
                break;
            }
        }