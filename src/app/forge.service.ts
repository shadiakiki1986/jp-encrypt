import { Injectable } from '@angular/core';
import * as forge from 'node-forge'

@Injectable({
  providedIn: 'root'
})
export class ForgeService {

  constructor() { }

  encrypt(pem: string, message: string): string {
    // https://github.com/digitalbazaar/forge#rsa
    console.log(pem, message)
    try {
      var publicKey = forge.pki.publicKeyFromPem(pem);
      var encrypted = publicKey.encrypt(message);
      return encrypted;
    } catch(e) {
      return e.message;
    }
  }
}
