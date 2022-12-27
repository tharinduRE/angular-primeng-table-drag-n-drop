import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDragAndDropComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { DragDropModule } from 'primeng/dragdrop';
import { ProductService } from './table/productService';

@NgModule({
  declarations: [
    AppComponent,
    TableDragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
