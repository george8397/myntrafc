
let bagItems;
onLoad();

function onLoad(){
 let bagItemsStr = localStorage.getItem('bagItems');
 bagItems     =    bagItemsStr ? JSON.parse(bagItemsStr) : [];
DisplayItemsOnHomePage();
displayBagIcon();

}



function addToBag(itemid){
  bagItems.push(itemid);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag_item_count');
    if(bagItems.length> 0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;


    }else{
         bagItemCountElement.style.visibility='hidden';
    }
    
}

function DisplayItemsOnHomePage() {
   
  let itemsContainerElement = document.querySelector('.items-container');
if(!itemsContainerElement){
    return;
}
  let innerHTML = '';
  items.forEach(item => {
    innerHTML += `
      <div class="item_container">
        <img class="image" src=${item.image} alt="1 img">    
        <div class="rating">
          ${item.rating.stars}⭐ |${item.rating.count}
        </div>   
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="orginal-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
      </div>`;
  });

  itemsContainerElement.innerHTML = innerHTML;
}