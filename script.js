const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const movingLine = document.getElementById('movingLine');
const steps = document.querySelectorAll('.number');

let currentStep = 0; //inicia en el actual.

//funcion que actualiza los botones (desabilita cuando es necesario)
// const updateBtns = () => {
//     prevBtn.disabled = currentStep === 0; //deshabilita Prev 1er paso.
//     nextBtn.disabled = currentStep === steps.length - 1; //deshabilita next en el último paso.
// }

const updateMovingLine = () => {
    steps.forEach((step, index) => {
        index <= currentStep ? step.classList.add('active')
        : steps.classList.remove('active'); // 
    })

    prevBtn.disabled = currentStep === 0; //deshabilita Prev 1er paso.
    nextBtn.disabled = currentStep === steps.length - 1; //deshabilita next en el último paso.
}


// evento para avanzar. 
nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++; //avanza.
        updateMovingLine(); //actualiza la linea.
    }
    updateBtns(); //actualiza btns.permite realizar mas movimientos sin limites.
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('active');
        currentStep--; //retrocede.
        updateMovingLine
    }
    updateBtns(); //actualiza y permite ejecutar mas movimientos sin limites.
});

//actualización de botones y linea de avance.
updateBtns();
updateMovingLine();