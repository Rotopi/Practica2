import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ver-usuario-componente',
  templateUrl: './ver-usuario-componente.component.html',
  styleUrls: ['./ver-usuario-componente.component.css']
})
export class VerUsuarioComponenteComponent implements OnInit {
  readonly ROOT_URL = "https://my-json-server.typicode.com/Rotopi/JsonPrueba";

  posts : Observable<any> ;
 


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getpost(){
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }

}
