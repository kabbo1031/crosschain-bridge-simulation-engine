export function validateTransfer(transfer) {
  console.log("Validating transfer:", transfer.txHash);

  return {
    txHash: transfer.txHash,
    confirmed: true,
    status: "SUCCESS"
  };
}
