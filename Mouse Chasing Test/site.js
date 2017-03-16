var msg;
$( ".click" ).mousemove(function( event ) {
  var msg = "Handler for .mousemove() called at ";
  x=event.pageX;
  msg += event.pageX + ", " + event.pageY;

 if(event.pageX>450){
	 	if(event.pageX<550){
	  $('.id').css("margin-left",100+"px");
	  	$('.id').css("margin-right","0px");
	  }

	  else if(event.pageX>650){
	 $('.id').css("margin-left",150+"px");
	  	$('.id').css("margin-right","0px");
	  }

	  else if(event.pageX>750){
	 $('.id').css("margin-left",200+"px");
	  	$('.id').css("margin-right","0px");
	  }

	  else{
	  	 $('.id').css("margin-left",250+"px");
	  	$('.id').css("margin-right","0px");
	  }
}

else{
	$('.id').css("margin-right",(event.pageX)+"px");
	  $('.id').css("margin-left","0px");
}
 // $('.id').css("margin-top",250+(event.pageY)/20+"px")
 //document.getElementById('res').innerHTML = "<div>" + msg + "</div>";
});
