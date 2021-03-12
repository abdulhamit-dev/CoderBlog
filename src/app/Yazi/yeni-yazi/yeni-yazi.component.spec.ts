import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniYaziComponent } from './yeni-yazi.component';

describe('YeniYaziComponent', () => {
  let component: YeniYaziComponent;
  let fixture: ComponentFixture<YeniYaziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeniYaziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeniYaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
