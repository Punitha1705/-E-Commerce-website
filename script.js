
function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function placeOrder() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const mobile = document.getElementById("mobile").value;
    const payment = document.getElementById("payment").value;
    const total = document.getElementById("total").value;

    if (name && email && address && mobile && payment && total) {
        alert("Order placed successfully!");
        closeForm();
    } else {
        alert("Please fill in all the fields.");
    }
}


function addToCart() {
    return confirm('Cart added Successfully');
   
}
