function error(message: string): never {
  throw new Error(message);
}

function fail() {
  throw error('Something failed');
}

function infiniteLoop(): never {
  while (true) {
  }
}
