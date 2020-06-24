// add to cart

let cartCounter = document.getElementById("cart_counter");
let addToCartButtons = document.querySelectorAll(".add_to_cart_btn");

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        cartCounter.textContent = +cartCounter.textContent + 1;      
    })
}

// change like button state

let likeButtons = document.querySelectorAll(".like");
for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function () {
        this.classList.toggle("liked");
    })
}

// modal

let moreDetailsButtons = document.querySelectorAll(".detail_btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn_close")

moreDetailsButtons.forEach(function(btn) {
    btn.addEventListener("click", function () {
        modal.classList.add("show")
        modal.classList.remove("hide")
    })
})

function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
}

closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        closeModal()
    }
})