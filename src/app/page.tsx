import Image from "next/image";
import Squares from "@/components/squares";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen select-none relative">
      <div className="absolute inset-0">
        <Squares
          speed={0.5}
          squareSize={100}
          direction="up" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
      <Image src="/icon.svg" alt="Logo" width={100} height={100} className="ml-9" />
    </div>
  );
};

export default Home;
