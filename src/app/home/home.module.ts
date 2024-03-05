import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NotificationComponent } from '../components/notification/notification.component';
import { HomeHeaderComponent } from '../components/home-header/home-header.component';
import { ListSectionComponent } from '../components/list-section/list-section.component';
import { CreateTreinoModalComponent } from '../modals/create-treino-modal/create-treino-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, HomeHeaderComponent, NotificationComponent, ListSectionComponent, CreateTreinoModalComponent]
})
export class HomePageModule {}
