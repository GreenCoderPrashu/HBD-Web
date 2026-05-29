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
    document.getElementById('page1').style.display ='block';
}