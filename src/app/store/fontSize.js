import { makeAutoObservable } from "mobx";

class FontSize {
  fontSize = "normal";

  constructor() {
    makeAutoObservable(this);
  }
  original() {
    return (this.fontSize = "original");
  }
  normal() {
    return (this.fontSize = "normal");
  }
  medium() {
    return (this.fontSize = "medium");
  }
  large() {
    return (this.fontSize = "large");
  }
}
export default new FontSize();
