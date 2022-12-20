import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenHeaderComponent } from './wooden-header.component';

describe('WoodenHeaderComponent', () => {
  let component: WoodenHeaderComponent;
  let fixture: ComponentFixture<WoodenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
