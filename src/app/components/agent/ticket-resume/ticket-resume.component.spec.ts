import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketResumeComponent } from './ticket-resume.component';

describe('TicketResumeComponent', () => {
  let component: TicketResumeComponent;
  let fixture: ComponentFixture<TicketResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
