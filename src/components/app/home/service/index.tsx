import React from "react";
import { Container } from "@/components";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ServiceSection = () => {
  return (
    <>
      {serviceList.map(
        (
          { imageUrl, title, body = "", btn = "", containerClassName = "" },
          index,
        ) => (
          <section className={"flex p-5 md:p-20"} key={index}>
            <Container
              className={`flex flex-col md:flex-row space-y-5 md:space-y-0 ${containerClassName}`}
            >
              {/*image*/}
              <div className={"flex-1 flex"}>
                <Image
                  src={imageUrl}
                  alt={"exam"}
                  className={
                    "w-full md:w-5/6 md:max-w-[35vw] object-cover rounded-xl max-h-[400px]"
                  }
                  height={500}
                  width={600}
                />
              </div>

              {/*text */}
              <div className={"flex-1"}>
                <h3 className={"font-semibold text-3xl "}>{title}</h3>

                <p
                  className={
                    "text-sm md:text-[15px] text-gray-600 leading-7 my-4 md:w-3/4"
                  }
                >
                  {body}
                </p>

                <Button
                  variant={"outline"}
                  className={
                    "border-black hover:border-c_primary hover:bg-c_primary mt-3 text-black hover:text-white bg-transparent text-sm rounded-full px-8 py-3 mr-auto"
                  }
                >
                  {btn}
                </Button>
              </div>
            </Container>
          </section>
        ),
      )}
    </>
  );
};

export default ServiceSection;

interface Service {
  imageUrl: string;
  title: string;
  body?: string;
  btn?: string;
  containerClassName?: string;
}

const serviceList: Service[] = [
  {
    imageUrl: "/images/home/exam.jpg",
    title: "Exam Ready",
    body: ` Acing your exams starts with feeling prepared! Our exam stationery
            range has everything you need to conquer those tests. Glide through
            multiple-choice questions with smooth-writing gel pens or sharpen
            your focus with classic graphite pencils. Highlight key points with
            vibrant highlighters and keep organized with sturdy clipboards.
            Don't let a forgotten eraser derail you – we've got you covered.
            Plus, keep your cool with a sleek pencil case for all your
            essentials. From pens and pencils to rulers and highlighters, we
            have the exam stationery that sets you up for success!`,
    btn: "Get in Touch",
  },
  {
    imageUrl: "/images/home/prize.jpg",
    title: "Prize Giving",
    body: ` Make your award ceremonies shine with our prize-giving stationery!
            Celebrate achievements with personalized certificates printed on
            high-quality cardstock. Choose from classic or contemporary designs
            to match the occasion. Impress recipients with elegant presentation
            folders for certificates and awards. Don't forget thank-you cards to
            express gratitude to sponsors or speakers. Our selection of vibrant
            pens ensures heartfelt messages can be written in style. From
            eye-catching certificates to thoughtful thank-you notes, our
            prize-giving stationery elevates your event and leaves a lasting
            impression.`,
    btn: "Call Us",
    containerClassName: "md:flex-row-reverse",
  },
  {
    imageUrl: "/images/home/birthday.jpg",
    title: "School Birthday",
    body: ` Make birthdays in the classroom extra special with our fun and
            festive school birthday stationery! Decorate classrooms with
            colorful "Happy Birthday" banners and hang adorable student-made
            birthday cards on shimmering streamers. Personalize the celebration
            with cute birthday badges for the guest of honor and their
            classmates. We have everything to make party games a blast, from
            colorful stickers as prizes to decorative notepads for birthday
            messages. From bright decorations to personalized keepsakes, our
            school birthday stationery brings joy and magic to every birthday
            celebration!`,
    btn: "Contact us",
  },
];
