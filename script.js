const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const movingLine = document.getElementById('movingLine');
const steps = document.querySelectorAll('.number');

let currentStep = 0; //inicia en el actual.

// //funcion que actualiza los botones (desabilita cuando es necesario)
// function updateBtns() {
//     prevBtn.disabled = currentStep === 0; //deshabilita Prev 1er paso.
//     nextBtn.disabled = currentStep === steps.length - 1; //deshabilita next en el último paso.
// }

//funcion que actualiza linea de avance con iluminación.
function updateMovingLine() {
    const moving = (currentStep / (steps.length -1)) * 100;
    movingLine = `${moving}%`;
}
//para iluminar la línea de avance al actualizar (cuando se genera el movimiento de los pasos).
movingLine.classList.add('active');


nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('active'); //quita la clase "active" del actual.
        currentStep++;  //avanza.
        steps[currentStep].classList.add('active'); //agrega la clase "active" al siguiente.
        updateMovingLine(); //actualiza la linea.
    }
    updateBtns(); //actualiza btns.permite realizar mas movimientos sin limites.
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('active');
        currentStep--; //retrocede.
        steps[currentStep].classList.add('active');
    }
    updateBtns(); //actualiza y permite ejecutar mas movimientos sin limites.
});

// nextBtn.addEventListener('click', () => {
//     steps[currentStep].classList.remove('active'); //quita la clase 'active' en la posición actual.
//     currentStep = (currentStep + 1) % steps.length; // avanza al siguiente y vuelve al 0 si esta al final.
//     steps[currentStep].classList.add('active'); //agrega la clase active al siguiente.
//     updateMovingLine(); //actualiza la línea de avance.
// });

// prevBtn.addEventListener('click', () => {
//     steps[currentStep].classList.remove('active');
//     currentStep = (currentStep - 1 + steps.length) % steps.length; //retrocede y va al ultimo cuando este en el 1º
//     updateMovingLine(); //actualiza la línea.
// })

//actualización de botones y linea de avance.
updateBtns();
updateMovingLine();