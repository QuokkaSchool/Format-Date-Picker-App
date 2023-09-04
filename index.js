const DOMinputData = document.getElementById("input-data");
const DOMselectFormat = document.getElementById("select-format");
const DOMbtnFormat = document.getElementById("btn-format");
const DOMresultDate = document.getElementById("result-date");

DOMbtnFormat.addEventListener("click", () => {
  if (!DOMinputData.value) {
    alert("BŁĄD! Data jest wymagana.");
    return;
  }

  if (!DOMselectFormat.value) {
    alert("BŁĄD! Format daty jest wymagany.");
    return;
  }

  const resultDate = new Date(DOMinputData.value);

  const day = resultDate.getDate();
  const month = resultDate.getMonth() + 1;
  const year = resultDate.getFullYear();

  const modDay = String(day).padStart(2, "0");
  const modMonth = String(month).padStart(2, "0");

  if (DOMselectFormat.value === "format1") {
    DOMresultDate.textContent = `${modDay}/${modMonth}/${year}`;
  }

  if (DOMselectFormat.value === "format2") {
    DOMresultDate.textContent = `${modDay}-${modMonth}-${year}`;
  }

  if (DOMselectFormat.value === "format3") {
    DOMresultDate.textContent = `${modDay}.${modMonth}.${year}`;
  }

  if (DOMselectFormat.value === "format4") {
    const monthsList = [
      "styczeń",
      "luty",
      "marzec",
      "kwiecień",
      "maj",
      "czerwiec",
      "lipiec",
      "sierpień",
      "wrzesień",
      "październik",
      "listopad",
      "grudzień",
    ];
    DOMresultDate.textContent = `${day} ${monthsList[month - 1]} ${year}`;
  }
});
