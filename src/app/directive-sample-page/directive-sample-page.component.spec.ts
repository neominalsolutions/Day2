import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSamplePageComponent } from './directive-sample-page.component';

describe('DirectiveSamplePageComponent', () => {
  let component: DirectiveSamplePageComponent;
  let fixture: ComponentFixture<DirectiveSamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveSamplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveSamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
