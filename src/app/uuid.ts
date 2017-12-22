import { Injectable } from '@angular/core';
declare const require: any;
const v1 = require('uuid/v1');
const v4 = require('uuid/v4');
const v5 = require('uuid/v5');

@Injectable()
export class UuidService {
    namespace: string = '';
    constructor() {
        this.namespace = v1();
    }

    v1(): string {
        return v1();
    }

    v4(): string {
        return v4();
    }

    v5URL(s: string) {
        return v5(s, v5.DNS);
    }

    v5DNS(s: string) {
        return v5(s, v5.DNS);
    }

    v5(s: string) {
        return v5(s, this.namespace);
    }

    v5Name(s: string, namespace: string) {
        return v5(s, namespace);
    }
}