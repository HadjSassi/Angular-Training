import {Component, OnInit,} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ContactService} from '../service/contact.service';
import {Contact} from '../model/contact';

@Component({
  selector: 'app-contact',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [];


  constructor(private router: Router, private contactService: ContactService) { }

    ngOnInit(): void {
       this.contacts = this.contactService.getContacts();
    }


    onAbout(){
      this.router.navigate(['/about']);
    }


    onDelete(id: number) {
      this.contactService.deleteContact(id)
    }
}
