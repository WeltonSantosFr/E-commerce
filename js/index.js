// Inicializa a pagina lendo todos os itens

itemsReader(data)

// Funções de leitura de itens com base em suas categorias

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

function totalValue() {
    const buyCartDiv = document.querySelector(".buy-cart-div")

    const cartUl = document.querySelector("#cart-ul")

    const filho = cartUl.children[0]

    let somaValor = filho.children[1].children[1].innerText.split(" ")
    let realValor = parseInt(somaValor[1])




    if (buyCartDiv.children.length === 2) {
        const total = document.createElement("div")
        total.className = "total-div"
        const qtdDiv = document.createElement("div")
        qtdDiv.className = "qtd-div"
        const valorDiv = document.createElement("div")
        valorDiv.className = "valor-div"
        const quantidade = document.createElement("p")
        quantidade.innerText = "Quantidade:"
        const quantidadeValor = document.createElement("p")
        quantidadeValor.innerText = cartUl.children.length
        const totalmensagem = document.createElement("p")
        totalmensagem.innerText = "Total:"
        const totalValor = document.createElement("P")
        totalValor.innerText = `R$ ${realValor}`
        qtdDiv.append(quantidade, quantidadeValor)
        valorDiv.append(totalmensagem, totalValor)
        total.append(qtdDiv, valorDiv)
        buyCartDiv.appendChild(total)
    }
}
let valorAtual = 0

function totalValueAdd(e) {


    const cartUl = document.querySelector("#cart-ul")
    const qtd = document.querySelector(".qtd-div").children[1]
    qtd.innerText = cartUl.children.length

    const valor = e.target.parentNode.children[4].innerText

    let valorSplit = valor.split(" ")
    let valorNum = parseInt(valorSplit[1])

    const valorP = document.querySelector(".valor-div").children[1]
    valorP.innerText = `R$ ${valorAtual += valorNum}`


}

function removeTotalValue(e) {
    const cartUl = document.querySelector("#cart-ul")
    const buyCartDiv = document.querySelector(".buy-cart-div")
    const totalDiv = document.querySelector(".total-div")
    const buyCartListDiv = document.querySelector(".buy-cart-list-div")

    

    if (cartUl.children.length === 0) {
        const qtd = document.querySelector(".qtd-div").children[1]
        qtd.innerText = cartUl.children.length

        const valorP = document.querySelector(".valor-div").children[1]
        let valor = 0
        valorP.innerText = `R$ ${valor}`

        buyCartDiv.removeChild(totalDiv)
        cartUl.className = "cart-ul-off"

        const emptyCartTitle = document.createElement("p")
        emptyCartTitle.className = "empty-cart-title"
        emptyCartTitle.innerText = "Carrinho vázio"

        const emptyCartDesc = document.createElement("p")
        emptyCartDesc.innerText = "adicione itens"
        emptyCartDesc.className = "empty-cart-desc"

        buyCartListDiv.append(emptyCartTitle, emptyCartDesc)


        valorAtual = 0
    }

    
    const qtd = document.querySelector(".qtd-div").children[1]
    qtd.innerText = cartUl.children.length

    console.log(valorAtual)
    
    const valor = e.target.parentNode.parentNode.children[1].children[1].innerText

    let valorSplit = valor.split(" ")
    let valorNum = parseInt(valorSplit[1])

    const valorP = document.querySelector(".valor-div").children[1]
    valorP.innerText = `R$ ${valorAtual -= valorNum}`

}

// Funções de troca de classe da Div "Carrinho de compras", limpeza da ul do carrinho, e adição de novos itens

function classChanger() {

    const cartUl = document.querySelector("#cart-ul")
    if (cartUl.className === "cart-ul-off") {
        cartUl.className = "cart-ul-on"
    }
}

function cartCleaner() {
    const cartDiv = document.querySelector(".buy-cart-list-div")

    if (cartDiv.children.length > 1) {
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
    cartCardRemove.id = "cart-remove"
    cartCardRemove.className = "cart-card-remove"

    cartCardInfo.append(cartCardName, cartCardPrice, cartCardRemove)
    cartCard.append(cartCardImg, cartCardInfo)
    cartUl.appendChild(cartCard)
}


// Sessão dos EventListeners

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


addCart.forEach((element) => element.addEventListener("click", (e) => {

    e.preventDefault()
    const pai = e.target.parentNode

    classChanger()

    cartCleaner()

    cartCardCreator(pai)

    totalValue()

    totalValueAdd(e)

}))

const removeCard = document.querySelectorAll("#cart-ul")

removeCard.forEach((element) => element.addEventListener("click", (e) => {

    const cartUl = document.querySelector("#cart-ul")

    const pai = e.target.parentNode.parentNode

    cartUl.removeChild(pai)

    removeTotalValue(e)

}))

const searchButton = document.querySelector(".search")

searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    const ul = document.querySelector(".products-list")
    ul.innerHTML = ""
    let texto = e.target.parentNode.children[0].value
    searchReader(data, texto)

})

function searchReader(data, texto) {
    const ul = document.querySelector(".products-list")

    for (let i = 0; i < data.length; i++) {
        let nomeFormatado = data[i].nameItem.toLowerCase()
        let textoFormatado = texto.toLowerCase()

        if (nomeFormatado.includes(textoFormatado)) {
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