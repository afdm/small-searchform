const novumnovemSearchBar = () => {
  const button = document.querySelector(".searchform .button");
  const input = document.querySelector(".searchform .input");

  const searchformAction = () => {
    input.classList.toggle("open");

    if (input.classList.contains("open")) {
      input.focus();
    } else {
      input.blur();
    }
  };

  button.addEventListener("click", () => searchformAction());
  
  window.addEventListener("click", (e) => {
    const target = e.target;

    const isFff =
      target === button ||
      Array.from(button.childNodes).includes(target) ||
      Array.from(target.childNodes).length === 0;

    if (input.classList.contains("open") && !isFff) {
      searchformAction();
    }
  });
};

window.addEventListener("load", novumnovemSearchBar);
