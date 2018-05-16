import { Component, OnInit } from '@angular/core';
import { Key } from '../key';
import { KeyService } from '../key.service';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {

  keys: Key[];

  constructor(private keyService: KeyService) { }

  getKeys(): void {
    this.keys = this.keyService.getKeys();
  }

  ngOnInit() {
    this.getKeys();
  }

	selectedKey: Key;

	onSelect(key: Key): void {
		this.selectedKey = key;
	}

}
