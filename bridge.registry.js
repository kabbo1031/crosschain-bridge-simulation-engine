export function loadBridges() {
  console.log("Loading bridges...");

  return [
    { name: "Main Bridge", from: "Ethereum", to: "Base", feeRate: 0.001 },
    { name: "Side Bridge", from: "Polygon", to: "Arbitrum", feeRate: 0.002 }
  ];
}
