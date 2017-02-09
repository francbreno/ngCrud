import { RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'users', component: UsersComponent},
    {path: 'userForm', component: UserFormComponent},
    {path: 'posts', component: PostsComponent},
    {path:'**', component: HomeComponent}
  ], {useHash: true});