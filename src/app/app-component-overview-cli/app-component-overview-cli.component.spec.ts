import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentOverviewCliComponent } from './app-component-overview-cli.component';

describe('AppComponentOverviewCliComponent', () => {
  let component: AppComponentOverviewCliComponent;
  let fixture: ComponentFixture<AppComponentOverviewCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponentOverviewCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponentOverviewCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
