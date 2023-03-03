
function  calcular(){
    
    let valB = document.getElementById("valorBase").value;
    let valC = document.getElementById("valorConv").value;
    let num = document.getElementById("valor1").value;

    console.log(valB);
    console.log(valC);
    console.log(num);
    var resultfim = 0;

    if (!num){
        createAlert("Insira o valor a ser convertido!");
    }

    function createAlert(msg) {
        document
            .querySelector("body")
            .insertAdjacentHTML("beforebegin", `<div class='alert'>${msg}</div>`);

        setTimeout(function () {
            deleteAlert();
        }, 3000);
    }

    function deleteAlert() {
        const list = document.querySelectorAll(".alert");
        for (const item of list) {
            item.remove();
        }
    }

    switch (valB){
        case '1':
            switch(valC){
                case '1':
                        resultfim = num;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '2':
                        var calc1 = (num)/8;
                        resultfim = calc1;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '3':
                        var calc1 = (num)/8;
                        var calc2 = (calc1)/1024;
                        resultfim = calc2;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '4':
                        var calc1 = (num)/8;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        resultfim = calc3;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '5':
                        var calc1 = (num)/8;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        var calc4 = (calc3)/1024;
                        resultfim = calc4;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '6':
                        var calc1 = (num)/8;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        var calc4 = (calc3)/1024;
                        var calc5 = (calc4)/1024;
                        resultfim = calc5;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '7':
                        var calc1 = (num)/8;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        var calc4 = (calc3)/1024;
                        var calc5 = (calc4)/1024;
                        var calc6 = (calc5)/1024;
                        resultfim = calc6;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
            }
        break;

        case '2':
            switch(valC){
                case '1':
                        resultfim = num * 8;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '2':
                        resultfim = num;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '3':
                        var calc1 = (num)/1024;
                        resultfim = calc1 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '4':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        resultfim = calc2;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '5':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        resultfim = calc3;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '6':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        var calc4 = (calc3)/1024;
                        resultfim = calc4;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '7':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        var calc4 = (calc3)/1024;
                        var calc5 = (calc4)/1024;
                        resultfim = calc5;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
            }
        break;

        case '3':
            switch(valC){
                case '1':
                        var calc1 = (num) * 1024;
                        resultfim = (calc1) * 8;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '2':
                        resultfim = (num) * 1024 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '3':
                        resultfim = num ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '4':
                        var calc1 = (num)/1024;
                        resultfim = calc1;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '5':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        resultfim = calc2;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '6':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        resultfim = calc3;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '7':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        var calc4 = (calc3)/1024;
                        resultfim = calc4;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
            }
        break;

        case '4':
            switch(valC){
                case '1':
                        var calc1 = (num) * 1024;
                        var calc2 = (calc1) * 1024;
                        resultfim = (calc2) * 8;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '2':
                        var calc1 = (num) * 1024;
                        resultfim = (calc1) * 1024 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '3':
                        resultfim = (num) * 1024 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '4':
                        resultfim = num;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '5':
                        var calc1 = (num)/1024;
                        resultfim = calc1;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '6':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        resultfim = calc2;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '7':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        var calc3 = (calc2)/1024;
                        resultfim = calc3;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
            }
        break;

        case '5':
            switch(valC){
                case '1':
                        var calc1 = (num) * 1024;
                        var calc2 = (calc1) * 1024;
                        var calc3 = (calc2) * 1024;
                        resultfim = (calc3) * 8;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '2':
                        var calc1 = (num) * 1024;
                        var calc2 = (calc1) * 1024;
                        resultfim = (calc2) * 1024 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '3':
                        var calc1 = (num) * 1024
                        resultfim = (calc1) * 1024 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '4':
                        resultfim = (num) * 1024;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '5':
                        resultfim = num;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '6':
                        var calc1 = (num)/1024;
                        resultfim = calc1;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '7':
                        var calc1 = (num)/1024;
                        var calc2 = (calc1)/1024;
                        resultfim = calc2;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
            }
        break;

        case '6':
            switch(valC){
                case '1':
                        var calc1 = (num) * 1024;
                        var calc2 = (calc1) * 1024;
                        var calc3 = (calc2) * 1024;
                        var calc4 = (calc3) * 1024;
                        resultfim = (calc4) * 8;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '2':
                        var calc1 = (num) * 1024;
                        var calc2 = (calc1) * 1024;
                        var calc3 = (calc2) * 1024;
                        resultfim = (calc3) * 1024 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '3':
                        var calc1 = (num) * 1024
                        var calc2 = (calc1) * 1024;
                        resultfim = (calc2) * 1024 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '4':
                        var calc1 = (num) *1024;
                        resultfim = (calc1) * 1024;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '5':
                        resultfim = (num) * 1024;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '6':
                        resultfim = num;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '7':
                        var calc1 = (num)/1024;
                        resultfim = calc1;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
            }
        break;

        case '7':
            switch(valC){
                case '1':
                        var calc1 = (num) * 1024;
                        var calc2 = (calc1) * 1024;
                        var calc3 = (calc2) * 1024;
                        var calc4 = (calc3) * 1024;
                        var calc5 = (calc4) * 1024;
                        resultfim = (calc5) * 8;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '2':
                        var calc1 = (num) * 1024;
                        var calc2 = (calc1) * 1024;
                        var calc3 = (calc2) * 1024;
                        var calc4 = (calc3) * 1024;
                        resultfim = (calc4) * 1024 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '3':
                        var calc1 = (num) * 1024;
                        var calc2 = (calc1) * 1024;
                        var calc3 = (calc2) * 1024;
                        resultfim = (calc3) * 1024 ;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '4':
                        var calc1 = (num) *1024;
                        var calc2 = (calc1)* 1024;
                        resultfim = (calc2) * 1024;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '5':
                        var calc1 = (num) *1024;
                        resultfim = (calc1) * 1024;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
                
                case '6':
                        resultfim = num * 1024;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;

                case '7':
                        resultfim = num;
                        document.getElementById("resultado").innerHTML = resultfim;
                    break;
            }
        break;

        
    }
     
}