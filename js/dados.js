var controlefecha = 0;
	
	
	/*
	    Essas funções trabalham com a transição dos botões no menu
		e assim que um botão for apertado todos os outros sub-menus 
		vão fechar.
	*/
	
	function esconderElemento1(){
	    		
		document.getElementById("elemento_1").style.display = "block";
		document.getElementById("elemento_2").style.display = "none";
		document.getElementById("elemento_3").style.display = "none";
		document.getElementById("elemento_4").style.display = "none";
		document.getElementById("elemento_5").style.display = "none";
		document.getElementById("elemento_6").style.display = "none";
		
	}
	
	function esconderElemento2(){
	
		document.getElementById("elemento_2").style.display = "block";
		document.getElementById("elemento_1").style.display = "none";
		document.getElementById("elemento_3").style.display = "none";
		document.getElementById("elemento_4").style.display = "none";
		document.getElementById("elemento_5").style.display = "none";
		document.getElementById("elemento_6").style.display = "none";
		
	}
	
	function esconderElemento3(){
	
		document.getElementById("elemento_3").style.display = "block";
		document.getElementById("elemento_1").style.display = "none";
		document.getElementById("elemento_2").style.display = "none";
		document.getElementById("elemento_4").style.display = "none";
		document.getElementById("elemento_5").style.display = "none";
		document.getElementById("elemento_6").style.display = "none";
		
	}
	
	function esconderElemento4(){
	
		document.getElementById("elemento_4").style.display = "block";
		document.getElementById("elemento_1").style.display = "none";
		document.getElementById("elemento_2").style.display = "none";
		document.getElementById("elemento_3").style.display = "none";
		document.getElementById("elemento_5").style.display = "none";
		document.getElementById("elemento_6").style.display = "none";
		
	}
	
	function esconderElemento5(){	
    
		document.getElementById("elemento_5").style.display = "block";
		document.getElementById("elemento_1").style.display = "none";
		document.getElementById("elemento_2").style.display = "none";
		document.getElementById("elemento_3").style.display = "none";
		document.getElementById("elemento_4").style.display = "none";
		document.getElementById("elemento_6").style.display = "none";
		
	}
	
	function esconderElemento6(){	    
	
		document.getElementById("elemento_6").style.display = "block";
		document.getElementById("elemento_1").style.display = "none";
		document.getElementById("elemento_2").style.display = "none";
		document.getElementById("elemento_4").style.display = "none";
		document.getElementById("elemento_5").style.display = "none";
		document.getElementById("elemento_3").style.display = "none";
		
	}
	