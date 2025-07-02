"use client";

import { Menu, MenuProps } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import logoImage from '@/assets/logo.png'
import Logo from "../custom/Logo";

type MenuItem = Required<MenuProps>["items"][number];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCountry, setSelectedCountry] = useState("🇧🇩 Bangladesh");
  const [current, setCurrent] = useState(pathname);

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  const handleClick: MenuProps["onClick"] = (e) => {
    const { key } = e;

    // Handle language change
    if (key.startsWith("lang-")) {
      const lang = key.split("-")[1];
      if (lang === "en") setSelectedLanguage("English");
      if (lang === "bn") setSelectedLanguage("বাংলা");
      if (lang === "es") setSelectedLanguage("Español");
      return;
    }

    // Handle country change
    if (key.startsWith("country-")) {
      const country = key.split("-")[1];
      if (country === "bd") setSelectedCountry("🇧🇩 Bangladesh");
      if (country === "us") setSelectedCountry("🇺🇸 United States");
      if (country === "in") setSelectedCountry("🇮🇳 India");
      return;
    }

    // Navigate for route keys
    setCurrent(key);
    router.push(key);
  };

  const items: MenuItem[] = [
    { label: "Home", key: "/" },
    { label: "Hotels", key: "/hotels" },
    { label: "House", key: "/house" },
    { label: "About Us", key: "/about" },
    { label: "Contact Us", key: "/contact" },

    {
      label: `🌐 ${selectedLanguage}`,
      key: "language-root",
      children: [
        { label: "English", key: "lang-en" },
        { label: "বাংলা", key: "lang-bn" },
        { label: "Español", key: "lang-es" },
      ],
    },
    {
      label: `${selectedCountry}`,
      key: "country-root",
      children: [
        { label: "🇧🇩 Bangladesh", key: "country-bd" },
        { label: "🇺🇸 United States", key: "country-us" },
        { label: "🇮🇳 India", key: "country-in" },
      ],
    },
  ];

  return (
    <div className="flex bg-[#E9F6FF] items-center justify-between px-4">
      <Logo logo={logoImage} />
      <Menu
        className="text-[#95999D] font-semibold bg-[#E9F6FF]"
        onClick={handleClick}
        selectedKeys={[current]} // Only page routes here
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Navbar;
