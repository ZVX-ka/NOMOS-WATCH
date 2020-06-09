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
