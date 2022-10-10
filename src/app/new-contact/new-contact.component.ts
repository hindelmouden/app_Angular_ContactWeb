import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Contact } from '../model/contactModel';
import { ContactsServiceService } from '../Services/contacts-service.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {


  ContactGroup !: FormGroup;
  constructor(private fb:FormBuilder, private ContactServ : ContactsServiceService) { }

  ngOnInit(): void {
    this.ContactGroup = this.fb.group({
      nom : this.fb.control(''),
      prenom : this.fb.control(''),
      email : this.fb.control(''),
      tel : this.fb.control(''),
      photo : this.fb.control('')

    })

  }

  AddContact(){
    this.ContactServ.AddContact(this.ContactGroup.value).subscribe();
    console.log('OK');
    this.ngOnInit();
  }

}
