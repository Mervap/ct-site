import {Component} from "react";
import CommonInfo from "./GeneralInfo";
import Description from "./Description";
import InterviewsPreview from "./InterviewsPreview";

class Index extends Component {
  render() {
    return (
      <div>
        <CommonInfo/>
        <Description/>
        <InterviewsPreview/>
      </div>
    );
  }
}

export default Index;