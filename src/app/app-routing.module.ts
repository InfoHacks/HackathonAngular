import { NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VotingResultsComponent } from './voting-results/voting-results.component';
import { VotingComponent } from './voting/voting.component';

const routes: Routes = [
  { path: 'voting', component: VotingComponent},
  { path: 'voting-results', component: VotingResultsComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
