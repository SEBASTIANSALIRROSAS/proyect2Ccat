let alumnos = []
//declarando la clase alumno
class alumno{

    //declarando constructor
    alumno(nombre,edad,tarea,ciclo,fechaDeNacimento){
        this.nombre=nombre;
        this.edad=edad;
        this.tarea=tarea;
        this.ciclo=ciclo;
        this.fechaDeNacimiento=fechaDeNacimento;
    }
    //metodo resolucion tarea
    resolucionTarea(a,b){
        if(this.tarea=="suma"){
            resultado = a+b;
        }
        if(this.tarea=="resta"){
            resultado=a-b;
        }
        if(this.tarea=="multiplicacion"){
            resultado=a*b;
        }
        if(this.tarea=="division"){
            resultado=a/b;
        }
        return console.log(resultado)
    }
    //metodo consultarDatos
    consultarDatos(){
        return console.log("nombre: "+this.nombre+"\nedad: "+this.edad+"\ntarea: "+this.tarea+"\nciclo: "+this.ciclo+"\nfecha de nacimiento: "+this.fechaDeNacimiento)
    }
}
//funcion elegir
function elegir(){
    console.log("----------------MENU-----------------------");
    console.log("a)Registrar alumno\nb)Consultar datos del alumno\nc)Solucionar tarea alumno\nb)Eliminar alumno\ne)Salir del menu")
    //escriba acá lo que quiere hacer
    let opcion="a";
    /*process.stdin.on('data',function(data){
        opcion=data.toString()
        procces.exit()
    })*/
    switch(opcion){
        case 'a':
        //escriba el nombre
            let nombre="juanito"
            /*console.log("nombre: ")
            process.stdin.on('data',function(data){
                nombre =data.toString()
                procces.exit()
            })*/
        //escriba la edad
            let edad=18
            /*console.log("edad: ")
            process.stdin.on('data',function(data){
                edad=data.toString()
                procces.exit()
            })*/
        //escriba la tarea
            let tarea="suma"
            /*console.log("tarea: ")
            process.stdin.on('data',function(data){
                tarea=data.toString()
                procces.exit()
            })*/
        //escriba el ciclo
            let ciclo
            /*console.log("ciclo: ")
            process.stdin.on('data',function(data){
                ciclo=data.toString()
                procces.exit()
            })*/
        //escriba la fecha de nacimiento
            let fechaDeNacimento= "25/07/2002"
            /*console.log("fecha de nacimiento: ")
            process.stdin.on('data',function(data){
                fechaDeNacimento=data.toString()
                procces.exit()
            })*/
            let persona=new alumno(nombre,edad,tarea,ciclo,fechaDeNacimento)
            alumnos.push(persona)
            //elegir()
            break;
        case 'b':
            alumnos.forEach(element => {
                console.log(element)
            });
            //elegir()
            break;
        case 'c':
        //escriba el primer numero
            let a=2
            /*console.log("primer numero: ")
            process.stdin.on('data',function(data){
                a=data.toString()
                procces.exit()
            })*/
        //escriba el segundo numero
            let b=3
            /*console.log("segundo numero: ")
            process.stdin.on('data',function(data){
                b=data.toString()
                procces.exit()
            })*/
            persona.resolucionTarea(a,b)
            //elegir()
            break;
        case 'd':
            alumnos.pop()
            //elegir()
            break;
        case 'e':
            break;
    }
}
elegir()
