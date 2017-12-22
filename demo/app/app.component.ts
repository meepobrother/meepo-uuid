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
    console.log('namespace', this.namespace);
    console.log(this.uuid.v1());
    console.log(this.uuid.v4());
    console.log(this.uuid.v5DNS('meepo.com.cn'));
    console.log(this.uuid.v5URL('http://example.com/hello'));
    console.log(this.uuid.v5('http://example.com/hello'));
    console.log(this.uuid.v5Name('http://example.com/hello', this.namespace));
  }
}
