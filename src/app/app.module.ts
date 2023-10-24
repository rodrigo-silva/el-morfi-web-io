import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './components/compra/compra.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';

/** ROUTES */
const routes: Routes = [
  { path: 'compra', component: CompraComponent },
  { path: 'menu', component: MenuComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [CompraComponent, MenuComponent],
})
export class AppRoutingModule {}

/** El modulo */
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
