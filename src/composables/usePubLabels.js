// src/composables/usePubLabels.js
// Single source of truth for publication topic and type label mappings.

export const topicLabels = {
  genai: "💡 Generative AI",
  bot: "🤖 Social bot",
  bias: "🔀 System bias",
  misinformation: "📢 Misinformation",
  netsci: "🕸 Network science",
  opioid: "💊 Opioid crisis",
  socialmedia: "📱 Social media",
};

export const typeLabels = {
  dataset: "💾 Dataset",
  method: "🧪 Method",
};

// Combined lookup for chips — falls back to the raw key when unknown.
export function labelFor(key) {
  return topicLabels[key] ?? typeLabels[key] ?? key;
}
