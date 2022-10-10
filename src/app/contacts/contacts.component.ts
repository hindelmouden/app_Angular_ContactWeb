import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contactModel';
import { ContactsServiceService } from '../Services/contacts-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {

  contacts!: Contact[];

  constructor( private ContactServ : ContactsServiceService) { }

  ngOnInit(): void {
    this.ContactServ.getAllContact().subscribe({
      next : (data) =>
      this.contacts = data
    })
  }

}
