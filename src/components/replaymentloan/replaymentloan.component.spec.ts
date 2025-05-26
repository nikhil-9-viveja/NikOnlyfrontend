import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaymentloanComponent } from './replaymentloan.component';

describe('ReplaymentloanComponent', () => {
  let component: ReplaymentloanComponent;
  let fixture: ComponentFixture<ReplaymentloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaymentloanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaymentloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
