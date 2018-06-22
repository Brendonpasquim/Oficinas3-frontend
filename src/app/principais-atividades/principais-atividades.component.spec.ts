import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisAtividadesComponent } from './principais-atividades.component';

describe('PrincipaisAtividadesComponent', () => {
  let component: PrincipaisAtividadesComponent;
  let fixture: ComponentFixture<PrincipaisAtividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipaisAtividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaisAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
