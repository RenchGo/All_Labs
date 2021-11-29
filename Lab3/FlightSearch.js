function Search(){
	let p1, p2, p3, p4, p5;
	p1=document.getElementById('pole1').value;
	p2=document.getElementById('pole2').value;
	p3=document.getElementById('pole3').value;
	p4=document.getElementById('pole4').value;
	p5=document.getElementById('pole5').value;

	if(p1==p2){
		alert("Введены неверные пункты назначения!");
	}
	else if(p3==p4){
		alert("Введена неверная дата вылета или возвращения!");
	}
	else if (p5<=0){
		alert("Укажите количество пассажиров!");
	}
}