

function somejs() {
  return 20;
}

function somejsx1() {
  return 20;
}

function somejs2() {
  somejsx1();
  return somejs() + 25;
}



function somejs3() {
  return somejs() + 35;
}

function somejs4() {
  return somejs() + 35;
}
