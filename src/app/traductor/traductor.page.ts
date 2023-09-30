import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TraductorPage implements OnInit {

  constructor() { }

  numero: number = 0;
  texto: string = "";

  convertir(){

    if(this.numero < 1 || this.numero > 1000){
      this.texto = "Numero fuera de rango";
      return;
    }

    if(this.numero == 1){
      this.texto = "Uno";
    }
    if(this.numero == 2){
      this.texto = "Dos";
    }
    if(this.numero == 3){
      this.texto = "Tres";
    }
    if(this.numero == 4){
      this.texto = "Cuatro";
    }
    if(this.numero == 5){
      this.texto = "Cinco";
    }
    if(this.numero == 6){
      this.texto = "Seis";
    }
    if(this.numero == 7){
      this.texto = "Siete";
    }
    if(this.numero == 8){
      this.texto = "Ocho";
    }
    if(this.numero == 9){
      this.texto = "Nueve";
    }
    if(this.numero == 10){
      this.texto = "Diez";
    }
    if(this.numero == 11){
      this.texto = "Once";
    }
    if(this.numero == 12){
      this.texto = "Doce";
    }
    if(this.numero == 13){
      this.texto = "Trece";
    }
  }

  ngOnInit() {
  }

}
