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
    productCard(filterProducts)
    // filterProducts.forEach(e => {
    //     productCard(e);
    // });
}

// for (i = 0; i <productlist.length; i++) 
// const parentHtmlDiv = document.querySelector(".parent");
//   parentHtmlDiv.innerHTML = "";

// const container = document.querySelector(".container");



function productCard(array=[]) {
    const parentHtmlDiv = document.querySelector(".container");
  parentHtmlDiv.innerHTML = "";
  array.forEach((item) => {
    const product = document.createElement("div")
    product.setAttribute("class", "product")
    product.setAttribute("value",item["product_part_type"]);
    // document.querySelector(".container").prepend(product)
    parentHtmlDiv.prepend(product)
    console.log(product);
    const forwed = document.createElement("a")
    forwed.setAttribute("href", "../../Page/Accesssories/product.html?id=" + item["productid"])
    product.append(forwed)

    //This is product div

    // console.log(product)

    // Create a div pic-part
    // const picPart = document.createElement("div")
    // picPart.setAttribute("class", "pic-part")
    // forwed.append(picPart)

    // // Create a img tag
    // const picture = document.createElement("img")
    // picture.setAttribute("src", item["pr_img_1"])
    // picture.setAttribute("alt", "Automotive Brake Part")
    // picPart.append(picture)

    // // Create a detail div
    // const detailSection = document.createElement("div")
    // detailSection.setAttribute("class", "detail")
    // forwed.append(detailSection)

    // // Creat a p tag
    // const partname = document.createElement("p")
    // partname.setAttribute("class", "part-name")
    // partname.innerText = item["product_name"]
    // detailSection.append(partname)

    // // Create a dic cost-rate
    // const costRate = document.createElement("div")
    // costRate.setAttribute("class", "cost-rate")
    // detailSection.append(costRate)
    // // This is rupee div
    // const rupee1 = document.createElement("div")
    // rupee1.setAttribute("class", "rupee")
    // costRate.append(rupee1)

    // // Create a p tag foe cost price
    // const costPrice = document.createElement("p")
    // costPrice.innerHTML = "Price:" + "    " + "₹ " + item["product_price"]
    // rupee1.append(costPrice)

    // // Create a ratting div
    // const rating = document.createElement("div")
    // rating.setAttribute("class", "rating")
    // costRate.append(rating)

    // // Create ratting icon (star)
    // const icon = document.createElement("div")
    // icon.setAttribute("class", "star")
    // // document.querySelector(".rating").append(icon)
    // rating.append(icon);

    // // Create a  button tag
    // // const button = document.createElement("button")
    // // button.innerHTML = "More"
    // // document.querySelector(".detail").append(button)

    // Create the card element
const card = document.createElement('div');
card.setAttribute("class","card");
forwed.append(card)

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

// Append the card to the desired parent element
// const parentElement = document.querySelector('#parentElement');
// parentElement.append(card);
  })
}

const selectOption = document.getElementById("store");
let filteredData = [];
selectOption.addEventListener("change", (e) => {
  const seletedQuery = selectOption.value.trim();
  console.log(seletedQuery);
  // const searchbox = document.getElementById("search2");
  if (e.key === "Enter") {
    e.preventDefault();
    // e.stopPropagation();
    // return false
  }
  if (seletedQuery !== "all") {
    filteredData = filterProducts.filter((item) =>
    item.product_part_type.includes(seletedQuery)
    );
  }
  // else if (e.target===searchbox){
  //   filteredData=ground_list.filter((item) => {
  //     return item.groundname.toLowerCase().includes(searchQuery) || item.locationname.toLowerCase().includes(searchQuery)
  //   })
  // }
  else {
    filteredData = filterProducts;
  }
  console.log(filteredData);
  if (filteredData.length === 0) {
    const parentHtmlDiv2 = document.querySelector(".parent");
    const p = document.createElement("p");
    p.setAttribute("class", "noresult");
    p.innerText = "No result found";
    parentHtmlDiv2.innerHTML = "";
    parentHtmlDiv2.append(p);
    console.log("pkdd");
  } else {
    productCard(filteredData);
  }
});

const searchbox = document.getElementById("name");
searchbox.addEventListener("keydown", (e) => {
  const searchQuery = searchbox.value.trim().toLowerCase();
//   console.log(searchQuery,"yogi");
  if (e.key === "Enter"){
    e.preventDefault();
    // e.stopPropagation();
    // // return false
  }
  const filteredList = filteredData.filter((item) => {
    return item.about_product.toLowerCase().includes(searchQuery) 
    // || item.about_product.toLowerCase().includes(searchQuery)
  })
  productCard(filteredList);
if(selectOption.value==""){
  const filteredList2 = filterProducts.filter((item) => {
    return item.about_product.toLowerCase().includes(searchQuery)
    //  || item.about_product.toLowerCase().includes(searchQuery)
  })
  
  productCard(filteredList2)
}
})
// let search = document.getElementById("name");


// search.addEventListener("keyup", (e)=>{
//     let words = e.target.value.toLowerCase();


//     let latter = document.querySelectorAll(".card");

//    latter.forEach((element)=>{
//     let content = element.children[1].textContent.toLowerCase();
//     if(content.includes(words)){
//         element.style.display = "grid";
//     }
//     else{
//         element.style.display = "none";
//     }
//    });
// });

