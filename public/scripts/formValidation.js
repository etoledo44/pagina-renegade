$(function(){
    $('#form-contact')
        .validate({
            rules:{
                name:{
                    required: true,
                },
                tel:{
                    required: true
                }
            },
            messages:{
                name:{
                    required: "Por favor, informe seu nome",
                },
                tel:{
                    required: 'Por favor, informe seu telefone',
                }
            }
        })
    })