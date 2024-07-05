import React from "react";

const SocialBar = () => {
  return (
    <div className="flex fixed right-0 top-50 mt-[27%] gap-2 pt-1 pr-2 flex-col bg-yellow-500 border rounded-l-xl h-[15%] items-center space-x-4 z-10">
      <a
        href=""
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-700 hover:text-gray-900 pl-2"
        aria-label="YouTube"
      >
        <img
          src="https://static.wixstatic.com/media/203dcdc2ac8b48de89313f90d2a4cda1.png/v1/fill/w_17,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/203dcdc2ac8b48de89313f90d2a4cda1.png"
          alt="YouTube"
          className="w-4 h-4"
        />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-700 hover:text-gray-900"
        aria-label="Facebook"
      >
        <img
          src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_17,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
          alt="Facebook"
          className="w-4 h-4"
        />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-700 hover:text-gray-900"
        aria-label="LinkedIn"
      >
        <img
          src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_17,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png"
          alt="LinkedIn"
          className="w-4 h-4"
        />
      </a>
      <a
        href="e"
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-700 hover:text-gray-900"
        aria-label="Instagram"
      >
        <img
          src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_17,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png"
          alt="Instagram"
          className="w-4 h-4"
        />
      </a>
    </div>
  );
};

export default SocialBar;
