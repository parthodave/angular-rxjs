import { Component, ViewChild, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {
  MonacoEditorComponent,
  MonacoEditorConstructionOptions,
  MonacoEditorLoaderService,
  MonacoStandaloneCodeEditor,
} from '@materia-ui/ngx-monaco-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent: MonacoEditorComponent;
  users: any[] = [];
  myname: string;
  userCode: string = 'var a = ';
  userLanguage: string = 'javascript';
  availableLanguages: string[] = ['javascript', 'html', 'css'];
  userTheme: string = 'vs-dark';
  editorOptions: MonacoEditorConstructionOptions = {
    theme: this.userTheme,
    language: this.userLanguage,
    roundedSelection: true,
    autoIndent: true,
  };
  editor: MonacoStandaloneCodeEditor;

  constructor(
    private monacoLoaderService: MonacoEditorLoaderService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    rectangle.height = 2555;
    this.userCode = this.userCode + rectangle.height;
    this.GetMyData().subscribe(
      (data: any[]) => {
        this.users = data; // Assign the response data to the users variable
        // Check data in the console
        this.ShowMyLogs(this.users);
      },
      (error) => {
        console.error('Error fetching users', error); // Handle errors here
      }
    );
  }

  ShowMyLogs(myusers: any[]) {
    console.log('this is my data');
    console.log(myusers[0]);
  }

  GetMyData(): Observable<any> {
    var apiurl: string = 'https://fake-json-api.mock.beeceptor.com/users';
    return this.http.get<any>(apiurl);
  }

  editorInit(editor: MonacoStandaloneCodeEditor) {
    this.editor = editor;
  }

  changeLanguage($event) {
    debugger;
    this.editorOptions = {
      ...this.editorOptions,
      language: $event.currentTarget.value,
    };
  }
}

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 30,
};
