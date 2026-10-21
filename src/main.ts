import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  // TODO: implement this function
  const syrupElements = document.getElementsByClassName("syrup");
  if (syrupElements.length === 0) return;
  const syrupDiv = syrupElements[0] as HTMLDivElement;

  const color = syrups[input.value];
  if (!color) return;

  syrupDiv.style.setProperty("--syrup-color", color);
}

function setupSyrupListeners(): void {
  // TODO: implement this function
  const syrupInputs =
    document.querySelectorAll<HTMLInputElement>('input[name="syrup"]');

  for (let i = 0; i < syrupInputs.length; i++){
    const input = syrupInputs[i];
    input.addEventListener("change",function () {
      applySyrup(input);
    });
  }
  const checkedInput = document.querySelector<HTMLInputElement>('input[name="syrup"]:checked');

  if (checkedInput) {
    applySyrup(checkedInput);
  }
}

setupSyrupListeners();

function setupCreamListeners(): void {
  // TODO: implement this function

  const creamInputs =
    document.querySelectorAll<HTMLInputElement>('input[name="cream"]');
  for (let i = 0; i< creamInputs.length;i++){
    const input = creamInputs[i];
    input.addEventListener("change", function () {
      applyCream(input);
    });
  }
  const checkedInput =
    document.querySelector<HTMLInputElement>('input[name="cream"]:checked');
  if (checkedInput) {
    applyCream(checkedInput);
  }
}
setupCreamListeners();

function setupTemperatureListeners(): void {
  // TODO: implement this function
  const temperatureInputs =
    document.querySelectorAll<HTMLInputElement>('input[name="temperature"]');
  for (let i = 0; i < temperatureInputs.length; i++){
    const input =temperatureInputs[i];
    input.addEventListener("change", function() {
      applyTemperature(input);
    });
  }

  const checkedInput =
    document.querySelector<HTMLInputElement>('input[name="temperature"]:checked');
  if (checkedInput) {
    applyTemperature(checkedInput);
  }
}

setupTemperatureListeners();

function setupBaseListeners(): void {
  // TODO: implement this function

  const baseInputs =
    document.querySelectorAll<HTMLInputElement>('input[name="base"]');
  for (let i = 0; i < baseInputs.length;i++) {
    const input = baseInputs[i];

    input.addEventListener("change", function () {
      applyBase(input);
    });
  }
  const checkedInput =
    document.querySelector<HTMLInputElement>('input[name="base"]:checked');
  if (checkedInput){
    applyBase(checkedInput);
  }
}

setupBaseListeners();
