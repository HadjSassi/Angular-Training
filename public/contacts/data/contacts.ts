import { Contact } from '../../../src/app/model/contact';
export const CONTCATS: Contact[] = [
    {
        id: 0,
        name: "HADJ SASSI Mahdi",
        email: "mahdi.hadjsassi@ensea.fr",
        website: "https://www.hadjsassi.tunissportsuniversity.tn",
        projects : ["ENSIT Virtual","U-Book","AMC ENSIT"],
        image : "/contacts/images/hadj.png",
        featured: true
    },
  {
        id: 1,
        name: "Doug Cutting",
        email: "doug.cutting@cloudera.com",
        website: "http://hadoop.apache.org/",
        projects : ["Nuch","Hadoop"],
        image : "/contacts/images/doug_cutting.jpg",
        featured: true
    },
    {
        id: 2,
        name: "Bill Gates",
        email: "bill.gatesg@outlook.com",
        website: "https://www.gatesnotes.com/",
        projects : ["Microsoft","Windows"],
        image : "./contacts/images/bill_gates.jpg",
        featured: true
    },
    {
        id: 3,
        name: "Mark Zuckerberg",
        email: "bill.gatesg@facebook.com",
        website: "https://www.mark-zuckerberg.com/",
        projects : ["Facebook","Instagram"],
        image : "./contacts/images/mark_zuckerberg.jpg",
        featured: true
    }
]

