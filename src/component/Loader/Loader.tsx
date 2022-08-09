import { Player } from "@lottiefiles/react-lottie-player";

const Loader: React.FC = () => {
  return (
    <>
      <Player
        src="https://assets7.lottiefiles.com/private_files/lf30_k8aihdnh.json"
        autoplay
        loop
        style={{ height: "300px", width: "300px" }}
      />
    </>
  );
};

export default Loader;
