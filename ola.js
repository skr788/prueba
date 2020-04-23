console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerdatos);

function traerdatos(){
    console.log('dentro de la funcion');
    
    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice/USD.json', true)
    
    xhttp.send();
    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200) {
            
            console.log(this.responseText);
            var datos = JSON.parse(this.responseText);
            console.log(datos);
            
            
            
            document.getElementById("demo").innerHTML = datos.bpi['USD']['rate'];
            
            
            
           
        }
    }
}