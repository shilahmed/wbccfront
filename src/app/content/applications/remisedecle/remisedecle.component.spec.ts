import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemisedecleComponent } from './remisedecle.component';

describe('RemisedecleComponent', () => {
  let component: RemisedecleComponent;
  let fixture: ComponentFixture<RemisedecleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemisedecleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemisedecleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
