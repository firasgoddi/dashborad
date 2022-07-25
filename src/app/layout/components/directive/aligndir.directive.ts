import { Directive, ElementRef } from '@angular/core';
import { Input } from "@angular/core";
import { SharedParamService } from "@fuse/services/shared.params.service";

@Directive({
  selector: '[align]'
})
export class AlignDirDirective {
    @Input('align') dir: string;
    constructor(el: ElementRef,
            private _sharedParamService:SharedParamService) {
        this._sharedParamService.align
        .subscribe((config) => {
            el.nativeElement.style=config;
        
        });
        
        
       
    }
}