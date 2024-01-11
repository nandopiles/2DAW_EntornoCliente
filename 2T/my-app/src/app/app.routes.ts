import { Routes } from '@angular/router';
import { FruitsComponent } from './components/fruits/fruits.component';

export const routes: Routes = [
    { path: '', redirectTo: 'fruits', pathMatch: 'full' },
    { path: 'fruits', component: FruitsComponent }
];
