import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWidjetComponent } from './chart-widjet.component';

describe('ChartWidjetComponent', () => {
  let component: ChartWidjetComponent;
  let fixture: ComponentFixture<ChartWidjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWidjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWidjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
