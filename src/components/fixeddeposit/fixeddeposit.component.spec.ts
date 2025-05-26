import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixeddepositComponent } from './fixeddeposit.component';

describe('FixeddepositComponent', () => {
  let component: FixeddepositComponent;
  let fixture: ComponentFixture<FixeddepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixeddepositComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixeddepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
