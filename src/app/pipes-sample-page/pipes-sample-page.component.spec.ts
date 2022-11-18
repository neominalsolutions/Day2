import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesSamplePageComponent } from './pipes-sample-page.component';

describe('PipesSamplePageComponent', () => {
  let component: PipesSamplePageComponent;
  let fixture: ComponentFixture<PipesSamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesSamplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesSamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
