import { Link } from "react-router-dom";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

export default function JoinReaderClup() {
  return (
    <section className="py-12 bg-white">
      <div className="container lg:flex  justify-between mx-auto px-5 lg:px-20  ">
        <div className="bg-primary  lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl lg:w-[60%]  lg:h-[250px] p-10">
          <h5 className="text-2xl font-bold mb-2 text-white">
            انضم إلى نادي القراءة
          </h5>
          <p className="text-white text-sm w-1/2 my-5">
            احصل على خصومات حصرية وكن أول من يعرف عن الكتب الجديدة
          </p>
          <div className="lg:flex gap-5 flex-col mt-5">
            <input
              type="text"
              placeholder="أدخل بريدك الإلكتروني"
              className="p-2 rounded-[10px]   border-none focus:outline-none mb-5 w-full lg:w-1/2 bg-gray-100"
            />
            <Button className="bg-orange-500 text-white w-full lg:w-[100px] ">
              اشترك
            </Button>
          </div>
        </div>
        <div className="w-full bg-amber-300   lg:w-[40%] h-80 lg:rounded-l-2xl lg:rounded-b-none rounded-b-2xl lg:h-[250px]">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}
