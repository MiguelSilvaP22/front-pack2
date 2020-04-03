import { Rol } from './rol';

export class Persona {

    public id_persona: number;
    public rut: string;
    public nombres: string;
    public apellido_mat: string;
    public apellido_pat: string;
    public activo: boolean;
    public fecha_hora_registro: string;
    public fecha_hora_edicion: string;
    public id_rol: number;
    public cursos: [];

    constructor() {

        this.id_persona = null ;
        this.rut = null;
        this.nombres = null;
        this.apellido_mat = null;
        this.apellido_pat = null;
        this.activo = null;
        this.fecha_hora_registro = null;
        this.fecha_hora_edicion = null;
        this.id_rol = null;
        this.cursos = [];
    }
}
