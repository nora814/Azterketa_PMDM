import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { GoiburukoaComponent } from '../konponenteak/goiburukoa/goiburukoa.component';
import { KonponenteakModule } from '../konponenteak/konponenteak.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), KonponenteakModule],
  exports: [RouterModule, GoiburukoaComponent]
})
export class HomePageRoutingModule {}
