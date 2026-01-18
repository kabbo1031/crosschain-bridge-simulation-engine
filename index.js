import { connectRPC } from "./rpc.client.js";
import { loadBridges } from "./bridge.registry.js";
import { simulateBridgeTransfer } from "./bridge.simulator.js";
import { validateTransfer } from "./transfer.validator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Crosschain Bridge Simulation Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const bridges = loadBridges();

const transfer = simulateBridgeTransfer(bridges[0], "TOKEN_A", 100);
const validation = validateTransfer(transfer);

generateReport(transfer, validation);
