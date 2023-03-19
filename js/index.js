const pageViews = document.querySelector("[data-value]"),
      planePrice = document.querySelector("[data-price]"),
      range = document.querySelector(".rangeBar"),
      checkbox = document.querySelector(".checkbox");


const renderPageViews = ()=>{
    pageViews.dataset.value = range.value == 0? "10k":range.value == 25? "50k" : range.value == "50"? "100k":range.value == "75" ? "500k":"1m";
    planePrice.dataset.price = range.value == 0? "$8.00":range.value == 25? "$12.00" : range.value == "50"? "$16.00":range.value == "75" ? "$24.00":"$36.00";

    pageViews.firstElementChild.textContent = pageViews.dataset.value;
    planePrice.firstElementChild.textContent = planePrice.dataset.price;
    
    range.style.backgroundImage = `linear-gradient( 90deg , var(--SoftCyan) ${range.value}%,  var(--LightGrayishBlue) ${range.value}%)`;

}
const checkboxValue = () =>{
    checkbox.value = checkbox.checked ? "yearly" : "monthly";
}
checkbox.addEventListener("change", checkboxValue)
range.addEventListener("input", renderPageViews);   
window.addEventListener("load", renderPageViews);