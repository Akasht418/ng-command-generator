import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CmdGenParentComponent } from './cmd-gen-parent/cmd-gen-parent.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './cmd-gen-parent/main-container/main-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeGenAreaComponent } from './cmd-gen-parent/main-container/code-gen-area/code-gen-area.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PopupComponent } from './cmd-gen-parent/main-container/popup-component/popup-component.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CmdGenParentComponent,
    FooterComponent,
    MainContainerComponent,
    CodeGenAreaComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
