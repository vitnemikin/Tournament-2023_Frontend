import styled from "styled-components";


const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: grab;
    user-select: none;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 100%;
    min-height: 200px;
    margin: 0 auto; /* Центрирование по горизонтали */
    /* Убрать position: absolute; */
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;

export default Wrapper;
