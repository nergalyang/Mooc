appendPic();
window.onload=function(){
	var dataInt={'data':[{'src':'20.jpg'},{'src':'21.jpg'},{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},
	{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'},
	{'src':'30.jpg'},{'src':'31.jpg'},{'src':'32.jpg'},{'src':'33.jpg'},{'src':'34.jpg'},
	{'src':'35.jpg'},{'src':'36.jpg'},{'src':'37.jpg'},{'src':'38.jpg'},{'src':'39.jpg'},
	{'src':'40.jpg'},{'src':'41.jpg'},{'src':'42.jpg'},{'src':'43.jpg'},{'src':'44.jpg'},
	{'src':'45.jpg'},{'src':'46.jpg'},{'src':'47.jpg'},{'src':'48.jpg'},{'src':'49.jpg'}]};
	waterfall('main','box');
	var counter = 0;
	window.onscroll=function(){

		if (scrollSlide()) {
			for (var i = counter; i < counter+1; i++) {
				var oBox=document.createElement('div');
				oBox.className='box';
				main.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var img=document.createElement('img');
				img.src="images/"+dataInt.data[i].src;
				oPic.appendChild(img);
			}
			counter+=1;
			waterfall('main','box');
		}

	};
	
};
//create the first ten pictures
function appendPic(){
	var main=document.getElementById('main');
	for (var i = 0; i < 20; i++) {
		var oBox=document.createElement('div');
		oBox.className='box';
		main.appendChild(oBox);
		var oPic=document.createElement('div');
		oPic.className='pic';
		oBox.appendChild(oPic);
		var img=document.createElement('img');
		img.src="images/"+i+".jpg";
		oPic.appendChild(img);

	}
}


function waterfall(parent,clsName){
	var oParent=document.getElementById(parent);
	var oBoxes=getByClass(oParent,clsName);
	var boxWidth=oBoxes[0].offsetWidth;		//get box width
	var screenWidth=document.documentElement.clientWidth;	//get screen width
	var columns=Math.floor(screenWidth/boxWidth);	//set number of columns
	oParent.style.cssText="width:"+columns*boxWidth+"px;margin:0 auto;";	//set width of main div
	cList=[];
	for (var i = 0; i < oBoxes.length; i++) {
		var boxH=oBoxes[i].offsetHeight;		// record height of first line
		if (i<columns) {
			cList[i]=boxH;
		} else{
			var minH=Math.min.apply(null,cList);// find the min height
			var index=getMinIndex(cList,minH);
			oBoxes[i].style.position='absolute'; //set the absolute position of every div.box
			oBoxes[i].style.top=minH+"px";
			oBoxes[i].style.left=boxWidth*index+"px";
			cList[index]+=oBoxes[i].offsetHeight;
		}
	}

	
}
//get all div with class box and return the array.
function getByClass(parent,value){
	oBoxes=[];
	var obj=parent.getElementsByTagName('*');
	for (var i = 0; i < obj.length; i++) {
		if(obj[i].className=='box'){
			oBoxes.push(obj[i]);
		}
	}
	return oBoxes;
}

function getMinIndex(list,minH){
	for(var i in list){
		if (list[i]==minH){
			return i;
		}
	}
}


function scrollSlide(){
	var parent=document.getElementById('main');
	var oBoxes=getByClass(parent,'box');
	var lastBox=oBoxes[oBoxes.length-1];
	var lastBoxHeight=lastBox.offsetTop+Math.floor(lastBox.offsetHeight/2);
	var scrollHeight=document.body.scrollTop || document.documentElement.scrollTop;
	var documentH = document.documentElement.clientHeight;
	return (lastBoxHeight<scrollHeight+documentH)?true:false;

}


