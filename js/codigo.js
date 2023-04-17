function calculos (){

    let saldo_actual = document.getElementById("caja1").value;
    let saldo_dejar = document.getElementById("caja2").value;
    let tasa = document.getElementById("caja3").value;
    let elementoHTML,VB1, VB2, VB3;
    let transferencia, comision;

    
    VB1 = false, VB2 = false, VB3 = false;


    // Valida el dato indicado para el Saldo Actual-----------------------------------
    elementoHTML = document.getElementById("caja1").value;
    if (elementoHTML.length == 0) {
        document.getElementById("caja1").value="Campo Obligatorio";
    }else if (isNaN(elementoHTML)) {
        document.getElementById("caja1").value="Ingrese un dato numérico";
    }else if (!isNaN(elementoHTML)) {
        if (elementoHTML <= 0) {
            document.getElementById("caja1").value="Dato numérico no permitido";
        }else{
        saldo_actual = Number(elementoHTML);
        VB1 = true;
        }
    }
    // -------------------------------------------------------------------------------


    // Valida el dato indicado para el Saldo A Dejar-----------------------------------------------
    elementoHTML = document.getElementById("caja2").value;
    if (elementoHTML.length == 0) {
        document.getElementById("caja2").value="Campo Obligatorio";
    }else if (isNaN(elementoHTML)) {
        document.getElementById("caja2").value="Ingrese un dato numérico";
    }else if (!isNaN(elementoHTML)) {
        if (elementoHTML < 0) {
            document.getElementById("caja2").value="Dato numérico no permitido";
        }else if (saldo_dejar > saldo_actual) {
            document.getElementById("caja2").value="Este dato debe ser menor o igual al Saldo Actual";
        }else{
            saldo_dejar = Number(elementoHTML);
            VB2 = true;
        }
    }
    //---------------------------------------------------------------------------------------------
    

    //Valida el dato indicado para la Tasa de la Comisión
    elementoHTML = document.getElementById("caja3").value;
    if (elementoHTML.length == 0) {
        document.getElementById("caja3").value="Campo Obligatorio";
    }else if (isNaN(elementoHTML)) {
        document.getElementById("caja3").value="Ingrese un dato numérico";
    }else if (!isNaN(elementoHTML)) {
        if (elementoHTML < 0 || elementoHTML > 100){
            document.getElementById("caja3").value="Dato numérico no permitido";
        }else{
            tasa = Number(elementoHTML);
            VB3 = true;
        }
    }


    if (VB1 && VB2 && VB3) {

        transferencia = Number((saldo_actual - saldo_dejar) / (1 + (tasa / 100)));
        comision = Number(transferencia * tasa / 100);

        saldo_dejar = saldo_dejar.toFixed(2);
        document.getElementById("sf").innerHTML = new Intl.NumberFormat('us-US').format(saldo_dejar);

        transferencia = transferencia.toFixed(2);
        document.getElementById("t").innerHTML = new Intl.NumberFormat('us-US').format(transferencia);

        tasa = tasa.toFixed(2);;
        document.getElementById("ts").innerHTML = tasa + " %";

        comision = comision.toFixed(2);
        document.getElementById("c").innerHTML = new Intl.NumberFormat('us-US').format(comision);

        document.getElementById("parrafo").style.display="block";
    }
    
}