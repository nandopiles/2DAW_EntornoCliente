import { Routes } from '@angular/router';
import { ViewOneComponent } from './views/view-one/view-one.component';
import { ViewTwoComponent } from './views/view-two/view-two.component';
import { ViewThreeComponent } from './views/view-three/view-three.component';

export const routes: Routes = [
    { path: '', redirectTo: 'ejercicio1', pathMatch: 'full' },
    { path: 'ejercicio1', component: ViewOneComponent },
    { path: 'ejercicio2', component: ViewTwoComponent },
    { path: 'ejercicio3', component: ViewThreeComponent }
];
