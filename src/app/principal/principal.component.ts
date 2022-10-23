import { Component, OnInit } from '@angular/core';
import { Route, Router,ActivatedRoute  } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  currentUser: Object = {};
  constructor(
    private router: Router,
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res) => {
      this.currentUser = res.msg;
    });
  }
  // constructor(private router: Router) { }

  ngOnInit(): void {
  }
  misLigas(){
    this.router.navigate(['/mis-ligas']);
  }
  clasifica(){
    this.router.navigate(['/clasificaciones']);
  }
  apostar(){
    this.router.navigate(['/apostar']);
  }
  creaLiga(){
    this.router.navigate(['/modal-crear-ligas']);
  }
  
  invitar(){
    this.router.navigate(['/invitar']);
  }

}
