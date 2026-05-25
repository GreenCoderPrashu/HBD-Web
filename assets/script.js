function surprise(){
    document.getElementById('home').style.display ='none';
    document.getElementById('wish-container').style.display ='block';
}
//
const typing = document.getElementById('wish');
const typeBtn= document.getElementById('surprise');
const passage = "Wish You Many More Happy Returns Of The Day Friend... Stay Happy With All Your Favoriote Things! May This Year Bring You Joy,Succes,And Advanture... And I Always Wish You To Be Happy...";
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
        setTimeout(typewriter,80);
    }else{
    write = false;
    i=0;
    type=""
}
}