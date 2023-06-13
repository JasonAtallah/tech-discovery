import { isEven } from "is-even";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="text-xl">
      {isEven(2)}
      {isEven(3)}
    </div>
  );
};

export default Home;
