import footerBg from "../../assets/images/footerBg.svg";

export default function Footer() {
  return (
    <footer
      className="flex h-[70vh] w-full flex-col items-center bg-cover bg-center px-[5%] py-6 text-white"
      style={{ backgroundImage: `url(${footerBg})` }}
    ></footer>
  );
}
