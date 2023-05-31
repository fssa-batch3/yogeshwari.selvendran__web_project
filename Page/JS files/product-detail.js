const url = window.location.search //"prd_id=54"
console.log(url);
const urlparams = new URLSearchParams(url);//"prod_id" =" "
console.log(urlparams);
const product_id = urlparams.get("id")
console.log(product_id);


const pro_array = JSON.parse(localStorage.getItem("product_detail"))


const search = pro_array.find(function (obj) {

    if (obj["productid"] == product_id) {
        return true
    }
    else {
        return false
    }
})


// get side product 1st  images
const pr_image1 = document.getElementById("sub_pic1");
pr_image1.setAttribute("src", search["pr_img_1"]);

// get side product 2st  images
const pr_image2 = document.getElementById("sub_pic2");
pr_image2.setAttribute("src", search["pr_img_2"]);

// get side product 3rd  images
const pr_image3 = document.getElementById("sub_pic3");
pr_image3.setAttribute("src", search["pr_img_3"]);

// get main product  images
const pr_main = document.getElementById("product_main-image");
pr_main.setAttribute("src", search["pr_img_4"]);


// get product name

// const pr_name = document.getElementById("product_name");
// pr_name.innerText = search["product_name"]

// get About product 
const pr_about = document.getElementById("about_product");
pr_about.innerText = search["about_product"]

// get product price
const pr_price = document.getElementById("product_price");
pr_price.innerText = search["product_price"]

// get product price
const pr_highlight = document.getElementById("add_highlight");
pr_highlight.innerText = search["highlights"]

// get product description
const pr_description = document.getElementById("pro_description");
pr_description.innerText = search["description"]

// get product ratting
const pr_ratting = document.getElementById("product_ratting");
pr_ratting.innerText = search["rating"]

//  get buynow btn data
const buynow = document.getElementById("order-nav")
buynow.setAttribute("href","../../Page/Accesssories/buynow.html?id=" +search["productid"])




// This is add to cart
let btn_cart = document.getElementById("add_card");

btn_cart.addEventListener("click", (element)=>{
let user = JSON.parse(localStorage.getItem("active_user"));
let addcart = JSON.parse(localStorage.getItem("cart")) ?? [];


let check;

addcart.find((e)=>{
  
    if(
        e["productid"] == search["productid"] &&
        e["user_email"] == user ["user_email"]
    ){
        return (check = 1);
    } else{
        return (check = 0);
    }
   })

   if(check == 1){
    alert("already added");
   }
   else{
     let product = {};
   
     product["pr_img_1"] = search["pr_img_1"];
     product["product_price"] = search["product_price"];
     product["rating"] = search["rating"];
     product["product_about"] = search["about_product"];
     product["user_email"] = user["user_email"];
     product["productid"]=search["productid"]


     addcart.push(product);
     localStorage.setItem("cart",JSON.stringify(addcart));
     alert("added");
    }
  })

//   This is buy now
let buy_now = document.getElementById("buy_now");

buy_now.addEventListener("click",(element)=>{
    let user = JSON.parse(localStorage.getItem("active_user"));
    let buynow = JSON.parse(localStorage.getItem("orders")) ?? [];


    let check;

    buynow.find((e)=>{
        if(
            e["productid"] == search["productid"] &&
            e["user_email"] == user ["user_email"]
        ){
            return(check = 1);
        }
        else{
            return(check = 0);
        }
    })
    if(check == 1){

    }
    else{
        let product = {};

        product["pr_img_1"] = search["pr_img_1"];
        product["product_price"] = search["product_price"];
        product["product_about"] = search["about_product"];
        product["user_email"] = user["user_email"];
        product["productid"]=search["productid"];
        product["order_status"]="pending";

        buynow.push(product);
        localStorage.setItem("orders",JSON.stringify(buynow));
        // btn.href ="../../Page/Accesssories/buynow.html?prod_id=" +search["productid"]
        // alert("Continue");
        
    }
})