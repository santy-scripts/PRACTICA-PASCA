import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorComponent } from './comprador.component';

describe('CompradorComponent', () => {
  let component: CompradorComponent;
  let fixture: ComponentFixture<CompradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompradorComponent]
    });
    fixture = TestBed.createComponent(CompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
