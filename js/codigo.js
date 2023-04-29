function calculos (){

    let saldo_actual = document.getElementById("caja1").value;
    let saldo_dejar = document.getElementById("caja2").value;
    let tasa = document.getElementById("caja3").value;
    let elementoHTML,VB1=false, VB2=false, VB3=false;
    let transferencia, comision;

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
            document.getElementById("caja3").value="Dato numérico debe estar comprendido entre 0 y 100";
        }else{
            tasa = Number(elementoHTML);
            VB3 = true;
        }
    }


    if (VB1 && VB2 && VB3) {

        // Se calcula el importe de la transferencia y el importe de la comisión
            transferencia = Number((saldo_actual - saldo_dejar) / (1 + (tasa / 100)));
            comision = Number(transferencia * tasa / 100);

        // Se redondea a dos (2) decimales
            saldo_dejar = saldo_dejar.toFixed(2);
            transferencia = transferencia.toFixed(2);
            comision = comision.toFixed(2);

        // El resultado se escribe en pantalla
            document.getElementById("resultado").style.display="block";
            document.getElementById("resultado").innerHTML=
            "<b>" + "Monto a Transferir: " + "</b>" + new Intl.NumberFormat('us-US').format(transferencia) + " U.M." + "<br>" +
            "<b>" + "Comisión Cobrada: " + "</b>" + new Intl.NumberFormat('us-US').format(comision)  + " U.M." + "<br>" +
            "<b>" + "Saldo Restante: " + "</b>" + new Intl.NumberFormat('us-US').format(saldo_dejar)  + " U.M.";

    }
    
}