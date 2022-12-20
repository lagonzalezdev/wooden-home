import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenUsComponent } from './wooden-us.component';

describe('WoodenUsComponent', () => {
  let component: WoodenUsComponent;
  let fixture: ComponentFixture<WoodenUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodenUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
