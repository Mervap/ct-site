import React, {ReactNode} from "react";
import {LinkProps} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import {AdaptiveText, AdaptiveTextProps} from "../../components/AdaptiveText";
import styled from "styled-components";
import {Link} from "../../components/Link";
import {mergeHeaders} from "../../components/markdownUtil";
import ResizeHandler from "../../components/ResizeHandler";

const TextBlock = styled(AdaptiveText)<AdaptiveTextProps>`
  padding: 0 4%;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
`

const Summary = styled(TextBlock)<AdaptiveTextProps>`
  opacity: 0.7;
  padding-top: 60px;
`

const Question = styled(TextBlock)<AdaptiveTextProps>`
  padding-top: 65px;
`

const MainText = styled(TextBlock)<AdaptiveTextProps>`
  padding-top: 25px;
`

const Date = styled(TextBlock)<AdaptiveTextProps>`
  opacity: 0.7;
  padding-top: 30px;
  padding-bottom: 30px;
`

const minImageSize = 250

const Images = styled.div`
  display: grid;
  width: fit-content;
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
  column-gap: 2.5%;
  row-gap: 2.5%;
  margin: 50px auto 0 auto;
  grid-template-columns: repeat(${p => React.Children.count(p.children)}, max-content);

  @media (max-width: ${p => React.Children.count(p.children) * minImageSize + 150}px) {
    grid-template-columns: 100%;
  }

  & > & {
    // hacky hack.....
    display: flex;
    justify-content: center;
    margin: 0;
  }

  & > div > img, & > img {
    min-width: ${minImageSize}px;
    max-width: ${p => window.innerWidth * 0.9 / React.Children.count(p.children)}px;
    object-position: center;
    object-fit: cover;

    @media (max-width: ${p => React.Children.count(p.children) * minImageSize + 150}px) {
      min-width: unset;
      max-width: unset;
      max-height: 50vh;
      width: 90%;
    }
  }
`

const InterviewLink = styled(Link)<LinkProps>`
  color: #0056d3
`

function getNodeType(node: ReactNode): string | undefined {
  if (typeof node === 'object' && node !== null && 'type' in node) {
    const type = node.type
    if (typeof type == "string") return type
    else if ('name' in type) return type.name as string
  }
  return undefined
}

type ReactChildOrUndefined = Exclude<ReactNode, boolean | null>
type ReactChild = Exclude<ReactNode, boolean | null | undefined>

function ParagraphRenderer(node: any, children: ReactNode, props: any): JSX.Element {
  const childrenArray: Array<ReactChildOrUndefined> = React.Children.toArray(children).filter(child => child !== "\n")
  if (childrenArray.length === 0) return <div/>

  const paragraphChildren = new Array<ReactChild>()
  childrenArray.push(undefined)

  let acc: Array<ReactChild> = [childrenArray[0] as ReactChild]
  childrenArray.reduce((prevValue, child) => {
    const prevType = getNodeType(prevValue)
    const childType = getNodeType(child)
    if (child === undefined || ((prevType === 'img' || childType === 'img') && prevType !== childType)) {
      if (acc.length > 0) {
        let child: ReactChild
        if (prevType === 'img') child = <Images key={paragraphChildren.length}>{acc}</Images>
        else child = <MainText type="main_text" weight="normal" textColor="secondary" key={paragraphChildren.length}>
          {acc}
        </MainText>
        paragraphChildren.push(child)
        acc = []
      }
    }
    if (child !== undefined) acc.push(child)
    return child
  })
  return <div style={{width: "100%"}} {...props}> {paragraphChildren}</div>
}

interface ExactInterviewProps {
  name: string
}

class Interview extends ResizeHandler<ExactInterviewProps> {

  state = {
    data: '',
    width: 0
  }

  protected onResize(width: number, height: number) {
    this.setState({width: width})
  }

  componentDidMount() {
    super.componentDidMount()
    fetch('/interviews/' + this.props.name + '/full.md')
      .then((r) => r.text())
      .then(text => {
        this.setState({data: mergeHeaders(text)})
      })
  }

  render() {
    const data = this.state.data
    if (data === undefined) {
      return (<div style={{height: '100vh'}}/>)
    } else {
      return (
        <div style={{width: '100%', minHeight: '100vh', margin: '10% 0 3% 0'}}>
          <ReactMarkdown
            // @ts-ignore
            rehypePlugins={[rehypeRaw]}
            children={data}
            components={{
              // Header
              // @ts-ignore
              h1: ({node, ...props}) => <TextBlock type="header" weight="heavy_bold" textColor="secondary"
                                                   lineHeight={1.23} {...props}/>,
              // Description
              // @ts-ignore
              h2: ({node, ...props}) => <Summary type="light_subheader" weight="normal" textColor='secondary'
                                                 lineHeight={1.35} {...props}/>,
              // Question
              // @ts-ignore
              h3: ({node, ...props}) => <Question type="subsubheader" weight="heavy_bold"
                                                  textColor="secondary" {...props}/>,
              // Answers + gallery images
              // @ts-ignore
              p: ({node, children, ...props}) => ParagraphRenderer(node, children as [any], props),
              // Just image
              // @ts-ignore
              img: ({node, ...props}) => <Images>{React.createElement("img", props)}</Images>,
              // Links
              // @ts-ignore
              a: ({node, href, ...props}) => <InterviewLink to={href as string} {...props}/>,
              // Date
              // @ts-ignore
              h6: ({node, ...props}) => <Date type="light_footnote" weight="heavy_bold" textColor="tertiary" {...props}/>,
            }}
          />
        </div>
      )
    }
  }
}
export default Interview