itemsReader(data)

function itemsReader(data) {

    for (let i = 0; i < data.length; i++) {
        const ul = document.querySelector(".products-list")
        const newItem = document.createElement("li")
        newItem.className = "card"
        const itemImg = document.createElement("img")
        itemImg.src = data[i].img
        const itemDiv = document.createElement("div")
        itemDiv.className = "categoria"
        const itemCategory = document.createElement("p")
        itemCategory.innerText = data[i].tag
        const itemName = document.createElement("h3")
        itemName.innerText = data[i].nameItem
        const itemDesc = document.createElement("p")
        itemDesc.className = "desc"
        itemDesc.innerText = data[i].description
        const itemPrice = document.createElement("p")
        itemPrice.className = "preco"
        itemPrice.innerText = `R$ ${data[i].value}`
        const addCart = document.createElement("a")
        addCart.id = "add-cart"
        addCart.innerText = data[i].addCart
        itemDiv.appendChild(itemCategory)
        newItem.append(itemImg, itemDiv, itemName, itemDesc, itemPrice, addCart)
        ul.appendChild(newItem)
    }

}


function acessoriesReader(data) {

    for (let i = 0; i < data.length; i++) {
        const ul = document.querySelector(".products-list")
        if (data[i].tag[0] === "Acessórios") {
            const newItem = document.createElement("li")
            newItem.className = "card"
            const itemImg = document.createElement("img")
            itemImg.src = data[i].img
            const itemDiv = document.createElement("div")
            itemDiv.className = "categoria"
            const itemCategory = document.createElement("p")
            itemCategory.innerText = data[i].tag
            const itemName = document.createElement("h3")
            itemName.innerText = data[i].nameItem
            const itemDesc = document.createElement("p")
            itemDesc.className = "desc"
            itemDesc.innerText = data[i].description
            const itemPrice = document.createElement("p")
            itemPrice.className = "preco"
            itemPrice.innerText = `R$ ${data[i].value}`
            const addCart = document.createElement("a")
            addCart.id = "add-cart"
            addCart.innerText = data[i].addCart
            itemDiv.appendChild(itemCategory)
            newItem.append(itemImg, itemDiv, itemName, itemDesc, itemPrice, addCart)
            ul.appendChild(newItem)
        }
    }
    if (ul.childNodes.length === 0) {
        const message = document.createElement("p")
        message.className = "message"
        message.innerText = "Nenhum produto encontrado"
        ul.appendChild(message)
    }
}

function calcadosReader(data) {
    const ul = document.querySelector(".products-list")

    for (let i = 0; i < data.length; i++) {
        if (data[i].tag[0] === "Calçados") {
            const newItem = document.createElement("li")
            newItem.className = "card"
            const itemImg = document.createElement("img")
            itemImg.src = data[i].img
            const itemDiv = document.createElement("div")
            itemDiv.className = "categoria"
            const itemCategory = document.createElement("p")
            itemCategory.innerText = data[i].tag
            const itemName = document.createElement("h3")
            itemName.innerText = data[i].nameItem
            const itemDesc = document.createElement("p")
            itemDesc.className = "desc"
            itemDesc.innerText = data[i].description
            const itemPrice = document.createElement("p")
            itemPrice.className = "preco"
            itemPrice.innerText = `R$ ${data[i].value}`
            const addCart = document.createElement("a")
            addCart.id = "add-cart"
            addCart.innerText = data[i].addCart
            itemDiv.appendChild(itemCategory)
            newItem.append(itemImg, itemDiv, itemName, itemDesc, itemPrice, addCart)
            ul.appendChild(newItem)
        }
    }
    if (ul.childNodes.length === 0) {
        const message = document.createElement("p")
        message.className = "message"
        message.innerText = "Nenhum produto encontrado"
        ul.appendChild(message)
    }
}

