import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../Post'



@Component({
  selector: 'app-alta-usuario-componente',
  templateUrl: './alta-usuario-componente.component.html',
  styleUrls: ['./alta-usuario-componente.component.css']
})
export class AltaUsuarioComponenteComponent implements OnInit {
  readonly ROOT_URL = "https://my-json-server.typicode.com/Rotopi/JsonPrueba";
 newpost : Observable<any>;


  constructor(private http : HttpClient  ) {

   }

  ngOnInit() {
  }

  creatPost(){
 const data : Post = {
   id:4,
   name: "Perla",
   age: "12",
   email :"perla@gmail.com",
   sex :"Femenino"

      }
      this.newpost = this.http.post(this.ROOT_URL+'/posts', data)
  }

}
