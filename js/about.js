function init(){
    console.log("About");

    $("#submitWrds").val("Enter Message Here!");

    $("#btnSave").click(function(){
        console.log("Message Submitted!!");
    });
    
}

window.onload = init; 