import {Component} from "react";
import {debounce} from "../debounce";

abstract class ResizeHandler<P = {}, S = {}> extends Component<P, S> {

  protected onResize(width: number, height: number) {}

  private resizeListener = debounce(
    (_: Event | null) => this.onResize(window.innerWidth, window.innerHeight),
    100
  )

  componentDidMount() {
    this.resizeListener(null)
    window.addEventListener("resize", this.resizeListener)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeListener)
  }
}

export default ResizeHandler;