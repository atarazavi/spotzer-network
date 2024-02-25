import { NgModule, Injectable } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { MaterialDesignModule } from '#shared/materialdesign/materialdesign.module';
import { HubConnectionFactoryService } from '#shared/services/backend/hub-connection-factory.service';
import { FakeHubConnection } from '#shared/services/backend/fake-hub-connection';


const MODULE_IMPORTS = [
    CommonModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialDesignModule,
    RouterTestingModule,
];

const MODULE_EXPORTS = [
    MaterialDesignModule,
];

@Injectable()
export class FakeHubConnectionFactoryService {
    newHubConnection(url: string): FakeHubConnection {
        return new FakeHubConnection();
    }
}

const MODULE_PROVIDERS = [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HubConnectionFactoryService, useClass: FakeHubConnectionFactoryService },
];

@NgModule({
    imports: [
        ...MODULE_IMPORTS,
    ],
    exports: MODULE_EXPORTS,
    providers: MODULE_PROVIDERS,
})

@NgModule({
    imports: MODULE_IMPORTS,
    exports: MODULE_EXPORTS,
    providers: MODULE_PROVIDERS,
})
export class UnitTestingModule { }
