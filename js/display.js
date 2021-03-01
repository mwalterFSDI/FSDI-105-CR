function display(aPet){
    //display the number of pets
    //document.getElementById("numberPets").innerHTML=`Registered pets: ${salon.pets.length}`;

    //clear the field
    //document.getElementById("pets").innerHTML="";

    //travel the pet's array
    //for(var i=0;i<salon.pets.length;i++){

        //assign a price for each service(TIP: you have to use if)
        //nails-> 15, shower-> 20, hair->15, full->25

        if(aPet.service==="nails"){
            aPet.price=15;
        }else if(aPet.service==="shower"){
            aPet.price=20;
        }else if(aPet.service==="hair"){
            aPet.price=15;
        }else if(aPet.service==="full"){
            aPet.price=25;
        }
            
        //create a temp
        
        
            var tr = 
            `<thead>
                <tr>
                    <th>name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Breed</th>
                    <th>Service</th>
                    <th>Owner</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody><tr id="${aPet.id}" class="pet">
                <td> ${aPet.name} </td> 
                <td> Age: ${aPet.age} </td>
                <td> Gender:${aPet.gender} </td>
                <td> Breed:${aPet.breed} </td>
                <td> Service:${aPet.service} </td>
                <td> Owner:${aPet.owner} </td>
                <td> Phone:${aPet.phone} </td>
                <td> credit card:${aPet.creditCard} </td>
                <td> $${aPet.price}</td>
                <button onclick="deletePet(${aPet.id})">Delete</button></tr>
            </tbody>`

    //concatenate all the info and display the temp on the html
    document.getElementById("table").innerHTML+=tr;
   // }
    
   //document.getElementById("pets").appendChild(temp);
   profitCalculation();
}
