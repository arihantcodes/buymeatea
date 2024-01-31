import {create} from "zustand"

type UpiState = {
  upi: string
  set: (upi: string) => void
}

const useUpi = create<UpiState>((set) => ({
  upi: "",
  set: (upi) => set({upi}),
}))