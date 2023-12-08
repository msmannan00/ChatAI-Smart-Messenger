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
  declarations: [AppComponent, SidebarComponent, DashboardComponent, MessageDisplayComponent],
  imports: [CommonModule, BrowserModule, FormsModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
