executaPesquisaJogos('jogos')

function exibeNoticias () {
  let divTela = document.getElementById ('tela');
  let texto = '';

  let dados = JSON.parse (this.responseText);
  for (i=0; i< 3; i++){
      let noticia = dados.articles[i];
      let data = new Date (noticia.publishedAt);

      texto = texto + `
            <div class="box-noticia">
              <img src="${noticia.urlToImage}" alt="">
              <span class="titulo">${noticia.title}</span><br>
              <span class="creditos">${data.toLocaleDateString ()} - ${noticia.source.name} - ${noticia.author}</span><br>
              <span class="text">${noticia.content}
                <br><a href="${noticia.url}" target="blank">Leia mais...</a>
              </span>
            </div>
        `;
  };

  divTela.innerHTML = texto; 
  
};

function executaPesquisa () {
  let query = document.getElementById('txtPesquisa').value;
  let xhr = new XMLHttpRequest ();
  xhr.onload = exibeNoticias;
  xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=08809574ec2540538a07d22e4ba2c0e6`);
  xhr.send ();
}

function executaPesquisaJogos(jogos){
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open ('GET', `http://newsapi.org/v2/everything?q=${jogos}&from=2020-05-17&sortBy=publishedAt&apiKey=08809574ec2540538a07d22e4ba2c0e6`);
  xhr.send ();

};

function mudaNoticiaGoogle(){
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open ('GET', `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=08809574ec2540538a07d22e4ba2c0e6`);
  xhr.send ();

};

function mudaNoticiaBlast(){
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open ('GET', `https://newsapi.org/v2/top-headlines?sources=blasting-news-br&apiKey=08809574ec2540538a07d22e4ba2c0e6`);
  xhr.send ();

};

function mudaNoticiaGlobo(){
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open ('GET', `https://newsapi.org/v2/top-headlines?sources=globo&apiKey=08809574ec2540538a07d22e4ba2c0e6`);
  xhr.send ();

};

function mudaNoticiaHealth(){
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open ('GET', `https://newsapi.org/v2/top-headlines?sources=info-money&apiKey=08809574ec2540538a07d22e4ba2c0e6`);
  xhr.send ();

};


document.getElementById('btn1').addEventListener('click', mudaNoticiaGoogle);
document.getElementById('btn2').addEventListener('click', mudaNoticiaBlast);
document.getElementById('btn3').addEventListener('click', mudaNoticiaGlobo);
document.getElementById('btn4').addEventListener('click', mudaNoticiaHealth);
document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);

document.getElementById('headbtn1').addEventListener('click', mudaNoticiaGoogle);
document.getElementById('headbtn2').addEventListener('click', mudaNoticiaBlast);
document.getElementById('headbtn3').addEventListener('click', mudaNoticiaGlobo);
document.getElementById('headbtn4').addEventListener('click', mudaNoticiaHealth);





    
