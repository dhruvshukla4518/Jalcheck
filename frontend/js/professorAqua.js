/**
 * Professor Aqua Universal Virtual Professor Component
 * Implements Sections 7, 8, 19, 20 of Project Specification:
 * - Animated avatar states (idle, greeting, listening, thinking, explaining, pointing, attention, confirmation)
 * - Browser Web Speech API voice synthesis with play/pause/mute
 * - Universal "Explain This" context receiver
 */
const ProfessorAqua = {
  isVoiceMuted: false,
  currentUtterance: null,

  scripts: {
    greeting: "Namaste! I am Professor Aqua, your virtual water science guide. JalCheck lets you explore real laboratory water samples from our district. Tap any chart, metric, or map pin, and I will explain what it means for your health!",
    home_hero: "You are on the JalCheck home portal. Our project bridges chemical laboratory data with community awareness. Notice the live counters above: all values come directly from our field testing and household surveys.",
    stat_samples: "We have collected and laboratory-tested 148 distinct water samples across 6 municipal wards, measuring TDS, pH, turbidity, hardness, and electrical conductivity.",
    stat_areas: "The 6 wards represent diverse water sources: direct municipal river supply, deep borewells, community tankers, and natural gravity springs.",
    stat_survey: "Our citizen science survey records actual household purification practices. Over 80% of citizens drink untested water, revealing a critical public awareness gap.",
    stat_awareness: "The overall Water Quality Index of our municipal zone sits at 76.4, earning a Grade B rating. While municipal lines are generally safe, deep borewell areas require mineral monitoring.",
    tab_dashboard: "Welcome to the Analytics Dashboard! Here you can compare water quality parameters across all wards. Notice the dotted red line representing the BIS IS 10500 standard limit. Tap any bar to inspect its minimum, average, and maximum range!",
    tab_map: "Here is our interactive study area GIS map. Green pins represent desirable drinking water parameters, amber indicates moderate observation, and red indicates elevated minerals like TDS.",
    tab_analyzer: "Try our Water Analyzer! Move the sliders or click a preset sample. I will calculate the composite Water Quality Index and give you immediate, scientifically grounded advice.",
    tab_survey: "Citizen science is the heart of JalCheck! Fill out the 4-question household survey to contribute your data to our community awareness analytics.",
    tab_report: "Here you can generate and print an official CEP Water Quality Certificate and report dossier for any ward, complete with observational notes and recommendations.",
    tds_intro: "Total Dissolved Solids, or TDS, measures inorganic mineral salts like calcium and magnesium. The Bureau of Indian Standards recommends water below 500 mg/L for ideal taste, but up to 2000 mg/L is permissible if no alternate source exists. Remember: TDS alone is not a disease vector!",
    tds_detailed: "TDS is frequently misunderstood! A TDS of 200 to 300 mg/L is actually beneficial because it provides essential dietary electrolytes. Water below 50 mg/L tastes flat and can leach minerals from teeth.",
    ph_intro: "pH measures acidity or alkalinity. Safe drinking water sits between 6.5 and 8.5. If water is acidic (below 6.5), it can corrode copper and iron plumbing pipes.",
    ph_detailed: "Water with a pH above 8.5 feels slippery and tastes like baking soda, while pH below 6.5 tastes sour and can irritate plumbing. Our district averages 7.4, which is wonderfully neutral.",
    turbidity_intro: "Turbidity measures water cloudiness in NTU. Even if water looks clear, suspended silt particles above 1.0 NTU can shield harmful microbes from ultraviolet rays or chlorine disinfection.",
    turbidity_detailed: "Turbidity is essentially the physical haze of water. The standard is less than 1 NTU. Whenever turbidity spikes after rains, always use physical candle filtration before boiling.",
    hardness_detailed: "Hardness is simply the concentration of calcium and magnesium carbonate. It is not dangerous to drink, but it prevents soap lathering, ruins laundry, and leaves white crust inside boilers.",
    ec_detailed: "Electrical conductivity measures water's ability to conduct an electric charge via dissolved ions. It closely tracks TDS and helps us spot industrial discharges.",
    boiling_myth: "Here is a crucial myth to debunk: Boiling water kills bacteria and viruses, but it does NOT remove TDS or heavy metals! In fact, boiling evaporates water vapour, making the remaining mineral concentration slightly higher. For high TDS, reverse osmosis is required.",
    wqi_intro: "Our Water Quality Index calculates a weighted score from 0 to 100 based on pH, TDS, turbidity, and hardness compared against the Indian Standard 10500. A score over 80 is Grade A (Excellent), 65 to 80 is Grade B (Good), and below 50 requires purification intervention."
  },

  init() {
    console.log("Professor Aqua engine initialized.");
  },

  explain(contextKey) {
    const text = this.scripts[contextKey] || "Here is a detailed observation regarding this water quality parameter according to documented project standards.";
    this.updateUI({
      state: "explaining",
      text: text,
      label: "EXPLAINING"
    });
    this.speak(text);
  },

  setExplanation(text, state = "explaining", label = "ANALYSIS") {
    this.updateUI({ state, text, label });
    this.speak(text);
  },

  updateUI({ state, text, label }) {
    const textEl = document.getElementById('prof-speech-text');
    const labelEl = document.getElementById('prof-state-label');
    const avatarBox = document.getElementById('prof-avatar-box');
    const dot = document.getElementById('prof-state-dot');

    if (textEl) textEl.innerHTML = `"${text}"`;
    if (labelEl) labelEl.textContent = label || state.toUpperCase();

    if (state === 'explaining') {
      avatarBox.innerHTML = '👨‍🏫';
      dot.className = 'absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-slate-900';
    } else if (state === 'thinking') {
      avatarBox.innerHTML = '🤔';
      dot.className = 'absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-slate-900';
    } else if (state === 'greeting') {
      avatarBox.innerHTML = '👨‍🔬';
      dot.className = 'absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900';
    } else if (state === 'attention') {
      avatarBox.innerHTML = '⚠️';
      dot.className = 'absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-rose-400 border-2 border-slate-900';
    }

    // Auto expand if collapsed
    const body = document.getElementById('prof-body-content');
    const footer = document.getElementById('prof-footer');
    if (body && body.classList.contains('hidden')) {
      body.classList.remove('hidden');
      if (footer) footer.classList.remove('hidden');
    }
  },

  speak(text) {
    if (this.isVoiceMuted || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const plainText = text.replace(/<[^>]*>/g, '');
      const utterance = new SpeechSynthesisUtterance(plainText);
      utterance.rate = 1.02;
      utterance.pitch = 1.0;

      const avatarBox = document.getElementById('prof-avatar-box');
      utterance.onstart = () => {
        if (avatarBox) avatarBox.classList.add('speaking-mouth');
      };
      utterance.onend = () => {
        if (avatarBox) avatarBox.classList.remove('speaking-mouth');
      };
      utterance.onerror = () => {
        if (avatarBox) avatarBox.classList.remove('speaking-mouth');
      };

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis unavailable:", e);
    }
  },

  toggleVoice() {
    this.isVoiceMuted = !this.isVoiceMuted;
    const statusText = document.getElementById('voice-status-text');
    const icon = document.getElementById('audio-icon-on');
    if (this.isVoiceMuted) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      if (statusText) statusText.textContent = "Voice: OFF";
      if (icon) {
        icon.classList.add('text-slate-500');
        icon.classList.remove('text-cyan-400');
      }
    } else {
      if (statusText) statusText.textContent = "Voice: ON";
      if (icon) {
        icon.classList.remove('text-slate-500');
        icon.classList.add('text-cyan-400');
      }
      const textEl = document.getElementById('prof-speech-text');
      if (textEl) this.speak(textEl.textContent);
    }
  },

  toggleCollapse() {
    const body = document.getElementById('prof-body-content');
    const footer = document.getElementById('prof-footer');
    const icon = document.getElementById('collapse-icon');
    if (body.classList.contains('hidden')) {
      body.classList.remove('hidden');
      if (footer) footer.classList.remove('hidden');
      if (icon) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>';
    } else {
      body.classList.add('hidden');
      if (footer) footer.classList.add('hidden');
      if (icon) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>';
    }
  }
};
