import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CmdGenParentComponent } from './cmd-gen-parent/cmd-gen-parent.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './cmd-gen-parent/main-container/main-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeGenAreaComponent } from './cmd-gen-parent/main-container/code-gen-area/code-gen-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CmdGenParentComponent,
    FooterComponent,
    MainContainerComponent,
    CodeGenAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
