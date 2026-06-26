function searchProducts() {
    let input = document.getElementById("searchBox").value.toLowerCase();

    let products = document.querySelectorAll(".card");

    products.forEach(function(product) {
        let text = product.innerText.toLowerCase();

        if (text.includes(input)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}