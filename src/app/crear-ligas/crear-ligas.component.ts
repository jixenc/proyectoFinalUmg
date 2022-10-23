import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-ligas',
  templateUrl: './crear-ligas.component.html',
  styleUrls: ['./crear-ligas.component.css']
})
export class CrearLigasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegar(){
    window.alert("Liga creada exitosamente ");
    this.router.navigate(['principal']);
  }
}
