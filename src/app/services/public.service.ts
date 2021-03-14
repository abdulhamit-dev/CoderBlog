import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  baseUrl: string = 'https://localhost:44351/api/';
  constructor(public http:HttpClient) { 
    
  }
}
