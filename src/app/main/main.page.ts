import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonDatetime,IonModal,IonDatetimeButton, IonButton, IonPopover, IonImg } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonImg, IonContent, IonHeader, IonTitle, IonDatetime ,IonModal, IonToolbar, CommonModule,IonDatetimeButton, FormsModule,IonPopover,IonButton]
})
export class MainPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  

}
