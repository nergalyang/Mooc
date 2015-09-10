window.onload = function() {

	var box = document.getElementById('container');
	var imgs = box.getElementsByTagName('img')
	var imgsWidth = imgs[0].offsetWidth;
	var exposeWidth = 120;
	var boxWidth = imgsWidth + (imgs.length-1)*exposeWidth;
	box.style.width = boxWidth + 'px';

	var translate = imgsWidth - exposeWidth;

	function setImage(){
		for (var i = 1 ; i < imgs.length; i++) {
		imgs[i].style.left =  imgsWidth + (i-1)*exposeWidth + 'px'
		};
	};
	setImage();

	for (var i = 0; i < imgs.length; i++) {

		(function(i){
			imgs[i].onmouseover = function(){
			setImage();
			for (var j = 1; j <= i; j++) {
				imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate + 'px';
			};
			};
		})(i);
	};
	


};