const modal = document.getElementById('modal')
const closeBtn = document.getElementById('modal-close-btn')
const form = document.getElementById('form')
const modalText = document.getElementById('modal-text')
const acceptBtn = document.getElementById('accept-btn')
const declineBtn = document.getElementById('decline-btn')
closeBtn.disabled = true  


setTimeout(showModal, 1500) 

function showModal(){
    modal.style.display = "block"
}


form.addEventListener("submit", function(e){
    e.preventDefault()
    const infoFormData = new FormData(form)
    const name = infoFormData.get('name')


    modalText.innerHTML = `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`

setTimeout(function(){
    document.getElementById('uploadText').innerHTML = `<p>Making the 
    sale...</p>`
}, 1500)

setTimeout(function(){
    document.getElementById('modal-inner').innerHTML = `
    <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `
    closeBtn.disabled = false     
}, 3000)
})

closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
})


declineBtn.addEventListener("mouseover", function(){
    document.getElementById('modal-choice-btns').classList.toggle('reverse')
})






