"use client";

import { Dropdown, MenuProps, Space } from "antd";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const languages = [
  { key: "en", label: "English" },
  { key: "bn", label: "বাংলা" },
  { key: "es", label: "Español" },
];

const countries = [
  { key: "bd", label: "🇧🇩 Bangladesh" },
  { key: "us", label: "🇺🇸 United States" },
  { key: "in", label: "🇮🇳 India" },
];

const Language = () => {

     const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCountry, setSelectedCountry] = useState("🇧🇩 Bangladesh");

  const handleLanguageClick: MenuProps["onClick"] = ({ key }) => {
    const lang = languages.find((l) => l.key === key);
    if (lang) setSelectedLanguage(lang.label);
  };

  const handleCountryClick: MenuProps["onClick"] = ({ key }) => {
    const country = countries.find((c) => c.key === key);
    if (country) setSelectedCountry(country.label);
  };

  const languageMenu: MenuProps = {
    items: languages,
    onClick: handleLanguageClick,
  };

  const countryMenu: MenuProps = {
    items: countries,
    onClick: handleCountryClick,
  };



    return (
        <div className="flex gap-4 items-center">
      {/* Language Dropdown */}
      <Dropdown menu={languageMenu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <GlobalOutlined />
            {selectedLanguage}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>

      {/* Country Dropdown */}
      <Dropdown menu={countryMenu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {selectedCountry}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
    );
};

export default Language;