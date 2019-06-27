import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalRowComponent } from './animal-row.component';

describe('AnimalRowComponent', () => {
  let component: AnimalRowComponent;
  let fixture: ComponentFixture<AnimalRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
