
function populateDropdown(){ 
    // Get reference to dropdown (teamMemberList)
    var teamMemberList = document.getElementById("teamMemberList");
    //create empty option
    var option = document.createElement("option");
    teamMemberList.add(option);
    // Loop through memberList array and creae option for each attist
    for(var artist in memberList){
        // Create option for each artist in array
        option = document.createElement("option");
        option.value= artist;
        option.text= artist;
        option.innerHTML = artist; // whatever property it has
        // then append it to the select element
        teamMemberList.add(option);
     }
}
function getMemberData(){
    var teamMemberList =document.getElementById("teamMemberList");
    var keyName = teamMemberList.options[teamMemberList.selectedIndex].text;
    if(keyName in memberList){
        //mymembersAssocArray[keyname] will give us the Array for that artist
        //pass that array to buildMemberIndo
        buildMemberIndo(memberList[keyName]);
                //document.write(memberList[keyName].song1.businessName);
        }//end of keyName Condition
}//end of getMemberData

function buildMemberIndo(memberInfoArray){
    
    var element = document.getElementById("members");
    element.innerHTML="";
    
    // Iterate through memberInfoArray
    for(var members in memberInfoArray){
        
        var para;
        var node;
        
        // Create a paragraph node and update it with the ID of the song
    	for(var key in memberInfoArray[members]){
            
                para = document.createElement("p");
                node = document.createTextNode(key);
                para.appendChild(node);
                para.id = key;
                //var element = document.getElementById("members");
                element.appendChild(para);
    	
            for(var item in memberInfoArray[members][key]){

                    para = document.createElement("p");
                    node = document.createTextNode(item + " : " + memberInfoArray[members][key][item]);
                    para.appendChild(node);
                    para.id = item;
                    element = document.getElementById("members");
                    element.appendChild(para);
            }  
        }        
    }//end of memberInfoArray loop  
}//end of buildMemberIndo