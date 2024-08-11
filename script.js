const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const movingLine = document.getElementById('movingLine');
const steps = document.querySelectorAll('.number');

let currentStep = 0; //inicia en el actual.

const updateMovingLine = () => {
    steps.forEach((step, index) => {
        index <= currentStep 
        ? step.classList.add('active')
        : step.classList.remove('active') 
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
   
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('active');
        currentStep--; //retrocede.
        updateMovingLine();
    }
    // updateBtns(); //actualiza y permite ejecutar mas movimientos sin limites.
});


updateMovingLine();