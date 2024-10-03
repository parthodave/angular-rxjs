import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonacoEditorModule, MONACO_PATH } from '@materia-ui/ngx-monaco-editor';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, MonacoEditorModule, HttpClientModule],
  providers: [
    {
      provide: MONACO_PATH,
      useValue: 'https://unpkg.com/monaco-editor@0.20.0/min/vs',
    },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
