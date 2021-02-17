const novumnovemSearchBar = () => {
  const button = document.querySelector(".searchform .button");
  const input = document.querySelector(".searchform .input");

  const isFormOpen = () => input.classList.contains("open");

  const toggleOnOffSearchform = () => {
    input.classList.toggle("open");

    if (isFormOpen()) {
      input.focus();
    } else {
      input.blur();
      input.value = "";
    }
  };

  const HandleSearchformClickAway = () => {
    if (document.activeElement != input && isFormOpen()) {
      toggleOnOffSearchform();
    }
  };

  button.addEventListener("click", () => toggleOnOffSearchform());
  window.addEventListener("click", () => HandleSearchformClickAway());
};

window.addEventListener("load", novumnovemSearchBar);