function camisetasReader(data) {
    const ul = document.querySelector(".products-list")

    for (let i = 0; i < data.length; i++) {
        if (data[i].tag[0] === "Camisetas") {
            const newItem = document.createElement("li")
            newItem.className = "card"
            const itemImg = document.createElement("img")
            itemImg.src = data[i].img
            const itemDiv = document.createElement("div")
            itemDiv.className = "categoria"
            const itemCategory = document.createElement("p")
            itemCategory.innerText = data[i].tag
            const itemName = document.createElement("h3")
            itemName.innerText = data[i].nameItem
            const itemDesc = document.createElement("p")
            itemDesc.className = "desc"
            itemDesc.innerText = data[i].description
            const itemPrice = document.createElement("p")
            itemPrice.className = "preco"
            itemPrice.innerText = `R$ ${data[i].value}`
            const addCart = document.createElement("a")
            addCart.id = "add-cart"
            addCart.innerText = data[i].addCart
            itemDiv.appendChild(itemCategory)
            newItem.append(itemImg, itemDiv, itemName, itemDesc, itemPrice, addCart)
            ul.appendChild(newItem)
        }
    }
    if (ul.childNodes.length === 0) {
        const message = document.createElement("p")
        message.className = "message"
        message.innerText = "Nenhum produto encontrado"
        ul.appendChild(message)
    }
}

const todos = document.querySelector(".all-items")

todos.addEventListener("click", (e) => {
    e.preventDefault()
    const ul = document.querySelector(".products-list")
    ul.innerHTML = ""
    itemsReader(data)
})

const acessorios = document.getElementById("acessorios")

acessorios.addEventListener("click", (e) => {
    e.preventDefault()
    const ul = document.querySelector(".products-list")
    ul.innerHTML = ""
    acessoriesReader(data)
})

const calcados = document.getElementById("calcados")

calcados.addEventListener("click", (e) => {
    e.preventDefault()
    const ul = document.querySelector(".products-list")
    ul.innerHTML = ""
    calcadosReader(data)
})

const camisetas = document.getElementById("camisetas")

camisetas.addEventListener("click", (e) => {
    e.preventDefault()
    const ul = document.querySelector(".products-list")
    ul.innerHTML = ""
    camisetasReader(data)
})


const addCart = document.querySelectorAll("#add-cart")


addCart.forEach(addEventListener("click", (e) => {
    e.preventDefault()
    const pai = e.target.parentNode
    
    classChanger()

    cartCleaner()

    cartCardCreator(pai)
    
}))

function classChanger() {

    
    const cartUl = document.querySelector("#cart-ul")
    if(cartUl.className === "cart-ul-off") {
        cartUl.className = "cart-ul-on"
    }
}

function cartCleaner() {
    const cartDiv = document.querySelector(".buy-cart-list-div")
    
    
    if(cartDiv.children.length > 1) {
        const emptyCartTitle = document.querySelector(".empty-cart-title")
        cartDiv.removeChild(emptyCartTitle)
        
        const emptyCartDesc = document.querySelector(".empty-cart-desc")
        cartDiv.removeChild(emptyCartDesc)
    }
}

function cartCardCreator(pai) {

    const cartUl = document.querySelector(".cart-ul-on")

    const cartCard = document.createElement("li")
    cartCard.className = "cart-card"

    const cartCardImg = document.createElement("img")
    cartCardImg.src = pai.children[0].src
    cartCardImg.className = "cart-card-img"

    const cartCardInfo = document.createElement("div")
    cartCardInfo.className = "cart-card-info"

    const cartCardName = document.createElement("h3")
    cartCardName.innerText = pai.children[2].innerText
    cartCardName.className = "cart-card-name"

    const cartCardPrice = document.createElement("p")
    cartCardPrice.innerText = pai.children[4].innerText
    cartCardPrice.className = "cart-card-price"

    const cartCardRemove = document.createElement("a")
    cartCardRemove.innerText = "Remover produto"
    cartCardRemove.className = "cart-card-remove"

    cartCardInfo.append(cartCardName, cartCardPrice, cartCardRemove)
    cartCard.append(cartCardImg , cartCardInfo)
    cartUl.appendChild(cartCard)

    return cartUl
}

const removeCard = document.querySelectorAll(".cart-card-remove")

console.log(removeCard)

function cartCardRemover() {

}