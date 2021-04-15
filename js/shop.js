let adder = document.querySelector("#adder");
adder.addEventListener("click", function(){
    let counter = document.querySelector("#counter");
    let number_product = document.querySelector("#numberOfProduct");
    counter.innerText = parseInt(counter.textContent)+parseInt(number_product.value);
});