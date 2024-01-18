import { Routes } from '@angular/router';
import { GithubComponent } from './views/github/github.component';
import { GithubTwoComponent } from './views/github-two/github-two.component';
import { MemigoComponent } from './views/memigo/memigo.component';
import { MemigoTwoComponent } from './views/memigo-two/memigo-two.component';
import { MemigoThreeComponent } from './views/memigo-three/memigo-three.component';

export const routes: Routes = [
    { path: '', redirectTo: 'github', pathMatch: 'full' },
    { path: 'github', component: GithubComponent },
    { path: 'githubTwo', component: GithubTwoComponent },
    { path: 'memigo', component: MemigoComponent },
    { path: 'memigoTwo', component: MemigoTwoComponent },
    { path: 'memigoThree', component: MemigoThreeComponent }
];
