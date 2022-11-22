import { writable } from "svelte/store";
import { Timer } from "$scripts/timer.js";
import { cleanState } from "$scripts/cleanState.js"
const TICK_RATE = 50;

function createStore() {
	//initialize store
	const tempStore = writable(cleanState);

	//define custom store methods
	tempStore.setThingIndex = (thing, n) => {
		tempStore.update((draft) => {
			let i = draft[thing + "s"].indexOf(n);
			if (i < 0) {
				console.error("You tried to set a " + thing + " that doesn't exist");
			} else {
				draft[thing + "Index"] = i;
			}
			return draft;
		});
	};

	tempStore.setMode = (n) => {
		tempStore.setThingIndex("mode", n);
		tempStore.pauseTimer();
		tempStore.update((draft) => {
			draft.timer = new Timer(draft.activeTime);
			return draft;
		});
	};

	tempStore.setFont = (n) => {
		tempStore.setThingIndex("font", n);
	};

	tempStore.setColor = (n) => {
		tempStore.setThingIndex("color", n);
	};

	tempStore.setTimes = (n) => {
		n.forEach((time, i) => {
			if (time < 1 || time > 99) {
				console.error("You entered a wrong time");
			} else {
				tempStore.update((draft) => {
					draft.times[i] = time;
					return draft;
				});
			}
		});
	};

	tempStore.toggleSettings = () => {
		tempStore.update((draft) => {
			draft.settingsAreOpen = !draft.settingsAreOpen;
			return draft;
		});
	};

	tempStore.startTimer = () => {
		tempStore.update((draft) => {
			if (draft.timer.running) return draft;
			draft.timer.running = true;
			draft.timer.interval = setInterval(() => {
				draft.timer.deltaTime += TICK_RATE;
				if (draft.timer.deltaTime >= 1000) {
					tempStore.update((secondDraft) => {
						secondDraft.timer.currentTime--;
						secondDraft.timer.deltaTime = 0;
						if (secondDraft.timer.currentTime <= 0) {
							secondDraft.timer.currentTime = 0;
							secondDraft.timer.end = true;
							tempStore.pauseTimer();
						}
						return secondDraft;
					});
				}
			}, TICK_RATE);
			return draft;
		});
	};

	tempStore.pauseTimer = () => {
		tempStore.update((draft) => {
			if (!draft.timer.running) return draft;
			draft.timer.running = false;
			clearInterval(draft.timer.interval);
			return draft;
		});
	};



	//remove standard store methods with object destructuring and return store
	//eslint-disable-next-line
	const { set, update, setThingIndex, ...returnStore } = tempStore; //subscribe, setMode, setFont, setColor, setTimes, toggleSettings, startTimer, pauseTimer
	return returnStore;
}

export const mainStore = createStore();
