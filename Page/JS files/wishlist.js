let cart_sample = JSON.parse(localStorage.getItem("cart"));
            let user = JSON.parse(localStorage.getItem("active_user"));
            let activeruseremail = user["user_email"];
            let total = 0;
            if (cart_sample == null) {

            }
            else {

                // cart_sample.find((e) => {
                for (let i = 0; i < cart_sample.length; i++) {
                    if (user["user_email"] == cart_sample[i]["user_email"]) {
                        // for(let i=0; i<=cart.length; i++){
                        // Create First div
                        // total += Number(cart_sample[i]["product_price"])

                        console.log(total)
                        const cart = document.createElement("div")
                        cart.setAttribute("class", "cart")
                        document.querySelector(".top-head").prepend(cart)

                        const first = document.createElement("div")
                        first.setAttribute("class", "first-cart")
                        cart.prepend(first)

                        // Create a img tag
                        const picture = document.createElement("img")
                        picture.setAttribute("src", cart_sample[i].pr_img_1)
                        first.append(picture)
                        console.log(picture)
                        // Create a second cart
                        const second = document.createElement("div")
                        second.setAttribute("class", "second-cart")
                        document.querySelector(".cart").append(second)
                        // Product name
                        const name1 = document.createElement("p")
                        name1.setAttribute("id", "name")
                        name1.innerHTML = cart_sample[i].product_about

                        second.append(name1)
                        // Product price
                        const price = document.createElement("p")
                        price.setAttribute("class", "price")
                        price.setAttribute("data-keyword", cart_sample[i].product_price)
                        price.innerText = "price:" + cart_sample[i].product_price;
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
                        // Create a remove btn
                        const remove1 = document.createElement("div")
                        remove1.setAttribute("class", "removebtn ")
                        document.querySelector(".cart").append(remove1)
                        // Create btn
                        const btn1 = document.createElement("button")
                        // btn1.setAttribute("class",)
                        remove1.append(btn1)
                        // create span
                        const top1 = document.createElement("span")
                        btn1.append(top1)
                        // create Icon 
                        const icon1 = document.createElement("i")
                        icon1.setAttribute("class", "fa-solid fa-trash")
                        top1.append(icon1)

                        remove1.addEventListener("click", (e) => {
                            for (let j = 0; j < cart_sample.length; j++) {
                                if (user.user_email == cart_sample[i].user_email) {
                                    cart_sample.splice(i, 1);
                                    localStorage.setItem("cart", JSON.stringify(cart_sample));
                                    alert("Are you sure remove cart");
                                    location.reload();
                                    break;
                                }

                            }
                        })

                    
                    }
                }


            }

            const plus = document.querySelectorAll(".plus"),
                minus = document.querySelectorAll(".minus"),
                num = document.querySelectorAll(".num");


            let totalAmount = document.getElementById("total_count");
            let totalAmount1 = document.getElementById("total_count1");
            let a = 1;
            // plus.forEach((plusbtn) => {
            //     console.log(plusbtn);
            //     plusbtn.addEventListener("change", () => {

            //     });

            // })
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
                plus_btn[i].addEventListener("click", function () {

                    let number1 = parseFloat(num_digit[i].innerText)
                    number1 = number1 + 1
                    num_digit[i].innerText = number1

                    getQty();



                })
                getQty();
                minus_btn[i].addEventListener("click", function () {

                    if (num_digit[i].innerHTML !== "1") {
                        let number1 = parseFloat(num_digit[i].innerText)
                        number1 = number1 - 1
                        num_digit[i].innerText = number1


                        getQty();

                    }

                })
            }
            // This is Move to buy now page the cart products
moveto = document.getElementById("confirm-order");
moveto.setAttribute("href","../../Page/Accesssories/buynow.html?id=" + activeruseremail)
            