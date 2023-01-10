import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenGalleryComponent } from './wooden-gallery.component';

describe('WoodenGalleryComponent', () => {
  let component: WoodenGalleryComponent;
  let fixture: ComponentFixture<WoodenGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodenGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
