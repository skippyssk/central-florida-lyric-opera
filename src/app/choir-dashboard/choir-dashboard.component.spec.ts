import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoirDashboardComponent } from './choir-dashboard.component';

describe('ChoirDashboardComponent', () => {
  let component: ChoirDashboardComponent;
  let fixture: ComponentFixture<ChoirDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoirDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoirDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
