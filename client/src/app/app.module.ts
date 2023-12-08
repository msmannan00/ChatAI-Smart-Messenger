import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './pages/app/root/app.component';
import {SidebarComponent} from "./pages/app/sidebar/sidebar.component";
import {DashboardComponent} from "./pages/app/dashboard/dashboard.component";
import {MessageDisplayComponent} from "./pages/app/message-display/message-display.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, FormsModule, BrowserAnimationsModule, SidebarComponent, DashboardComponent, MessageDisplayComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
