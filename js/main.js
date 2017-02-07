//logica
car listaChats=[
    {nombre="chat 1",
    imageUR:"image/logocodeacademy.png",
    ultimoMnesaje:'',
    horaUltimoMensaje:''  }
];

//visual
crearMensaje();
onMensajeKey();


function init()
{
   
   initChatList();

}
function initChatList(){
    for(var i in listaChats){
        console.log(listaChats[i].nombre);
    }
    setEventsList();
}

function setEventsList(){
   var listaChats=document.getElementById('listaChats');
   var arrListItems = (listaChats.getElementsByTagName('li'));
   
   for(var i=0; i<arrListItems.length; i++){
      /* arrListItems[i].onclick=function(){
            alert("click");
       };*/

       arrListItems[i].addEventListener('click',onChatItemClick);
   }
}

function onChatItemClick(evt){
    //console.log(evt)
    //console.log(evt.Target);
   // console.log(evt.currentTarget);
   var contactName=evt.currentTarget.getElementsByClassName( 'w-contact-name')[0].textContent;  
   var imageURL= evt.currentTarget.getElementsByClassName( 'wh-44')[0].src;

    actualizarHeaderChat(contactName,imageURL,"conectado")
}


var liListItem=null;



function onMensajeKey(evt)
{
    if(evt.keyCode == 13)
    {
        var elInputMensajes = document.getElementById("mensajes");
        crearChat(elInputMensajes.value);
        crearMensaje(elInputMensajes.value);    
        elInputMensajes.value="";   
    }   
}

function crearMensaje(_mensaje)
{
    var htmlMensajeIn = '<div class="w-message w-message-in">'+'<div class="w-message-text">'+
                        '<h5 class="yellow-1">Aldo Alfaro</h5>'+'<p>Dale dale!</p>'+
                        '<div class="time">14:25</div>'+'</div>'+'</div>';
    var fecha = new Date();
    var htmlMensajeOut ='<div class="w-message w-message-out">'+'<div class="w-message-text">'+
                        '<p>'+_mensaje+'</p>'+'<div class="time">'+fecha.getHours()+":"+fecha.getMinutes()+'</div>'+'</div>'+'</div>';

    var mensaje=liListItem.getElementsByClassName("w-last-message")[0];
    mensaje.innerHTML=_mensaje;
    console.log();

    var elemChat= document.getElementById("chat");
    elemChat.innerHTML += htmlMensajeOut;
    elemChat.scrollTop = elemChat.scrollHeight;
}

function crearChat(_mensaje)
{
    var elListaChats = document.getElementById("listaChats");

    if(liListItem==null)
    {
        liListItem = document.createElement("li");

        var htmlChatItem =  '<div class="avatar">'+'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
                        '<h4 class="w-contact-name">Laboratoria Perú</h4>'+
                        '<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+'</div>';
        liListItem.innerHTML = htmlChatItem;
        elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);
    }   
}

function crearListaChats()
{


}

function actualizarHeaderChat(_contactName,_imageURL,_estado)
{
    var chatHeader=document.getElementById("chat-header");
    chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML=_contactName;
    chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML=_estado;
    chatHeader.getElementsByTagName('img')[0].src=_imageURL;

}
