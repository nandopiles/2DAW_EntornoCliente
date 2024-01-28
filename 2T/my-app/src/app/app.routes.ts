import { Routes } from '@angular/router';
import { Ejercicio1Component } from './views/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './views/ejercicio2/ejercicio2.component';
import { MainComponent } from './views/main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'ejercicio1', component: Ejercicio1Component },
    { path: 'ejercicio2', component: Ejercicio2Component }
];
