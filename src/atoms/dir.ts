import { atom } from "jotai";

const dirAtom = atom<"up" | "down" | "right" | "left">("up");

export default dirAtom;
