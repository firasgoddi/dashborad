import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FuseDirectivesModule } from '@fuse/directives/directives';
import { FusePipesModule } from '@fuse/pipes/pipes.module';
import { DirDirective } from "app/layout/components/directive/dir.directive";
import { AlignDirDirective } from "app/layout/components/directive/aligndir.directive";

@NgModule({
    declarations: [
                       DirDirective,AlignDirDirective
               ],
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule,DirDirective,AlignDirDirective
    ]
})
export class FuseSharedModule
{
}
