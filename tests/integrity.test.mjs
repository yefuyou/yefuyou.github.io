import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist");
const routes = [
  "index.html",
  "zh/index.html",
  "work/linkloom/index.html",
  "work/ai-review/index.html",
  "work/real-raise/index.html",
  "zh/work/linkloom/index.html",
  "zh/work/ai-review/index.html",
  "zh/work/real-raise/index.html",
  "404.html",
];
const read = (file) => readFile(path.join(root, file), "utf8");

test("every generated page has a language, unique title and meaningful main landmark", async () => {
  const titles = [];
  for (const file of routes) {
    const html = await read(file);
    assert.match(
      html,
      file.startsWith("zh/") ? /<html lang="zh-CN"/ : /<html lang="en"/,
    );
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${file}: one h1`);
    assert.match(html, /<main id="main"/);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title, `${file}: title`);
    titles.push(`${file.startsWith("zh/") ? "zh" : "en"}:${title}`);
    assert.match(html, /property="og:image"/);
  }
  assert.equal(new Set(titles).size, titles.length);
});

test("built internal navigation, fragment targets, and image assets resolve", async () => {
  for (const file of routes) {
    const html = await read(file);
    for (const match of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
      const [, attr, value] = match;
      if (/^(https?:|data:|mailto:)/.test(value)) continue;
      assert.notEqual(value, "#", `${file}: fake link`);
      const url = new URL(
        value,
        `https://local.test/${file.replace(/index.html$/, "")}`,
      );
      let local = decodeURIComponent(url.pathname).replace(/^\//, "");
      if (!path.extname(local)) local = path.join(local, "index.html");
      const target = path.join(root, local);
      await access(target);
      if (url.hash && attr === "href") {
        const destination = await readFile(target, "utf8");
        assert.ok(
          destination.includes(`id="${url.hash.slice(1)}"`),
          `${file}: missing ${value}`,
        );
      }
    }
  }
});

test("public contact links use only the explicitly authorized address", async () => {
  const html = await read("index.html");
  for (const file of routes) {
    const page = await read(file);
    const mailLinks = [...page.matchAll(/href="mailto:([^"]+)"/g)];
    assert.ok(mailLinks.length > 0, `${file}: email entry`);
    assert.ok(mailLinks.every((match) => match[1] === "yefuyou2333@gmail.com"), `${file}: only the user-provided public email`);
    assert.doesNotMatch(page, /linkedin\.com|download="/);
    assert.doesNotMatch(page, /Contact on GitHub|通过 GitHub 联系/);
  }
  assert.match(html, /Email me/);
  assert.match(await read("zh/index.html"), /邮件联系/);
  assert.match(html, /Synthetic data/);
  assert.match(html, /Anonymized workflow illustration/);
  const featured = [...html.matchAll(/href="https:\/\/github\.com\/(?:The-PR-Agent\/pr-agent|agentic-os-org\/ANOLISA|QwenLM\/qwen-code)\/pull\/\d+"/g)];
  assert.equal(featured.length, 7, 'Seven verified upstream PRs in three topics');
});

test("LinkLoom leads with the product and keeps audit sections out of the case", async () => {
  for (const file of ["work/linkloom/index.html", "zh/work/linkloom/index.html"]) {
    const html = await read(file);
    assert.doesNotMatch(html, /id="validation"|validation-record|loom-states|scope-ledger|DeepSeek|\bGold\b|PROVIDER_UNCERTAIN|INSUFFICIENT|BLOCKED_INFRASTRUCTURE/);
    assert.match(html, /id="demo"/);
    assert.match(html, /id="how-it-works"/);
    assert.equal((html.match(/class="engineering-decision\b/g) || []).length, 3);
    assert.match(html, /linkloom-walkthrough\.mp4/);
  }
});

test("production scripts are external and compatible with the declared self-only CSP", async () => {
  for (const file of routes) {
    const html = await read(file);
    for (const script of html.matchAll(
      /<script\b([^>]*)>([\s\S]*?)<\/script>/g,
    )) {
      assert.match(
        script[1],
        /\bsrc="/,
        `${file}: inline script blocked by CSP`,
      );
      assert.equal(script[2].trim(), "");
    }
  }
});
