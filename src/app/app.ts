import { NgModule, ModuleWithProviders } from '@angular/core';
import { UuidService } from './uuid';
@NgModule({})
export class UuidModule {
    public static forRoot(): ModuleWithProviders{
        return {
            ngModule: UuidModule,
            providers: [
                UuidService
            ]
        }
    }
}
export { UuidService } from './uuid';
