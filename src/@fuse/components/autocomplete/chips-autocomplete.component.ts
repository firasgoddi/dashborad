import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild,ViewEncapsulation,Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { locale as english } from '@fuse/components/autocomplete/i18n/en';
import { locale as turkish } from '@fuse/components/autocomplete/i18n/tr';
import { locale as arabic } from '@fuse/components/autocomplete/i18n/ar';
import { locale as frensh } from '@fuse/components/autocomplete/i18n/fr';
import { FuseTranslationLoaderService } from "@fuse/services/translation-loader.service";
/**
 * @title Chips Autocomplete
 */
@Component({
    selector     : 'autocompletes',
    templateUrl  : './chips-autocomplete.html',
    styleUrls    : ['./chips-autocomplete.css'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ChipsAutocomplete {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  @Input('selected')
  fruits: string[];
  @Input('all')
  allFruits: string[] ;

  align:string='';
  //fruits: string[] = ['Lemon'];
  //allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
        this._fuseTranslationLoaderService.loadTranslations(english, turkish,arabic,frensh);
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
