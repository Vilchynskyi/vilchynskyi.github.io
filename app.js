// add to cart

let cartCounter = document.getElementById("cart_counter");
let addToCartButtons = document.querySelectorAll(".add_to_cart_btn");

let decreaseProductQuantityBtn = document.querySelectorAll(".decrease_quantity_btn")
let increaseProductQuantityBtn = document.querySelectorAll(".increase_quantity_btn")
let productQuantityInputs = document.querySelectorAll(".product_quantity_input")

// OOP 

function Counter(decrementBtn, incrementBtn, inputField, addToCartBtn, cartCounter, minCount=1, maxCount=5) {
    this.domRefs = {
        decrementBtn,
        incrementBtn,
        inputField,
        addToCartBtn,
    }
    this.cartCounter = cartCounter
    console.log(this)

    this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.incrementBtn.disabled = count >= maxCount
        this.domRefs.decrementBtn.disabled = count <= minCount
    }

    this.toggleButtonState()

    this.decrement = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1
        this.toggleButtonState()
    }

    this.increment = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1
        this.toggleButtonState()
    }

    this.addToCart = function () {
        this.cartCounter.textContent = +this.cartCounter.textContent + +this.domRefs.inputField.value
        this.domRefs.inputField.value = 1
        this.toggleButtonState()
    }

    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this))
    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this))
    this.domRefs.addToCartBtn.addEventListener("click", this.addToCart.bind(this))
}


for (let i=0; i < addToCartButtons.length; i++) {
    counter = new Counter(decreaseProductQuantityBtn[i], increaseProductQuantityBtn[i], productQuantityInputs[i], addToCartButtons[i], cartCounter)
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


// sorting 

$(".products_sort").selectize({
    sortField: "text",
    hideSelected: true,	
})