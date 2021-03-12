import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaslakComponent } from './taslak.component';

describe('TaslakComponent', () => {
  let component: TaslakComponent;
  let fixture: ComponentFixture<TaslakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaslakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaslakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
