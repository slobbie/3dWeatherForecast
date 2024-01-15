/**
 * 좌측 디테일 뷰
 */
const RightDetailView = () => {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 100,
        width: '25%',
        height: '100vh',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
        transition: '0.4s ease-in-out',
      }}
    />
  );
};

export default RightDetailView;
