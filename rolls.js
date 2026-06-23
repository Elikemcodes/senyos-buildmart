function searchProducts() {

  let input = document.getElementById("searchBox").value.toLowerCase();

  let products = document.querySelectorAll(".product");

  products.forEach(product => {

    let text = product.innerText.toLowerCase();

    if (text.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });

}