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
    icon: <AiFillFacebook />,
  },
  {
    id: 2,
    icon: <AiOutlineInstagram />,
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <section className="flex w-[100%] justify-center bg-background">
        <div className="w-[80%] py-12">
          <div className="flex">
            <div className="w-1/4">
              <img src={Logo} className="w-10" alt="" />
            </div>
            <div className="w-1/4">
              <h2 className="mb-4 text-lg font-normal">Contact Us</h2>
              <ul>
                {contactDetails.map((contact) => (
                  <li key={contact.id}>
                    <span className="mr-4 inline-block">{contact.icon}</span>
                    {contact.detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/4">
              <h2 className="mb-4 text-lg font-normal">Information</h2>
              <ul>
                {informations.map((info) => (
                  <li key={info.id}>{info.title}</li>
                ))}
              </ul>
            </div>
            <div className="w-1/4">
              <h2 className="mb-4 text-lg font-normal">Follow Us</h2>
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
      </section>
    </>
  );
};

export default React.memo(Footer);
