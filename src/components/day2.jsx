import { useEffect } from "react";
import { IoConstruct } from "react-icons/io5";
const Day2 = () => {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    scrollToTop();
  }, []);
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center text-gray-700">
      <p>
        <IoConstruct className="text-9xl" />
      </p>
      <p className="font-bold text-6xl">Under Progress</p>
    </div>
  );
};

export default Day2;
