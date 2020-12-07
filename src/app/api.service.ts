import { Policy } from './policy';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "https://crudappangularphp.000webhostapp.com";
  constructor(private httpClient: HttpClient) { }

  readPolicies(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/read.php`);
  }
  createPolicy(policy: Policy): Observable<Policy>{    
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/create.php`, policy);
  }
  updatePolicy(policy: Policy){
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/update.php`, policy);
  }
  deletePolicy(id: number){
    return this.httpClient.get<Policy>(`${this.PHP_API_SERVER}/delete.php/?id=${id}`);
  }
}
