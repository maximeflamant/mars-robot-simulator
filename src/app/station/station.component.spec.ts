import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationComponent } from './station.component';

describe('StationComponent', () => {
  let component: StationComponent;
  let fixture: ComponentFixture<StationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#execute', () => {
    it('Should call place method on Robot', () => {
      spyOn(component.robot, 'place');
      component.execute('PLACE 1,1,NORTH');
      expect(component.robot.move).toHaveBeenCalled;
    });

    it('Should call move method on Robot', () => {
      component.execute('PLACE 1,1,NORTH');
      spyOn(component.robot, 'move');
      component.execute('move');
      expect(component.robot.move).toHaveBeenCalled;
    });

    it('Should call turn left method on Robot', () => {
      component.execute('PLACE 1,1,NORTH');
      spyOn(component.robot, 'turn');
      component.execute('left');
      expect(component.robot.turn).toHaveBeenCalledWith('left');
    });

    it('Should call turn right method on Robot', () => {
      component.execute('PLACE 1,1,NORTH');
      spyOn(component.robot, 'turn');
      component.execute('right');
      expect(component.robot.turn).toHaveBeenCalledWith('right');
    });

    it('Should call turn right method on Robot', () => {
      component.execute('PLACE 1,1,NORTH');
      spyOn(component.robot, 'toString');
      component.execute('report');
      expect(component.robot.toString).toHaveBeenCalled;
    });
  });
});
