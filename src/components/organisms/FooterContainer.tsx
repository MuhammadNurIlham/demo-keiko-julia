import { linkSections } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterContainer = () => {
  return (
    <footer>
      {/* see docs https://prebuiltui.com/component/footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 border-b border-gray-500/30 text-gray-700">
        <div className="p-4 rounded-lg md:col-span-3 lg:col-span-2 ">
          <Image
            className="w-34 md:w-32"
            src="/images/keiko-logo.webp"
            alt="Keiko Julia Jewelry"
            width={128}
            height={49}
          />
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>
        {/* Loop section links */}
        {linkSections.map((section, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-lg md:col-span-1`}>
            <h3 className="font-semibold text-gray-900 mb-4">
              {section.title}
            </h3>
            <ul className="text-sm space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={section.href[i]}
                    className="hover:underline transition"
                    target={
                      section.href[i].startsWith("http") ? "_blank" : "_self"
                    }
                    rel={
                      section.href[i].startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-4 text-center">
        <p className="text-center text-sm md:text-base text-gray-500/80">
          Copyright {new Date().getFullYear()} © Keiko Julia Jewelry | All Right
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterContainer;
