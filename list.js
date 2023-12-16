//esconder formulario
$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#texto').val();

        const list_tarefas = $(`<li> ${novaTarefa}</li>`);
        $(list_tarefas).appendTo('ol');
        $('#texto').val('');

    })
    $('ol').on('click', 'li', function(){
        $(this).toggle('strike-through');
        $(this).css('line-through');
    })

 
 })
 



/*
function adicionar(){
    let text = document.getElementById('texto').value;
    let list = document.getElementById('lista').innerHTML;

    list +=  '<a> '+ text+' </a>'

    document.getElementById('lista').innerHTML = list;


    

}*/
