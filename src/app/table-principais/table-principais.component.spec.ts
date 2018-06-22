import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrincipaisComponent } from './table-principais.component';

describe('TablePrincipaisComponent', () => {
  let component: TablePrincipaisComponent;
  let fixture: ComponentFixture<TablePrincipaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePrincipaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrincipaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
