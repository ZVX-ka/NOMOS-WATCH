// Navigate product images 

const BigImage = document.getElementById('big-image');

const Nomos1 = document.getElementById('Nomos1');
const Nomos2 = document.getElementById('Nomos2');
const Nomos3 = document.getElementById('Nomos3');

const imgSlider = document.getElementById('img-slider');

imgSlider.addEventListener('click',function changeImage (event){

if (event.target === Nomos1) {
    BigImage.setAttribute ("src","images/Nomos1.webp");
}

   else if (event.target === Nomos2) {
        BigImage.setAttribute ("src","images/Nomos2.webp");
   }

else {
    BigImage.setAttribute ("src","images/Nomos3.webp");

}


});



// Navigate information 

const chooseInfo = document.getElementById('more-infos');
const choose = document.getElementsByClassName('choose');

const infoContent = document.getElementById('info-content');
const paragraph = document.getElementsByClassName('paragraph');

chooseInfo.addEventListener('click',function changeInfoContent (event) {
   
    
    for (i = 0 ; i <= paragraph.length ; i++) { 
        

       if (event.target === choose[0]) {          
        
        choose[0].style.cssText = 'color:black ; border-bottom: 2px solid black ; padding-bottom: 6px';
        choose[2].style.cssText = 'color:gray ; border-bottom: none';
        choose[1].style.cssText = 'color:gray ; border-bottom: none';

        paragraph[0].style.display = 'block';
        paragraph[2].style.display = 'none';
        paragraph[1].style.display = 'none';

        }  

       else if (event.target === choose[1]) {   
           
        choose[1].style.cssText = 'color:black ; border-bottom: 2px solid black ; padding-bottom: 6px';
        choose[0].style.cssText = 'color:gray ; border-bottom: none';
        choose[2].style.cssText = 'color:gray ; border-bottom: none';

        paragraph[1].style.display = 'block';
        paragraph[0].style.display = 'none';
        paragraph[2].style.display = 'none';

        }  

       else   {
        choose[2].style.cssText = 'color:black ; border-bottom: 2px solid black ; padding-bottom: 6px';
        choose[0].style.cssText = 'color:gray ; border-bottom: none';
        choose[1].style.cssText = 'color:gray ; border-bottom: none';
       

        paragraph[2].style.display = 'block';
        paragraph[0].style.display = 'none';
        paragraph[1].style.display = 'none';

        }  
    }  
});

        
// add items to the cart

const addToCart = document.getElementById('add-to-cart');
const itemsAdded = document.getElementById('items-added');
const counter = document.getElementById('counter');

addToCart.addEventListener('click', function addItemToCart(ev){
    
    itemsAdded.textContent = (counter.value);

});