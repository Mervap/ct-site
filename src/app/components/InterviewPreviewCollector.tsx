import React from "react";
import interviewList from "../../interviewList.json";
import {mergeHeaders} from "./markdownUtil";
import styled from "styled-components";
import ResizeHandler from "./ResizeHandler";
import {CancellablePromise, makeCancelable} from "./makeCancelable";

export const previewBlockMaxWidth = 950 //px

export interface InterviewInfo {
  name: string
  header: string
  description: string
}

interface InterviewPreviewCollectorState {
  interviews: InterviewInfo[]
}

const InterviewContainer = styled.div`
  display: grid;
  width: 90%;
  max-width: 1200px;
  grid-template-columns: 30% 30% 30%;
  grid-auto-rows: 1fr;
  column-gap: 2.5%;
  row-gap: 2.5%;
  padding: 4% 0;
  margin: 0 auto;

  @media (max-width: ${previewBlockMaxWidth}px) {
    display: block;
  }
`

abstract class InterviewPreviewCollector extends ResizeHandler<any, InterviewPreviewCollectorState> {

  abstract fetchAll: Boolean

  abstract renderHeader(): React.ReactNode

  abstract renderPreview(info: InterviewInfo, key: number): React.ReactNode

  state: InterviewPreviewCollectorState = {
    interviews: []
  }

  private promises: Array<CancellablePromise<void>> = []

  componentDidMount() {
    super.componentDidMount()
    this.promises = []
    const names = this.fetchAll ? interviewList.all : interviewList.onIndex
    names.forEach(name => {
      const promise = fetch("/interviews/" + name + "/preview.md")
        .then(it => it.text())
        .then(text => {
          const processedText = mergeHeaders(text).slice(1).split("\n")
          this.setState({
            interviews: this.state.interviews.concat({
              name: name,
              header: processedText[0].trim(),
              description: processedText.slice(1).join(" ").trim()
            })
          })
        })
      this.promises.push(makeCancelable(promise))
    })
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    this.promises.forEach(promise => promise.cancel())
    this.promises = []
  }

  render() {
    if (this.state.interviews.length === 0) return <div/>
    const previews = this.state.interviews.map((info, ind) => this.renderPreview(info, ind))
    return (
      <div>
        {this.renderHeader()}
        <div style={{backgroundColor: "white", width: "100%"}}>
          <InterviewContainer>{previews}</InterviewContainer>
        </div>
      </div>
    )
  }
}

export default InterviewPreviewCollector