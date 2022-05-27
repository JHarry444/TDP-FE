function copyText() {
    document.getElementById("textCopy").value = document.getElementById("textOriginal").value;
}

const convertToKM = (event) => {
    // debugger;
    console.log("EVENT: ", event);
    const miles = event.target.value;
    const kms = parseFloat(miles) * 1.6; 
    document.getElementById("kmInput").value = kms;
}

const convertToMiles = (event) => {
    const kms = event.target.value;
    const miles = parseFloat(kms) / 1.6;
    document.getElementById("milesInput").value = miles;
}

const card = document.getElementById("card-preview");
const cardName = document.getElementById("cardName");

const showCard = async (event) => {
    if (!cardName.value) return;
    try {
        const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=" + cardName.value);
        const json = await res.json();
        card.className = "card-show";
        card.style.top = event.clientY + "px";
        card.style.left = event.clientX + 10 + "px";
        card.setAttribute("src", json.data[0].card_images[0].image_url);
    } catch(err) {}
}

const hideCard = (event) => {
    card.className = "card-hidden";
    card.style.top = "0px";
    card.style.left = "0px"
}