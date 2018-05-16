import { Injectable } from '@angular/core';
import * as forge from 'node-forge'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgeService {

  constructor() { }

  encrypt(pem: string, message: string): Observable<string> {
    // https://github.com/digitalbazaar/forge#rsa
    if(!message) return of("");
    try {
      var publicKey = forge.pki.publicKeyFromPem(pem);
      var encrypted = publicKey.encrypt(message);
      return of(forge.util.encode64(encrypted));
    } catch(e) {
      return of(e.message);
    }
  }
}
