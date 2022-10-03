let montousuario = Number (prompt("ingrese un monto"))
let resultado = 0

function cuotas () {


    let opciones = prompt(`1. 3 cuotas
                            2. 6 cuotas
                            3. 9 cuotas
                            4. 12 cuotas`)

    if (opciones==="1") {
        resultado = montousuario/3
        alert (resultado)
        console.log ("resultado 1 " + resultado)
    }

    if (opciones==="2") {
        resultado = montousuario/6
        alert (resultado)
        console.log ("resultado 2 " + resultado)
    }

    if (opciones==="3") {
        resultado = montousuario/9
        alert (resultado)
        console.log ("resultado 3 " + resultado)
    }

    if (opciones==="4") {
        resultado = montousuario/12
        alert(resultado)
        console.log ("resultado 4 " + resultado)
    }
}

cuotas () 