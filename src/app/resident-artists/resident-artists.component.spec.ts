import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentArtistsComponent } from './resident-artists.component';

describe('ResidentArtistsComponent', () => {
  let component: ResidentArtistsComponent;
  let fixture: ComponentFixture<ResidentArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentArtistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
