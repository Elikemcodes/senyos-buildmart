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

window.addEventListener("scroll", function(){

    const btn=document.getElementById("backToTop");

    if(window.pageYOffset>300){

        btn.classList.add("show");

    }

    else{

        btn.classList.remove("show");

    }

});