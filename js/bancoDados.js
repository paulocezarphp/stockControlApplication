    
	/*
		Definimos aqui os dados que serão trabalhados, caso você tenha conhecimento sobre 
		banco de dados, você pode trabalhar melhor essa questão.
	*/
	
    var id = [0, 1, 2, 3, 4, 5];
    var nomefluta = ["Maça", "Abacaxi", "Uva", "Pera", "Mamão", "Goiaba"];
    var preco = [0.81, 1.99, 2.32, 1.15, 1.42, 0.92];
    var quantidade = [44, 23, 63, 13, 45];
    var fornecedor = ["Casa da maça", "Hortifruti joão", "Alberto da fazenda", "Fazenda três amigos", "Rancho Verde"];    	
	
	function exibeLista(){
	    
		
		/*
		   Esse loop vai fazer com que os dados dos arrays sejam listados na tela
		*/
	    for(var i = 0; i < id.length; i++){
		    
			if(i == 0){
		        document.write("<div class='campos'><b>Id</b></div>");		
		        document.write("<div class='campos'><b>Nome</b></div>");		
		        document.write("<div class='campos'><b>Preço</b></div>");		
		        document.write("<div class='campos'><b>Quantidade</b></div>");		
		        document.write("<div class='campos'><b>Fornecedor</b></div>");					
			    document.write("<br><br><br>");
			}
            
			document.write("<div class='tabelas'>");
            document.write("<div class='campos'>" + id[i] + "</div>");		
            document.write("<div class='campos'>" + nomefluta[i] + "</div>");		
            document.write("<div class='campos'>R$" + preco[i] + "</div>");		
            document.write("<div class='campos'>" + quantidade[i] + "</div>");		
            document.write("<div class='campos'>" + fornecedor[i] + "</div>");
			document.write("</div>");
			document.write("<br><br>");
            			            	
        }
	
	}
    
	
	
	
	