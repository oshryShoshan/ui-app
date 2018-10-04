import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionableListItemComponent } from './actionable-list-item.component';

describe('ActionableListItemComponent', () => {
  let component: ActionableListItemComponent;
  let fixture: ComponentFixture<ActionableListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionableListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionableListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
