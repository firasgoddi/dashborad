import { Directive, ElementRef } from '@angular/core';
import { Input } from "@angular/core";
import { SharedParamService } from "@fuse/services/shared.params.service";

@Directive({
  selector: '[dir]'
})
export class DirDirective {
    @Input('dir') dir: string;
    constructor(el: ElementRef,
            private _sharedParamService:SharedParamService) {
        this._sharedParamService.config
        .subscribe((config) => {
            el.nativeElement.dir= config;
        
        });
        
        
       
    }
}