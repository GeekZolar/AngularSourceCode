import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctBalanceComponent } from './acct-balance.component';

describe('AcctBalanceComponent', () => {
  let component: AcctBalanceComponent;
  let fixture: ComponentFixture<AcctBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcctBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
