import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    console.log('service is working¡');
  }
  getData() {
    return this.http.get('https://swapi.co/api/species/1/?format=json')
  }
}
