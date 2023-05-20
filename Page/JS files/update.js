


    //read update delete 
    let products = JSON.parse(localStorage.getItem("product_detail"))
  // url params
  const url = window.location.search// ?prod_id=33
  console.log(url);
  const urlParams= new URLSearchParams(url)// "prod_id":"33"
  console.log(urlParams);

  const searchresult=urlParams.get("prod_id")//33
  
  console.log(searchresult);


  let showndetails;
  products.find((item)=>{
    if(searchresult== item["productid"]){
      return showndetails=item

    }
    else{
      return showndetails=0
    }
  })
console.log(showndetails);


// const pro_name = document.getElementById("pr_name");
      const about_product = document.getElementById("about_product")
      const product_price = document.getElementById("product_price")
      const pr_img_1 = document.getElementById("pr_img_1")
      const pr_img_2 = document.getElementById("pr_img_2")
      const pr_img_3 = document.getElementById("pr_img_3")
      const pr_img_4 = document.getElementById("pr_img_4")
      const highlights = document.getElementById("high")
      const description=document.getElementById("description")
      const rating = document.getElementById("rating")
      const vehicleType=document.getElementById("vehicle-type")
      const editProduct = document.getElementById("edit")
      const deleteproduct = document.getElementById("delete")

      //view
    //   let productnameincludes=  
    // pro_name.value = showndetails["product_name"]
      rating.value = showndetails["rating"]
      vehicleType.value = showndetails["product_part_type"]
      product_price.value = showndetails["product_price"]
      about_product.value = showndetails["about_product"]
      highlights.value = showndetails["highlights"]
      description.value = showndetails["description"]
      pr_img_1.value = showndetails["pr_img_1"]
      pr_img_2.value = showndetails["pr_img_2"]
      pr_img_3.value = showndetails["pr_img_3"]
      pr_img_4.value = showndetails["pr_img_4"]
editProduct.value=showndetails["productid"]
deleteproduct.value=showndetails["productid"];


// update 

editProduct.addEventListener('click' , ()=> {
let saveId=editProduct.value

for(let i=0;i<products.length;i++){
    if(saveId==products[i]["productid"]){
        // showndetails["product_name"] = pro_name.value
        showndetails["rating"]=rating.value
        showndetails["product_part_type"]=vehicleType.value
        showndetails["product_price"]=product_price.value
        showndetails["about_product"]= about_product.value 
        showndetails["highlights"]=highlights.value 
        showndetails["description"]=description.value
        showndetails["pr_img_1"]=pr_img_1.value
        showndetails["pr_img_2"]=pr_img_2.value
        showndetails["pr_img_3"]=pr_img_3.value
        showndetails["pr_img_4"]=pr_img_4.value

        localStorage.setItem("product_detail",JSON.stringify(products))

         alert("Product Updated")
    }
}

})


// delete
deleteproduct.addEventListener("click",()=>{
    let deleteid=deleteproduct.value
    for(let i=0; i<products.length; i++){
        if(deleteid==products[i]["productid"]){
            showndetails["status"]=false
            localStorage.setItem("product_detail",JSON.stringify(products))

            alert("Product Deleted")
        }
    }


})