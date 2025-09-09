function calculateFramePrice(x: number, y: number): number {
  if (x < 10 || x > 30) {
    throw Error();
  }

  if (y < 30 || y > 60) {
    throw Error();
  }

  let price: number;
  if (x * y >= 1600) {
    price = 3500;
  } else {
    price = 3000;
  }

  return price;
}

export { calculateFramePrice };
