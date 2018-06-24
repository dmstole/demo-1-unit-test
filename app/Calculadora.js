module.exports = function () {

   class Calculadora {

      constructor() {
         throw "Classe não pode ser instanciada";
      }

      static somar(valor1, valor2) {
         this.validarValores(valor1, valor2);

         const _resultado = parseFloat(valor1) + parseFloat(valor2);

         return _resultado;
      }

      static subtrair(valor1, valor2) {
         this.validarValores(valor1, valor2);

         const _resultado = parseFloat(valor1) - parseFloat(valor2);

         return _resultado;
      }

      static validarValores(valor1, valor2) {
         if (isNaN(parseFloat(valor1)) || isNaN(parseFloat(valor2)))
            throw "Dados inválidos";
      }

   }

   return Calculadora;
};