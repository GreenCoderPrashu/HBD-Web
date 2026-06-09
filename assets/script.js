function surprise(){
    document.getElementById('home').style.display ='none';
    document.getElementById('wish-container').style.display ='block';
}
//
const typing = document.getElementById('wish');
const typeBtn= document.getElementById('surprise');
const passage = "";
let type=""
let write = false;
let i=0;
typeBtn.addEventListener('click',() => {
    if(! write){
        write = true;
        typewriter();
    }
});
function typewriter(){
    if(i<passage.length){
        typing.innerHTML += passage.charAt(i);
        i++;
        setTimeout(typewriter,50);
    }else{
    write = false;
    i=0;
    type=""
}
}
//
function thanks(){
    document.getElementById('wish-container').style.display ='none';
    document.getElementById('page1').style.display ='flex';
}
const  TqBtn= document.getElementById('thank-you');
TqBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        card1.style.display = 'none';
        card2.style.display = 'block';
    },3000);
});
TqBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        card2.style.display = 'none';
        card3.style.display = 'block';
    },5000);
});
TqBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        card3.style.display = 'none';
        card4.style.display = 'block';
    },7000);
});
TqBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        card4.style.display = 'none';
        card5.style.display = 'block';
    },9000);
});
TqBtn.addEventListener('click',() =>{
    setTimeout(() =>{
        next.style.display = 'block';
    },12000);
});