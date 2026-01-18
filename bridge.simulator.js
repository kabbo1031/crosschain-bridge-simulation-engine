export function simulateBridgeTransfer(bridge, token, amount) {
  console.log("Simulating bridge transfer via:", bridge.name);

  const fee = amount * bridge.feeRate;

  return {
    bridge: bridge.name,
    fromChain: bridge.from,
    toChain: bridge.to,
    token: token,
    amount: amount,
    fee: fee.toFixed(4),
    txHash: "0xBRIDGETX123456789"
  };
}
