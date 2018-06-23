module.exports = function() {

   class Gerador {
      static criarMassaDados() {
         return [
            { valor1: 1,         valor2:2,   esperado:3},
            { valor1: "aaaa",    valor2:2,   esperado:"Dados inválidos"},
            { valor1: 0,         valor2:0,   esperado:0},
            { valor1: -1,        valor2:2,   esperado:1},
            { valor1: -2,        valor2:-10, esperado:-12},
            { valor1: "Tiozão",  valor2:2,   esperado:"Tiozones, vamos sentir sua falta, parsa."}
         ];
      }
   }

   return Gerador;

};