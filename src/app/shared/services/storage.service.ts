import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  get storage() {
    return window.localStorage;
  }

  getData(key: string) {
    return JSON.parse(this.storage.getItem(key));
  }

  setData(key: string, data: any) {
    this.storage.setItem(key, JSON.stringify(data));
  }
}
