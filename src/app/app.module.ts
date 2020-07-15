import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { MyRouteRoutes } from './my-route.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    TableFilterComponent
  ],
  imports: [
    BrowserModule,
    MyRouteRoutes,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //引用模块\nMaterialModule
    MaterialModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
