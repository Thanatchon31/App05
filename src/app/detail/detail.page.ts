import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

i : any;

  constructor(private route:Router) { const navigetion = this.route.getCurrentNavigation();
    this.i = navigetion?.extras?.state?.['i']; }




  ngOnInit() {
  }

}
