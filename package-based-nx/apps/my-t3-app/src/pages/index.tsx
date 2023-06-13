import { isEven } from "is-even";
import { type NextPage } from "next";

const Number = ({ num }: { num: number }) => {
  return isEven(num) ? <span>{num} is even</span> : <span>{num} is odd</span>;
};
const Home: NextPage = () => {
  return (
    <div className="text-xl">
      <p className="text-2xl">hello</p>
      <p className="text-2xl">
        <Number num={2} />
      </p>
      <p className="text-2xl">
        <Number num={3} />
      </p>
    </div>
  );
};

export default Home;
