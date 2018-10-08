import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo';
import { UsersList } from './users/users-list';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      { path: 'users', component: UsersList },

      { path: '', redirectTo: 'users' },
      { path: '**', redirectTo: 'users' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {}
