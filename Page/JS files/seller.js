const submitbut = document.getElementById("sub")
    submitbut.addEventListener("click", function (e) {
      e.preventDefault();
      // const pro_name = document.getElementById("pr_name").value;
      const about_product = document.getElementById("about_product").value
      const product_price = document.getElementById("product_price").value
      const pr_img_1 = document.getElementById("pr_img_1").value
      const pr_img_2 = document.getElementById("pr_img_2").value
      const pr_img_3 = document.getElementById("pr_img_3").value
      const pr_img_4 = document.getElementById("pr_img_4").value
      const highlights = document.getElementById("high").value
      const description=document.getElementById("description").value
      const vehicleType = document.getElementById("vehicle-type").value
      const rating = document.getElementById("rating").value
      let productid = Math.floor(Math.random() * 100)
      // let product_arr = []
      let product_arr = JSON.parse(localStorage.getItem("product_detail")) ?? []


if(product_arr.some((s) => {return s.product_name == pro_name && s.pr_img_1 ==pr_img_1 })){
  alert("Already Saved")
}

else{


  product_arr.push({
    "productid": productid,
    "product_name": "",
    "about_product": about_product,
    "product_price": product_price,
    "pr_img_1": pr_img_1,
    "pr_img_2": pr_img_2,
    "pr_img_3": pr_img_3,
    "pr_img_4": pr_img_4,
    "highlights": highlights,
    "rating": rating,
    "description":description,
    "product_part_type":vehicleType,
    "status":true
  })

  
// }
localStorage.setItem("product_detail", JSON.stringify(product_arr));
      
alert("Successfully Uplode")
      
    }});

    //
    function delete_product() {
      let get_array = JSON.parse(localStorage.getItem("product_detail"));
      for (let i = 0; i < product_arr.length; i++) {
        if (document.getElementById("product_name").value == [i]["product_name"]) {
          get_array.splice(i, 1)
          localStorage.setItem("product_detail", JSON.stringify(product_arr));
        }
      }
    }



    