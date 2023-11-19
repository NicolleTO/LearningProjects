const characterId = document.getElementById('characterId');
const content = document.getElementById('content');
const image = document.getElementById('img');
const conteinerResult = document.getElementById('result-style');

//Captura os botões
const btnGo = document.getElementById('btn-go');
const btnReset = document.getElementById('btn-reset');

const fetchAPI = (value) =>{
    //requisitando api com fetch
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    //quando a api responde, converte pra json
    .then((res) => res.json())
    //retorna os dados do objeto de fato
    .then((data) => {
        //console.log(data)
        return data;
    });

    return result;
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'episode'];

const newKeys = {
    name: 'Nome',
    status: 'Status',
    species: 'Espécie',
    gender: 'Gênero',
    origin: 'Planeta de Origem',
    episode: 'Episódios'
};

const buildResult = (result) => {

    return keys.map((key) => document.getElementById(key))
    .map((elem) => {

        if(elem.checked === true){

            if((Array.isArray(result[elem.name])) === true){
                
                const numerosDaUrl = result[elem.name].map(url => {
                    const partesDaUrl = url.split('/');
                    return partesDaUrl[partesDaUrl.length - 1];
                });

                passa = numerosDaUrl.join(', ');

            }else if(elem.name === 'origin'){
                passa = result[elem.name].name;
            }else{
                passa = result[elem.name];
            }

            //cria um elemento parágrafo
            const newElem = document.createElement('p');
            //elem.name recebe(:) valor
            newElem.innerHTML = `${newKeys[elem.name]}: ${passa}`;
            //coloca o parágrafo como filho de content
            content.appendChild(newElem);
        }
    });
}

btnGo.addEventListener('click', async (event) => {
    //Impede que a página atualize automaticamente
    event.preventDefault();

    if(characterId.value === ''){
        return content.innerHTML = 'Faça um filtro, por favor';
    }
    
    //await - espera a função responder
    //value - recebido da página html, input do usuário
    const result = await fetchAPI(characterId.value);
    if(content.firstChild !== null){
        content.innerHTML = '';
    }
    conteinerResult.className = 'result-style';
    //muda a propriedade 'src' da imagem
    image.src = `${result.image}`;
    buildResult(result);

})

btnReset.addEventListener('click', () => location.reload());