import { Routes } from '@angular/router';

export default[

    {
        path:'listaalumnos',
        loadComponent:()=>import('./alumnos/alumnos.component').then(c=>c.AlumnosComponent)
    },

    {
        path:'agregar',
        loadComponent:()=>import('./agregar/agregar.component').then(c=>c.AgregarComponent)
    },

    {
        path:'eliminar',
        loadComponent:()=>import('./eliminar/eliminar.component').then(c=>c.EliminarComponent)
    },

    {
        path:'editar',
        loadComponent:()=>import('./editar/editar.component').then(c=>c.EditarComponent)
    },
]as Routes