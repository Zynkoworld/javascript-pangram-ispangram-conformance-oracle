const notAlpha = /[^a-z]+/gi;
const alphaLength = 26;

const isPangram = (candidate) => {
  const cleaned = candidate.replace(notAlpha, '').toLowerCase();
  const sortedSet = new Set([...cleaned].sort());
  return sortedSet.size === alphaLength;
};

const __in = ["", "abcdefghijklmnopqrstuvwxyz", "the quick brown fox jumps over the lazy dog", "a quick movement of the enemy will jeopardize five gunboats", "five boxing wizards jump quickly at it", "the_quick_brown_fox_jumps_over_the_lazy_dog", "the 1 quick brown fox jumps over the 2 lazy dogs", "7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog", "\"Five quacking Zephyrs jolt my wax bed.\"", "abcdefghijklm ABCDEFGHIJKLM"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: isPangram(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
