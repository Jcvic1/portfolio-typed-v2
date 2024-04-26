import React, { useState, useEffect, useCallback, FC, MouseEventHandler } from "react";
import { useMediaQuery } from "react-responsive";
import { TFunction } from "i18next";


interface CircleProps {
  value: string;
  winCircleColor: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Circle: FC<CircleProps> = ({ value, winCircleColor, handleClick }) => {
  return (
    <>
      {winCircleColor === "green" ? (
        <button onClick={handleClick} className="button-green">
          {value}
        </button>
      ) : (
        <button onClick={handleClick} className="button-yellow">
          {value}
        </button>
      )}
    </>
  );
};

interface BoardProps {
  value: string[];
  currentLevel: string;
  winCircle: number[];
  header: string;
  onHandleClick: Function;
}

const Board: FC<BoardProps> = ({ value, currentLevel, winCircle, header, onHandleClick }) => {
  const winCircleColor = Array(9).fill("");
  if (winCircle) {
    winCircle.map((indices: number) => (winCircleColor[indices] = "green"));
  }

  return (
    <>
      {(header.includes("Winner") || header.includes("Победитель")) ? (
        <h2 className="text-center">
          {header} <i className="bi bi-trophy text-warning"></i>
        </h2>
      ) : (
        <h2 className="text-center mb-3">{header}</h2>
      )}

      <div className="container">
        <div className="board">
          {currentLevel === "Level 1" ? (
            <div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[0]}
                    winCircleColor={winCircleColor[0]}
                    handleClick={() => onHandleClick(0)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[1]}
                    winCircleColor={winCircleColor[1]}
                    handleClick={() => onHandleClick(1)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[2]}
                    winCircleColor={winCircleColor[2]}
                    handleClick={() => onHandleClick(2)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[3]}
                    winCircleColor={winCircleColor[3]}
                    handleClick={() => onHandleClick(3)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[4]}
                    winCircleColor={winCircleColor[4]}
                    handleClick={() => onHandleClick(4)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[5]}
                    winCircleColor={winCircleColor[5]}
                    handleClick={() => onHandleClick(5)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[6]}
                    winCircleColor={winCircleColor[6]}
                    handleClick={() => onHandleClick(6)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[7]}
                    winCircleColor={winCircleColor[7]}
                    handleClick={() => onHandleClick(7)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[8]}
                    winCircleColor={winCircleColor[8]}
                    handleClick={() => onHandleClick(8)}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[0]}
                    winCircleColor={winCircleColor[0]}
                    handleClick={() => onHandleClick(0)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[1]}
                    winCircleColor={winCircleColor[1]}
                    handleClick={() => onHandleClick(1)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[2]}
                    winCircleColor={winCircleColor[2]}
                    handleClick={() => onHandleClick(2)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[3]}
                    winCircleColor={winCircleColor[3]}
                    handleClick={() => onHandleClick(3)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[4]}
                    winCircleColor={winCircleColor[4]}
                    handleClick={() => onHandleClick(4)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[5]}
                    winCircleColor={winCircleColor[5]}
                    handleClick={() => onHandleClick(5)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[6]}
                    winCircleColor={winCircleColor[6]}
                    handleClick={() => onHandleClick(6)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[7]}
                    winCircleColor={winCircleColor[7]}
                    handleClick={() => onHandleClick(7)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[8]}
                    winCircleColor={winCircleColor[8]}
                    handleClick={() => onHandleClick(8)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[9]}
                    winCircleColor={winCircleColor[9]}
                    handleClick={() => onHandleClick(9)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[10]}
                    winCircleColor={winCircleColor[10]}
                    handleClick={() => onHandleClick(10)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[11]}
                    winCircleColor={winCircleColor[11]}
                    handleClick={() => onHandleClick(11)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[12]}
                    winCircleColor={winCircleColor[12]}
                    handleClick={() => onHandleClick(12)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[13]}
                    winCircleColor={winCircleColor[13]}
                    handleClick={() => onHandleClick(13)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[14]}
                    winCircleColor={winCircleColor[14]}
                    handleClick={() => onHandleClick(14)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[15]}
                    winCircleColor={winCircleColor[15]}
                    handleClick={() => onHandleClick(15)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[16]}
                    winCircleColor={winCircleColor[16]}
                    handleClick={() => onHandleClick(16)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[17]}
                    winCircleColor={winCircleColor[17]}
                    handleClick={() => onHandleClick(17)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[18]}
                    winCircleColor={winCircleColor[18]}
                    handleClick={() => onHandleClick(18)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[19]}
                    winCircleColor={winCircleColor[19]}
                    handleClick={() => onHandleClick(19)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[20]}
                    winCircleColor={winCircleColor[20]}
                    handleClick={() => onHandleClick(20)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[21]}
                    winCircleColor={winCircleColor[21]}
                    handleClick={() => onHandleClick(21)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[22]}
                    winCircleColor={winCircleColor[22]}
                    handleClick={() => onHandleClick(22)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[23]}
                    winCircleColor={winCircleColor[23]}
                    handleClick={() => onHandleClick(23)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[24]}
                    winCircleColor={winCircleColor[24]}
                    handleClick={() => onHandleClick(24)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

interface GameProps {
  currentLevel: string;
  t: TFunction;
  updateReturn: Function;
  updateScore: Function;
}

const Game: FC<GameProps> = ({ currentLevel, t, updateReturn, updateScore }) => {
  const [value, setValue] = useState<string[][]>(
    currentLevel === "Level 1" ? [Array(9).fill(null)] : [Array(25).fill(null)]
  );
  const [xNext, setXNext] = useState(true);
  const [lastXNext, setlastXNext] = useState(true);
  const [xName, setXName] = useState("");
  const [playerX, setPlayerX] = useState("X");
  const [playerO, setPlayerO] = useState("O");
  const [gameStart, setGameStart] = useState(false);
  const [isComputerNext, setIsComputerNext] = useState(false);
  const [isComputerPlaying, setIsComputerPlaying] = useState(false);
  const [lastComputerNext, setLastComputerNext] = useState(false);
  const [totalReturn, setTotalReturn] = useState(
    currentLevel === "Level 1" ? 1 : 3
  );

  const currentValue: string[] = value[value.length - 1];

  const computeGame = useCallback(() => {
    const playIndex = getFreeCells(currentValue, currentLevel);

    if (
      won(currentValue, currentLevel) ||
      gameOver(currentValue, currentLevel)
    ) {
      return;
    }

    const newValueSet = [...currentValue];
    xNext ? (newValueSet[playIndex] = "X") : (newValueSet[playIndex] = "O");

    setXNext(!xNext);
    setValue([...value, newValueSet]);
    setIsComputerPlaying(false);
  }, [currentValue, currentLevel, xNext, value, setIsComputerPlaying]);

  useEffect(() => {
    if (gameStart) {
      const timeOutId = setTimeout(() => {
        computeGame();
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [isComputerNext, gameStart]);
  

  useEffect(() => {
    handleReset();
    setTotalReturn(currentLevel === "Level 1" ? 1 : 3);
  }, [currentLevel]);

  const handleReturn = (value: string[][]) => {
    if (totalReturn === 0) return;
    setTotalReturn(totalReturn - 1);
    updateReturn(totalReturn - 1);

    setValue([...value.slice(0, -2)]);
  };

  const handleReset = () => {
    lastXNext ? setXNext(false) : setXNext(true);
    setlastXNext(!lastXNext);

    setValue(
      currentLevel === "Level 1"
        ? [Array(9).fill(null)]
        : [Array(25).fill(null)]
    );

    setTotalReturn(currentLevel === "Level 1" ? 1 : 3);
    updateReturn(currentLevel === "Level 1" ? 1 : 3);

    lastComputerNext ? setGameStart(false) : setGameStart(true);

    lastComputerNext ? setIsComputerPlaying(false) : setIsComputerPlaying(true);

    setLastComputerNext(!lastComputerNext);

    setIsComputerNext(!isComputerNext);
  };

  const handleClearGame = () => {
    updateScore("Both")
    lastXNext ? setXNext(false) : setXNext(true);
    setlastXNext(!lastXNext);
    lastComputerNext ? setGameStart(false) : setGameStart(true);
    lastComputerNext ? setIsComputerPlaying(false) : setIsComputerPlaying(true);
    setLastComputerNext(!lastComputerNext);
    setIsComputerNext(!isComputerNext);
    setXName("");
    setPlayerX("X");
    setPlayerO("O");
    setValue(
      currentLevel === "Level 1"
        ? [Array(9).fill(null)]
        : [Array(25).fill(null)]
    );
    setTotalReturn(currentLevel === "Level 1" ? 1 : 3);
  };

  const onHandleClick = (i: number) => {
    if (
      isComputerPlaying ||
      currentValue[i] ||
      won(currentValue, currentLevel) ||
      gameOver(currentValue, currentLevel)
    ) {
      return;
    }

    const newValueSet = [...currentValue];

    xNext ? (newValueSet[i] = "X") : (newValueSet[i] = "O");

    setXNext(!xNext);

    setValue([...value, newValueSet]);

    setIsComputerNext(!isComputerNext);

    setIsComputerPlaying(true);

    setGameStart(true);
  };

  useEffect(() => {
    const winResult: any = won(currentValue, currentLevel);
    if (winResult) {
      updateScore(winResult[0] === "X" ? "X" : "O");
    }
  }, [currentValue]);

  let winResult: any;
  let gameOverResult;

  winResult = won(currentValue, currentLevel);
  gameOverResult = gameOver(currentValue, currentLevel);

  let winner;
  let winCircle;

  if (winResult) {
    winner = winResult[0];
    winCircle = winResult[1];
  }

  let header;

  winner
    ? (header = `${t("common:extra.extraWinner")} ${
        winner === "X" ? playerX : playerO
      }`)
    : gameOverResult === "Game Over"
    ? (header = t("common:extra.extraGameOver"))
    : (header = xNext ? `${t("common:extra.extraNext")} ${playerX}` : "...");
  // : (header = `${t("common:extra.extraNext")} ${xNext ? playerX : playerO}`);

  return (
    <>
      <Board
        value={currentValue}
        winCircle={winCircle}
        currentLevel={currentLevel}
        header={header}
        onHandleClick={(i: number) => onHandleClick(i)}
      />
      <div className="w-100 d-flex justify-content-center">
        <button
          className={`btn btn-outline-warning rounded-pill mt-5 w-25 ${
            (totalReturn === 0 || value.length < 3) && "disabled"
          }`}
          onClick={() => handleReturn(value)}
        >
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>

        <button
          className={`btn btn-outline-warning rounded-pill mt-5  w-25`}
          onClick={handleReset}
        >
          <i className="bi bi-arrow-repeat"></i>
        </button>
      </div>

      <div className="w-100 my-3 d-flex justify-content-center">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <input
              className="my-2 rounded-pill p-2 border border-warning"
              type="text"
              onChange={(e) => {
                setXName(e.target.value);
                setPlayerX(e.target.value);
              }}
              value={xName}
              placeholder={t("common:extra.extraPlayerXButton")}
              maxLength={10}
            />
          </div>
          {/* <div className="d-flex align-items-center">
            <input
              className="my-2 rounded-pill p-2 border border-warning"
              type="text"
              onChange={(e) => setOName(e.target.value)}
              value={oName}
              placeholder={t("common:extra.extraPlayerOButton")}
              maxLength={10}
            />
            <span className="my-auto ms-1">
              <button
                onClick={() => handleSetName("O")}
                className="btn btn-outline-warning py-1 rounded-pill"
              >
                {t("common:extra.extraCreateButton")}
              </button>
            </span>
          </div> */}
          <button
            onClick={() => handleClearGame()}
            className="btn btn-outline-warning my-3 rounded-pill "
          >
            <i className="bi bi-x-lg w-25"></i>
          </button>
        </div>
      </div>
    </>
  );
};

interface PlayerProps{
  t: TFunction;
}

const Player: FC<PlayerProps> = ({ t }) => {
  const [currentLevel, setcurrentLevel] = useState<string>("Level 1");
  const [XScore, setXcore] = useState(0);
  const [OScore, setOcore] = useState(0);
  const [number, setNumber] = useState<number>(currentLevel === "Level 1" ? 1 : 3);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleCurrentLevel = (level: string) => {
    setcurrentLevel(level);
    setNumber(level === "Level 1" ? 1 : 3);
  };

  const updateReturn = (n: number) => {
    setNumber(n);
  };

  const updateScore = (player: string) => {
    if (player === "X") {
      setXcore(XScore + 1);
    } else if (player === "O") {
      setOcore(OScore + 1);
    } else {
      setXcore(0);
      setOcore(0);
    }
  };

  return (
    <>
      <div
        className="container pb-5"
        style={{ width: isMobile ? "100%" : "50%" }}
      >
        <div className="d-flex justify-content-between align-items-center mt-4 ">
          <div className="mb-5 d-flex align-items-center">
            {number}{" "}
            <span className="ms-1">
              <i className="bi bi-arrow-counterclockwise fs-3 text-warning"></i>
            </span>
          </div>
          <div className="dropdown mb-5">
            <button
              className="btn btn-outline-secondary dropdown-toggle px-2 py-0 rounded-pill"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {currentLevel.includes("1")
                ? t("common:extra.extraLevel1Button")
                : t("common:extra.extraLevel2Button")}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  onClick={() => handleCurrentLevel("Level 1")}
                  className="dropdown-item"
                  type="button"
                >
                  {t("common:extra.extraLevel1Button")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCurrentLevel("Level 2")}
                  className="dropdown-item"
                  type="button"
                >
                  {t("common:extra.extraLevel2Button")}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-100 d-flex justify-content-center align-items-center mb-5">
          <div>
            <span>{OScore}</span>
            <span className="mx-5">:</span>
            <span>{XScore}</span>
          </div>
        </div>

        <div>
          <Game
            currentLevel={currentLevel}
            t={t}
            updateReturn={updateReturn}
            updateScore={updateScore}
          />
        </div>
      </div>
    </>
  );
};

const won = (value: string[], currentLevel: string, symbol: string = "") => {
  if (currentLevel === "Level 1") {
    const winOutcome = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winOutcome.length; i++) {
      const [a, b, c]: number[] = winOutcome[i];
      if (symbol !== "") {
        if (value[a] === symbol && value[b] === symbol && value[c] === symbol) {
          return true;
        }
      } else {
        if (value[a] && value[a] === value[b] && value[a] === value[c]) {
          return [value[a], winOutcome[i]];
        }
      }
    }
  } else {
    const winOutcome = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    for (let i = 0; i < winOutcome.length; i++) {
      const [a, b, c, d, e]: number[] = winOutcome[i];
      if (symbol !== "") {
        if (
          value[a] === symbol &&
          value[b] === symbol &&
          value[c] === symbol &&
          value[d] === symbol &&
          value[e] === symbol
        ) {
          return true;
        }
      } else {
        if (
          value[a] &&
          value[a] === value[b] &&
          value[a] === value[c] &&
          value[a] === value[d] &&
          value[a] === value[e]
        ) {
          return [value[a], winOutcome[i]];
        }
      }
    }
  }
};

const gameOver = (value: string[], currentLevel: string) => {
  if (currentLevel === "Level 1") {
    const winOutcome = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winPossibilityCount = 0;

    for (let i = 0; i < winOutcome.length; i++) {
      const [a, b, c]: number[] = winOutcome[i];

      if (winPossibilityCount === winOutcome.length - 1) {
        return "Game Over";
      } else if (
        [value[a], value[b], value[c]].includes("X") &&
        [value[a], value[b], value[c]].includes("O")
      ) {
        winPossibilityCount++;
      }
    }
    return null;
  } else {
    const winOutcome = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    let winPossibilityCount = 0;

    for (let i = 0; i < winOutcome.length; i++) {
      const [a, b, c, d, e]: number[] = winOutcome[i];

      if (winPossibilityCount === winOutcome.length - 1) {
        return "Game Over";
      } else if (
        [value[a], value[b], value[c], value[d], value[e]].includes("X") &&
        [value[a], value[b], value[c], value[d], value[e]].includes("O")
      ) {
        winPossibilityCount++;
      }
    }
    return null;
  }
};

const getFreeCells = (value: string[], currentLevel: string) => {
  const opponent = "X";

  const winningMove = findWinningMove(value, currentLevel, "O");
  if (winningMove !== -1) {
    return winningMove;
  }

  const blockingMove = findWinningMove(value, currentLevel, opponent);
  if (blockingMove !== -1) {
    return blockingMove;
  }

  const center = Math.floor(value.length / 2);
  if (value[center] === null) {
    return center;
  }

  if (currentLevel === "Level 1") {
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter((corner) => value[corner] === null);
    if (availableCorners.length > 0) {
      return getRandomMove(availableCorners);
    }
  } else if (currentLevel === "Level 2") {
    const corners = [0, 4, 20, 24];
    const availableCorners = corners.filter((corner) => value[corner] === null);
    if (availableCorners.length > 0) {
      return getRandomMove(availableCorners);
    }
  }

  if (currentLevel === "Level 1") {
    const sides = [1, 3, 5, 7];
    const availableSides = sides.filter((side) => value[side] === null);
    if (availableSides.length > 0) {
      return getRandomMove(availableSides);
    }
  } else if (currentLevel === "Level 2") {
    const sides = [1, 9, 10, 14, 15, 19, 21, 22, 23];
    const availableSides = sides.filter((side) => value[side] === null);
    if (availableSides.length > 0) {
      return getRandomMove(availableSides);
    }
  }

  return getRandomMove(getEmptyCells(value));
};

const findWinningMove = (value: string[], currentLevel: string, symbol: string) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === null) {
      const tempBoard = [...value];
      tempBoard[i] = symbol;
      if (won(tempBoard, currentLevel, symbol)) {
        return i;
      }
    }
  }
  return -1;
};

const getEmptyCells = (value: string[]) => {
  return value.reduce((emptyCells: number[], cell: string, index: number) => {
    if (cell === null) {
      emptyCells.push(index);
    }
    return emptyCells;
  }, []);
};

const getRandomMove = (moves: number[]) => {
  const index = Math.floor(Math.random() * moves.length);
  return moves[index];
};

export default Player;

