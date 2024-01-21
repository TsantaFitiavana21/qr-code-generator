function generateQRCode(color) {
    let website = document.getElementById("website").value
    if (website) {
        let qrcodeContainer = document.getElementById("qrcode")
        qrcodeContainer.innerHTML = ""
        new QRCode(qrcodeContainer, {
            text: website,
            colorDark: typeof color == "string" ? color : "#1a1a1a",
        })
    } else {
        alert("Please enter a valid URL")
    }
}

function getColor(element) {
    var bgColor = window.getComputedStyle(element).backgroundColor
    var hexColor = rgbToHex(bgColor)
    generateQRCode(hexColor)
}

function rgbToHex(rgb) {
    var rgbArray = rgb.match(/\d+/g)
    var hex =
        "#" +
        ("0" + parseInt(rgbArray[0], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgbArray[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgbArray[2], 10).toString(16)).slice(-2)
    return hex.toUpperCase()
}

function downloadQRCode() {
    // Get the QR code image element
    var qrCodeImage = document.getElementById("qrcode")
    var image = qrCodeImage.querySelector("img")
    console.log(image)

    // Create a download link
    var downloadLink = document.createElement("a")
    downloadLink.href = image.src
    downloadLink.download = "qr_code.png"

    // Trigger the download
    downloadLink.click()
}

window.onload = generateQRCode
