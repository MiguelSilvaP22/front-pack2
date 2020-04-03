export class Rol {
    public id_rol: number;
    public glosa: string;
    public activo: boolean;
    public fecha_hora_registro: string;
    public fecha_hora_edicion: string;

    constructor() {
        this.id_rol = null;
        this.glosa =  '';
        this.activo = null;
        this.fecha_hora_registro = '';
        this.fecha_hora_edicion = '';
    }
}
