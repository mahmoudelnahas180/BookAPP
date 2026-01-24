import React from "react";
import Button from "./Button";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-200 ">
      <div className="lg:container sm:px-10 lg:px-20  mx-5 lg:mx-auto sm:w-full sm:mx-5 sm:py-10 py-20">
        <div className=" lg:flex lg:justify-between  my-5 py-10 gap-10  border-b-2 border-gray-200">
          <div>
            <div className="flex items-center gap-2 mb-5 ">
              <FontAwesomeIcon icon={faBook} />
              <h4 className="text-2xl font-bold">مكتبتي</h4>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-5">
                وجهتك الأولى للكتب العربية والعالمية. نقرب المسافات بينك وبين
                المعرفة.
              </p>
            </div>
            <div className="flex gap-3">
              <div>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4">
            <h4 className="text-2xl font-bold mb-5">استكشف</h4>
            <p>الكتب الأكثر مبيعاًوصل حديثاًترشيحات المحررينالمؤلفون</p>
          </div>
          <div className="lg:w-1/4">
            <h4 className="text-2xl font-bold mb-5">مساعدة</h4>
            <p>الشحن والتوصيل سياسة الإرجاع الأسئلة الشائعة تواصل معنا</p>
          </div>
          <div className="lg:w-1/4">
            <h4 className="text-2xl font-bold mb-5">كن على تواصل</h4>
            <p>اشترك في نشرتنا البريدية للحصول على آخر التحديثات والعروض.</p>
            <input
              className="w-full p-2 my-5 border border-gray-200 rounded bg-gray-100 focus:outline-none focus:border-gray-400"
              type="email"
              placeholder="البريد الالكتروني"
            />
            <Button className="w-full bg-black text-white hover:bg-gray-900 rounded-2xl">
              اشتراك
            </Button>
          </div>
        </div>
        <div className="flex justify-between my-5 py-5 text-sm">
          <div>© 2023 BookApp. جميع الحقوق محفوظة.</div>
          <div>
            <p>الشروط والأحكام | سياسة الخصوصية</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
