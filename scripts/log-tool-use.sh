#!/usr/bin/env bash
# Example PreToolUse hook: logs the tool name to stderr, never blocks.
input="$(cat)"
tool_name="$(node -e '
let d = "";
process.stdin.on("data", c => d += c);
process.stdin.on("end", () => {
  try { console.log(JSON.parse(d).tool_name || ""); }
  catch { console.log(""); }
});
' <<< "$input")"

echo "[my-claude-plugin] PreToolUse: $tool_name" >&2
exit 0
