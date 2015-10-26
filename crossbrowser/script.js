window.onload=function(){
	var go = document.getElementById('go'),
		box = document.getElementById('box');
	eventUtil.addHandler(box,'click',function(){
		alert("I am parentbox!");
	});
	eventUtil.addHandler(go,'click',function(event){
		alert("I am link!");
		event = eventUtil.getEvent(event);
		alert(eventUtil.getElement(event));
		eventUtil.preventDefault(event);
		eventUtil.stopPropagation(event);

	});
	
};


	// function showMes (e) {
	// 	alert(e.type);
	// 	e.stopPropagation();
	// }

	// function showBox () {
	// 	alert("You also click a box!");
	// }

	// function stopGoto (e) {
	// 	e.stopPropagation();
	// 	e.preventDefault();
	// }
	// var btn2 = document.getElementById('btn2');
	// btn2.onclick = function(){
	// 	alert("Hey Yo!");
	// };
	// // btn2.onclick = null;

	// var btn3 = document.getElementById('btn3');
	// // btn3.addEventListener("click",showMes,false);
	// // btn3.attachEvent('onclick',showMes);
	// //cross browser handler
	// var box = document.getElementById('box');
	// var go = document.getElementById('go');


	// eventUtil.addHandler(btn3,'click',showMes);
	// eventUtil.addHandler(box,'click',showBox);
	// eventUtil.addHandler(go,'click',stopGoto);