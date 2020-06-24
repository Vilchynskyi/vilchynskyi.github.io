let cartCounter = document.getElementById("cart_counter");
let addToCartButtons = document.querySelectorAll(".add_to_cart_btn");

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        cartCounter.textContent = +cartCounter.textContent + 1;      
    })
}


let likeButtons = document.querySelectorAll(".like");
for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function () {
        if (likeButtons[i].classList.contains("liked")) {
            likeButtons[i].classList.remove("liked")
        } else {
            likeButtons[i].classList.add("liked")
        }
    })
}