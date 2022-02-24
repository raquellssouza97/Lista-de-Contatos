
const ListaContatosLocal = [];
let id=0;

const secaoListadeContatos_Lista=document.querySelector('.secaoListadeContatos_Lista');

const campoNome = document.getElementById('campoNome');
const campoEmail = document.getElementById('campoEmail');
const campotel = document.getElementById('campoTel');

const botaoAdicionar = document.getElementById('botaoAdicionar');

function adicionarNovoContato() {
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorTel = campotel.value;

    const NovoContato = {
        id:id,
        Nome:valorNome,
        Email: valorEmail,
        Tel:valorTel };

        id++;

    ListaContatosLocal.push(NovoContato);

    renderizarLayout();
};


botaoAdicionar.addEventListener('click',adicionarNovoContato);

function removerContato(evento){
    const botaoClicado= evento.target;
    const contatoClicado= botaoClicado.parentElement;
    const idContatoClicado= contatoClicado.dataset.id;

    const contatoRemovido = ListaContatosLocal.find((contato) =>contato.id == idContatoClicado);
    const posicaoContatoRemovido=ListaContatosLocal.indexOf(contatoRemovido);
    ListaContatosLocal.splice(posicaoContatoRemovido,1);

    renderizarLayout();
};

function renderizarLayout(){
    secaoListadeContatos_Lista.innerHTML='';
    if(ListaContatosLocal.length !==0){
    for(let i=0;i<ListaContatosLocal.length;i++){
        criarLayout(ListaContatosLocal[i]);
        }
    }else{
        const listaContatosVazio ='<li><p>Não há contatos na sua lista</p></li>';
    secaoListadeContatos_Lista.innerHTML= listaContatosVazio;
    }
}
renderizarLayout();

function criarLayout(contato){
    const li=document.createElement('li');
    const button=document.createElement('button');
    const h2=document.createElement('h2');
    const p=document.createElement('p');
    const span=document.createElement('span');

    button.id="removerContato";
    button.addEventListener('click',removerContato);


    li.dataset.id = contato.id;
    h2.innerText = contato.Nome;
    p.innerText = contato.Email;
    span.innerText = contato.Tel;


   li.appendChild(button);
   li.appendChild(h2);
   li.appendChild(p);
   li.appendChild(span);

   secaoListadeContatos_Lista.appendChild(li);
}


