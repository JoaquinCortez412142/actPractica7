function cerrar(id) {
    document.getElementById(id).hidden = true;
}
function agregarTurno() {
    const id = document.getElementById('id').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const cliente = document.getElementById('cliente').value;

    if (!id || !fecha || !hora || !cliente) {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    turnos.push({ id, fecha, hora, cliente });
    document.getElementById('turnoForm').reset();
    alert("Turno agregado exitosamente.");
    cargarTurnos();
    return false;
}