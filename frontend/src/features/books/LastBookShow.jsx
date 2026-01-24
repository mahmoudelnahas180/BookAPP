import React from "react";
import { Link } from "react-router-dom";
// from font awsome
import { arrowRight, arrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LastBookShow() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex items-center justify-between mb-4 mt-4">
          <div>
            {" "}
            <h5>وصل حديثاً</h5>
            <p>أحدث الإضافات إلى مكتبتنا هذا الأسبوع</p>
          </div>
          <div>
            <Link>
              <FontAwesomeIcon icon={arrowLeft} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={arrowRight} />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*   والباقي يظهر لما اضغط علي تصفحه   الكل  */}
        </div>
      </div>
    </section>
  );
}
