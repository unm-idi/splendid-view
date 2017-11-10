import { Constructor } from './constructor';

export function testingMixin<TBase extends Constructor>(Base: TBase) {
  return class Timestamped extends Base {
    timestamp = Date.now();

    annoytingFunction() {
      window.alert('Im annyoing!');
    }
  };
}
