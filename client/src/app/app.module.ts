import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './pages/app/root/app.component';
import {SidebarComponent} from "./pages/app/sidebar/sidebar.component";
import {DashboardComponent} from "./pages/app/dashboard/dashboard.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, SidebarComponent, DashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
