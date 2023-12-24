import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LongtermComponent } from './views/longterm/longterm.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'longterm', component: LongtermComponent }
];
