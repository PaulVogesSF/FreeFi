import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {

  private states: Map<string, any>;

  constructor() {
    this.states = new Map<string, any>();
  }

  public set(key: string, value: any): void {
    this.states.set(key, value);
  }

  public get(key: string): any {
    return this.states.get(key);
  }

  public has(key: string): boolean {
    return this.states.has(key);
  }
}
