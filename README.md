# [uuid](https://github.com/kelektiv/node-uuid)


```ts
import { UuidService } from '../../src/app/app';
export class AppComponent implements OnInit {
  namespace: string = this.uuid.v1();
  constructor(
    public uuid: UuidService
  ) {}
  ngOnInit(){
    console.log(this.uuid.v1());
    console.log(this.uuid.v4());
    console.log(this.uuid.v5DNS('meepo.com.cn'));
    console.log(this.uuid.v5URL('http://example.com/hello'));
    console.log(this.uuid.v5('http://example.com/hello'));
    console.log(this.uuid.v5Name('http://example.com/hello',this.namespace));
  }
}
```