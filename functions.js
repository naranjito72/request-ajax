//llamada del ajax del objeto

let direction = window.location.href;

let req = new XMLHttpRequest();//mirar constructores

document.getElementById('recurso').addEventListener('click',()=>{

    //abrimos
    req.open('GET', direction, true);
    
    req.send(null);
//send y reload
    req.onload = fnCallBack;

})


   //function callBack

function callBack(){

    if(req.readyState===4||req.status==200){

       (direction);

            document.getElementById('recurso').addEventListener('click',()=>{

                //colocar el innerText
               document.getElementById('recurso').innerHTML = "La URL de esta web es" + direction;
            })


    }
//llamada al boton 


}



