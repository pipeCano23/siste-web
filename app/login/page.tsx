"use client";
import React, { useState } from "react";
import { LoginClient, LoginUsers } from "./forms";
import FloatingButton from "@/components/floating-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants";
import { BUCKET } from "@/constants/config";

export default function Login() {
  const router = useRouter();
  const [toDashboard, setToDashboard] = useState(false);

  const handleFlip = () => {
    setToDashboard(!toDashboard);
  };

  const handleLogin = (e: any) => {
    if (toDashboard) {
      console.log("TO");
      router.push(APP_ROUTES.DASHBOARD);
    } else {
      console.log("PRO");
      router.push(APP_ROUTES.PRODUCT_HOME);
    }
  };
  return (
    <>
      <div className="bg-gray-100 overflow-hidden hidden h-0 md:flex md:min-h-screen">
        {/* Left Side - Welcome Section */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            toDashboard ? "translate-x-full" : ""
          } w-1/2 bg-gradient-to-b from-blue-500 to-blue-700 p-10 flex flex-col justify-center items-center text-white`}
        >
          {toDashboard ? (
            <LoginUsers onSubmit={handleLogin} />
          ) : (
            <LoginClient onSubmit={handleLogin} />
          )}
        </div>

        {/* Right Side - Form Section */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            toDashboard ? "-translate-x-full" : ""
          } w-1/2 p-10 flex flex-col justify-center bg-white`}
        >
          <Image
            src={`${BUCKET}${
              toDashboard ? "login-user.jpeg" : "login-client.jpeg"
            }`}
            alt="File icon"
            className="object-cover"
            fill
          />
        </div>
      </div>

      <div
        className={`overflow-hidden flex h-screen justify-center items-center ${
          toDashboard ? "bg-blue-500" : "bg-blue-200"
        } md:hidden md:h-0`}
      >
        {toDashboard ? (
          <LoginUsers onSubmit={handleLogin} />
        ) : (
          <LoginClient onSubmit={handleLogin} />
        )}
      </div>

      <FloatingButton
        className={
          toDashboard
            ? "bg-slate-200 hover:bg-slate-400 text-blue-500s"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }
        iconSelected={toDashboard ? "dashboard" : "product"}
        handleOnClick={handleFlip}
      />
    </>
  );
}
