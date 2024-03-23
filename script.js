const input = document.getElementById("input");
const btn = document.getElementById("btn-barcode-generator");

btn.addEventListener("click", () => {
  JsBarcode("#barcode", input.value, {
    format: "code128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#000",
    background: "#D9EDBF",
  });
});

window.onload = (event) => {
  input.value = "";
};
