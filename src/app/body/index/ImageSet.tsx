import {Component} from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 550px;
  height: 650px;

  @media (max-width: 950px) {
    margin: 0 auto;
    padding: 50px 0;
    display: grid;
    row-gap: 30px;
    column-gap: 75px;
    grid-template-rows: 50% 50%;
    grid-template-columns: 100px 100px 100px;
    width: fit-content;
    height: auto;
  }

  @media (max-width: 650px) {
    grid-template-columns: 75px 75px 75px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 60px 60px 60px;
  }

  @media (max-width: 400px) {
    grid-template-rows: 33% 33% 33%;
    grid-template-columns: 60px 60px;
    row-gap: 20px;
  }
`

interface ImageProps {
  top: string
  left: string
  smallTop: string
  smallLeft: string
}

const Image = styled.div<ImageProps>`

  img {
    @media (max-width: 650px) {
      max-width: 75px;
    }

    @media (max-width: 500px) {
      max-width: 60px;
    }
  }

  @media (min-width: 950px) {
    position: absolute;
    top: ${p => p.smallTop};
    left: ${p => p.smallLeft};
  }

  @media (min-width: 1200px) {
    top: ${p => p.top};
    left: ${p => p.left};
  }
`

class ImageSet extends Component {
  render() {
    return (
      <ImageContainer>
        <Image top="70px" left="365px" smallTop="70px" smallLeft="300px">
          <img style={{width: "75px"}} src={"/img/index/phi.png"} alt="phi"/>
        </Image>
        <Image top="175px" left="100px" smallTop="325px" smallLeft="-10px">
          <img style={{width: "90px"}} src={"/img/index/cloud-computing.png"} alt="Cloud Computing"/>
        </Image>
        <Image top="235px" left="430px" smallTop="130px" smallLeft="85px">
          <img style={{width: "100px"}} src={"/img/index/programmer.png"} alt="Programmer"/>
        </Image>
        <Image top="360px" left="235px" smallTop="325px" smallLeft="235px">
          <img style={{width: "90px"}} src={"/img/index/binary-code.png"} alt="Binary Code"/>
        </Image>
        <Image top="450px" left="-15px" smallTop="530px" smallLeft="350px">
          <img style={{width: "80px"}} src={"/img/index/hardware.png"} alt="Hardware"/>
        </Image>
        <Image top="490px" left="460px" smallTop="530px" smallLeft="130px">
          <img style={{width: "90px"}} src={"/img/index/integration.png"} alt="Integration"/>
        </Image>
      </ImageContainer>
    )
  }
}

export default ImageSet