import { Routes } from '@angular/router';
import { ViewOneComponent } from './views/view-one/view-one.component';
import { ViewTwoComponent } from './views/view-two/view-two.component';

export const routes: Routes = [
    { path: '', redirectTo: 'view1', pathMatch: 'full' },
    { path: 'view1', component: ViewOneComponent },
    { path: 'view2', component: ViewTwoComponent }
];
