import { Routes } from '@angular/router';
import { FruitsComponent } from './components/fruits/fruits.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';
import { FishesComponent } from './components/fishes/fishes.component';

export const routes: Routes = [
    { path: '', redirectTo: 'fruits', pathMatch: 'full' },
    { path: 'fruits', component: FruitsComponent },
    { path: 'vegetables', component: VegetablesComponent },
    { path: 'fishes', component: FishesComponent }
];
