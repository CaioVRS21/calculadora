function Calculadora (){
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.btnBackspace();
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.clearDisplay = () => this.display.value = '';

    this.btnBackspace = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta Inválida');
                return;
            }

            this.display.value = conta;
        } catch(e){
            alert('Conta Inválida');
                return;
        };
    };

    this.pressionaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.key === 'Enter'){
                this.realizaConta();
            }
        })
    };

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.inicia = () => {
    this.capturaCliques();
    this.pressionaEnter();
    }
};
const calculadora = new Calculadora();
calculadora.inicia();






//Código antigo
// function criaCalculadora(){
//     return{
//         display: document.querySelector('.display'),

//         inicia(){
//             this.cliqueBtn();
//             this.pressionaEnter();
//         },

//         pressionaEnter(){
//             this.display.addEventListener('keyup', e => {
//                 if (e.keyCode === 13){
//                     this.realizaConta();
//                 }
//             })
//         },
//         clearDisplay(){
//             this.display.value = '';
//         },

//         btnBackspace(){
//             this.display.value = this.display.value.slice(0, -1)
//         },

//         realizaConta(){
//             let conta = this.display.value;

//             try {
//                 conta = eval(conta);

//                 if(!conta) {
//                     alert('Conta Inválida');
//                     return;
//                 }

//                 this.display.value = conta;
//             } catch(e){
//                 alert('Conta Inválida');
//                     return;
//             }
//         },

//         cliqueBtn(){
//             //                                arrow functions travam o .this no .this principal (nesse caso seria a variavel calculadora ali embaixo)
//             document.addEventListener('click', e => {
//                 const el = e.target;
//                 console.log(this)

//                 if(el.classList.contains('btn-num')){
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if(el.classList.contains('btn-clear')){
//                     this.clearDisplay();
//                 }

//                 if(el.classList.contains('btn-del')){
//                     this.btnBackspace();
//                 }

//                 if(el.classList.contains('btn-eq')){
//                     this.realizaConta();
//                 }
//             });
//         },

//         btnParaDisplay(valor){
//             this.display.value += valor;
//         },

         
//     };
// };
// const calculadora = criaCalculadora();
// calculadora.inicia();