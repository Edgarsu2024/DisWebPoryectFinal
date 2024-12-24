import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisempleadosComponent } from './lisempleados.component';

describe('LisempleadosComponent', () => {
  let component: LisempleadosComponent;
  let fixture: ComponentFixture<LisempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LisempleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
