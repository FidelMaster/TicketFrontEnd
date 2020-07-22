import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSoftlandComponent } from './create-softland.component';

describe('CreateSoftlandComponent', () => {
  let component: CreateSoftlandComponent;
  let fixture: ComponentFixture<CreateSoftlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSoftlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSoftlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
