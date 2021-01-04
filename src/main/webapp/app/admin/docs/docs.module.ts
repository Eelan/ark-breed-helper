import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArkBreedHelperSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [ArkBreedHelperSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
