export function getSelectedLanguagesFromLocalStorage() {
  const json = localStorage.getItem('selectedLanguages');

  if (!json) return [];

  try {
    const selectedLanguages: string[] = JSON.parse(json);
    return selectedLanguages;
  } catch (error) {
    return [];
  }
}

export function setSelectedLanguagesToLocalStorage(languages: string[]) {
  localStorage.setItem('selectedLanguages', JSON.stringify(languages));
}
