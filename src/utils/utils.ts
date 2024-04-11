import { useState, useEffect } from "react";
import { showToast } from "../components/common/ui-lib/uiLib";
import Locale from "../locales";

export const trimTopic = (topic: string) => {
    return topic.replace(/[，。！？”“"、,.!?]*$/, "");
}

export const merge = (target: any, source: any) => {
    Object.keys(source).forEach(function (key) {
        if (source[key] && typeof source[key] === "object") {
            merge((target[key] = target[key] || {}), source[key]);
            return;
        }
        target[key] = source[key];
    });
}


export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        showToast(Locale.Copy.Success);
    } catch (error) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand("copy");
            showToast(Locale.Copy.Success);
        } catch (error) {
            showToast(Locale.Copy.Failed);
        }
        document.body.removeChild(textArea);
    }
}

export const readFromFile = () => {
    return new Promise<string>((res, rej) => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "application/json";

        fileInput.onchange = (event: any) => {
            const file = event.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e: any) => {
                res(e.target.result);
            };
            fileReader.onerror = (e) => rej(e);
            fileReader.readAsText(file);
        };

        fileInput.click();
    });
}
