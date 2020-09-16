var btnResposta = document.getElementsByClassName("btnResposta");
var i;

function criar(id){
	if (document.getElementById(id).style.display != 'block'){
		document.getElementById(id).style.display = 'block';
		document.getElementById('criarTopico').style.display = 'none';
		document.getElementById('topicoEnviado').style.display = 'none';
	}
}

function enviar(id){
	if (document.getElementById(id).style.display != 'block'){
		document.getElementById(id).style.display = 'block';
		document.getElementById('feedback').style.display = 'none';
	}
}

function mostra(){
	for (i = 0; i < btnResposta.length; i++) {
	  btnResposta[i].addEventListener("click", function() {
		var resposta = this.nextElementSibling;
		if (resposta.style.display === "block") {
		  resposta.style.display = "none";
		} else {
		  resposta.style.display = "block";
		}
	  });
	}
}