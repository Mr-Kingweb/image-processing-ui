import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataClearComponent } from './data-clear.component';

describe('DataClearComponent', () => {
  let component: DataClearComponent;
  let fixture: ComponentFixture<DataClearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataClearComponent]
    });
    fixture = TestBed.createComponent(DataClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
