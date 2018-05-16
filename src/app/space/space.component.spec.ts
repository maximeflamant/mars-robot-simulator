import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceComponent } from './space.component';

describe('SpaceComponent', () => {
  let component: SpaceComponent;
  let fixture: ComponentFixture<SpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set row and cols', () => {
    component.ngOnInit();
    expect(component.rows.length).toBe(5);
    expect(component.cols.length).toBe(5);
  });

  it('should return true calling isSelected', () => {
    component.x = 1;
    component.y = 1;
    const result = component.isSelected(1, 1);
    expect(result).toBeTruthy;
  });
});
