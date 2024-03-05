import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Firestore, doc, collection, getDoc, query, getDocs, collectionData, addDoc } from '@angular/fire/firestore';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-create-treino-modal',
  templateUrl: './create-treino-modal.component.html',
  styleUrls: ['./create-treino-modal.component.scss'],
})
export class CreateTreinoModalComponent  implements OnInit {

  constructor(private formBuilder: FormBuilder, private popoverController: PopoverController) { }

  form = this.formBuilder.group({
    "nome": ["", [Validators.required, Validators.pattern('[-_a-zA-Z ]*')]]
  })

  ngOnInit() {}

  showErrors(erros: ValidationErrors) {
    if (erros["pattern"]) {
      return "Apenas letras podem ser inseridas!";
    }
    return "";
  }

  async criarTreino() {
    if (this.form.valid) {
      await this.popoverController.dismiss({
        nome: this.form.controls.nome.value
      }, "criar")
    }
  }
}
