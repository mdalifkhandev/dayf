"use client";

import React from "react";
import { Layout, Row, Col } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  AppleFilled,
  AndroidFilled,
  GithubOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
} from "@ant-design/icons";
import Logo from "../custom/Logo";
import logoImage from "@/assets/logo.png";

const { Footer: AntdFooter } = Layout;

const AppFooter = () => {
  const appName = "DayF Booking";

  return (
    <AntdFooter
      className="text-white py-12 px-4 md:px-8 lg:px-16 rounded-b-3xl"
      style={{ backgroundColor: "#00548C" }}
    >
      <Row gutter={[16, 32]} justify="center">
        {/* Logo and Description */}
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={7}
          className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0"
        >
          <div className="flex items-center mb-4">
            <Logo logo={logoImage} />
          </div>
          <p className="text-sm max-w-sm">
            {appName} makes booking your next stay easy, affordable, and
            stress-free. With thousands of hotels worldwide, exclusive deals,
            and secure payment options, we&apos;re here to help you find the
            perfect place to stay, every time.
          </p>
          <div className="flex space-x-6 mt-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <TwitterOutlined style={{ fontSize: "24px" }} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FacebookFilled style={{ fontSize: "24px" }} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <GithubOutlined style={{ fontSize: "24px" }} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <InstagramFilled style={{ fontSize: "24px" }} />
            </a>
          </div>
        </Col>

        {/* Navigation Links */}
        <Col
          xs={12}
          sm={8}
          md={4}
          lg={3}
          className="text-center md:text-left mb-8 md:mb-0"
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Hotels
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Deals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </Col>

        {/* Contact Info & App Download */}
        <Col xs={24} sm={16} md={8} lg={7} className="text-center md:text-left">
          <div className="border border-solid border-gray-500 p-6 rounded-lg">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <PhoneOutlined className="mr-3 text-2xl" />
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start mb-8">
              <MailOutlined className="mr-3 text-2xl" />
              <span className="text-lg">
                support@{appName.toLowerCase().replace(/\s/g, "")}.com
              </span>
            </div>

            <p className="text-lg font-semibold mb-4">Download Our App</p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <AndroidFilled style={{ fontSize: "36px" }} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <AppleFilled style={{ fontSize: "36px" }} />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <hr className="border-gray-700 my-8" />

      <Row
        justify="space-between"
        align="middle"
        className="flex-col md:flex-row text-center md:text-left"
      >
        <Col xs={24} md={12} className="mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start">
            <span className="mr-2">📍</span>
            <span>123 Travel St, Suite 100, City, Country</span>
          </div>
        </Col>
        <Col xs={24} md={12} className="text-center md:text-right">
          <span>&copy; {new Date().getFullYear()} – All Rights Reserved</span>
        </Col>
      </Row>
    </AntdFooter>
  );
};

export default AppFooter;
