// change product quantity

let decreaseProductQuantityBtn = document.querySelectorAll(".decrease_quantity_btn")
let increaseProductQuantityBtn = document.querySelectorAll(".increase_quantity_btn")
let productQuantityInputs = document.querySelectorAll(".product_quantity_input")
let productQuantityBlocks = document.querySelectorAll(".product_quantity_block")

for (let i = 0; i < productQuantityBlocks.length; i++) {
    let decreaseBtn = productQuantityBlocks[i].childNodes[1] //Here childNodes[1], it's a child decrease button of block with buttons and input
    decreaseBtn.addEventListener("click", function() {
        if (productQuantityBlocks[i].childNodes[3].value > 0) {
            productQuantityBlocks[i].childNodes[3].value = +productQuantityBlocks[i].childNodes[3].value - 1
        }
    })
    let increaseBtn = productQuantityBlocks[i].childNodes[5] //Here childNodes[5], it's a child increase button of block with buttons and input
    increaseBtn.addEventListener("click", function() {
        productQuantityBlocks[i].childNodes[3].value = +productQuantityBlocks[i].childNodes[3].value + 1
    })
}


// add to cart

let cartCounter = document.getElementById("cart_counter");
let addToCartButtons = document.querySelectorAll(".add_to_cart_btn");

for (let i = 0; i < addToCartButtons.length; i++) {
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
