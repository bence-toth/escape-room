import { useEffect, useState } from "react";

import "./LightLock.css";

const useLightToggle = (initialValue) => {
  const [isLightOn, setIsLightOn] = useState(initialValue);

  const onToggleLight = () => {
    setIsLightOn(isLightOn === 0 ? 1 : 0);
  };

  return [isLightOn, onToggleLight];
};

const LightLock = ({
  code,
  onChangeCode = () => {},
  isSmall,
  onView = () => {},
  isPuzzleSolved,
}) => {
  const codes = code.split("");
  const [light1, setLight1] = useLightToggle(+codes[0]);
  const [light2, setLight2] = useLightToggle(+codes[1]);
  const [light3, setLight3] = useLightToggle(+codes[2]);
  const [light4, setLight4] = useLightToggle(+codes[3]);
  const [light5, setLight5] = useLightToggle(+codes[4]);
  const [light6, setLight6] = useLightToggle(+codes[5]);
  const [light7, setLight7] = useLightToggle(+codes[6]);
  const [light8, setLight8] = useLightToggle(+codes[7]);
  const [light9, setLight9] = useLightToggle(+codes[8]);
  const [light10, setLight10] = useLightToggle(+codes[9]);
  const [light11, setLight11] = useLightToggle(+codes[10]);
  const [light12, setLight12] = useLightToggle(+codes[11]);
  const [light13, setLight13] = useLightToggle(+codes[12]);
  const [light14, setLight14] = useLightToggle(+codes[13]);
  const [light15, setLight15] = useLightToggle(+codes[14]);
  const [light16, setLight16] = useLightToggle(+codes[15]);

  const [greenDelay, setGreenDelay] = useState(!(isSmall || isPuzzleSolved));

  const newCode = `${light1}${light2}${light3}${light4}${light5}${light6}${light7}${light8}${light9}${light10}${light11}${light12}${light13}${light14}${light15}${light16}`;

  useEffect(() => {
    onChangeCode(newCode);
    if (newCode === "1111111111111111") {
      setTimeout(() => {
        setGreenDelay(false);
      }, 150);
    }
  }, [newCode, onChangeCode]);

  const onClickLight = (index) => {
    if (!isSmall && !isPuzzleSolved) {
      if (index === 1) {
        setLight1();
        setLight2();
        setLight5();
      }
      if (index === 2) {
        setLight1();
        setLight2();
        setLight3();
        setLight6();
      }
      if (index === 3) {
        setLight2();
        setLight3();
        setLight4();
        setLight7();
      }
      if (index === 4) {
        setLight3();
        setLight4();
        setLight8();
      }
      if (index === 5) {
        setLight1();
        setLight5();
        setLight6();
        setLight9();
      }
      if (index === 6) {
        setLight2();
        setLight5();
        setLight6();
        setLight7();
        setLight10();
      }
      if (index === 7) {
        setLight3();
        setLight6();
        setLight7();
        setLight8();
        setLight11();
      }
      if (index === 8) {
        setLight4();
        setLight7();
        setLight8();
        setLight12();
      }
      if (index === 9) {
        setLight5();
        setLight9();
        setLight10();
        setLight13();
      }
      if (index === 10) {
        setLight6();
        setLight9();
        setLight10();
        setLight11();
        setLight14();
      }
      if (index === 11) {
        setLight7();
        setLight10();
        setLight11();
        setLight12();
        setLight15();
      }
      if (index === 12) {
        setLight8();
        setLight11();
        setLight12();
        setLight16();
      }
      if (index === 13) {
        setLight9();
        setLight13();
        setLight14();
      }
      if (index === 14) {
        setLight10();
        setLight13();
        setLight14();
        setLight15();
      }
      if (index === 15) {
        setLight11();
        setLight14();
        setLight15();
        setLight16();
      }
      if (index === 16) {
        setLight12();
        setLight15();
        setLight16();
      }
    }
  };

  return (
    <div
      className={`lightLock ${isSmall ? "small" : ""} ${
        isPuzzleSolved && !greenDelay ? "solved" : ""
      }`}
      onClick={onView}
    >
      <div className="lightLockInnerWrapper">
        <div />
        <div
          className={`indicator ${
            light1 === 1 && light5 === 1 && light9 === 1 && light13 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div
          className={`indicator ${
            light2 === 1 && light6 === 1 && light10 === 1 && light14 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div
          className={`indicator ${
            light3 === 1 && light7 === 1 && light11 === 1 && light15 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div
          className={`indicator ${
            light4 === 1 && light8 === 1 && light12 === 1 && light16 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div />
        <div
          className={`indicator ${
            light1 === 1 && light2 === 1 && light3 === 1 && light4 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <button
          onClick={() => {
            onClickLight(1);
          }}
          className={light1 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(2);
          }}
          className={light2 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(3);
          }}
          className={light3 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(4);
          }}
          className={light4 === 1 ? "on" : ""}
        />
        <div
          className={`indicator ${
            light1 === 1 && light2 === 1 && light3 === 1 && light4 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div
          className={`indicator ${
            light5 === 1 && light6 === 1 && light7 === 1 && light8 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <button
          onClick={() => {
            onClickLight(5);
          }}
          className={light5 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(6);
          }}
          className={light6 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(7);
          }}
          className={light7 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(8);
          }}
          className={light8 === 1 ? "on" : ""}
        />
        <div
          className={`indicator ${
            light5 === 1 && light6 === 1 && light7 === 1 && light8 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div
          className={`indicator ${
            light9 === 1 && light10 === 1 && light11 === 1 && light12 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <button
          onClick={() => {
            onClickLight(9);
          }}
          className={light9 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(10);
          }}
          className={light10 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(11);
          }}
          className={light11 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(12);
          }}
          className={light12 === 1 ? "on" : ""}
        />
        <div
          className={`indicator ${
            light9 === 1 && light10 === 1 && light11 === 1 && light12 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div
          className={`indicator ${
            light13 === 1 && light14 === 1 && light15 === 1 && light16 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <button
          onClick={() => {
            onClickLight(13);
          }}
          className={light13 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(14);
          }}
          className={light14 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(15);
          }}
          className={light15 === 1 ? "on" : ""}
        />
        <button
          onClick={() => {
            onClickLight(16);
          }}
          className={light16 === 1 ? "on" : ""}
        />
        <div
          className={`indicator ${
            light13 === 1 && light14 === 1 && light15 === 1 && light16 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div />
        <div
          className={`indicator ${
            light1 === 1 && light5 === 1 && light9 === 1 && light13 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div
          className={`indicator ${
            light2 === 1 && light6 === 1 && light10 === 1 && light14 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div
          className={`indicator ${
            light3 === 1 && light7 === 1 && light11 === 1 && light15 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div
          className={`indicator ${
            light4 === 1 && light8 === 1 && light12 === 1 && light16 === 1
              ? "on"
              : ""
          }`}
        ></div>
        <div />
      </div>
    </div>
  );
};

export default LightLock;
