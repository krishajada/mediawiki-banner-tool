export function updateText(oldText, newText) {
    return newText.trim() === "" ? oldText : newText;
  }
  