function setBluetooth(button) {
  console.log("Setting Bluetooth");
  var buttons = document.querySelectorAll(".bluetooth-button");
  buttons.forEach(function (btn) {
    btn.classList.remove("border-blue-600");
  });
  button.classList.add("border-blue-600");
  document.getElementById("blue").value = button.value;
}

function set4G(button) {
  console.log("Setting 4G");
  var buttons = document.querySelectorAll(".fourGButton");
  buttons.forEach((btn) => {
    btn.classList.remove("border-blue-600");
  });
  button.classList.add("border-blue-600");
  document.getElementById("four_g").value = button.value;
}

function setDualSim(button) {
  const buttons = document.querySelectorAll(".dual-sim");
  buttons.forEach((btn) => {
    btn.classList.remove("border-green-600");
  });
  button.classList.add("border-green-600");
  document.getElementById("dual_sim").value = button.value;
}

function set3G(button) {
  const buttons = document.querySelectorAll(".threeGButton");
  buttons.forEach((btn) => {
    btn.classList.remove("border-blue-600");
  });
  button.classList.add("border-blue-600");
  document.getElementById("three_g").value = button.value;
}

function setWiFi(button) {
  const buttons = document.querySelectorAll(".wifi-button");
  buttons.forEach((btn) => {
    btn.classList.remove("border-blue-500");
  });
  button.classList.add("border-blue-500");
  document.getElementById("wifi").value = button.value;
}

function setTouchScreen(button) {
  const buttons = document.querySelectorAll(".touch-screen-button");
  buttons.forEach((btn) => {
    btn.classList.remove("border-black");
  });
  button.classList.add("border-black");
  document.getElementById("touch_screen").value = button.value;
}

function selectRAM(value) {
  const ramInput = document.getElementById("ram_input");
  ramInput.value = value !== "other";
  if (value !== "other") {
    ramInput.value = parseInt(value);
  } else {
    ramInput.focus();
  }
}

function selectInternalMemory(value) {
  const intMemoryInput = document.getElementById("int_memory_input");
  intMemoryInput.value = value !== "other";
  if (value !== "other") {
    intMemoryInput.value = parseInt(value);
  } else {
    intMemoryInput.focus();
  }
}

function selectNumberOfCores(value) {
  const nCoresInput = document.getElementById("n_cores_input");
  nCoresInput.value = value !== "other";
  if (value !== "other") {
    nCoresInput.value = parseInt(value);
  } else {
    nCoresInput.focus();
  }
}

function selectPrimaryCameraMP(value) {
  const pcInput = document.getElementById("pc_input");
  pcInput.value = value !== "other";
  if (value !== "other") {
    pcInput.value = parseInt(value);
  } else {
    pcInput.focus();
  }
}

function selectFrontCameraMP(value) {
  const fcInput = document.getElementById("fc_input");
  fcInput.value = value !== "other";
  if (value !== "other") {
    fcInput.value = parseInt(value);
  } else {
    fcInput.focus();
  }
}

function selectClockSpeed(value) {
  const clockSpeedInput = document.getElementById("clock_speed_input");
  clockSpeedInput.value = value !== "other";
  if (value !== "other") {
    clockSpeedInput.value = parseFloat(value);
  } else {
    clockSpeedInput.focus();
  }
}

function selectBatteryPower(value) {
  const batteryPowerInput = document.getElementById("battery_power_input");
  batteryPowerInput.value = value !== "other";
  if (value !== "other") {
    batteryPowerInput.value = parseInt(value);
  } else {
    batteryPowerInput.focus();
  }
}
