import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "https://www.facebook.com/eneszor",
      icon: <FaFacebookF />,
      iconClass: "text-[#1773EA]",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/enes-ajanović",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
