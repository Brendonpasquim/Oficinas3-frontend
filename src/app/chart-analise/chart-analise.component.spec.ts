import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAnaliseComponent } from './chart-analise.component';

describe('ChartAnaliseComponent', () => {
  let component: ChartAnaliseComponent;
  let fixture: ComponentFixture<ChartAnaliseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartAnaliseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAnaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
