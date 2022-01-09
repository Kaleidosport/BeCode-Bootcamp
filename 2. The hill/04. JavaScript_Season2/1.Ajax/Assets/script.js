const LOADER = () => {
    const REQUEST = new XMLHttpRequest()
    REQUEST.onload = reqListener
    REQUEST.open("get", "https://thatsthespir.it/api", true)
    REQUEST.send()
}

let reqListener = response => {
    let event = JSON.parse(response.currentTarget.response)

    document.getElementById("quote").innerHTML = event.quote
    document.getElementById("author").innerText = event.author
    document.getElementById("image").src = event.photo
}

window.onload = () => {
    const NEWQUOTE = document.getElementById("new-quote")
    NEWQUOTE.onclick = LOADER
}

LOADER()