import { writable } from "svelte/store";

const cleanState = {
	modes: ["pomodoro", "short break", "long break"],
	fonts: ["KumbhSans", "RobotoSlab", "SpaceMono"],
	colors: ["#F87070", "#70F3F8", "#D881F8"],

	modeIndex: 0,
	fontIndex: 0,
	colorIndex: 0,

	get activeMode() {
		return this.modes[this.modeIndex];
	},
	get activeFont() {
		return this.fonts[this.fontIndex];
	},
	get activeColor() {
		return this.colors[this.colorIndex];
    },

    settings: false,
};

function createStore() {
	//initialize store
	const tempStore = writable(cleanState);

	//define custom store methods
	tempStore.setThing = (thing, n) => {
        tempStore.update((draft) => {
            if (n < 0 || n > draft[thing + "s"].length) {
                console.error("You tried to set a " + thing + " that doesn't exist");
            } else {
                draft[thing + "Index"] = n;
            }
            return draft;
		});
    };
    
    tempStore.setMode = (n) => {
        tempStore.setThing("mode", n);
    }

    tempStore.setFont = (n) => {
		tempStore.setThing("font", n);
    };

    tempStore.setColor = (n) => {
		tempStore.setThing("color", n);
    };

    tempStore.toggleSettings = () => {
        tempStore.update((draft) => {
            draft.settingsAreOpen = !draft.settingsAreOpen;
            return draft;
        })
    }

	//remove standard store methods with object destructuring and return store
	//eslint-disable-next-line
	const { set, update, setThing, ...returnStore } = tempStore; //subscribe, setMode, setFont, setColor
	return returnStore;
}

export const mainStore = createStore();
