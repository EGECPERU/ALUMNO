document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value.trim();
    const resultado = document.getElementById('resultado');
    
    // Simulación de la verificación
    if (codigo === 'DIP-448281') {
        resultado.innerHTML = `
            <p class="success">Certificado Autenticado Correctamente.</p>
            <p><strong>Nombre:</strong> Elmer Fabrizzio Sequeiros Calderón</p>
            <p><strong>DNI:</strong> 75101814</p>
        `;
        resultado.classList.remove('error');
        resultado.classList.add('success');
    } else {
        resultado.textContent = 'Código no válido. Por favor, verifica el código e intenta nuevamente.';
        resultado.classList.remove('success');
        resultado.classList.add('error');
    }
});

