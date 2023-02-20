import { makeAutoObservable } from "mobx";

class Images {
  image = "color";

  constructor() {
    makeAutoObservable(this);
  }
  color() {
    return (this.image = "color");
  }
  gray() {
    return (this.image = "gray");
  }
  on() {
    return (this.image = "on");
  }
  off() {
    return (this.image = "off");
  }
}
export default new Images();
