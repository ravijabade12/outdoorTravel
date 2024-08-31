import React from "react";
import Img1 from "../../assets/5.jpg";
import Img2 from "../../assets/6.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const JournalData = [
  {
    id: "1",
    title: "Norway's Wildlife",
    image: Img1,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    date: "March 15, 2022",
    delay: 0.2,
  },
  {
    id: "2",
    title: "Discovering New Places",
    image: Img2,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    date: "April 10, 2022",
    delay: 0.4,
  },
];

const Journal = () => {
  return (
    <>
      <section className="container mt-40 " id="journal">
        {/* header section  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-center md:max-w-[650px] mx-auto space-y-4"
        >
          <p className="text-3xl">The Journal</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            iusto rerum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, odio! in rem cum vero blanditiis laborum voluptas aut natus.
          </p>
        </motion.div>

        {/* cards sections  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-content-center mt-20">
          {JournalData.map((data) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={SlideUp(data.delay)}
              key={data.id}
            >
              <div className="overflow-hidden">
                <img
                  className="w-full h-[350px] object-cover"
                  src={data.image}
                  alt=""
                />
              </div>

              {/* card text section  */}

              <div className="space-y-1 py-6 px-12 text-center">
                <p className="uppercase">{data.date}</p>
                <p className="text-xl font-semibold font-merriweather ">
                  {data.title}
                </p>
                <p className="!mt-8">{data.about}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* button section  */}
        <button className="block mx-auto mt-6 text-brandBlue uppercase font-bold">
          All post
        </button>
      </section>
    </>
  );
};

export default Journal;
