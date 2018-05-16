import { Component, OnInit, Input } from '@angular/core';
import { Key } from '../key';
import { ForgeService } from '../forge.service';

@Component({
  selector: 'app-key-detail',
  templateUrl: './key-detail.component.html',
  styleUrls: ['./key-detail.component.css']
})
export class KeyDetailComponent implements OnInit {

  @Input() key: Key;

  message: string;
  encrypted: string;

  constructor(private forgeService: ForgeService) { }

  ngOnInit() {
  }

  onEncrypt() {
     return this.forgeService.encrypt(this.key.public_key, this.message)
                .subscribe(encrypted => this.encrypted = encrypted);
     ;
  }

}
