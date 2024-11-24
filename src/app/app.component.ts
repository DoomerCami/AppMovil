import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent,IonMenuToggle, IonMenu, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet,IonMenuToggle, IonMenu, IonButton],
})
export class AppComponent {
  constructor() {}
}
