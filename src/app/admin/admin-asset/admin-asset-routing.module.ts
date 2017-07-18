import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAssetHomeComponent } from './admin-asset-home/admin-asset-home.component';
import { AdminAssetNewComponent } from './admin-asset-new/admin-asset-new.component';
import { AdminAssetImportComponent } from './admin-asset-import/admin-asset-import.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Asset'
    },
    children: [
        {
        path: '',
        component: AdminAssetHomeComponent,
        data: {
          title: ''
        }
      }, 
      {
        path: 'new',
        component: AdminAssetNewComponent,
        data: {
          title: 'New'
        }
      },
      {
        path: 'import',
        component: AdminAssetImportComponent,
        data: {
          title: 'Import'
        }
      }    
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAssetRoutingModule {}
