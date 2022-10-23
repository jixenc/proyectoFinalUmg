import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisLigasComponent } from './mis-ligas.component';

describe('MisLigasComponent', () => {
  let component: MisLigasComponent;
  let fixture: ComponentFixture<MisLigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisLigasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisLigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



