let products = JSON.parse(localStorage.getItem("product_detail"))
console.log(products);
console.log(products);

let filterProducts;

if (products == null) {

}

else {
    filterProducts = products.filter((data) => {
        if (data["status"] == true) {
            return true
        }
        else {
            return false
        }
    })
}


if (filterProducts == null) {

}
else {
    filterProducts.forEach(e => {
        productCard(e);
    });
}

// for (i = 0; i <productlist.length; i++) 
function productCard(item) {
    const product = document.createElement("div")
    product.setAttribute("class", "product")
    // document.querySelector(".container").prepend(product)
    document.querySelector(".container").prepend(product)
    console.log(product);
    const forwed = document.createElement("a")
    forwed.setAttribute("href", "../../Page/Accesssories/product.html?prod_id=" + item["productid"])
    product.append(forwed)

    //This is product div

    // console.log(product)

    // Create a div pic-part
    const picPart = document.createElement("div")
    picPart.setAttribute("class", "pic-part")
    forwed.append(picPart)

    // Create a img tag
    const picture = document.createElement("img")
    picture.setAttribute("src", item["pr_img_1"])
    picture.setAttribute("alt", "Automotive Brake Part")
    picPart.append(picture)

    // Create a detail div
    const detailSection = document.createElement("div")
    detailSection.setAttribute("class", "detail")
    forwed.append(detailSection)

    // Creat a p tag
    const partname = document.createElement("p")
    partname.setAttribute("class", "part-name")
    partname.innerText = item["product_name"]
    detailSection.append(partname)

    // Create a dic cost-rate
    const costRate = document.createElement("div")
    costRate.setAttribute("class", "cost-rate")
    detailSection.append(costRate)
    // This is rupee div
    const rupee1 = document.createElement("div")
    rupee1.setAttribute("class", "rupee")
    costRate.append(rupee1)

    // Create a p tag foe cost price
    const costPrice = document.createElement("p")
    costPrice.innerHTML = "Price:" + "    " + "₹ " + item["product_price"]
    rupee1.append(costPrice)

    // Create a ratting div
    const rating = document.createElement("div")
    rating.setAttribute("class", "rating")
    costRate.append(rating)

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

    // Create a  button tag
    // const button = document.createElement("button")
    // button.innerHTML = "More"
    // document.querySelector(".detail").append(button)
}