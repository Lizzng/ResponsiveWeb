




/*****Home Page */
/*****Home Page */


/*****Contact Page */



        // Initialize and add the map
        function initMap() {
          // The location of Uluru
          const uluru = { lat: 53.346140, lng: -6.267760 };
          // The map, centered at Uluru
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
          }
          );

          
          // The marker, positioned at Uluru
          const marker = new google.maps.Marker({
            position: uluru,
            map: map,
          });
          
        }
        

  

        function validateform(){  
            var name=document.form.name.value; 
            var email=document.form.email.value; 
            var subject=document.form.subject.value; 
            var message=document.form.message.value; 

            
            if (name==null || name==""){  
            alert("Name can't be blank");  
            return false; 
            }

            if (email==null || email==""){  
            alert("Email can't be blank");  
            return false; 
            }

            if (subject==null || subject==""){  
            alert("Subject can't be blank");  
            return false; 
            }

            if (message==null || message==""){  
            alert("Message can't be blank");  
            return false; 
            }else{
                alert("Thank you! We will get back to you ASAP.");
            }
        } 


        

/*****Contact Page */

/*****Product Page */
var MyBtn = document.getElementsByClassName("mybtn");
var index = 0 ;

function Button(n){
    CurrentShowButton(index = n);
}
function CurrentShowButton(n){
    for(var i = 0 ; i < MyBtn.length ; i++){
        MyBtn[i].className = MyBtn[i].className.replace(" Active","");
    }
    MyBtn[n].className +=" Active";
}

function List(){
    var Item = document.getElementById("item");
    var MyItem = document.getElementsByClassName("myItem");

    for(var i = 0 ; i < MyItem.length ; i++){
        MyItem[i].style.margin = "10px 0";
    }
    Item.style.display = "block";
    
}
function Grid(){
    var Item = document.getElementById("item");
    var MyItem = document.getElementsByClassName("myItem");

    for(var i = 0 ; i < MyItem.length ; i++){
        MyItem[i].style.margin = "0px";
    }
    Item.style.display = "grid";
}


function purchaseValidator(){
//get input from the user and store it in the variable myInputNumber
var myInputNumber = window.prompt("Please Select Quantity..."); 
if(myInputNumber === ""){
    alert( "No quantity was provided!");
}
else if(isNaN(myInputNumber)){
    alert("You did not enter a valid number!");
}
else{
    alert("Thank you!");
}
}


/*** Product page */