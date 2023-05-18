let products = JSON.parse(localStorage.getItem("product_detail"))
console.log(products)



let filterProducts=products.filter((data)=>{
    if(data["status"]==true){
        return true 
    }
    else{
        return false
    }
})
filterProducts.forEach(e => {
    productCard(e);
});
// for (i = 0; i <productlist.length; i++) 
function productCard(item) {
    // console.log(forwed)
    //This is product div
    const product = document.createElement("div")
    product.setAttribute("class", "product")
    // document.querySelector(".container").prepend(product)
    document.querySelector(".container").prepend(product)
   
    // console.log(product)

    // // Create a div pic-part
    // const picPart = document.createElement("div")
    // picPart.setAttribute("class", "pic-part")
    // document.querySelector(".product").append(picPart)
    
        // Create the card element
const card = document.createElement('div');
card.setAttribute("class","card");
document.querySelector(".product").append(card)
// forwed.append(card)
    // // Create a img tag
    // const picture = document.createElement("img")
    // picture.setAttribute("src", item["pr_img_1"])
    // picture.setAttribute("alt", "Automotive Brake Part")
    // document.querySelector(".pic-part").append(picture)

    // // Create a detail div
    // const detailSection = document.createElement("div")
    // detailSection.setAttribute("class", "detail")
    // document.querySelector(".product").append(detailSection)

    // // Creat a p tag
    // const partname = document.createElement("p")
    // partname.setAttribute("class", "part-name")
    // partname.innerText = item["product_name"]
    // document.querySelector(".detail").append(partname)

    // // Create a dic cost-rate
    // const costRate = document.createElement("div")
    // costRate.setAttribute("class", "cost-rate")
    // document.querySelector(".detail").append(costRate)
    // // This is rupee div
    // const rupee1 = document.createElement("div")
    // rupee1.setAttribute("class", "rupee")
    // document.querySelector(".cost-rate").append(rupee1)

    // // Create a p tag foe cost price
    // const costPrice = document.createElement("p")
    // costPrice.innerHTML = "₹ " + item["product_price"]
    // document.querySelector(".rupee").append(costPrice)

    // // Create a ratting div
    // const rating = document.createElement("div")
    // rating.setAttribute("class", "rating")
    // document.querySelector(".cost-rate").append(rating)

    // // Create ratting icon (star)
    // const icon = document.createElement("div")
    // icon.setAttribute("class", "star")
    // // document.querySelector(".rating").append(icon)
    // rating.append(icon);

    // let products_star = item
    // let rating_round = Math.round(products_star.rating);
    // let stars = "";
    // for (let j = 0; j < rating_round; j++) {
    //     stars += "⭐";

    // }
    // icon.append(stars);
 // Create the card image element
const cardImg = document.createElement('div');
cardImg.setAttribute("class","card-img");
card.append(cardImg);

// Create the card image tag
const cardImage = document.createElement('img')
cardImage.setAttribute("src", item["pr_img_1"])
cardImg.append(cardImage);
// Create the card info element
const cardInfo = document.createElement('div');
cardInfo.setAttribute("class","card-info");

// Create the product title element
// const title = document.createElement('p');
// title.setAttribute("class","text-title");
// title.innerText = item["product_name"];
// cardInfo.append(title);

// Create the product description element
const description = document.createElement('p');
description.setAttribute("class","text-body");
description.innerText = item["about_product"];
cardInfo.append(description);

card.append(cardInfo);

// Create the card footer element
const cardFooter = document.createElement('div');
cardFooter.className = 'card-footer';

// Create the price element
const price = document.createElement('span');
price.setAttribute("class","text-title");
price.innerText=  "₹ " + item["product_price"]
cardFooter.append(price);

// Create the card button element (empty in this example)
const cardButton = document.createElement('div');
cardButton.setAttribute("class","card-button");
cardFooter.append(cardButton);
let products_star = item
    let rating_round = Math.round(products_star.rating);
    let stars = "";
    for (let j = 0; j < rating_round; j++) {
        stars += "⭐";

    }
    cardButton.append(stars);
card.append(cardFooter);

    const forwed = document.createElement("a")
    forwed.setAttribute("href", "../../Page/Admin/update_product.html?prod_id=" + item["productid"])
    // icon.append(stars)
    card.append(forwed)
    // Create a  button tag
    const button = document.createElement("button")
    button.innerHTML = "Update"
    forwed.append(button)
}
