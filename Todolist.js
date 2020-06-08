/*function myFunction(){
    /*var checkbox = document.getElementById("mycheck");
    var text = document.getElementById("text");
    var a = document.getElementsByName("check");
    for(var i=0 ; i<a.length;i++){
        if(checkbox.checked == true) {
            text.style.textDecoration = "line-through";
            text.style.textDecorationColor = "gray";
            text.style.color = "gray";
        }else {
            text.style.textDecoration = "none";
            text.style.color = "black";
        }
    }*/

    /*var b = document.querySelector(".myclass");
    if(b.checked == true){
        text.style.textDecoration = "line-through";
            text.style.textDecorationColor = "gray";
            text.style.color = "gray";
        }else {
            text.style.textDecoration = "none";
            text.style.color = "black";
        }
}*/


/*$("input[type='checkbox'").on("click","li",function(){
	if ($(this).is(':checked')) {
        $(this).siblings('label').style.textDecoration = "line-through";
    } else {
        $(this).siblings('label').style.textDecoration = "none";
    }
});*/

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var Text = $(this).val();
		$(this).val("");
		$("ul").append("<li id='text'><input type='checkbox' id='mycheck'><label for='mycheck'> " + Text + "</label><span>W</span></li>")
	}
})
