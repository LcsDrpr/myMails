var count = document.getElementsByClassName('message-item').length;
document.getElementById('count').textContent = count;
var messageItem = document.getElementsByClassName('message-item');

for(var i = 0 ; i < messageItem.length; i++){

    messageItem[i].childNodes[5].addEventListener('click',function(){
        this.parentNode.remove();
        document.getElementById('count').textContent = document.getElementById('count').textContent -1;
        if(document.getElementById('count').textContent == 0){
            alert('il ne reste plus aucun message');
        }
    });

}

//ADD MESSAGE
var addButton = document.getElementsByTagName('button');
var addMessage = document.getElementById('add-message').value;
var theMessagerie = document.getElementById('messagerie');

var messageItem = document.getElementsByClassName('message-item');

addButton[0].addEventListener('click',function(){
    //console.log(messageItem );
    var newMessage = document.getElementById('add-message').value;

    //new row
    var newRow = document.createElement('div');
    newRow.setAttribute('class','row message-item');

    //new image
    var newImage = document.createElement('img');
    newImage.setAttribute('src','images/panda-roux.jpg');
    newImage.setAttribute('class','avatar');

    //new text
    var newDetails = document.createElement('div');
    newDetails.setAttribute('class','details');
    var newName = document.createElement('h6');
    newName.textContent = "Lucas Drapier";
    var newText = document.createElement('p');
    newText.textContent = newMessage;

    //new trash
    var newTrash = document.createElement('img');
    newTrash.setAttribute('class','trash');
    newTrash.setAttribute('src','images/trash.png');


    theMessagerie.appendChild(newRow);
    newRow.appendChild(newImage);
    newRow.appendChild(newDetails);
    newDetails.appendChild(newName);
    newDetails.appendChild(newText);
    newRow.appendChild(newTrash);



    //MAJ compteur
    var count = document.getElementsByClassName('message-item').length;
    document.getElementById('count').textContent = count;

    //RESET textfield
    document.getElementById('add-message').value = '';



    //MAJ POUBELLES
    for(var i = 0 ; i < messageItem.length; i++){
        console.log(messageItem);
        console.log('element message' + messageItem[i]);
        console.log(messageItem[i].childNodes[i]);
        /*messageItem[i].childNodes[5].addEventListener('click',function(){
            this.parentNode.remove();
            document.getElementById('count').textContent = document.getElementById('count').textContent -1;
            /*if(document.getElementById('count').textContent == 0){
                alert('il ne reste plus aucun message');
            }*/
        //});
    }

});