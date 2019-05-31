import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaUsuarioComponenteComponent } from './alta-usuario-componente/alta-usuario-componente.component';
import { VerUsuarioComponenteComponent } from './ver-usuario-componente/ver-usuario-componente.component';
import { PostComponetComponent } from './post-componet/post-componet.component';

const routes: Routes = [

  {path:'Nueva', component: AltaUsuarioComponenteComponent},
  {path :'VerPersonas', component: VerUsuarioComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AltaUsuarioComponenteComponent,VerUsuarioComponenteComponent , PostComponetComponent ]

