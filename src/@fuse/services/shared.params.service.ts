import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import * as _ from 'lodash';
@Injectable({
    providedIn: 'root'
})
export class SharedParamService
{
    private _configDirection: BehaviorSubject<string> = new BehaviorSubject<string>('ltr');

    private _align: BehaviorSubject<string> = new BehaviorSubject<string>('left');

    private _useConfiguration: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    
    private _usedLangage: BehaviorSubject<string> = new BehaviorSubject<string>('en');

    private _usedCountries:  BehaviorSubject<Array<any>> = new BehaviorSubject([]);
/**
 * Set and get the direction
 */
set config(value)
{   
    this._configDirection.next(value);
}

get config(): any | Observable<any>
{
    return this._configDirection.asObservable();
}

/**
 * Set and get the direction
 */
set align(value)
{   
    this._align.next(value);
}

get align(): any | Observable<any>
{
    return this._align.asObservable();
}

/**
 * Set and get the user
 */
set connectedUser(value)
{
    this._useConfiguration.next(value);
}

get connectedUser(): any | Observable<any>
{
    return this._useConfiguration.asObservable();
 }

set usedLangage(value)
{
    this._usedLangage.next(value);
}

get usedLangage(): any | Observable<any>
{
    return this._useConfiguration.asObservable(); 
}


clearCountriesList()
{
    this._usedCountries.next([]);   
}
set countriesList(value)
{
    const currentValue = this._usedCountries.value;
    const updatedValue = [...currentValue, value];
    this._usedCountries.next(updatedValue);   
}


get countriesList(): any | Observable<any>
{
    return this._usedCountries.asObservable(); 
}
}