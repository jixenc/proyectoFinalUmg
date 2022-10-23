import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLigasComponent } from './crear-ligas.component';

describe('CrearLigasComponent', () => {
  let component: CrearLigasComponent;
  let fixture: ComponentFixture<CrearLigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearLigasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearLigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
