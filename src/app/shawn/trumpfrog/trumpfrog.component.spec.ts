import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpfrogComponent } from './trumpfrog.component';

describe('TrumpfrogComponent', () => {
  let component: TrumpfrogComponent;
  let fixture: ComponentFixture<TrumpfrogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrumpfrogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrumpfrogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
