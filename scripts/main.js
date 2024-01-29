let basket = document.querySelector(".count"),
    myButton = document.querySelectorAll(".add"),
    price = 0,
    total = 0,
    count = 0

myButton.forEach(function(btn){
    btn.addEventListener('click', function(){
        count++
        basket.innerHTML = count
        
        price = btn.previousElementSibling.innerText
        total += parseInt(price.slice(0,-1))
        document.querySelector("h3").setAttribute("title",`Montant total du panier : ${total}€`)
    })
})
