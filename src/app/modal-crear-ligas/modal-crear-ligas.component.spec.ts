import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearLigasComponent } from './modal-crear-ligas.component';

describe('ModalCrearLigasComponent', () => {
  let component: ModalCrearLigasComponent;
  let fixture: ComponentFixture<ModalCrearLigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearLigasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearLigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
