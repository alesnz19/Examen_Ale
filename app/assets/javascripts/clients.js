//>>>>>>>>>>>>>>>>>>>>>>> JQuery <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
$(document).ready(function () {
//********************** Data Mask ***************************

    $("#phon").mask("(99) 9999-9999");
    $("#age").mask("99/99/9999")

    jQuery(function ($) {
        $("#phon").focusout(function () {
            var valor = $(this).val();
            valor = valor.replace("(", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace(")", "")
            valor = valor.replace(" ", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("-", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")

            if (valor.length < 10) {
                $("#phon").val("");
            }
        })
    });
});

window.onload = function () {
    console.log("Entre a la funcion");
    let newTraDan = document.getElementById('dan'),
        newTraWar = document.getElementById('war');
    //**************** Declaracion DOM ***************************
    let newForReg = document.getElementById('form1'),
        newTexNam = document.getElementById('name'),
        newTexApeP = document.getElementById('ap'),
        newTexApeM = document.getElementById('am'),
        newTexAge = document.getElementById('age'),
        newTexPho = document.getElementById('phon'),
        newTexCol = document.getElementById('col'),
        newTexAdd = document.getElementById('add'),
        newTexNumc = document.getElementById('casa'),
        newTexMun = document.getElementById('muni'),

        newLabNam = document.getElementById('labname'),
        newLabApeP = document.getElementById('labap'),
        newLabApeM = document.getElementById('labam'),
        newLabAge = document.getElementById('labage'),
        newLabPho = document.getElementById('labphon'),
        newLabCol = document.getElementById('labcol'),
        newLabAdd = document.getElementById('labadd'),
        newLabNumc = document.getElementById('labcasa'),
        newLabMun = document.getElementById('labmuni');

    //**************** Expresiones Regulares **********************
    var rexLett = /[^a-zA-Z ]/g,
        rexNumb = /[^0-9]/g;

    //*********************** Estilos ****************************

    var dan = ['red', 'mistyrose', newTraDan.value, 'danger'],
        war = ['orange', 'moccasin', newTraWar.value, 'warning'];

//>>>>>>>>>>>>>>>>>>>>>>> Validaciones de Campos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    if (newTexNam) {
        newTexNam.addEventListener('input', function () {
            valRange(newTexNam, newLabNam, 0, 255, 1);
            this.value = this.value.replace(rexLett, '').toUpperCase();
        });
        newTexNam.addEventListener('focusin', function () {
            newTexNam.removeAttribute('style');
            newLabNam.style.display = "none";
        });
    }

    if (newTexApeP) {
        newTexApeP.addEventListener('input', function () {
            valRange(newTexApeP, newLabApeP, 0, 255, 1);
            this.value = this.value.replace(rexLett, '').toUpperCase();
        });
        newTexApeP.addEventListener('focusin', function () {
            newTexApeP.removeAttribute('style');
            newLabApeP.style.display = "none";
        });
    }

    if (newTexApeM) {
        newTexApeM.addEventListener('input', function () {
            valRange(newTexApeM, newLabApeM, 0, 255, 1);
            this.value = this.value.replace(rexLett, '').toUpperCase();
        });
        newTexApeM.addEventListener('focusin', function () {
            newTexApeM.removeAttribute('style');
            newLabApeM.style.display = "none";
        });
    }

    if (newTexAdd) {
        newTexAdd.addEventListener('input', function () {
            valRange(newTexAdd, newLabAdd, 0, 255, 1);
            this.value = this.value.replace(rexLett, '');
        });
        newTexAdd.addEventListener('focusin', function () {
            newTexAdd.removeAttribute('style');
            newLabAdd.style.display = "none";
        });
    }
    if (newTexCol) {
        newTexCol.addEventListener('input', function () {
            valRange(newTexCol, newLabCol, 0, 255, 1);
            this.value = this.value.replace(rexLett, '');
        });
        newTexCol.addEventListener('focusin', function () {
            newTexCol.removeAttribute('style');
            newLabCol.style.display = "none";
        });
    }

    if (newTexNumc) {
        newTexNumc.addEventListener('input', function () {
            valRange(newTexNumc, newLabNumc, 0, 255, 1);
            this.value = this.value.replace(rexNumb, '');
        });
        newTexNumc.addEventListener('focusin', function () {
            newTexNumc.removeAttribute('style');
            newLabNumc.style.display = "none";
        });
    }
    if (newTexMun) {
        newTexMun.addEventListener('input', function () {
            valRange(newTexMun, newLabMun, 0, 255, 1);
            this.value = this.value.replace(rexLett, '');
        });
        newTexMun.addEventListener('focusin', function () {
            newTexMun.removeAttribute('style');
            newLabMun.style.display = "none";
        });
    }

//****************** Edad ********************
    if (newTexAge) {
        newTexAge.addEventListener('focusin', function (e) {
            newTexAge.removeAttribute('style');
            newLabAge.style.display = "none";
        });

        newTexAge.addEventListener('focusout', function () {
            let vr = this.value.replace(rexNumb, '');
            vr.length < 8 && (this.value = "");
            calculatedAge(newTexAge, newTexAge.value);
        });
    }
    //********************* Telefono **************************
    if (newTexPho) {
        newTexPho.addEventListener('input', function () {
            this.value = this.value.replace(rexNumb, '');
        });
        newTexPho.addEventListener('focusout', function () {
            let vr = this.value.replace(rexNumb, '');
            vr.length < 10 && (this.value = "");
        });

        newTexPho.addEventListener('focusin', function () {
            newTexPho.removeAttribute('style');
            newLabPho.style.display = "none";
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


    //****************************** Validacion Sumbit *****************************

    form1.addEventListener('submit', function (e) {

        calculatedAge(newTexBir, newTexBir.value);
        newTexNam.value.trim() == '' && (e.preventDefault(), messagex(newTexNam, newLabNam, dan[0], dan[1], dan[2], dan[3]));
        newTexApeP.value.trim() == '' && (e.preventDefault(), messagex(newTexApeP, newLabApeP, dan[0], dan[1], dan[2], dan[3]));
        newTexApeM.value.trim() == '' && (e.preventDefault(), messagex(newTexApeM, newLabApeM, dan[0], dan[1], dan[2], dan[3]));
        newTexAge.value.trim() == '' && (e.preventDefault(), messagex(newTexAge, newLabAge, dan[0], dan[1], dan[2], dan[3]));
        newTexPho.value.trim() == '' && (e.preventDefault(), messagex(newTexPho, newLabPho, dan[0], dan[1], dan[2], dan[3]));
        newTexAdd.value.trim() == '' && (e.preventDefault(), messagex(newTexAdd, newLabAdd, dan[0], dan[1], dan[2], dan[3]));
        newTexCol.value.trim() == '' && (e.preventDefault(), messagex(newTexCol, newLabCol, dan[0], dan[1], dan[2], dan[3]));
        newTexNumc.value.trim() == '' && (e.preventDefault(), messagex(newTexNumc, newLabNumc, dan[0], dan[1], dan[2], dan[3]));
        newTexMun.value.trim() == '' && (e.preventDefault(), messagex(newTexMun, newLabMun, dan[0], dan[1], dan[2], dan[3]));

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

    //***************************** Funcion Edad **********************************
    //#calcular si eres mayor de edad
    function calculatedAge(id, birth) {
        let arry = birth.split("/");
        let birt = arry[1] + "/" + arry[0] + "/" + arry[2];
        let vr = new Date(Date.now() - new Date(birth).getTime());
        let age = Math.abs(vr.getUTCFullYear() - 1970);
        if (age < 18 || age > 80 || Number.isNaN(age)) {
            id.value = '';
        }
    }

}