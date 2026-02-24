import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { AppRoutingModule } from './app-routing.module';
import { Home } from './home/home';
import { StudentsComponent } from './students/students';

@NgModule({
  declarations: [App, Home, StudentsComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  bootstrap: [App],
})
export class AppModule {}
