import { Curso } from './curso';

export class Evaluacion {
    public id_evaluacion: number;
    public descripcion: string;
    public fecha_evaluacion: Date;
    public activo: boolean;
    public id_curso: number;
    public curso: Curso;

    constructor() {
        this.id_evaluacion = null;
        this.descripcion = null;
        this.fecha_evaluacion = null;
        this.activo = null;
        this.id_curso = null;
        this.curso = null;
    }
}
