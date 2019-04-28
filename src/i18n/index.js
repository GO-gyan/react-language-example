export default function (lang = "en") {
  return import(`./${lang}.json`);
};