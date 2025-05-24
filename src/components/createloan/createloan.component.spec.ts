import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateloanComponent } from './createloan.component';

describe('CreateloanComponent', () => {
  let component: CreateloanComponent;
  let fixture: ComponentFixture<CreateloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateloanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
