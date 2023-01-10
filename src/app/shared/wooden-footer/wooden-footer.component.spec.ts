import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenFooterComponent } from './wooden-footer.component';

describe('WoodenFooterComponent', () => {
  let component: WoodenFooterComponent;
  let fixture: ComponentFixture<WoodenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
