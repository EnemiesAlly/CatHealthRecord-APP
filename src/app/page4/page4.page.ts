import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page {

  selectedImage: string | null = 'default-image.jpg'; // เก็บ path ของรูปภาพที่เลือก

  constructor() { }

  // ฟังก์ชันสำหรับเลือกภาพจากแกลเลอรี่
  async selectImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos, // เปิดแกลเลอรี่รูปภาพ
      });

      this.selectedImage = image.webPath || 'default-image.jpg'; // เก็บ path ของรูปภาพ
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  }
}
