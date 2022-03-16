import { useCallback, useState } from "react";
import "./CombinationLock.css";

const CombinationLock = ({
  code,
  onChangeCode = () => {},
  isSmall,
  onView = () => {},
}) => {
  const [areInteractionsSetUp, setAreInteractionsSetUp] = useState(false);

  const combinationLockRendered = useCallback(
    (element) => {
      if (areInteractionsSetUp || !element) {
        return;
      }
      const allInputs = element.querySelectorAll("input");
      if (allInputs.length > 0) {
        code.split("").forEach((digit, digitIndex) => {
          allInputs[digitIndex].value = digit;
        });
        allInputs.forEach((input, inputIndex) => {
          input.addEventListener("keydown", (event) => {
            if (!["Tab"].includes(event.key)) {
              event.preventDefault();
            }
            if (
              ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
                event.key
              )
            ) {
              event.target.value = event.key;
              if (allInputs.length - 1 === inputIndex) {
                allInputs[0].focus();
              } else {
                allInputs[inputIndex + 1].focus();
              }
            }
            if (event.key === "Backspace" || event.key === "Delete") {
              event.target.value = "";
            }
            const newCode = [...allInputs]
              .map((input) => (input.value.length > 0 ? input.value : " "))
              .join("");
            onChangeCode(newCode);
          });
        });
        setAreInteractionsSetUp(true);
      }
    },
    [areInteractionsSetUp, code, onChangeCode]
  );

  return (
    <div
      className={`combinationLock ${isSmall ? "small" : ""}`}
      onClick={onView}
      ref={combinationLockRendered}
    >
      <div>
        <input disabled={isSmall} />
      </div>
      <div>
        <input disabled={isSmall} />
        <input disabled={isSmall} />
      </div>
      <div>
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
      </div>
      <div>
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
      </div>
      <div>
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
      </div>
      <div>
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
        <input disabled={isSmall} />
      </div>
    </div>
  );
};

export default CombinationLock;
