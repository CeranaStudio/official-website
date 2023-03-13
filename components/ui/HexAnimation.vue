<template>
  <div class="hex center">
    <div class="hex odd first one"></div>
    <div class="hex odd first three"></div>
    <div class="hex odd first five"></div>
    <div class="hex odd first seven"></div>
    <div class="hex odd first nine"></div>
    <div class="hex odd first eleven"></div>
    <div class="hex odd second one"></div>
    <div class="hex odd second three"></div>
    <div class="hex odd second five"></div>
    <div class="hex odd second seven"></div>
    <div class="hex odd second nine"></div>
    <div class="hex odd second eleven"></div>
    <div class="hex odd third one"></div>
    <div class="hex odd third three"></div>
    <div class="hex odd third five"></div>
    <div class="hex odd third seven"></div>
    <div class="hex odd third nine"></div>
    <div class="hex odd third eleven"></div>
    <div class="hex even first two"></div>
    <div class="hex even first four"></div>
    <div class="hex even first six"></div>
    <div class="hex even first eight"></div>
    <div class="hex even first ten"></div>
    <div class="hex even first twelve"></div>
    <div class="hex even second two"></div>
    <div class="hex even second four"></div>
    <div class="hex even second six"></div>
    <div class="hex even second eight"></div>
    <div class="hex even second ten"></div>
    <div class="hex even second twelve"></div>
  </div>
</template>
<style scoped>
:root {
  --sqrt3: 1.73205080757; /* Square root of 3 */
  --time: 11; /* Duration of animation  */
  --gap: 1; /* Horizontal gap between hexagons */
  --radius: 3; /* Radius of inscribed circle */
  --Gap: var(--gap) / 2 * var(--sqrt3); /* Vertical gap between hexagons */
  --Radius: 2 / var(--sqrt3) * var(--radius); /* Radius of circumcircle */
}

@keyframes odd-animation {
  0% {
    transform: translate(calc(0.5 * var(--offset-x)), calc(0.5 * var(--offset-y))) scale(0);
  }
  33% {
    transform: translate(calc(1 * var(--offset-x)), calc(1 * var(--offset-y))) scale(1);
  }
  66% {
    transform: translate(calc(2 * var(--offset-x)), calc(2 * var(--offset-y))) scale(1);
  }
  100% {
    transform: translate(calc(3 * var(--offset-x)), calc(3 * var(--offset-y))) scale(0);
  }
}

@keyframes even-animation {
  50% {
    transform: translate(calc(1 * var(--offset-x)), calc(1 * var(--offset-y))) scale(1);
  }
  100% {
    transform: translate(calc(2 * var(--offset-x)), calc(2 * var(--offset-y))) scale(0);
  }
}

body {
  align-items: center;
  background-color: black;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  margin: 0;
}

.hex {
  color: white;
  display: flex;
  font-size: 3vmin;
  height: calc(2em * var(--Radius));
  width: calc(2em * var(--radius));
}

.hex::before {
  border: calc(0.5em * var(--Radius)) solid transparent;
  border-left: 0;
  border-right: calc(1em * var(--radius)) solid currentColor;
  content: '';
  height: var(--Radius);
}

.hex::after {
  border: calc(0.5em * var(--Radius)) solid transparent;
  border-left: calc(1em * var(--radius)) solid currentColor;
  border-right: 0;
  content: '';
  height: var(--Radius);
}

.center {
  position: relative;
}

.odd,
.even {
  --global-offset-x: calc(0.5em * var(--gap) + var(--radius) * 1em);
  --global-offset-y: calc(1.5em * var(--Radius) + var(--Gap) * 1em);
  animation: infinite cubic-bezier(0.21, 0.61, 0.01, 0.89);
  position: absolute;
  transform: translate(0, 0) scale(0);
}

.odd {
  animation-duration: 11s;
}
.even {
  animation-duration: 7.333333333s;
}

