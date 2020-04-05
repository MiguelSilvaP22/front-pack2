import { Persona } from './persona';

export class Curso {
    public activo: boolean;
    public evaluaciones:[];
    public fecha_fin: Date;
    public fecha_hora_edicion:  string;
    public fecha_hora_registro:  string;
    public fecha_inicio:  Date;
    public id_curso: number;
    public id_profesor: number;
    public nombre_curso: string;
    public profesor: Persona;

    constructor () {
        this.activo = null;
        this.evaluaciones = [];
        this.fecha_fin = null;
        this.fecha_hora_edicion = null;
        this.fecha_hora_registro = null;
        this.fecha_inicio = null;
        this.id_curso = null;
        this.id_profesor = null;
        this.nombre_curso = null;
        this.profesor = null;
    }
}
