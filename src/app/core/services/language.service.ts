import { Injectable } from '@angular/core';
import { ENGLISH_LANGUAGE_CONSTANTS } from '../languages/english';
import { MARATHI_LANGUAGE_CONSTANTS } from '../languages/marathi';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public languageConstants: any = MARATHI_LANGUAGE_CONSTANTS;


  constructor() {}
}
