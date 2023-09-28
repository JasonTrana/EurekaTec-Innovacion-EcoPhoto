import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PhotoService } from '../services/photo.service';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CamaraPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ngOnInit() {
  }

}
