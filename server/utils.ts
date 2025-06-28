import { networkInterfaces } from "os";

export function getLocalIP(): string {
  const nets = networkInterfaces();
  const results: { [key: string]: string[] } = {};

  for (const name of Object.keys(nets)) {
    const net = nets[name];
    if (net) {
      for (const netInterface of net) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (netInterface.family === "IPv4" && !netInterface.internal) {
          if (!results[name]) {
            results[name] = [];
          }
          results[name].push(netInterface.address);
        }
      }
    }
  }

  // Return the first available IP address
  for (const name of Object.keys(results)) {
    if (results[name].length > 0) {
      return results[name][0];
    }
  }

  return "127.0.0.1";
}

export function log(message: string): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
} 