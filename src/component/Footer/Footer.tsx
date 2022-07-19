import React from "react";
import Logo from "../../images/logo.png";
import {
  AiFillFacebook,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineMessage,
  AiOutlinePhone,
} from "react-icons/ai";

const contactDetails = [
  {
    id: 1,
    icon: <AiOutlineHome />,
    detail: "Address",
  },
  {
    id: 2,
    icon: <AiOutlineMessage />,
    detail: "Support@gmail.com",
  },
  {
    id: 3,
    icon: <AiOutlinePhone />,
    detail: "09090909090",
  },
];

const informations = [
  {
    id: 1,
    title: "About Us",
  },
  {
    id: 2,
    title: "Contact",
  },
  {
    id: 3,
    title: "Privacy Policy",
  },
  {
    id: 4,
    title: "Questions",
  },
];

const followIcons = [
  {
    id: 1,
    icon: <AiFillFacebook size={20} />,
  },
  {
    id: 2,
    icon: <AiOutlineInstagram size={20} />,
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <section className="flex w-[100%] justify-center bg-background">
        <div className="w-[80%] py-12">
          <div className="block">
            <div className="">
              <img src={Logo} className="w-12" alt="" />
            </div>
            <div className="block md:mt-10 md:flex">
              <div className="mt-8 md:mt-0 md:w-1/3">
                <h2 className="mb-2 w-full text-lg font-normal">Information</h2>
                <ul>
                  {informations.map((info) => (
                    <li key={info.id}>{info.title}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/3">
                <h2 className="mb-2 w-full text-lg font-normal">Contact Us</h2>
                <ul>
                  {contactDetails.map((contact) => (
                    <li key={contact.id} className="flex w-min items-center">
                      <span className="mr-4">{contact.icon}</span>
                      {contact.detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/3">
                <ul className="flex flex-wrap">
                  {followIcons.map((icon) => (
                    <li key={icon.id} className="mr-4 last:mr-0">
                      {icon.icon}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Footer);
