// Espera a que todo el contenido HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    const cube = document.getElementById('cube');
    const button = document.getElementById('spinButton');

    // Definimos las rotaciones base para mostrar cada cara
    // Son objetos {x: grados, y: grados}
    const baseRotations = [
        { x: 0, y: 0 },    // Cara 1 (Frontal)
        { x: 0, y: 180 }, // Cara 2 (Trasera)
        { x: 0, y: -90 }, // Cara 3 (Derecha)
        { x: 0, y: 90 },  // Cara 4 (Izquierda)
        { x: -90, y: 0 }, // Cara 5 (Arriba)
        { x: 90, y: 0 }   // Cara 6 (Abajo)
    ];

    
    let currentFace = 0; // Para guardar la última cara mostrada

    // Añadimos el "escuchador" de eventos al botón
    button.addEventListener('click', () => {
        
        let newFace;
        
        // Bucle para asegurar que la nueva cara sea DIFERENTE a la actual
        do {
            newFace = Math.floor(Math.random() * 6); // Número aleatorio entre 0 y 5
        } while (newFace === currentFace);

        currentFace = newFace; // Actualizamos la cara actual

        // Obtenemos la rotación base para la cara que salió
        const targetRotation = baseRotations[currentFace];

        // Para hacerlo más divertido, añadimos vueltas extra aleatorias (de 2 a 5 vueltas)
        // 360 grados es una vuelta completa
        const extraSpinX = (Math.floor(Math.random() * 4) + 2) * 360;
        const extraSpinY = (Math.floor(Math.random() * 4) + 2) * 360;

        // Aplicamos la transformación final al cubo
        // Sumamos la rotación base + las vueltas extra para el efecto de "giro loco"
        cube.style.transform = `rotateX(${targetRotation.x + extraSpinX}deg) rotateY(${targetRotation.y + extraSpinY}deg)`;
    });
});