let btnPlus = document.querySelectorAll(".btnPlus");
let btnMoins = document.querySelectorAll(".btnMoins")
let btnDelete = document.querySelectorAll(".btnDelete");
let btnLike = document.querySelectorAll(".Like");
total();
   
for(let i=0; i< btnPlus.length; i++) 
{
    // this the increment funtion//
    btnPlus[i].addEventListener("click", function(){
    btnPlus[i].nextElementSibling.innerHTML++;
total();
   } )
    

    //this is the decrement function//
    btnMoins[i].addEventListener("click", function(){
        if (btnMoins[i].previousElementSibling.innerHTML > 1)
        btnMoins[i].previousElementSibling.innerHTML--;
    total();
   })
    
        //this is the delete funtion//
    btnDelete[i].addEventListener("click", function() {
    btnDelete[i].parentElement.parentElement.remove();
total();
   })    
  
    //this is the Like funtion//
    btnLike[i].addEventListener("click", function (){
        if(btnLike[i].style.fill == "red"){
            btnLike[i].style.fill = "black";
        } else {
            btnLike[i].style.fill = "red"
            }
    })

}
// this the function total //
function total(){
    let qte = document.getElementsByClassName('qtes');
    let price = document.getElementsByClassName('prix');
    let totalPrice = document.getElementById('total');
    let somme = 0;
    
   for(let i=0; i< price.length; i++  ) {
       
       somme = somme + qte[i].innerHTML * price[i].innerHTML.replace("$","");
   }
  
   totalPrice.innerHTML = somme;
}
