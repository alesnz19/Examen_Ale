//>>>>>>>>>>>>>>>>>>>>>>> JQuery <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
$(document).ready(function () {
//********************** Data Mask ***************************

    $("#num").mask("(99) 9999-9999");


    jQuery(function ($) {
        $("#num").focusout(function () {
            var valor = $(this).val();
            valor = valor.replace("(", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")
            valor = valor.replace("*", "")


            if (valor.length < 16) {
                $("#num").val("");
            }
        })
    });
});

window.onload = function () {
    let newTraDan = document.getElementById('dan'),
        newTraWar = document.getElementById('war');
    let newForReg = document.getElementById('form1'),
        newTexNum = document.getElementById('num'),
        newSelBelongs = document.getElementById('belongsel'),
        newLabNum = document.getElementById('numlab'),
        newLabBelongs = document.getElementById('belonglab');

    //**************** Expresiones Regulares **********************
    var rexNumb = /[^0-9]/g;

    //*********************** Estilos ****************************

    var dan = ['red', 'mistyrose', newTraDan.value, 'danger'],
        war = ['orange', 'moccasin', newTraWar.value, 'warning'];

//********************* Telefono **************************
    if (newTexNum) {
        newTexNum.addEventListener('input', function () {
            this.value = this.value.replace(rexNumb, '');
        });
        newTexNum.addEventListener('focusout', function () {
            let vr = this.value.replace(rexNumb, '');
            vr.length < 16 && (this.value = "");
        });

        newTexNum.addEventListener('focusin', function () {
            newTexNum.removeAttribute('style');
            newLabNum.style.display = "none";
        });
    }
    //****************** Select Pertenece a *************************
    if (newSelBelongs) {
        newSelBelongs.addEventListener('change', function () {
            newSelBelongs.removeAttribute('style');
            newLabBelongs.style.display = "none";
        });
    }

    //*********************** Funcion de Rango ************************************

    function valRange(id, lab, min, max, typ) {
        id.maxlength = max;
        let x = id.value.length
        typ == 1 && x > max || typ == 2 && x < min ?
            (id.value = "", messagex(id, lab, dan[0], dan[1], dan[2], dan[3])) :
            (lab.style.display = "none", id.removeAttribute("style"));
    }

    form1.addEventListener('submit', function (e) {
        newTexNum.value.trim() == '' && (e.preventDefault(), messagex(newTexNum, newLabNum, dan[0], dan[1], dan[2], dan[3]));
        newSelBelongs.value == 0 && (e.preventDefault(), messagex(newSelBelongs, newLabBelongs, dan[0], dan[1], dan[2], dan[3]));
    });

    //********************* Funcion de Etiquetas ***********************************
    function messagex(id, lab, x1, x2, msg, typ) {
        id.style.backgroundColor = x2;
        id.style.borderColor = x1;
        lab.style.display = "block";
        lab.style.width = "100%";
        lab.style.padding = 0;
        lab.style.margin = 0;
        lab.setAttribute("class", "label label-" + typ);
        lab.textContent = msg;
    }
}

