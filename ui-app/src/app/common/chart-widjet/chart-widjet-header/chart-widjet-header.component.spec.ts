import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWidjetHeaderComponent } from './chart-widjet-header.component';

describe('ChartWidjetHeaderComponent', () => {
  let component: ChartWidjetHeaderComponent;
  let fixture: ComponentFixture<ChartWidjetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWidjetHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWidjetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
