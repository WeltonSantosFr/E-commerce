function itemsReader(data) {

    for(let i = 0; i < data.length; i++) {
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
        itemDesc.className= "desc"
        itemDesc.innerText = data[i].description
        const itemPrice = document.createElement("p")
        itemPrice.className = "preco"
        itemPrice.innerText = data[i].value
        const addCart = document.createElement("a")
        addCart.innerText = data[i].addCart
        itemDiv.appendChild(itemCategory)
        newItem.append(itemImg, itemDiv, itemName, itemDesc, itemPrice, addCart)
        ul.appendChild(newItem)
        console.log(itemImg.src)
    }
}

console.log(itemsReader(data))