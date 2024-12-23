import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C1ComponentZach } from './c1.component';

describe('C1ComponentZach', () => {
  let component: C1ComponentZach;
  let fixture: ComponentFixture<C1ComponentZach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C1ComponentZach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1ComponentZach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
