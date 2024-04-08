import en from "./en";
import jp from "./jp";
import { merge } from "../utils/utils";

import type { LocaleType } from "./en";

const ALL_LANGS = {
    en,
    jp,
};

export type Lang = keyof typeof ALL_LANGS;

export const AllLangs = Object.keys(ALL_LANGS) as Lang[];

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
    en: "English",
    jp: "日本語",
}

const LANG_KEY = "lang";
const DEFAULT_LANG = "en";

const fallbackLang = en;
const targetLang = ALL_LANGS[getLang()] as LocaleType;

merge(fallbackLang, targetLang);

export default fallbackLang as LocaleType;

function getItem(key: string) {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

function setItem(key: string, value: string) {
    try {
        localStorage.setItem(key, value);
    } catch { }
}

function getLanguage() {
    try {
        return navigator.language.toLowerCase();
    } catch {
        return DEFAULT_LANG;
    }
}

export function getLang(): Lang {
    const savedLang = getItem(LANG_KEY);

    if (AllLangs.includes((savedLang ?? "") as Lang)) {
        return savedLang as Lang;
    }

    const lang = getLanguage();

    for (const option of AllLangs) {
        if (lang.includes(option)) {
            return option;
        }
    }

    return DEFAULT_LANG;
}

export function changeLang(lang: Lang) {
    setItem(LANG_KEY, lang);
    location.reload();
}