import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDragAndDropComponent } from './table/table.component';

const routes: Routes = [{
  path:'',component:TableDragAndDropComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
