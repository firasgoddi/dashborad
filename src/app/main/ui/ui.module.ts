import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { UIFormsModule } from 'app/main/ui/forms/forms.module';
import { UIProjetsModule } from 'app/main/ui/projets/projets.module';
import { UIProductModule } from 'app/main/ui/product/product.module';
import { UICategoryModule } from 'app/main/ui/category/category.module';
import { UIGammeModule } from 'app/main/ui/gamme/gamme.module';
import { UIChatModule } from 'app/main/ui/chat/chat.module';
import { UIPrivelegeModule } from 'app/main/ui/privelege/privelege.module';

@NgModule({
    imports: [
      
        UIFormsModule,
        UIProjetsModule,
        FormsModule,
        UIProductModule,
        UICategoryModule,
        UIGammeModule,
        UIChatModule,
        UIPrivelegeModule
      
    ],
    declarations: []
})
export class UIModule
{
}
