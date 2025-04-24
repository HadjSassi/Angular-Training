import {Component, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {CommonModule} from '@angular/common';
import {ContactService} from '../../service/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  imports: [CommonModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit {

  // @ts-ignore
  contact: Contact = null;

  constructor(private contactService: ContactService, private router: Router, private route : ActivatedRoute) {
    this.contact = this.contactService.getContactById(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
  }

  onContacts() {
    this.router.navigate(['contact']);
  }
}
