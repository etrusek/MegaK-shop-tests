const btnBuy = document.querySelectorAll('.products li');
const ulFinalBuy = document.querySelector('.ul-finish-buy');
const btnFinalBuy = document.querySelector('.btn-final-buy');

const printBasket = () => {
ulFinalBuy.innerText = '';
marioBasket.productsPurchased.forEach(prod => {
    const li = document.createElement("li");
    li.innerText = `${prod.prodName} w cenie ${prod.prodPrice}zł.`;
    ulFinalBuy.appendChild(li);
})
btnFinalBuy.disabled= false;
    btnFinalBuy.innerText = `Kup produkty za łączną kwotę     ${marioBasket.value()}zł.`
}

const buyThatProduct = (e) => {
    const newProductName = e.target.dataset.name;
    const newProductPrice = e.target.dataset.price;
    const newProduct = new Product(newProductName, newProductPrice)
    marioBasket.add(newProduct)
    printBasket()
};



btnBuy.forEach(btn => btn.addEventListener('click', buyThatProduct))