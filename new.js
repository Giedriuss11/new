

const button =document.querySelector("button")
const main =document.querySelector(".main")


button.onclick = () => {

    main.innerHTML += `
        <div class="card">
            <h1>Giedrius</h1>
            <h3>Age: 27 years</h3>
            <h3>Hair color: Dirty blonde</h3>
            <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="">
        </div>
    `

}