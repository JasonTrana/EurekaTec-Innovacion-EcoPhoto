import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InfoPage implements OnInit {

  constructor(public photoService: PhotoService) { }
  
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ngOnInit() {
  }

}
