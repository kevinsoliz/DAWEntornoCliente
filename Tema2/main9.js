let inicialDia = prompt("Introduce la incial del día de la semana: ")
let horarioApertura = "Abrimos a las ";

switch(inicialDia){
    case "L": horarioApertura += "10:00.";
    break;
    case "M": horarioApertura += "09:00.";
    break;
    case "X": horarioApertura += "08:00.";
    break;
    case "J": horarioApertura += "12:00.";
    break;
    case "V": horarioApertura += "07:00.";
    break;
    case "S": horarioApertura += "11:00.";
    break;
    case "D": horarioApertura += "13:00.";
    break;
    default: horarioApertura = "Debes introducir una inicial válida"

}

alert(horarioApertura);