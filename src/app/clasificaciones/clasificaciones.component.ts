import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clasificaciones',
  templateUrl: './clasificaciones.component.html',
  styleUrls: ['./clasificaciones.component.css']
})
export class ClasificacionesComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  navegar() {
    this.router.navigate(['principal']);
  }
}
