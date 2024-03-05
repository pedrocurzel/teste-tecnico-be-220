import { Component, Input, OnInit } from '@angular/core';
import { DocumentData, Firestore, addDoc, collection } from '@angular/fire/firestore';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CreateTreinoModalComponent } from 'src/app/modals/create-treino-modal/create-treino-modal.component';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss'],
})
export class ListSectionComponent  implements OnInit {

  @Input() itens!: (DocumentData | (DocumentData & {}))[];
  @Input() sectionLabel!: string;
  @Input() buttonLabel!: string;
  @Input() isTreinos: boolean = false;
  @Input() isLoading!: boolean;

  @Input() firestore!: Firestore;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    console.log(this.itens);
  }

  setStringToUpperCase(text: string) {
    return text.toUpperCase();
  }

  async createTreino() {
    const popover = await this.popoverController.create({
      component: CreateTreinoModalComponent,
      cssClass: "popover-width"
    });

    await popover.present();

    var response = await popover.onDidDismiss();
    if (response.role == "criar") {
      const treinoCollection = collection(this.firestore, "treinos");
      response.data["imageUrl"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRGia-9VwQSCqISam2I1d0c02cLL75f4rbw&usqp=CAU";
      await addDoc(treinoCollection, response.data);
    }

  }

}
