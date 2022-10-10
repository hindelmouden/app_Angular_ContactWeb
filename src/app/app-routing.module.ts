import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { NewContactComponent } from './new-contact/new-contact.component';

const routes: Routes = [
  {path : "contacts" , component : ContactsComponent},
  {path : "newContact", component : NewContactComponent},
  {path : "about",component :  AboutComponent},
  {path : "",redirectTo : "/contacts", pathMatch : 'full'},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
