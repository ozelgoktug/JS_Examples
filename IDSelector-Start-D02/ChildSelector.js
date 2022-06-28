$(document).ready(function () {
  // Inputs
  const backgroundColorInput = $("#backgroundColorSelector");
  const textColorInput = $("#textColorSelector");
  const tableRowTypeInput = $("#tableRowTypeSelector");
  const btnColorize = $(".btn-primary");
  const tableInput = $("#tableSelector");

  // BtnColorize Click Event
  btnColorize.click(function () {
    // tr:odd / even
    let backgroundColor = backgroundColorInput.val();
    let textColor = textColorInput.val();
    // (tr:odd) (tr:even)
    let tableRows = $(
      `#${tableInput.val()} tr:${
        tableRowTypeInput.val() ? tableRowTypeInput.val() : "odd"
      }`
    );

    tableRows.css("background-color", backgroundColor);
    tableRows.css("color", textColor);
  });
});
