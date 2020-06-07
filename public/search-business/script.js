let business_list=document.getElementsByClassName('business-ad-list')[0];
let business=document.getElementsByClassName('business-ad')[0];
//console.log(business_list+ " "+business);
function repeatElement(ele, count, deep){
	let copy;
	for (var i=0; i<count-1; i++){
		
		//copy.innerHTML="Hello, hello , hello";
		business_list.appendChild(ele.cloneNode(deep));
	}
}
repeatElement(business, 5, true);