import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenCarouselComponent } from './wooden-carousel.component';

describe('WoodenCarouselComponent', () => {
  let component: WoodenCarouselComponent;
  let fixture: ComponentFixture<WoodenCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodenCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
