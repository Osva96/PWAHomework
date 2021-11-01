import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueitemComponent } from './uniqueitem.component';

describe('UniqueitemComponent', () => {
  let component: UniqueitemComponent;
  let fixture: ComponentFixture<UniqueitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
