//import Settings from "./Settings";

import { storage } from "@vendetta/plugin";
import { before } from "@vendetta/patcher";
import { showToast } from "@vendetta/ui/toasts";
import { findByProps } from "@vendetta/metro";
import Settings from "./Settings";

const messageModule = findByProps("sendMessage", "receiveMessage");

const patches = [];



export const onLoad = () => {
    patches.push(before("sendMessage", messageModule, (args) => {
        //showToast(JSON.stringify(args))
        //args[1].content += " niga";
    }));
}
export const onUnload = () => {
    patches.forEach(p => p());
}

export const settings = Settings;
