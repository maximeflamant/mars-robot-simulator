import {
  Component,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';
import { table } from '../shared/table';

@Component({
  selector: 'mr-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  @Input('x') x: number = -1;
  @Input('y') y: number = -1;
  @Input('direction') direction: string;

  public rows: number[];
  public cols: number[];

  ngOnInit() {
    this.rows = Array.from({ length: table.height }).map((x, i) => ((table.height - 1) - i));
    this.cols = Array.from({ length: table.width }).map((x, i) => i);
  }

  /**
  * @param r current row
  * @param c current column
  * @returns true/false.
  * @description return true or flase if the selected row is the current row
  */
  isSelected(r: number, c: number) {
    return r == this.y && c == this.x;
  }
}
