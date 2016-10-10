//setInterval(function(){
setTimeout(function(){
	var evt = document.createEvent("TextEvent");
	evt.initTextEvent("textInput", true, true, window,"Hi "+" "+new Date()+" ", 0, "en-US");

	var elem = document.getElementsByClassName('input')[1];
	elem.focus();
	elem.dispatchEvent(evt);
	document.getElementsByClassName('icon-send')[0].click()
}, 1000);