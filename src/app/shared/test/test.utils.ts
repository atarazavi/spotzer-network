import { Provider } from '@angular/core';
import { APP_CONFIG } from '#shared/config/app-config-token';

export function getMockConfigLoaderProviders(mockBaseUrl: string): Provider[] {
    const mockConfigLoaderService = {
        config: {
            baseUrl: mockBaseUrl
        }
    };

    return [
        { provide: APP_CONFIG, useValue: mockConfigLoaderService },
    ];
}