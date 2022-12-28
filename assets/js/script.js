let result = document.getElementById("result"); /* Respuesta */
let btn = document.getElementById("getLeapYears"); /* Boton */
/* Evento */
btn.addEventListener("click", () => {
    let startYear = Number(document.getElementById("start-year").value); /* input del año menor */
    let endYear = Number(document.getElementById("end-year").value);/* input del año mayor*/
    /* VALIDACIONES */
    if ((startYear < 1582 || startYear > 2999) && (endYear < 1582 || endYear > 2999)) { /* años invalidos */
        result.innerHTML = `<b>the start year and end year should be greater than 1581 and less than 3000.</b>`;
    }else if(startYear > endYear){ /* Incongruencia de datos */
        result.innerHTML = `<b>End year should be greater than the start year</b>`;
    }else if (startYear < 1582 || startYear > 2999) { /* año de inicio invalido */
        result.innerHTML = `<b>The start year should be greater than 1581 and less than 3000.</b>`;
    }else if (endYear < 1582 || endYear > 2999) { /* año de final invalido */
        result.innerHTML = `<b>the end year should be greater than 1581 and less than 3000.</b>`;
    }else{
        /*Conteo*/
        let leapYears = [];
        for (let i = startYear; i <= endYear; i++) {
            if ((i % 4 == 0 && i % 100 != 0)||i % 400 == 0) {/* biciesto */
                leapYears.push(i);
            }
        }/*Respuesta */
        result.innerHTML = `<b>There are ${leapYears.length} leap years between ${startYear} & ${endYear}.</b>
                            <span>${leapYears.toString().split(",").join(", ")}</span>`;
    }
});