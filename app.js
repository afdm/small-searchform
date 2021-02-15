const novumnovemSearchBar = () => {
  const searchform = document.querySelector(".searchform");
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
};

window.addEventListener("load", novumnovemSearchBar);
