function performSearch() {
    var query = document.getElementById("searchInput").value;
    alert("You searched for: " + query);
}
let cartCount = 0;

function performSearch() {
    var query = document.getElementById("searchInput").value;
    alert("You searched for: " + query);
}

function addToCart() {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
    alert("Item added to cart!");
}

function openCart() {
    alert("You have " + cartCount + " items in your cart.");
}

