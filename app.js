quantityOfProducts = 1

function addToCart () {
    let cartCounter = document.querySelector(".cart_counter").innerHTML = quantityOfProducts
    quantityOfProducts++
    return quantityOfProducts
}
