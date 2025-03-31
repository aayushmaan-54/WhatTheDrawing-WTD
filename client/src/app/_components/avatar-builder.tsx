"use client";
import { useState, useEffect } from "react";
import Icon from "@/assets/icons";
import eyes from "../_avatar-data/eyes";
import mouths from "../_avatar-data/mouths";
import getRandomNumber from "@/utils/random-number";
import getRandomColor from "@/utils/random-color";

export default function AvatarBuilder() {
  const eyeLength = eyes.length;
  const mouthLength = mouths.length;

  const [avatarColor, setAvatarColor] = useState("#29FFB8");
  const [eyeIndex, setEyeIndex] = useState(0);
  const [mouthIndex, setMouthIndex] = useState(0);


  useEffect(() => {
    setEyeIndex(getRandomNumber(0, eyeLength - 1));
    setMouthIndex(getRandomNumber(0, mouthLength - 1));
    setAvatarColor(getRandomColor());
  }, [eyeLength, mouthLength]);


  const handleRandomUserAvatar = () => {
    setEyeIndex(getRandomNumber(0, eyeLength - 1));
    setMouthIndex(getRandomNumber(0, mouthLength - 1));
    setAvatarColor(getRandomColor());
  }


  const handleChangeEyes = (direction: string) => {
    if (direction === 'prev') {
      setEyeIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : eyeLength - 1));
    } else {
      setEyeIndex((prevIndex) => (prevIndex < eyeLength - 1 ? prevIndex + 1 : 0));
    }
  }


  const handleChangeMouth = (direction: string) => {
    if (direction === 'prev') {
      setMouthIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : mouthLength - 1));
    } else {
      setMouthIndex((prevIndex) => (prevIndex < mouthLength - 1 ? prevIndex + 1 : 0));
    }
  }


  return (
    <div className="relative">
      {/* Dice button at top right */}
      <button
        onClick={handleRandomUserAvatar}
        className="absolute top-0 right-0 cursor-pointer"
      >
        <Icon.Dice className="size-7" />
      </button>

      <div className="flex items-center justify-center">
        {/* Avatar with navigation controls */}
        <div className="flex items-center">
          <div className="flex flex-col">
            {/* Eyes navigation */}
            <div className="flex items-center justify-center mb-12">
              <button
                onClick={() => handleChangeEyes('prev')}
                className="mr-2 cursor-pointer"
              >
                <Icon.LeftArrow className="size-6" />
              </button>
            </div>

            {/* Mouth navigation */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => handleChangeMouth('prev')}
                className="mr-2 cursor-pointer"
              >
                <Icon.LeftArrow className="size-6" />
              </button>
            </div>
          </div>

          {/* Avatar SVG */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={150}
              height={150}
              viewBox="0 0 150 150"
              fill="none"
            >
              <rect width={150} height={150} fill="none" />
              <g clipPath="url(#clip0_12_2)">
                {/* Face */}
                <path
                  d="M66.2719 37.9648C64.2669 37.9648 62.9515 38.1994 61.0736 38.9531ZM61.0736 38.9531C52.4318 42.4215 44.0289 45.7294 36.1381 50.7299C32.9442 52.7539 30.4677 54.9969 27.7992 57.7027C25.2282 60.3095 24.2653 63.1945 22.7092 66.4873C19.985 72.2517 19 78.1962 19 84.5231C19 93.1843 20.2402 100.985 25.0647 108.461C29.0194 114.589 35.8731 119.874 42.7984 121.912C51.3347 124.425 59.0364 124.932 67.8964 124.932C79.8244 124.932 92.6993 125.744 104.176 121.748C108.852 120.12 112.477 116.161 115.601 112.359C117.536 110.005 118.916 107.12 120.258 104.398C122.715 99.4173 122.533 95.1222 123.074 89.7115C123.967 80.7833 125.271 70.1469 121.152 61.793C118.128 55.6612 113.447 49.7501 108.4 45.2121C98.6769 36.4698 87.6268 35 75.0711 35C72.5532 35 68.7898 35 66.2719 35C64.2397 35 62.9115 38.9531 61.0736 38.9531Z"
                  fill={avatarColor}
                />

                {/* Face Outline */}
                <path
                  d="M66.2719 37.9648C64.2669 37.9648 62.9515 38.1994 61.0736 38.9531M61.0736 38.9531C52.4318 42.4215 44.0289 45.7294 36.1381 50.7299C32.9442 52.7539 30.4677 54.9969 27.7992 57.7027C25.2282 60.3095 24.2653 63.1945 22.7092 66.4873C19.985 72.2517 19 78.1962 19 84.5231C19 93.1843 20.2402 100.985 25.0647 108.461C29.0194 114.589 35.8731 119.874 42.7984 121.912C51.3347 124.425 59.0364 124.932 67.8964 124.932C79.8244 124.932 92.6993 125.744 104.176 121.748C108.852 120.12 112.477 116.161 115.601 112.359C117.536 110.005 118.916 107.12 120.258 104.398C122.715 99.4173 122.533 95.1222 123.074 89.7115C123.967 80.7833 125.271 70.1469 121.152 61.793C118.128 55.6612 113.447 49.7501 108.4 45.2121C98.6769 36.4698 87.6268 35 75.0711 35C72.5532 35 68.7898 35 66.2719 35C64.2397 35 62.9115 38.9531 61.0736 38.9531Z"
                  stroke="#3c3c3c"
                  strokeWidth={7}
                  strokeLinecap="round"
                />

                {/* Body + Body Outline */}
                <path
                  d="M132.499 155C132.499 153.526 -8 178.5 22.4818 146.217C23.0238 145.558 23.3046 144.251 23.8264 143.462C24.5315 142.396 25.1674 141.398 26.0071 140.428C27.9819 138.145 29.4655 135.435 31.5656 133.278C32.8089 132.002 34.0037 130.565 35.468 129.582C36.824 128.671 38.1913 128.179 39.6328 127.454C44.1807 125.168 50.048 123.932 55.1113 123.932C63.9127 123.932 72.7395 122.049 81.5101 122.049C86.7698 122.049 92.1196 121.756 97.3165 122.607C98.2995 122.767 99.3417 122.676 100.334 122.676C101.329 122.676 101.887 123.146 102.793 123.322C105.094 123.766 107.867 126.056 109.598 127.576C114.713 132.07 119.468 136.812 123.879 141.997C124.546 142.781 125.246 143.59 125.945 144.334C126.813 145.256 127.166 146.527 128.011 147.473C128.791 148.346 128.511 150.167 132.499 155Z"
                  fill={avatarColor}
                  stroke="#3c3c3c"
                  strokeWidth={7}
                  strokeLinecap="round"
                />

                {/* Eyes */}
                {eyes[eyeIndex]}

                {/* Mouth */}
                {mouths[mouthIndex]}
              </g>
              <defs>
                <clipPath id="clip0_12_2">
                  <rect
                    width={122}
                    height={119}
                    fill="white"
                    transform="translate(14 31)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col">
            {/* Eyes navigation */}
            <div className="flex items-center justify-center mb-12">
              <button
                onClick={() => handleChangeEyes('next')}
                className="ml-2 cursor-pointer"
              >
                <Icon.RightArrow className="size-6" />
              </button>
            </div>

            {/* Mouth navigation */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => handleChangeMouth('next')}
                className="ml-2 cursor-pointer"
              >
                <Icon.RightArrow className="size-6" />
              </button>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <input
        type="color"
        value={avatarColor}
        onChange={(e) => setAvatarColor(e.target.value)}
        className="mx-auto flex items-center justify-center mt-3 mb-5 border-none cursor-pointer border-2 border-primary"
      />
    </div>
  );
}