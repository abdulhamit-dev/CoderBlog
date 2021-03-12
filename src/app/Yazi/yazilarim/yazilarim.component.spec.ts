import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YazilarimComponent } from './yazilarim.component';

describe('YazilarimComponent', () => {
  let component: YazilarimComponent;
  let fixture: ComponentFixture<YazilarimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YazilarimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YazilarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
