import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://whistleaks.com/api/openai';

  constructor(private http: HttpClient) {
  }

  createRequest(behavior: string, lastMessage: string, request: string): Observable<any> {
    const data = {
      behavior: behavior,
      lastMessage: lastMessage,
      request: request
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, data, { headers: headers });
  }

}
