import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UuidService } from '../../src/app/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  namespace: string = this.uuid.v1();
  constructor(
    public uuid: UuidService
  ) { }
  ngOnInit() {
    console.log(this.uuid.v1());
  }
}
