describe("Verificação da calculadora", function () {

   describe("método somar", function () {

      it("quando informar valor 2 e valor 3 deve retornar 5", function () {
         const resultado = Calculadora.somar(2, 3);
         expect(resultado).to.be.eql(5);
      });

      const _dados = Gerador.criarMassaDados();
      _dados.forEach(item => {
         it(`quando informar valor ${item.valor1} e valor ${item.valor2} deve retornar ${item.esperado}`,
            function (done) {
               try {
                  const resultado = Calculadora.somar(item.valor1, item.valor2);
                  expect(resultado).to.be.eql(item.esperado);
               } catch (error) {
                  expect(function () {
                     Calculadora.somar(item.valor1, item.valor2);
                  }).to.throw("Dados inválidos");
               }
               done();
            });
      });

   });

});