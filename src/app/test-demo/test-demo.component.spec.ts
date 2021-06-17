import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDemoComponent } from './test-demo.component';

describe('TestDemoComponent', () => {
  let component: TestDemoComponent;
  let fixture: ComponentFixture<TestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
