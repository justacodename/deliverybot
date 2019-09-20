export interface KVStore<T> {
  get(key: string): Promise<T | undefined>;
  set(key: string, val: T): Promise<void>;
  del(key: string): Promise<void>;
}

class InMemStore<T> implements KVStore<T> {
  private store: { [k: string]: T | undefined } = {};

  async get(key: string): Promise<T | undefined> {
    return this.store[key]
  }
  async set(key: string, val: T) {
    this.store[key] = val;
  }
  async del(key: string) {
    if (this.store[key]) delete this.store[key];
  }
}

export let LockStore: KVStore<string> = new InMemStore();

export function setLockStore(s: KVStore<string>) {
  LockStore = s;
}
