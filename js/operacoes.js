
    
	/*
	    Aqui nós fechamos todas as janelas abertas
	*/
	function fecharJanelas(){
		
		document.getElementById("botFechar").style.display = "none";
		document.getElementById("fundo").style.display = "none";
		document.getElementById("caixa").style.display = "none";
		document.getElementById("cadastraProduto").style.display = "none";
		document.getElementById("excluirProduto").style.display = "none";
		document.getElementById("editarProduto").style.display = "none";
		
	}
	
    /*
	    Aqui nós cadastramos um novo produto
	*/
    function cadastrarProduto(){
		
		document.getElementById("botFechar").style.display = "block";
		document.getElementById("fundo").style.display = "block";
		document.getElementById("caixa").style.display = "block";
		document.getElementById("cadastraProduto").style.display = "block";
				
	}
	
	/*
	    Aqui nós vamos excluir algum produto
	*/
	function excluirProduto(){
		
		document.getElementById("botFechar").style.display = "block";
		document.getElementById("fundo").style.display = "block";
		document.getElementById("caixa").style.display = "block";
		document.getElementById("excluirProduto").style.display = "block";		
		
	}
	
	/*
	    Aqui nós vamos editar algum produto
	*/
	function editarProduto(){
		
		document.getElementById("botFechar").style.display = "block";
		document.getElementById("fundo").style.display = "block";
		document.getElementById("caixa").style.display = "block";
		document.getElementById("editarProduto").style.display = "block";		
		
	}