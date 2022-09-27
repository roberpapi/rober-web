function materias(){
var materias = parseFloat(document.getElementById('materia').value );

switch(materias){
    case 1:
        document.getElementById('resultado').value = 'Diseño Web';
    break;
    
    case 2:
        document.getElementById('resultado').value = 'Taller';
    break;

    case 3:
        document.getElementById('resultado').value = 'Redes';
    break;

    case 4:
        document.getElementById('resultado').value = 'Programacion';
        break;
    
    case 5:
        document.getElementById('resultado').value = 'Laboratorio';
        break;
        case 6:
            document.getElementById('resultado').value = 'Quimica';
            break;
            case 7:
        document.getElementById('resultado').value = 'Mathematicas';
        break;
        case 8:
        document.getElementById('resultado').value = 'Physics';
        break;
        case 9:
        document.getElementById('resultado').value = 'Biblia';
        break;
        case 10:
        document.getElementById('resultado').value = 'Contabilidad';
        break;
        case 11:
        document.getElementById('resultado').value = 'Biologia';
        break;
   default:
    document.getElementById('resultado').value = 'No definido en la lista';
   break;
   }
} 