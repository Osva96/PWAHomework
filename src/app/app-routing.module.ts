import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MuseumitemsComponent } from 'src/app/pages/museumitems/museumitems.component';
import { UniqueitemComponent } from 'src/app/pages/uniqueitem/uniqueitem.component';

const routes: Routes = [
  { path: '', component: MuseumitemsComponent },
  /* { path: '', pathMatch: 'full', redirectTo: 'museum' }, */
  { path: 'item/:id', component: UniqueitemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
