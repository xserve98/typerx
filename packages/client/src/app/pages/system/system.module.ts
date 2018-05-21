import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { UMeditorModule } from 'ngx-umeditor';
import { SettingsPageComponent } from './settings/settings';
import { MenusPageComponent } from './menus/menus';
import { ApiModule } from 'generated';
import { AccountsPageComponent } from './accounts/accounts';

const routes: Routes = [
    { path: 'settings', component: SettingsPageComponent },
    { path: 'menus', component: MenusPageComponent, data: { domain: 'menu', title: '菜单管理' } },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        UMeditorModule,
    ],
    declarations: [
        SettingsPageComponent,
        MenusPageComponent,
        AccountsPageComponent
    ],
    exports: [
        RouterModule
    ]
})

export class SystemModule { } 