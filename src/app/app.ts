import { NgModule, ModuleWithProviders } from '@angular/core';
import { UuidService } from './uuid';
@NgModule({
    providers: [
        UuidService
    ]
})
export class UuidModule {}
export { UuidService } from './uuid';