.hex.first {
  animation-delay: -6.2857142857s;
}
.hex.second {
  animation-delay: -2.619047619s;
}
.hex.third {
  animation-delay: 1.0476190476s;
}

@supports (animation-delay: calc(1 * 1s)) and (animation-duration: calc(1 * 1s)) {
  .odd {
    animation-duration: calc(var(--time) * 1s);
  }
  .even {
    animation-duration: calc(var(--time) * 2 / 3 * 1s);
  }

  .hex.first {
    animation-delay: calc(var(--time) / -1.75 * 1s);
  }
  .hex.second {
    animation-delay: calc(var(--time) * 1.25 / -5.25 * 1s);
  }
  .hex.third {
    animation-delay: calc(var(--time) * -0.25 / -2.625 * 1s);
  }
}

.hex.one {
  --offset-x: calc(var(--global-offset-x) * 1);
  --offset-y: calc(var(--global-offset-y) * -1);
  animation-name: odd-animation;
  bottom: 0;
  left: 0;
}
.hex.two {
  --offset-x: calc(var(--global-offset-x) * 1.5);
  --offset-y: calc(var(--global-offset-y) * -0.5);
  animation-name: even-animation;
  bottom: calc(var(--global-offset-y) * 0.5);
  left: calc(var(--global-offset-x) * 1.5);
}
.hex.three {
  --offset-x: calc(var(--global-offset-x) * 2);
  --offset-y: calc(var(--global-offset-y) * 0);
  animation-name: odd-animation;
  bottom: 0;
  right: 0;
}
.hex.four {
  --offset-x: calc(var(--global-offset-x) * 1.5);
  --offset-y: calc(var(--global-offset-y) * 0.5);
  animation-name: even-animation;
  top: calc(var(--global-offset-y) * 0.5);
  left: calc(var(--global-offset-x) * 1.5);
}
.hex.five {
  --offset-x: calc(var(--global-offset-x) * 1);
  --offset-y: calc(var(--global-offset-y) * 1);
  animation-name: odd-animation;
  top: 0;
  left: 0;
}
.hex.six {
  --offset-x: calc(var(--global-offset-x) * 0);
  --offset-y: calc(var(--global-offset-y) * 1);
  animation-name: even-animation;
  top: calc(var(--global-offset-y) * 1);
  left: 0;
}
.hex.seven {
  --offset-x: calc(var(--global-offset-x) * -1);
  --offset-y: calc(var(--global-offset-y) * 1);
  animation-name: odd-animation;
  top: 0;
  right: 0;
}
.hex.eight {
  --offset-x: calc(var(--global-offset-x) * -1.5);
  --offset-y: calc(var(--global-offset-y) * 0.5);
  animation-name: even-animation;
  top: calc(var(--global-offset-y) * 0.5);
  right: calc(var(--global-offset-x) * 1.5);
}
.hex.nine {
  --offset-x: calc(var(--global-offset-x) * -2);
  --offset-y: calc(var(--global-offset-y) * 0);
  animation-name: odd-animation;
  top: 0;
  right: 0;
}
.hex.ten {
  --offset-x: calc(var(--global-offset-x) * -1.5);
  --offset-y: calc(var(--global-offset-y) * -0.5);
  animation-name: even-animation;
  bottom: calc(var(--global-offset-y) * 0.5);
  right: calc(var(--global-offset-x) * 1.5);
}
.hex.eleven {
  --offset-x: calc(var(--global-offset-x) * -1);
  --offset-y: calc(var(--global-offset-y) * -1);
  animation-name: odd-animation;
  bottom: 0;
  right: 0;
}
.hex.twelve {
  --offset-x: calc(var(--global-offset-x) * 0);
  --offset-y: calc(var(--global-offset-y) * -1);
  animation-name: even-animation;
  bottom: calc(var(--global-offset-y) * 1);
  left: 0;
}
</style>
