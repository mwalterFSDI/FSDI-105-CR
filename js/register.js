const salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"192-k"
    },
    hours:{
        open:"8:00 am",
        close:"5:00 pm"
    },
    pets:[ ]
    }
/*
    name, age, breed, gender, service, owners name, contact phone
*/
//document.getElementById("pets").innerHTML=`
 //<p> ${salon.pets.name} </p>
 
//`;
//for(var i=0;i<5;i++){
    //document.write(salon.pets[i].name);
//}

document.getElementById("footer-text").innerHTML=`
    <p> ${salon.name}  </p>
    <p> ${salon.address.street}, ${salon.address.number} </p>
    <p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;
//create the Pet Class

var c=0;
class Pet{
    constructor(name,age,breed,gender,service,owner,phone,creditCard){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.creditCard=creditCard;
        this.price=0;
        this.id=c++;
    }
}

//create pets using the constructor
var scooby=new Pet("Scooby",50,"Dane","Male","full", "Shaggy","555-555-5555","555555");
var scrapy=new Pet("Scrapy",40,"Dane","Male","shower","Shaggy","555-555-5555","666666"); 
var speedy=new Pet("Speedy",80,"Mixed", "Male","nails","Bugs","333-333-3333","777777");
var butch=new Pet("Butch",20,"Pitbull","Male","full","Matt","555-555-555","888888");
var carl=new Pet("Carl",22,"Mixed","Female","hair","Steve","444-444-444","99999999");
 




// get the info from the inputs
var txtName=document.getElementById("petNameTxt");
var txtAge=document.getElementById("petAgeTxt");
var txtBreed=document.getElementById("petBreedTxt");
var txtGender=document.getElementById("petGenderTxt");
var txtService=document.getElementById("petServiceTxt");
var txtOwner=document.getElementById("ownerNameTxt");
var txtPhone=document.getElementById("ownerPhoneTxt");
var txtCreditCard=document.getElementById("ownerCreditCardTxt"); 

function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="",
    txtPhone.value="";
    txtCreditCard.value="";
}
//create fucntion register
//create the function register
function register(){
    // create a generic object
    var thePet=new Pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwner.value,txtPhone.value,txtCreditCard.value);
    console.log(thePet);
    // push the pet into the array
    salon.pets.push(thePet);
    //display function
    display(thePet);
    clear();
}

function profitCalculation(){
    // create a variable sum and initializate the variable
    var sum=0;

    //travel the salon.pets[] (for)
    for(var i=0;i<salon.pets.length;i++){
            //sum all the prices
            sum=sum+salon.pets[i].price;    
        
    }
        //display the result on the html
    document.getElementById("profits").innerHTML=`${sum}`;
}
function deletePet(petid){
    
    //travel the array
    for(var i=0;i<salon.pets.length;i++){
        var pet = salon.pets[i];

        //if thePet.id === petId
        if(pet.id==petid){
        
            //remove from HTML
            $('#'+petid).remove();
            //remove from the array
            salon.pets.splice(i,1);
        }
    }
    profitCalculation();
    document.getElementById("numberPets").innerHTML=`Registered pets:${salon.pets.length}`;
}

function search(){
    var string = $('#search-text').val();
    var searchString=string.toLowerCase();
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];        
        if(selected.name.toLowerCase().includes(searchString)||selected.service.toLowerCase().includes(searchString)){
            $('#'+selected.id).show(); //.addClass('selected');
        }else{
            $('#'+selected.id).hide();//.removeClass('selected');
        }
    }
}   
    




function init(){
    //default
    console.log("initialization");
    //push the pets into the array
    //salon.pets=[scooby, scrapy, speedy];]
    salon.pets.push(scooby);
    salon.pets.push(scrapy);
    salon.pets.push(speedy);
    salon.pets.push(butch);
    salon.pets.push(carl);
    
    display(scooby);
    display(scrapy);
    display(speedy);
    display(butch);
    display(carl);
    console.log(salon.pets);
    //displayInfo();
    //hook

    $('#btn-register').on('click',register);
    $('#search-btn').on('click',search);

    $('#search-text').keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
            search();
        }
    });
}



window.onload=init;