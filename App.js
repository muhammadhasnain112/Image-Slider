function abc() {
    let random = Math.ceil(Math.random() * 7)
    // console.log(random);
    
    let get = document.getElementById("img")
    get.src = `${random}.avif`
    
}

setInterval(abc, 3000)
