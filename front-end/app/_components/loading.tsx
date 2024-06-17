import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <ReactLoading type="bars" color="#EA1D2B" height="80px" width="80px" />
    </div>
  );
};

export default Loading;
