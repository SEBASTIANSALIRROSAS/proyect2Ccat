console.log("----------------MENU-----------------------");
console.log("a)Registrar alumno\nb)Consultar datos del alumno\nc)Solucionar tarea alumno\nb)Eliminar alumno\ne)Salir del menu")
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
        return resultado;
    }
    

}