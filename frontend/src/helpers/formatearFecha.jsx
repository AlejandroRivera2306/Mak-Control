export const formatearFecha = fecha => {
    
    const nuevafecha = new Date(fecha.split('T')[0].split('-'))

    

    const opciones = {

        weekday:'short',
        year:'numeric',
        month:'short',
        day:'numeric'

    }

    return nuevafecha.toLocaleDateString('es-Es', opciones)
}

