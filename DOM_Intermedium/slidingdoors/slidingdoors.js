window.onload = function() {

	var box = document.getElementById('container');
	var xbb = box.getElementsByTagName('img')
	var xbbWidth = xbb[0].offsetWidth;
	var exposeWidth = 120;
	var boxWidth = xbbWidth + (xbb.length-1)*exposeWidth;
	box.style.width = boxWidth + 'px';

	var translate = xbbWidth - exposeWidth;

	function setImage(){
		for (var i = 1 ; i < xbb.length; i++) {
		xbb[i].style.left =  xbbWidth + (i-1)*exposeWidth + 'px'
		};
	};
	setImage();

	for (var i = 0; i < xbb.length; i++) {

		(function(i){
			xbb[i].onmouseover = function(){
			setImage();
			for (var j = 1; j <= i; j++) {
				xbb[j].style.left = parseInt(xbb[j].style.left,10) - translate + 'px';
			};
			};
		})(i);
	};
	


};