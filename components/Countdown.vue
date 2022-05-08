<template>
  <div @click="timer ? null : start()" class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
        <path
          ref="time"
          class="base-timer-path-remaining"
          :class="{ active: !!timer }"
          d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
          stroke-dasharray="282.78314208984375 282.78314208984375"
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">
      {{ formattedTime }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["seconds"],
  data() {
    return {
      total: parseInt(this.seconds),
      secsRemaining: parseInt(this.seconds),
      timer: null,
    };
  },
  computed: {
    formattedTime() {
      return this.formatTime(this.secsRemaining);
    },
    percentage() {
      const result = this.secsRemaining / this.total;
      return result >= 0 ? result : 0;
    },
  },
  mounted() {},
  methods: {
    start() {
      this.timer = setInterval(this.run, 1000);
    },
    pause() {
      clearInterval(this.timer);
      this.timer = null;
    },
    run() {
      if (this.secsRemaining <= 0) {
        this.pause();
      } else {
        const length = this.$refs.time?.getTotalLength();
        this.secsRemaining = this.secsRemaining - 1;
        this.$refs.time.setAttribute(
          "stroke-dasharray",
          `${(this.percentage * length).toFixed(0)} ${length}`
        );
      }
    },
    formatTime(secs) {
      if (secs < 60) {
        return `0:${this.formatDigit(secs)}`;
      } else {
        let minutes = Math.floor(secs / 60);
        let seconds = secs % 60;
        return `${this.formatDigit(minutes)}:${this.formatDigit(seconds)}`;
      }
    },
    formatDigit(num) {
      if (num < 10) {
        return `0${num}`;
      } else if (num === 0) {
        return "00";
      } else {
        return num.toString();
      }
    },
  },
};
</script>

<style>
.base-timer {
  position: relative;
  height: 300px;
  width: 300px;
  cursor: pointer;
}

/* Removes SVG styling that would hide the time label */
.base-timer__circle {
  fill: none;
  stroke: none;
}

/* The SVG path that displays the timer's progress */
.base-timer__path-elapsed {
  stroke-width: 1px;
  stroke: var(--primary-muted-color);
}

.base-timer__label {
  position: absolute;

  /* Size should match the parent container */
  width: 300px;
  height: 300px;

  /* Keep the label aligned to the top */
  top: 0;

  /* Create a flexible box that centers content vertically and horizontally */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Sort of an arbitrary number; adjust to your liking */
  font-size: 48px;
}

.base-timer-path-remaining {
  /* Just as thick as the original ring */
  stroke-width: 1px;
  stroke: var(--primary-muted-color);

  /* Makes sure the animation starts at the top of the circle */
  transform-origin: center;
  transform: rotate(90deg);
  transition: all 0.5s;
}

.base-timer-path-remaining.active {
  stroke-width: 2px;
  stroke: var(--primary-color);
}

.base-timer__svg {
  /* Flips the svg and makes the animation to move left-to-right */
  transform: scaleX(-1);
}
</style>
