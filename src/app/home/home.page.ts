import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

items=[
  {
    id:1,
    name:'Product A',
    price: 200,
    detail:'this is a product A',
    imageURL:'https://th.bing.com/th/id/R.06e542526914f9330f621bb16be12d70?rik=JpWo3RnLQ3a0xw&riu=http%3a%2f%2fpngimg.com%2fuploads%2flaptop%2flaptop_PNG5911.png&ehk=XGsADSQpSmF550NnMLI%2bZRUT94Q1N9b4O4o1B7CsgNM%3d&risl=1&pid=ImgRaw&r=0'
  },
  {
    id:2,
    name:'Product B',
    price: 250,
    detail:'this is a product B',
    imageURL:'https://th.bing.com/th/id/OIP.7flOmKeI0kRBgMJ8C85vGgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    id:3,
    name:'Product C',
    price: 300,
    detail:'this is a product C',
    imageURL:'https://th.bing.com/th/id/OIP.M5dkH4GD6vaG2fjkX8vNVAHaE7?w=285&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    id:4,
    name:'Product D',
    price: 350,
    detail:'this is a product D',
    imageURL:'http://ts1.mm.bing.net/th?id=OIP.b9Go0HrGnsTn8VB6nKfIHgHaEK&pid=15.1'
  },
]

gotoDetail(i:any){
  this.detail.navigateForward('/detail',
  {state :{i}})
}

}
