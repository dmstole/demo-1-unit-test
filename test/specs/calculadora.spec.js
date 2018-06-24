describe("Verificação da calculadora", () => {

   describe("método somar", () => {
      const _dados = Gerador.criarDadosSomar();
      _dados.forEach(item => {
         it(`ao informar valor ${item.valor1} e valor ${item.valor2} deve retornar ${item.esperado}`, done => {
            try {
               const _resultado = Calculadora.somar(item.valor1, item.valor2);
               expect(_resultado).to.be.eql(item.esperado);
            } catch (error) {
               expect(() => Calculadora.somar(item.valor1, item.valor2)).to.throw("Dados inválidos");
            }
            done();
         });
      });
   });

   describe("método substrair", () => {
      const _dados = Gerador.criarDadosSubtrair();
      _dados.forEach(item => {
         it(`ao informar valor ${item.valor1} e valor ${item.valor2} deve retornar ${item.esperado}`, done => {
            try {
               const _resultado = Calculadora.subtrair(item.valor1, item.valor2);
               expect(_resultado).to.be.eql(item.esperado);
            } catch (error) {
               expect(() => Calculadora.subtrair(item.valor1, item.valor2)).to.throw("Dados inválidos");
            }
            done();
         });
      });
   });

});