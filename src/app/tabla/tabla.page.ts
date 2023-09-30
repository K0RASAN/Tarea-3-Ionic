import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TablaPage implements OnInit {

  constructor() { }

  numero: number = 0;
  rango: number[] = [];
  mostrar_boton: boolean = true;

  tablax(){
    this.mostrar_boton = false;
    this.rango = [];
    for (let i = 1; i <= 13; i++) {
      this.rango.push(i);
    }
  }

  ngOnInit() {
  }

}
