import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatSnackBarModule,MatTableDataSource, MatPaginator ,MatTableModule,MatDatepickerModule, MatFormFieldModule, MatIconModule,MatCardModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';

import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';

const routes: Routes = [
    {
        path     : 'Products',
        component: ProductComponent,
        
    },
    {
        path     : 'addProduct',
        component: AddProductComponent,
        
    },
    {
        path     : 'productDetail/:id',
        component: ProductdetailComponent,
        
    },
    {
        path     : 'deleteProduct/:id',
        component: DeleteproductComponent,
        
    },
 
];

@NgModule({
    declarations: [
        ProductComponent,
        AddProductComponent,
        ProductdetailComponent,
        DeleteproductComponent
   
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatSnackBarModule,
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatTableModule,
        FuseSharedModule,
        FormsModule,
        MatCardModule,
       
        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        
        MatPaginatorModule
    ]
})
export class UIProductModule
{
}
