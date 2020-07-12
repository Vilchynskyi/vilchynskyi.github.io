// add to cart

let cartCounter = document.getElementById("cart_counter");
let addToCartButtons = document.querySelectorAll(".add_to_cart_btn");

let decreaseProductQuantityBtn = document.querySelectorAll(".decrease_quantity_btn")
let increaseProductQuantityBtn = document.querySelectorAll(".increase_quantity_btn")
let productQuantityInputs = document.querySelectorAll(".product_quantity_input")


for (let i = 0; i < addToCartButtons.length; i++) {
    decreaseProductQuantityBtn[i].addEventListener("click", function() {
        if (productQuantityInputs[i].value > 0) {
            productQuantityInputs[i].value = +productQuantityInputs[i].value - 1
        }
    })
    increaseProductQuantityBtn[i].addEventListener("click", function() {
        productQuantityInputs[i].value = +productQuantityInputs[i].value + 1
    })
    addToCartButtons[i].addEventListener("click", function() {
        cartCounter.textContent = +cartCounter.textContent + +productQuantityInputs[i].value;
        productQuantityInputs[i].value = 1
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
    btn.addEventListener("click", openModal)
})

function openModal() {
    modal.classList.add("show")
    modal.classList.remove("hide")
}

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


// show modal by scroll

function showModalByScrol() {
    if (window.pageYOffset >= document.documentElement.scrollHeight / 2) {
        openModal()
        window.removeEventListener("scroll", showModalByScrol)
    }
}

window.addEventListener("scroll", showModalByScrol)


// slider

$(".slider_block").slick({
    dots: true,
})
