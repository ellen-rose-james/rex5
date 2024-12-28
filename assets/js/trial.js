// Show popup as soon as the page is visited
window.onload = function() {
  document.getElementById("popup").style.display = "flex";
};

// Close popup when clicking on the close button
document.getElementById("closePopup").onclick = function() {
  document.getElementById("popup").style.display = "none";
};
