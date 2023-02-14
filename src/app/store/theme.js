import { makeAutoObservable } from "mobx";

class Theme {
  theme = "main";

  constructor() {
    makeAutoObservable(this);
  }
  main() {
    return (this.theme = "main");
  }
  white() {
    return (this.theme = "white");
  }
  black() {
    return (this.theme = "black");
  }
  contrast() {
    return (this.theme = "contrast");
  }
}
export default new Theme();
