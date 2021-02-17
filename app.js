const novumnovemSearchBar = () => {
  const button = document.querySelector(".searchform .button");
  const input = document.querySelector(".searchform .input");

  const toggleOnOffSearchform = () => {
    input.classList.toggle("open");

    if (input.classList.contains("open")) {
      input.focus();
    } else {
      input.blur();
      input.value = "";
    }
  };

  const HandleSearchformClickAway = () => {
    isFormOpen = input.classList.contains("open");

    if (document.activeElement != input && isFormOpen) {
      toggleOnOffSearchform();
    }
  };

  button.addEventListener("click", () => toggleOnOffSearchform());
  window.addEventListener("click", () => HandleSearchformClickAway());
};

window.addEventListener("load", novumnovemSearchBar);
