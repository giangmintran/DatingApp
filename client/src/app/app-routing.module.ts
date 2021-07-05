import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { TestErrosComponent } from './errors/test-erros/test-erros.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './members/lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './members/messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members',component: MemberDetailComponent, },
      {path: 'members/:id',component: MemberDetailComponent},
      {path: 'lists',component: ListsComponent},
      {path: 'messages',component: MessagesComponent},
    ]
  },
  {path: 'errors', component: TestErrosComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-errro', component: ServerErrorComponent},
  {path: '**',component:NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
