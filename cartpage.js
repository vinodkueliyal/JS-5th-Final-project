var checkoutlist=document.getElementById("checkoutleftside")

var itemoflocal= JSON.parse(localStorage.getItem("listofproduct"))



var cartcountwrap=document.getElementById("cart-count")
cartcountwrap.innerHTML=itemoflocal.length

var totalitems=document.getElementById("noofitemsin")
totalitems.innerHTML=itemoflocal.length

totalo=0
var totalprice= document.getElementById("totalprice2")



if(itemoflocal.length!==0){
   
    for(var i=0;i<itemoflocal.length;i++){
       

totalo += parseInt(itemoflocal[i].price) 
    checkoutlist.innerHTML+=`
    
    <div class="indivial-items" style="display: flex;">
    <img src="${itemoflocal[i].preview}" alt="ftd">
    <div class="disc-of-check" style="display: block;">
    <h4>${itemoflocal[i].name}</h4>
    <p class= "quantity">X 1</p>
    <p>Amount: <span class="pricemultiplied">${itemoflocal[i].price}</span></p>
    
    <div class="removediv">
    
    <button class="remove-from-cart"  onclick="removecartclicked(${i})">Remove</button>
    </div>
    
    
    
    </div>
    
    
    </div>
    
    
    `
    totalprice.innerText=totalo
    }
}
function removecartclicked(cardno){
    location.reload()
    itemoflocal.splice(cardno,1)
   localStorage.setItem("listofproduct", JSON.stringify(itemoflocal))


}

if(itemoflocal.length!==0){

    
    function placeorderclicked(){
        location.href="orderplaced.html"
        localStorage.clear()
    
    
    }
}
