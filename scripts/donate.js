submitForm = () => {
    console.log("A");
    let board = document.getElementById("donationBoard");
    let donation = document.createElement("div");
    board.appendChild(donation);
    let text = document.getElementById("name").value
        + " donated $" + document.getElementById("amount").value
        + "<br />" + document.getElementById("desc").value;
    donation.innerHTML = text;
}