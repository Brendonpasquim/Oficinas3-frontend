import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnaliseComponent } from './table-analise.component';

describe('TableAnaliseComponent', () => {
  let component: TableAnaliseComponent;
  let fixture: ComponentFixture<TableAnaliseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAnaliseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
