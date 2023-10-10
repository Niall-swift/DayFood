import styled from "styled-components";


export const Homen = styled.main`
    width: 100vw;
    max-width: 1280vw;
    margin: 0 auto;
    position: absolute;
    overflow: hidden;
    margin-right: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    animation: circle-in-hesitate 2.4s;

@keyframes circle-in-hesitate {
  0% {
    clip-path: circle(0%);
    background-color: black;
  }
  40% {
    clip-path: circle(40%);
    background-color: black;
  }
  100% {
    clip-path: circle(125%);
  }
}

[transition-style="in:circle:hesitate"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-hesitate both;
}
`

