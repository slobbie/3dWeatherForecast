import styled from 'styled-components';

/**
 * 좌측 디테일 뷰
 */
const LeftDetailView = () => {
  return (
    <LeftContentDiv
    // style={{
    //   position: 'absolute',
    //   zIndex: 100,
    //   width: '25%',
    //   height: '100vh',
    //   top: 0,
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   backgroundColor: 'blue',
    // }}
    />
  );
};

export default LeftDetailView;

const LeftContentDiv = styled.div`
  position: absolute;
  z-index: 100;
  width: 30%;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: rgba(74, 74, 74, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
`;
