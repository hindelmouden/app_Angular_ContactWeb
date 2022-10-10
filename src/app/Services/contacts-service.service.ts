import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contactModel';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {
  constructor(private http : HttpClient) { }
  host : string = "http://localhost:8080/contacts";

  public getAllContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.host);

  }
  public AddContact(contact : Contact){

    return this.http.post<Contact>(this.host,contact);

  }
}

