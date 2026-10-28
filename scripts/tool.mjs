import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { delimiter, dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

// Developer tooling only. Nothing here is shipped to the browser.
// Prefer the active Node; Codex Desktop can supply a newer bundled runtime.
const sufficient = (version) => {
  const [major, minor] = version.replace(/^v/, "").split(".").map(Number);
  return major > 24 || (major === 24 && minor >= 16);
};
let binary = process.execPath;
if (!sufficient(process.version)) {
  const bundled = resolve(
    homedir(),
    ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin",
    process.platform === "win32" ? "node.exe" : "node",
  );
  const candidate = process.env.PORTFOLIO_NODE_BINARY || bundled;
  if (!existsSync(candidate))
    throw new Error(
      "Node.js 24.16+ is required. Install it or set PORTFOLIO_NODE_BINARY to an existing supported executable.",
    );
  const version = spawnSync(candidate, ["--version"], { encoding: "utf8" });
  if (version.status !== 0 || !sufficient(version.stdout.trim()))
    throw new Error("The selected Node runtime must be 24.16 or newer.");
  binary = candidate;
}
const [action, ...args] = process.argv.slice(2);
const commands = {
  dev: ["node_modules/astro/bin/astro.mjs", "dev", "--host", "127.0.0.1"],
  preview: [
    "node_modules/astro/bin/astro.mjs",
    "preview",
    "--host",
    "127.0.0.1",
  ],
  build: ["node_modules/astro/bin/astro.mjs", "build"],
  check: ["node_modules/astro/bin/astro.mjs", "check"],
  lint: ["node_modules/eslint/bin/eslint.js", "."],
  test: ["--test", "tests/integrity.test.mjs"],
};
if (!(action in commands))
  throw new Error(`Unknown project command: ${action}`);
const result = spawnSync(binary, [...commands[action], ...args], {
  stdio: "inherit",
  env: {
    ...process.env,
    PATH: `${dirname(binary)}${delimiter}${process.env.PATH || ""}`,
    ASTRO_TELEMETRY_DISABLED: "1",
  },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
