import { Injectable } from '@angular/core';
import { Key } from './key';
import { KEYS } from './mock-keys';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  constructor() { }

  getKeys(): Key[] {
    return KEYS;
  }
}
