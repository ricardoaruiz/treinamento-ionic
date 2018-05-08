import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ListPage } from './list';
import { SimpleListPage } from './simple-list';
import { NoLineListPage } from './no-line-list';
import { InsetListPage } from './inset-list';
import { DividerListPage } from './divider-list';
import { HeaderListPage } from './header-list';
import { IconListPage } from './icon-list';
import { AvatarListPage } from './avatar-list';
import { ThumbnailListPage } from './thumbnail-list';

@NgModule({
  declarations: [
    ListPage,
    SimpleListPage,
    NoLineListPage,
    InsetListPage,
    DividerListPage,
    HeaderListPage,
    IconListPage,
    AvatarListPage,
    ThumbnailListPage
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
  entryComponents: [
    SimpleListPage,
    NoLineListPage,
    InsetListPage,
    DividerListPage,
    HeaderListPage,
    IconListPage,
    AvatarListPage,
    ThumbnailListPage
  ]
})
export class ListPageModule {}
