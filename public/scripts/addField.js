//Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//quando clicar no botao

//executar uma ação
function cloneField() {
    //Duplicar os campos.Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos.Que campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar 
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

