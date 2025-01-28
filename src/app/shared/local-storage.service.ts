import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly storageKey = 'books';

  saveToLocalStorage(data: unknown) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getFromLocalStorage() {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }
}
