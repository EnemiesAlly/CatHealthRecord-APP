import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page {

  selectedImage: string | null = 'default-image.jpg'; // เก็บรูปภาพที่เลือก

  constructor() {}

  async selectImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos, // เปิดแกลเลอรี่รูปภาพ
      });

      this.selectedImage = image.webPath || 'default-image.jpg'; // เก็บ path รูปภาพที่เลือก
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  }
}
