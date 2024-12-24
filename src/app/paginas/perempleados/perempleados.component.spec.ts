import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerempleadosComponent } from './perempleados.component';

describe('PerempleadosComponent', () => {
  let component: PerempleadosComponent;
  let fixture: ComponentFixture<PerempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerempleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
