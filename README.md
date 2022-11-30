# Pomodoro App

In this project i inspired a frontendmentor.io challenge:
https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G
![frontendmentor](https://res.cloudinary.com/dz209s6jk/image/upload/v1608298216/Challenges/tiush3hkni9uznayk0hr.jpg)

## Tech Stack

**Client:** React, Typescript, Sass, react-countdown-circle-timer, Context API

## Demo

https://pomodoro-app-beryl.vercel.app/

![gif1](https://github.com/tahacagrimen/pomodoro-app/blob/master/src/gifs/1.gif?raw=true)

![gif2](https://github.com/tahacagrimen/pomodoro-app/blob/master/src/gifs/2.gif?raw=true)

## Roadmap

- At first i coded a context api for state managment.

- Then created a variables sass file.

- After that i created components for project.

- React-countdown-circle-timer added

```
<CountdownCircleTimer
          isPlaying={isTimerRunning}
          key={activeBtn}
          duration={miliseconds / 1000}
          size={300}
          strokeWidth={12}
          rotation="counterclockwise"
          trailStrokeWidth={24}
          trailColor="#151932"
          initialRemainingTime={miliseconds / 1000}
          colors={`${
            color === "red"
              ? "#f87070"
              : color === "blue"
              ? "#72f1f7"
              : "#d981f9"
          }`}
        >
          {({ remainingTime }) => (
            <div className="middle">
              <div className="countdown">
                {minutes}:{seconds}
              </div>
              <div className="btn">
                {isTimerRunning ? (
                  <button onClick={() => setIsTimerRunning((prev) => !prev)}>
                    PAUSE
                  </button>
                ) : (
                  <button onClick={() => setIsTimerRunning((prev) => !prev)}>
                    START
                  </button>
                )}
              </div>
            </div>
          )}
        </CountdownCircleTimer>

```
