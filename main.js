var entrada = document.createElement('input');
var seccion = document.getElementById('tarjetaCredito');

entrada.type = 'number';
entrada.id = 'numTarjeta';
entrada.placeholder = 'Ingresa numero de tarjeta';
seccion.appendChild(entrada);

function verificar() {
    var numero = document.getElementById('numTarjeta').value;
    var largo = numero.length;
    var numerosTarjeta = numero.split('');
    if (largo == 16) {
        alert("Deben ser 16 digitos!")
    } else {
      var comprobar = (function (numerosTarjeta) {
    return function (ccNum) {
        var
            len = ccNum.length,
            bit = 1,
            sum = 0,
            val;

        while (len) {
            val = parseInt(ccNum.charAt(--len), 10);
            sum += (bit ^= 1) ? arr[val] : val;
        }

        return sum && sum % 10 === 0;
    };
}(todos);
    };
};

var comprobar1 = document.getElementById('enviar');
comprobar.addEventListener('click', verificar);
