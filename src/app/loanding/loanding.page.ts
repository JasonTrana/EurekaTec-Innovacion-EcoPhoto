import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-loanding',
  templateUrl: './loanding.page.html',
  styleUrls: ['./loanding.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
