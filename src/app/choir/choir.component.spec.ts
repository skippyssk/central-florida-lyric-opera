import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoirComponent } from './choir.component';

describe('ChoirComponent', () => {
  let component: ChoirComponent;
  let fixture: ComponentFixture<ChoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
