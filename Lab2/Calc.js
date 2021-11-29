function Kvad(){
	let c1, c2, c3, D, KornNet="Корня нет", koren1,koren2;
	c1=document.getElementById('n1').value;
	c1=parseInt(c1);
	c2=document.getElementById('n2').value;
	c2=parseInt(c2);
	c3=document.getElementById('n3').value;
	c3=parseInt(c3);

	if (c1==0){
		alert("Введён неправильный коэффициент!");
	}
	else{
		D=Math.pow(c2,2)-4*c1*c3;
	
		if (D<0){
			document.getElementById('x1').innerHTML = KornNet;
			document.getElementById('x2').innerHTML = KornNet;
		}
		else if (D==0){
			koren1=(-c2+Math.sqrt(D))/2*c1;
			koren2=koren1;
			document.getElementById('x1').innerHTML = koren1;
			document.getElementById('x2').innerHTML = koren2;
		}
		else {
			koren1=(-c2+Math.sqrt(D))/2*c1;
			koren2=(-c2-Math.sqrt(D))/2*c1;
			document.getElementById('x1').innerHTML = koren1;
			document.getElementById('x2').innerHTML = koren2;
		}

	}
}