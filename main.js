const createCustomRing = (style, carets, metal) => {
    return {
        style: style.style,
        carets: carets.carets,
        metal: metal.metal,
        price: metal.price + style.price + carets.price
    }
}

const newRingOrder = createCustomRing(style[1], carets[2], metals[2])
// Then add order to customer's shopping cart

function addToDom () {

`return
<p>${style.style}<p>
<p>${carets.carets}<p>
<p>${metal.metal}<p>
<p>${metal.price + style.price + carets.price}<p>

`
document.querySelector("#shoppingCart").innerHTML = newRingOrder
}