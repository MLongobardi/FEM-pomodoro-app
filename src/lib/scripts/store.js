import { writable } from "svelte/store";

const cleanState = {
	modes: ["pomodoro", "short break", "long break"],
	fonts: ["KumbhSans", "RobotoSlab", "SpaceMono"],
	colors: ["#F87070", "#70F3F8", "#D881F8"],

	modeIndex: 0,
	fontIndex: 0,
	colorIndex: 0,
	times: [25, 5, 15],

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
	}

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
		})
	}

    tempStore.toggleSettings = () => {
		tempStore.update((draft) => {
            draft.settingsAreOpen = !draft.settingsAreOpen;
            return draft;
        })
	}

	//remove standard store methods with object destructuring and return store
	//eslint-disable-next-line
	const { set, update, setThingIndex, ...returnStore } = tempStore; //subscribe, setMode, setFont, setColor, setTimes, toggleSettings
	return returnStore;
}

export const mainStore = createStore();
