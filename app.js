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
const infoContent = document.getElementById('info-content');

const firstTarget = document.getElementById('firstTarget');
const secondTarget = document.getElementById('secondTarget');
const thirdTarget = document.getElementById('thirdTarget');

const firstchild = document.getElementById('firstchild');
const secondchild = document.getElementById('secondchild');
const thirdchild = document.getElementById('thirdchild');




chooseInfo.addEventListener('click',function changeInfoContent (event) {


    
   if (event.target === firstTarget) {
    firstchild.style.display = 'block';
    secondchild.style.display = 'none';
    thirdchild.style.display = 'none';
    }
    
       else if (event.target === secondTarget) {
        firstchild.style.display = 'none';
        secondchild.style.display = 'block';
        thirdchild.style.display = 'none';
    
       }
    
    else {
        firstchild.style.display = 'none';
        secondchild.style.display = 'none';
        thirdchild.style.display = 'block';
    }
    

});

