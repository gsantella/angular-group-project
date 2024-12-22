import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempusProfileComponent } from './tempus-profile.component';

describe('TempusProfileComponent', () => {
  let component: TempusProfileComponent;
  let fixture: ComponentFixture<TempusProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempusProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempusProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
