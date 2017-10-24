
    
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
	
	/*
	    Aqui nós cadastramos todos os elementos do produto de forma de 
		ele seja exibido na tabela de estoque.
	*/
	function cadastrarNovoProduto(){
		
		 cad_id = id.length;
	     cad_nome = document.getElementById("cad_nome").value;
	     cad_preco = document.getElementById("cad_preco").value;
	     cad_quantidade = document.getElementById("cad_quantidade").value;
	     cad_fornecedor = document.getElementById("cad_fornecedor").value;
		 
		 id.push(cad_id); 
         nomefluta.push(cad_nome); 
         preco.push(cad_preco); 
         quantidade.push(cad_quantidade); 
         fornecedor.push(cad_fornecedor); 
				
		
		var referenciaObjeto = document.getElementById('Operador');
        var novoElemento = document.createElement(cad_nome);
        novoElemento.innerHTML = '<div class="tabelas"><div class="campos">' + cad_id + '</div> <div class="campos">' + cad_nome + '</div> <div class="campos">' + cad_preco + '</div> <div class="campos">' + cad_quantidade + '</div> <div class="campos">' + cad_fornecedor + '</div></div>' ;
        referenciaObjeto.parentNode.appendChild(novoElemento, referenciaObjeto.nextSibling);
		//parentNode.insertBefore (coloca antes)
		
	}
	
	
	function CadastrarValidandoProduto(){
	    
		var n = false;
		var p = false;
		var q = false;
		var f = false;
		
	    cad_nome = document.getElementById("cad_nome").value;
	    cad_preco = document.getElementById("cad_preco").value;
	    cad_quantidade = document.getElementById("cad_quantidade").value;
	    cad_fornecedor = document.getElementById("cad_fornecedor").value;
		
		
		if(cad_fornecedor == ""){
		   document.getElementById("validaCadastro").innerHTML = "O campo fornecedor do produto precisa ser cadastrado!";
		}else{
		f = true;
		}
		
		if(cad_quantidade == ""){
		   document.getElementById("validaCadastro").innerHTML = "O campo quantidade de produto precisa ser cadastrado!";
		}else{
		q = true;
		}
		
		if(cad_preco == ""){
		   document.getElementById("validaCadastro").innerHTML = "O campo Preço do produto precisa ser cadastrado!";
		}else{
		p = true;
		}
		
		if(cad_nome == ""){
		   document.getElementById("validaCadastro").innerHTML = "O campo nome do produto precisa ser cadastrado!";
		}else{
		n = true;
		}
		
		
		
		
		
		
		
		
		
		if((n == true) && (p == true) && (q == true) && (f == true)){
		  cadastrarNovoProduto();
		  document.getElementById("validaCadastro").innerHTML = "O produto foi cadastrado com sucesso!";
		}
	
	}
	
	