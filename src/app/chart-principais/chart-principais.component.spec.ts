import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPrincipaisComponent } from './chart-principais.component';

describe('ChartPrincipaisComponent', () => {
  let component: ChartPrincipaisComponent;
  let fixture: ComponentFixture<ChartPrincipaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPrincipaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPrincipaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
