export class Nota {
    public id_nota: number;
    public puntaje: number;
    public activo: boolean;
    public id_evaluacion: number;
    public id_alumno: number;

    constructor() {
        this.id_nota = null;
        this.puntaje = null;
        this.activo = null;
        this.id_evaluacion = null;
        this.id_alumno = null;
    }
}
