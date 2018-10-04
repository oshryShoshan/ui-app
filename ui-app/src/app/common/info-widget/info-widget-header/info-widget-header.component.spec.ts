import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWidgetHeaderComponent } from './info-widget-header.component';

describe('InfoWidgetHeaderComponent', () => {
  let component: InfoWidgetHeaderComponent;
  let fixture: ComponentFixture<InfoWidgetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWidgetHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWidgetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
