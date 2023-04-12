let products = JSON.parse(localStorage.getItem("product_detail"))
console.log(products)
products.forEach(e => {
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

    // Create a div pic-part
    const picPart = document.createElement("div")
    picPart.setAttribute("class", "pic-part")
    document.querySelector(".product").append(picPart)

    // Create a img tag
    const picture = document.createElement("img")
    picture.setAttribute("src", item["pr_img_1"])
    picture.setAttribute("alt", "Automotive Brake Part")
    document.querySelector(".pic-part").append(picture)

    // Create a detail div
    const detailSection = document.createElement("div")
    detailSection.setAttribute("class", "detail")
    document.querySelector(".product").append(detailSection)

    // Creat a p tag
    const partname = document.createElement("p")
    partname.setAttribute("class", "part-name")
    partname.innerText = item["product_name"]
    document.querySelector(".detail").append(partname)

    // Create a dic cost-rate
    const costRate = document.createElement("div")
    costRate.setAttribute("class", "cost-rate")
    document.querySelector(".detail").append(costRate)
    // This is rupee div
    const rupee1 = document.createElement("div")
    rupee1.setAttribute("class", "rupee")
    document.querySelector(".cost-rate").append(rupee1)

    

    // Create a p tag foe cost price
    const costPrice = document.createElement("p")
    costPrice.innerHTML = "₹ " + item["product_price"]
    document.querySelector(".rupee").append(costPrice)

    // Create a ratting div
    const rating = document.createElement("div")
    rating.setAttribute("class", "rating")
    document.querySelector(".cost-rate").append(rating)

    // Create ratting icon (star)
    const icon = document.createElement("div")
    icon.setAttribute("class", "star")
    // document.querySelector(".rating").append(icon)
    rating.append(icon);

    let products_star = item
    let rating_round = Math.round(products_star.rating);
    let stars = "";
    for (let j = 0; j < rating_round; j++) {
        stars += "⭐";

    }
    icon.append(stars);
    // const iconStar1 = document.createElement("i")
    // iconStar1.setAttribute("class", "fa-solid fa-star")
    // document.querySelector(".ratting").append(iconStar1)

    // const iconStar2 = document.createElement("i")
    // iconStar2.setAttribute("class", "fa-solid fa-star")
    // document.querySelector(".ratting").append(iconStar2)

    // const iconStar3 = document.createElement("i")
    // iconStar3.setAttribute("class", "fa-solid fa-star")
    // document.querySelector(".ratting").append(iconStar3)

    // const iconStar4 = document.createElement("i")
    // iconStar4.setAttribute("class", "fa-solid fa-star")
    // document.querySelector(".ratting").append(iconStar4)

    const forwed = document.createElement("a")
    forwed.setAttribute("href", "../../Page/Accesssories/seller .html?prod_id=" + item["productid"])
    icon.append(stars)
    document.querySelector(".detail").append(forwed)
    // Create a  button tag
    const button = document.createElement("button")
    button.innerHTML = "Update"
    forwed.append(button)
}





// let products = JSON.parse(localStorage.getItem("product_detail"))
// console.log(products)
// products.forEach(e => {
//     productCard(e);
// });
// function productCard(item) {
//     // let anchor_1 = document.createElement("a");
//     // anchor_1.setAttribute("href", "../../product_detail.html?name=" + item["productid"]);
//     let gallery_box = document.createElement("div")
//     gallery_box.setAttribute("class", "gallery_box")

//     let anchor_1 = document.createElement("a");
//     anchor_1.setAttribute("href", "../product/product_detail.html?prod_id=" + item["productid"]);
//     gallery_box.append(anchor_1);

//     let gallery_imgs = document.createElement("img")
//     gallery_imgs.setAttribute("class", "gallery_imgs")
//     gallery_imgs.setAttribute("src", item["pr_img_1"])
//     gallery_imgs.setAttribute("alt", "antique")
// // document.querySelector(".gallery_box").append(gallery_imgs)
//     anchor_1.append(gallery_imgs);

//     let heading_2 = document.createElement("h2")
//     heading_2.setAttribute("class", "product_name");
//     heading_2.innerText = item["product_name"];
//     // document.querySelector(".gallery_box").append(heading_2)
//     anchor_1.append(heading_2);

//     let paragraph_1 = document.createElement("p")
//     paragraph_1.setAttribute("class", "detail")
//     paragraph_1.innerText = item["highlights"]
//     // document.querySelector(".gallery_box").append(paragraph_1)
//     anchor_1.append(paragraph_1);

//     let rating = document.createElement("div")
//     rating.setAttribute("class", "rating")
//     // document.querySelector(".gallery_box").append(rating)
//     anchor_1.append(rating);

//     let icon = document.createElement("div")
//     icon.setAttribute("class", "star")
//     // document.querySelector(".rating").append(icon)
//     rating.append(icon);
    
//     let products_star = item
//     let rating_round = Math.round(products_star.rating);
//     let stars = "";
//     for (let j = 0; j < rating_round; j++) {
//         stars += "⭐";
        
//     }
//     icon.append(stars);
//     //     ratings_div = document.createElement("div");
//     // ratings_div.setAttribute("class", "product-ratings");
//     // product_card_div.append(ratings_div);
//     //     let products_star = products[i];
//     // let rating_round = Math.round(products_star.ratings);
//     // let stars = "";
//     // for (let j = 0; j < rating_round; j++) {
//     //     stars += ":star:";
//     // }
//     // ratings_div.append(stars);
//     let paragraph_2 = document.createElement("p")
//     paragraph_2.innerText = "₹ " + item["product_price"]
//     paragraph_2.setAttribute("class", "price")
//     // document.querySelector(".gallery_box").append(paragraph_2)
//     anchor_1.append(paragraph_2);
//     document.querySelector(".product_page").append(gallery_box);
//     console.log(gallery_box);
// }