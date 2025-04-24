import { Injectable } from '@angular/core';
import {Contact} from '../model/contact';
import {CONTCATS} from '../../../public/contacts/data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = CONTCATS;

  constructor() { }

  getContacts(): Contact[]{
    return this.contacts;
  }

  getContactById(id: number): Contact  {
    let contacte: Contact;
    for (contacte of CONTCATS) {
      if (contacte.id == id) {
        return contacte;
      }
    }
    throw new Error(`Contact avec l'ID ${id} non trouvé.`);
  }

  deleteContact(id: number): void {
    let contacte: Contact = this.getContactById(id);
    let index: number = this.contacts.indexOf(contacte);
    this.contacts.splice(index, 1);
  }
}
