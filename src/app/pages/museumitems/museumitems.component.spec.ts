import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumitemsComponent } from './museumitems.component';

describe('MuseumitemsComponent', () => {
  let component: MuseumitemsComponent;
  let fixture: ComponentFixture<MuseumitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
