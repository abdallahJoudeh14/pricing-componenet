const pageViews = document.querySelector("[data-value]"),
      planePrice = document.querySelector("[data-price]"),
      range = document.querySelector(".rangeBar");


const renderPageViews = ()=>{
    pageViews.dataset.value = range.value == 0? "10k":range.value == 25? "50k" : range.value == "50"? "100k":range.value == "75" ? "500k":"1m";
    planePrice.dataset.value = range.value == 0? "$8.00":range.value == 25? "$12.00" : range.value == "50"? "$16.00":range.value == "75" ? "$24.00":"$36.00";

    pageViews.firstElementChild.textContent = pageViews.dataset.value;
    planePrice.firstElementChild.textContent = planePrice.dataset.value;
    
}

range.addEventListener("input", renderPageViews);   