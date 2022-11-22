import { Timer } from "$scripts/timer.js";

export const cleanState = {
	modes: ["pomodoro", "short break", "long break"],
	fonts: ["KumbhSans", "RobotoSlab", "SpaceMono"],
	colors: ["#F87070", "#70F3F8", "#D881F8"],

	modeIndex: 0,
	fontIndex: 0,
	colorIndex: 0,
	times: [25, 5, 15],
	timer: new Timer(25),

	get activeMode() {
		return this.modes[this.modeIndex];
	},
	get activeFont() {
		return this.fonts[this.fontIndex];
	},
	get activeColor() {
		return this.colors[this.colorIndex];
	},
	get activeTime() {
		return this.times[this.modeIndex];
	},

	settingsAreOpen: false,
};
