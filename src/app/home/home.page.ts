import { Component, OnInit } from '@angular/core';
import { Firestore, doc, collection, getDoc, query, getDocs, collectionData } from '@angular/fire/firestore';
import { DocumentData, where } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currentUser!: User | null;
  treinos  !:(DocumentData | (DocumentData & {}))[];
  programas!:(DocumentData | (DocumentData & {}))[];
  isLoadingTreinos = true;
  isLoadingProgramas = true;

  constructor(public firestore: Firestore) {}

  usersCollection = collection(this.firestore, "usuarios");
  treinosCollection = collection(this.firestore, "treinos");
  programasCollection = collection(this.firestore, "programas");

  ngOnInit(): void {
    this.getUser();
    this.getTreinosEProgramas();
  }

  async getUser() {
    const q = query(this.usersCollection, where("nome", "==", "Leonardo Santos"));
    let docs = await getDocs(q);
    this.currentUser = docs.docs[0].data() as User;
  }

  async getTreinosEProgramas() {
    this.isLoadingTreinos = true;
    this.isLoadingProgramas = true;
    collectionData(this.treinosCollection).subscribe(response => {
      this.treinos = response;
      this.isLoadingTreinos = false;
    });
    collectionData(this.programasCollection).subscribe(response => {
      this.programas = response;
      this.isLoadingProgramas = false;
    });
    
  }

}

export interface User {
  nome: string,
  nivel: string
};