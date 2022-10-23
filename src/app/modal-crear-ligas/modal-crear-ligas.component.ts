import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-crear-ligas',
  templateUrl: './modal-crear-ligas.component.html',
  styleUrls: ['./modal-crear-ligas.component.css']
})
export class ModalCrearLigasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegar(){
    window.alert("Liga creada exitosamente ");
    this.router.navigate(['principal']);
  }

}
