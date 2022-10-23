import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-apostar',
  templateUrl: './apostar.component.html',
  styleUrls: ['./apostar.component.css']
})
export class ApostarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(){
    window.alert("Se ha ingresado el vaticinio exitosamente");
    this.router.navigate(['/mis-ligas']);
  }

}
