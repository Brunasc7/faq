const listaFaq = document.getElementById('lista-faq');
const liElements = listaFaq.getElementsByTagName('li');
const liArray = Array.from(liElements);

liArray.forEach(li => {
    li.addEventListener('click', () => {
        if(li.className == 'selecionado') {
            li.classList.remove('selecionado');
        }else {
            li.classList.add('selecionado');
        }   
    });  
});

