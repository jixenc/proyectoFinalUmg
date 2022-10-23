import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-invitar',
  templateUrl: './invitar.component.html',
  styleUrls: ['./invitar.component.css']
})
export class InvitarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(){
    window.alert("Se ha enviado la invitacion exitosamente");
    this.router.navigate(['principal']);
  }

}
