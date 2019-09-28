    console.log("We are about to fetch the weather data");
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=803b0ec7f4f65cfeed65281d605043aa&units=metric').then(Response => {
    
    console.log(Response);
    
    return Response.json();
    
    })
    .then(text => {
    
        console.log(text);   
            
            document.getElementById("click").addEventListener("click", myFunction);
            function myFunction() {
                       
                        document.getElementById('city1').innerHTML = text.name;
                        document.getElementById('tem').innerHTML = text.main.temp;
                        document.getElementById('humidty1').innerHTML = text.main.humidity;
              }
        });
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Milton,CA&APPID=803b0ec7f4f65cfeed65281d605043aa&units=metric').then(Response => {
    
    console.log(Response);
    
    return Response.json();
    
    })
    .then(text => {
    
        console.log(text);   
            
            document.getElementById("click2").addEventListener("click", myFunction2);
            function myFunction2() {
                       
                        document.getElementById('city1').innerHTML = text.name;
                        document.getElementById('tem').innerHTML = text.main.temp;
                        document.getElementById('humidty1').innerHTML = text.main.humidity;
              }
        });
        
        
    

