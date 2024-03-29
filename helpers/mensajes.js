const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {

       
    
        console.log(`${'1'.green}. Crear una tarea`);
        console.log(`${'2'.green}. Listar tareas`);
        console.log(`${'3'.green}. Listar tareas completadas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tareas`);
        console.log(`${'6'.green}. Borrar tareas`);
        console.log(`${'7'.green}. Salir`);
        
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
        readline.question('Seleccione una Opción: ', (opt) => {
            readline.close();
            resolve(opt);
            
        });
    });
}

const pausa = () => {
    return new Promise(resolve => {

        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
        readline.question('\nPresione ENTER para continuar\n', (opt) => {
     
            readline.close();
            resolve(opt);
            
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}