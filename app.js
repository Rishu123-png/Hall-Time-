(function () {
  const KEY = "halltime-v1";
  const THEMES = ["blackboard", "daylight", "amber", "green", "red"];
  const THEME_COLOR = {
    blackboard: "#101410",
    daylight: "#f3efe4",
    amber: "#0c0a07",
    green: "#06110b",
    red: "#120707",
  };
  const SEGS = {
    0: "abcdef",
    1: "bc",
    2: "abdeg",
    3: "abcdg",
    4: "bcfg",
    5: "acdfg",
    6: "acdefg",
    7: "abc",
    8: "abcdefg",
    9: "abcdfg",
  };

  const I18N = {
    en: {
      q1h: "1 hour test",
      q1hSub: "Starts immediately, no reading",
      q3h: "3 hour paper",
      q3hSub: "15 minutes reading, then 3 hours",
      qCbse: "CBSE morning",
      qCbseSub: "Reading 10:15, writing 10:30–1:30",
      orSet: "Or set it yourself",
      school: "School or centre",
      schoolPh: "Shown on the board",
      paper: "Paper on the board",
      paperPh: "Class 10 — Mathematics",
      startNow: "Start now",
      setTimes: "Set times",
      reading: "Reading time",
      writingDur: "Writing time",
      customMin: "Custom minutes",
      timeHint: "Use 24-hour time. 1:30 PM is 13:30.",
      includeReading: "Include reading time",
      readingStarts: "Reading starts",
      writingStarts: "Writing starts",
      writingEnds: "Writing ends",
      extra: "Extra time",
      minutes: "min",
      extraHint: "For a room with different extra time, open another window.",
      bells: "Play hall bells on this computer",
      bellsHint: "Long bell at the start and the end. Short bell every hour, at 15 minutes, and at 5 minutes.",
      onTheBoard: "On the board",
      cancel: "Cancel",
      begin: "Begin examination",
      arm: "Set the board",
      startTitle: "Start the paper",
      controlsTitle: "Examination",
      displayTitle: "Display",
      fullscreen: "Fullscreen",
      exitFullscreen: "Exit full",
      startExam: "Start exam",
      exam: "Exam",
      display: "Display",
      pause: "Pause",
      resume: "Resume",
      add5: "+5 min",
      end: "End",
      close: "Close",
      endAsk: "End this examination on the board?",
      keep: "Keep running",
      endYes: "End exam",
      addTime: "Add time",
      addCustom: "Add",
      testBell: "Test bell",
      theme: "Theme",
      themeHint: "Blackboard for dark rooms and projectors. Daylight if the hall is bright.",
      blackboard: "Blackboard",
      daylight: "Daylight",
      amber: "Amber",
      green: "Green",
      red: "Red",
      digits: "Digits",
      plain: "Plain",
      led: "LED",
      digitHint: "Plain digits are easier to read from the back of the hall.",
      clock: "Clock",
      h12: "12-hour",
      h24: "24-hour",
      seconds: "Show seconds",
      blink: "Blink the colon",
      showDate: "Show the date",
      bilingual: "Show English and Hindi together",
      language: "Language",
      notice: "Notice line",
      noticePh: "Silence · No electronic devices",
      brand: "Corner name",
      hideBrand: "Hide the corner name",
      sound: "Sound",
      quiet: "Quiet",
      room: "Room",
      loud: "Loud",
      bellReading: "Bell when reading begins",
      bellStart: "Long bell when writing begins",
      bellHourly: "Short bell every hour",
      bell15: "Bell at 15 minutes left",
      bell5: "Bell at 5 minutes left",
      bellEnd: "Long bell when time is up",
      deviceNote: "This clock uses this computer’s time. Match it with a phone before the exam.",
      shortcuts: "Shortcuts",
      scF: "Fullscreen",
      scE: "Exam setup",
      scD: "Display settings",
      scSpace: "Pause or resume",
      scPlus: "Add 5 minutes",
      scT: "Change theme",
      scL: "Change language",
      scM: "Mute bells",
      scEsc: "Close or exit fullscreen",
      share: "Share this board",
      shareHint: "Send this link to the hall computer. The school name and theme travel with it.",
      copy: "Copy",
      copied: "Copied",
      offline: "Once this page has loaded, the clock keeps running if the internet drops.",
      installHint: "From the browser menu, choose Install or Add to Home Screen for a fullscreen app.",
      hint: "Move the pointer for controls  ·  F for fullscreen",
      safeFrame: "Keep the clock inside this frame",
      readingPhase: "Reading time",
      writingPhase: "Writing time",
      waitingPhase: "Waiting",
      pausedPhase: "Paused",
      timeUp: "Time is up",
      under15: "15 minutes left",
      under5: "5 minutes left",
      remaining: "Time remaining",
      doNotWrite: "Do not start writing",
      stopWriting: "Stop writing. Submit the paper.",
      pausedNote: "Countdown is frozen. The wall clock is still running.",
      now: "Now",
      ends: "Ends",
      elapsed: "Elapsed",
      beginsIn: "Begins in",
      writingAt: "Writing at",
      readingAt: "Reading at",
      banner15: "15 minutes remaining",
      banner5: "5 minutes remaining",
      bannerStart: "Writing time has begun",
      bannerReading: "Reading time — do not write",
      bannerEnd: "Time is up",
      added: "{n} minutes added",
      restored: "Examination restored",
      alreadyEnded: "That end time has already passed.",
      endBeforeStart: "Writing must end after it starts.",
      readingAfter: "Reading must start before writing.",
      badTime: "Enter a valid time.",
      minWriting: "Writing time should be at least 5 minutes.",
      startHint: "Press begin at the real start. The countdown runs on this computer.",
      timedHint: "Set this up before students enter. The board waits for the start time.",
      none: "None",
      bellsBlocked: "Click the test bell if you do not hear it",
    },
    hi: {
      q1h: "1 घंटे की परीक्षा",
      q1hSub: "तुरंत शुरू, बिना पठन",
      q3h: "3 घंटे का पत्र",
      q3hSub: "15 मिनट पठन, फिर 3 घंटे",
      qCbse: "सीबीएसई सुबह",
      qCbseSub: "पठन 10:15, लेखन 10:30–1:30",
      orSet: "या खुद सेट करें",
      school: "विद्यालय या केंद्र",
      schoolPh: "बोर्ड पर दिखेगा",
      paper: "बोर्ड पर प्रश्न पत्र",
      paperPh: "कक्षा 10 — गणित",
      startNow: "अभी शुरू",
      setTimes: "समय तय करें",
      reading: "पठन समय",
      writingDur: "लेखन समय",
      customMin: "अन्य मिनट",
      timeHint: "समय 24 घंटे में लिखें। दोपहर 1:30 के लिए 13:30।",
      includeReading: "पठन समय शामिल करें",
      readingStarts: "पठन आरंभ",
      writingStarts: "लेखन आरंभ",
      writingEnds: "लेखन समाप्त",
      extra: "अतिरिक्त समय",
      minutes: "मिनट",
      extraHint: "जिस कमरे में अतिरिक्त समय अलग हो, वहाँ दूसरी विंडो खोलें।",
      bells: "इस कंप्यूटर पर घंटी बजाएँ",
      bellsHint: "आरंभ और अंत पर लंबी घंटी। हर घंटे, 15 मिनट और 5 मिनट पर छोटी घंटी।",
      onTheBoard: "बोर्ड पर",
      cancel: "रद्द करें",
      begin: "परीक्षा शुरू करें",
      arm: "बोर्ड सेट करें",
      startTitle: "परीक्षा सेट करें",
      controlsTitle: "परीक्षा",
      displayTitle: "डिस्प्ले",
      fullscreen: "पूर्ण स्क्रीन",
      exitFullscreen: "बाहर निकलें",
      startExam: "परीक्षा शुरू",
      exam: "परीक्षा",
      display: "सेटिंग",
      pause: "रोकें",
      resume: "जारी रखें",
      add5: "+5 मिनट",
      end: "समाप्त",
      close: "बंद करें",
      endAsk: "क्या बोर्ड पर यह परीक्षा समाप्त करें?",
      keep: "जारी रखें",
      endYes: "परीक्षा समाप्त करें",
      addTime: "समय जोड़ें",
      addCustom: "जोड़ें",
      testBell: "घंटी सुनें",
      theme: "थीम",
      themeHint: "अँधेरे कमरे और प्रोजेक्टर के लिए ब्लैकबोर्ड। उजले हॉल के लिए दिन का उजाला।",
      blackboard: "ब्लैकबोर्ड",
      daylight: "दिन का उजाला",
      amber: "एम्बर",
      green: "हरा",
      red: "लाल",
      digits: "अंक",
      plain: "साफ",
      led: "एलईडी",
      digitHint: "साफ अंक हॉल के पीछे से पढ़ने में आसान हैं।",
      clock: "घड़ी",
      h12: "12 घंटे",
      h24: "24 घंटे",
      seconds: "सेकंड दिखाएँ",
      blink: "कोलन चमके",
      showDate: "तारीख दिखाएँ",
      bilingual: "अंग्रेज़ी और हिन्दी एक साथ दिखाएँ",
      language: "भाषा",
      notice: "सूचना पंक्ति",
      noticePh: "मौन · कोई इलेक्ट्रॉनिक उपकरण नहीं",
      brand: "कोने का नाम",
      hideBrand: "कोने का नाम छिपाएँ",
      sound: "ध्वनि",
      quiet: "धीमी",
      room: "कमरा",
      loud: "तेज़",
      bellReading: "पठन शुरू होने पर घंटी",
      bellStart: "लेखन शुरू होने पर लंबी घंटी",
      bellHourly: "हर घंटे छोटी घंटी",
      bell15: "15 मिनट शेष पर घंटी",
      bell5: "5 मिनट शेष पर घंटी",
      bellEnd: "समय समाप्त पर लंबी घंटी",
      deviceNote: "यह घड़ी इसी कंप्यूटर का समय दिखाती है। परीक्षा से पहले इसे फ़ोन से मिला लें।",
      shortcuts: "शॉर्टकट",
      scF: "पूर्ण स्क्रीन",
      scE: "परीक्षा सेटअप",
      scD: "डिस्प्ले सेटिंग",
      scSpace: "रोकें या जारी रखें",
      scPlus: "5 मिनट जोड़ें",
      scT: "थीम बदलें",
      scL: "भाषा बदलें",
      scM: "घंटी बंद",
      scEsc: "बंद करें या पूर्ण स्क्रीन से बाहर",
      share: "यह बोर्ड साझा करें",
      shareHint: "यह लिंक हॉल के कंप्यूटर पर भेजें। विद्यालय का नाम और थीम साथ जाएँगे।",
      copy: "कॉपी",
      copied: "कॉपी हो गया",
      offline: "पेज लोड हो जाने के बाद इंटरनेट कटने पर भी घड़ी चलती रहेगी।",
      installHint: "ब्राउज़र मेनू से Install या Add to Home Screen चुनें, तो यह पूर्ण स्क्रीन ऐप बन जाएगा।",
      hint: "नियंत्रण के लिए माउस हिलाएँ  ·  F पूर्ण स्क्रीन",
      safeFrame: "घड़ी को इस फ्रेम के अंदर रखें",
      readingPhase: "पठन समय",
      writingPhase: "लेखन समय",
      waitingPhase: "प्रतीक्षा",
      pausedPhase: "रुका हुआ",
      timeUp: "समय समाप्त",
      under15: "15 मिनट शेष",
      under5: "5 मिनट शेष",
      remaining: "शेष समय",
      doNotWrite: "उत्तर लिखना शुरू न करें",
      stopWriting: "लिखना बंद करें और उत्तर पुस्तिका जमा करें।",
      pausedNote: "उलटी गिनती रुकी हुई है। दीवार की घड़ी चल रही है।",
      now: "अभी",
      ends: "समाप्ति",
      elapsed: "बीता समय",
      beginsIn: "शुरू होने में",
      writingAt: "लेखन",
      readingAt: "पठन",
      banner15: "15 मिनट शेष हैं",
      banner5: "5 मिनट शेष हैं",
      bannerStart: "लेखन समय शुरू हो गया है",
      bannerReading: "पठन समय — उत्तर न लिखें",
      bannerEnd: "समय समाप्त",
      added: "{n} मिनट जोड़े गए",
      restored: "परीक्षा फिर से चालू",
      alreadyEnded: "वह समाप्ति समय बीत चुका है।",
      endBeforeStart: "लेखन समाप्ति, आरंभ के बाद होनी चाहिए।",
      readingAfter: "पठन, लेखन से पहले शुरू होना चाहिए।",
      badTime: "सही समय लिखें।",
      minWriting: "लेखन समय कम से कम 5 मिनट होना चाहिए।",
      startHint: "शुरू बटन असली आरंभ पर दबाएँ। उलटी गिनती इसी कंप्यूटर पर चलेगी।",
      timedHint: "विद्यार्थी आने से पहले सेट कर सकते हैं। बोर्ड आरंभ समय तक प्रतीक्षा करेगा।",
      none: "नहीं",
      bellsBlocked: "अगर घंटी न सुनाई दे तो घंटी सुनें दबाएँ",
    },
  };

  function defaultSettings() {
    return {
      theme: "blackboard",
      hour12: true,
      seconds: true,
      blink: false,
      showDate: true,
      segments: false,
      lang: "en",
      bilingual: false,
      school: "",
      notice: "",
      brand: "HALLTIME",
      hideBrand: false,
      sound: true,
      volume: 0.55,
      bells: { reading: true, start: true, hourly: true, m15: true, m5: true, end: true },
    };
  }

  function $(id) { return document.getElementById(id); }

  let state = load();
  let sheetMode = null;
  let lastKey = "";
  let liveKey = "";
  let wakeLock = null;
  let audioCtx = null;
  let bannerTimer = 0;
  let hintTimer = 0;
  let dockTimer = 0;
  let safeTimer = 0;
  let opener = null;

  function load() {
    const settings = defaultSettings();
    let exam = null;
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "null");
      if (raw && raw.settings) {
        Object.assign(settings, raw.settings);
        settings.bells = Object.assign(defaultSettings().bells, raw.settings.bells || {});
      }
      if (raw && raw.exam && raw.exam.writingEnd) exam = raw.exam;
    } catch (e) {}
    if (exam) {
      if (!exam.fired) exam.fired = {};
      const stalePaused = exam.pausedAt && Date.now() - exam.pausedAt > 12 * 3600000;
      const staleDone = !exam.pausedAt && Date.now() > exam.writingEnd + 3 * 3600000;
      if (stalePaused || staleDone || !exam.writingStart || !exam.writingEnd) exam = null;
    }
    return { settings: settings, exam: exam };
  }

  function save() {
    try {
      const exam = state.exam ? Object.assign({}, state.exam) : null;
      if (exam) delete exam._prevRemaining;
      localStorage.setItem(KEY, JSON.stringify({ settings: state.settings, exam: exam }));
    } catch (e) {}
  }

  function applyUrl() {
    const q = new URLSearchParams(location.search);
    const theme = q.get("theme");
    if (THEMES.indexOf(theme) !== -1) state.settings.theme = theme;
    const lang = q.get("lang");
    if (lang === "hi" || lang === "en") state.settings.lang = lang;
    if (q.get("hours") === "24") state.settings.hour12 = false;
    if (q.get("hours") === "12") state.settings.hour12 = true;
    if (q.get("seconds") === "0") state.settings.seconds = false;
    if (q.get("seconds") === "1") state.settings.seconds = true;
    if (q.get("led") === "1") state.settings.segments = true;
    if (q.get("school")) state.settings.school = q.get("school").slice(0, 60);
    if (q.get("notice")) state.settings.notice = q.get("notice").slice(0, 90);
    if (q.get("name")) state.settings.brand = q.get("name").slice(0, 16);
    save();
  }

  function t(key) {
    const lang = state.settings.lang === "hi" ? "hi" : "en";
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }
  function both(key) {
    if (!state.settings.bilingual) return t(key);
    return I18N.en[key] + "\n" + I18N.hi[key];
  }
  function fill(str, vars) {
    return Object.keys(vars).reduce(function (s, k) {
      return s.split("{" + k + "}").join(String(vars[k]));
    }, str);
  }

  function applyLang() {
    document.documentElement.lang = state.settings.lang === "hi" ? "hi" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    $("schoolInput").placeholder = t("schoolPh");
    $("schoolInputStart").placeholder = t("schoolPh");
    $("paperInput").placeholder = t("paperPh");
    $("ctrlPaper").placeholder = t("paperPh");
    $("noticeInput").placeholder = t("noticePh");
    $("brandInput").placeholder = "HALLTIME";
    $("idleHint").textContent = t("hint");
    $("safeFrame").querySelector("span").textContent = t("safeFrame");
    $("sheetClose").setAttribute("aria-label", t("close"));
    $("dialogText").textContent = t("endAsk");
    $("dialogKeep").textContent = t("keep");
    $("dialogEnd").textContent = t("endYes");
    labelDurationChips();
    updateDock();
    if (sheetMode) $("sheetTitle").textContent = t(sheetTitleKey());
    updateModeHint();
    lastKey = "";
  }

  function labelDurationChips() {
    document.querySelectorAll("#readingChips button, #writingChips button").forEach(function (btn) {
      const min = Number(btn.dataset.min);
      btn.textContent = min === 0 ? t("none") : shortDur(min);
      if (!btn.hasAttribute("aria-pressed")) btn.setAttribute("aria-pressed", btn.classList.contains("on") ? "true" : "false");
    });
  }
  function shortDur(min) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    const hi = state.settings.lang === "hi";
    if (hi) {
      if (!h) return m + " मि";
      if (!m) return h + " घं";
      return h + " घं " + m + " मि";
    }
    if (!h) return m + "m";
    if (!m) return h + "h";
    return h + "h " + m + "m";
  }
  function formatDuration(mins) {
    mins = Math.max(0, Math.round(mins));
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const hi = state.settings.lang === "hi";
    if (hi) {
      if (h && m) return h + " घंटे " + m + " मिनट";
      if (h) return h === 1 ? "1 घंटा" : h + " घंटे";
      return m + " मिनट";
    }
    if (h && m) return h + " h " + m + " min";
    if (h) return h === 1 ? "1 hour" : h + " hours";
    return m === 1 ? "1 min" : m + " min";
  }

  function audio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }
  function unlockAudio() {
    try {
      const ctx = audio();
      if (ctx.state === "suspended") ctx.resume();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      g.gain.value = 0;
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.02);
    } catch (e) {}
  }
  function bell(kind) {
    if (!state.settings.sound) return;
    let ctx;
    try { ctx = audio(); } catch (e) { return; }
    if (ctx.state === "suspended") ctx.resume().catch(function () {});
    const vol = state.settings.volume || 0.55;
    const t0 = ctx.currentTime + 0.03;
    const strikes = kind === "long" || kind === "end" ? 2 : 1;
    const gap = kind === "end" ? 0.62 : 0.5;
    for (let i = 0; i < strikes; i++) strike(ctx, t0 + i * gap, kind === "end" ? 1.7 : 1.05, vol);
  }
  function strike(ctx, time, decay, vol) {
    const master = ctx.createGain();
    master.gain.setValueAtTime(Math.min(0.42, 0.34 * vol), time);
    master.connect(ctx.destination);
    const base = 392;
    [1, 2.01, 2.45, 3.02, 4.2, 5.43].forEach(function (ratio, i) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(base * ratio, time);
      const peak = 0.18 / (1 + i * 1.2);
      g.gain.setValueAtTime(0.0001, time);
      g.gain.exponentialRampToValueAtTime(peak, time + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, time + decay * Math.max(0.35, 1 - i * 0.08));
      o.connect(g);
      g.connect(master);
      o.start(time);
      o.stop(time + decay + 0.08);
    });
  }

  function showBanner(text, tone) {
    const el = $("banner");
    el.hidden = false;
    el.textContent = text;
    el.className = "banner" + (tone ? " " + tone : "");
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(function () { el.hidden = true; }, 7000);
  }

  function todayAt(hhmm) {
    if (!hhmm || !/^\d{2}:\d{2}$/.test(hhmm)) return NaN;
    const bits = hhmm.split(":");
    const d = new Date();
    d.setHours(Number(bits[0]), Number(bits[1]), 0, 0);
    return d.getTime();
  }
  function examTime(exam) { return exam && exam.pausedAt ? exam.pausedAt : Date.now(); }
  function rawPhase(exam, time) {
    if (exam.readingStart != null && time < exam.readingStart) return "waiting";
    if (time < exam.writingStart) return exam.readingStart != null ? "reading" : "waiting";
    if (time < exam.writingEnd) return "writing";
    return "up";
  }
  function toneFor(phase, remaining) {
    if (phase === "writing" && remaining <= 5 * 60000) return "danger";
    if (phase === "writing" && remaining <= 15 * 60000) return "warn";
    return phase;
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function hms(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return { h: h, m: m, s: s, text: pad(h) + ":" + pad(m) + ":" + pad(s) };
  }
  function wallParts(date) {
    let h = date.getHours();
    let ap = "";
    if (state.settings.hour12) {
      ap = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
    }
    return { h: h, m: date.getMinutes(), s: date.getSeconds(), ap: ap };
  }
  function formatWall(date, withSeconds) {
    const p = wallParts(date);
    const core = pad(p.h) + ":" + pad(p.m) + (withSeconds ? ":" + pad(p.s) : "");
    return p.ap ? core + " " + p.ap : core;
  }
  function zoneLabel(date) {
    if (-date.getTimezoneOffset() === 330) return "IST";
    try {
      const name = new Intl.DateTimeFormat("en", { timeZoneName: "short" })
        .formatToParts(date)
        .find(function (p) { return p.type === "timeZoneName"; });
      if (name && name.value && name.value.indexOf("GMT") !== 0) return name.value;
    } catch (e) {}
    const off = -date.getTimezoneOffset();
    const sign = off >= 0 ? "+" : "−";
    const abs = Math.abs(off);
    return "UTC" + sign + pad(Math.floor(abs / 60)) + ":" + pad(abs % 60);
  }
  function formatDate(date) {
    const loc = state.settings.lang === "hi" ? "hi-IN" : "en-IN";
    try {
      return date.toLocaleDateString(loc, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    } catch (e) {
      return date.toDateString();
    }
  }

  function ensureFace(el, count, withAmPm, segments) {
    const key = count + "-" + (withAmPm ? 1 : 0) + "-" + (segments ? 1 : 0);
    if (el.dataset.key === key) return;
    el.dataset.key = key;
    el.replaceChildren();
    const face = document.createElement("div");
    face.className = "face";
    for (let i = 0; i < count; i++) {
      if (i && i % 2 === 0) face.append(makeColon(segments));
      face.append(segments ? makeSegDigit() : makePlainDigit());
    }
    if (withAmPm) {
      const am = document.createElement("span");
      am.className = "ampm";
      face.append(am);
    }
    el.append(face);
  }
  function makePlainDigit() {
    const d = document.createElement("span");
    d.className = "plain-digit";
    d.textContent = "0";
    return d;
  }
  function makeSegDigit() {
    const d = document.createElement("span");
    d.className = "seg-digit";
    "abcdefg".split("").forEach(function (name) {
      const s = document.createElement("i");
      s.className = "seg " + ("adg".indexOf(name) !== -1 ? "h " : "v ") + name;
      s.dataset.seg = name;
      d.append(s);
    });
    return d;
  }
  function makeColon(seg) {
    if (seg) {
      const c = document.createElement("span");
      c.className = "colon-seg";
      c.append(document.createElement("i"), document.createElement("i"));
      return c;
    }
    const c = document.createElement("span");
    c.className = "colon";
    c.textContent = ":";
    return c;
  }
  function updateFace(el, digits, ampm, dim) {
    const nodes = el.querySelectorAll(".plain-digit, .seg-digit");
    const chars = digits.split("");
    nodes.forEach(function (node, i) {
      const ch = chars[i] || "0";
      if (node.classList.contains("plain-digit")) {
        if (node.textContent !== ch) node.textContent = ch;
      } else {
        const on = SEGS[ch] || "";
        node.querySelectorAll(".seg").forEach(function (seg) {
          seg.classList.toggle("on", on.indexOf(seg.dataset.seg) !== -1);
        });
      }
    });
    el.querySelectorAll(".colon, .colon-seg").forEach(function (c) {
      c.classList.toggle("dim", dim);
    });
    const am = el.querySelector(".ampm");
    if (am) {
      if (am.textContent !== (ampm || "")) am.textContent = ampm || "";
      am.hidden = !ampm;
    }
  }

  function setStatRow(items) {
    const wrap = $("stats");
    wrap.hidden = false;
    const sig = items.map(function (it) { return it.label; }).join("|");
    if (wrap.dataset.sig !== sig) {
      wrap.dataset.sig = sig;
      wrap.replaceChildren();
      items.forEach(function (it) {
        const div = document.createElement("div");
        div.className = "stat" + (it.accent ? " accent" : "");
        const label = document.createElement("span");
        const value = document.createElement("b");
        div.append(label, value);
        wrap.append(div);
      });
    }
    const stats = wrap.querySelectorAll(".stat");
    items.forEach(function (it, i) {
      stats[i].querySelector("span").textContent = it.label;
      stats[i].querySelector("b").textContent = it.value;
      stats[i].classList.toggle("accent", !!it.accent);
    });
  }

  function renderBoard(now) {
    const s = state.settings;
    document.documentElement.dataset.theme = s.theme;
    document.documentElement.lang = s.lang === "hi" ? "hi" : "en";
    const themeMeta = $("themeColor");
    if (themeMeta) themeMeta.setAttribute("content", THEME_COLOR[s.theme] || "#101410");
    document.body.classList.toggle("segments", s.segments);
    document.body.classList.toggle("no-seconds", !s.seconds);
    document.body.classList.toggle("is-exam", !!state.exam);

    const brand = (s.brand || "HALLTIME").trim() || "HALLTIME";
    $("brand").hidden = !!s.hideBrand;
    if (!s.hideBrand) {
      const name = $("brandName");
      if (brand.toUpperCase() === "HALLTIME") name.innerHTML = "<b>H</b>ALLTIME";
      else name.textContent = brand;
    }
    $("schoolLine").textContent = s.school || "";
    $("tzLine").textContent = zoneLabel(now);
    $("noticeLine").hidden = !s.notice;
    $("noticeLine").textContent = s.notice || "";
    $("dateLine").hidden = !s.showDate;
    if (s.showDate) $("dateLine").textContent = formatDate(now);
    $("deviceTime").textContent = formatWall(now, true) + " · " + zoneLabel(now);

    const dim = s.blink && now.getMilliseconds() >= 500;
    const pip = $("pip");
    if (pip.dataset.sec !== String(now.getSeconds())) {
      pip.dataset.sec = String(now.getSeconds());
      pip.classList.remove("tick");
      void pip.offsetWidth;
      pip.classList.add("tick");
    }

    if (!state.exam) {
      document.documentElement.dataset.phase = "clock";
      $("paperLine").hidden = true;
      $("kicker").hidden = true;
      $("kickerHi").hidden = true;
      $("heroSub").hidden = true;
      $("instruction").hidden = true;
      $("rule").hidden = false;
      $("stats").hidden = true;
      $("progress").hidden = true;
      const p = wallParts(now);
      const showS = s.seconds;
      ensureFace($("hero"), showS ? 6 : 4, !!p.ap, s.segments);
      updateFace($("hero"), pad(p.h) + pad(p.m) + (showS ? pad(p.s) : ""), p.ap, dim);
      document.title = brand + " — Exam Hall Digital Clock";
      if (sheetMode === "start") updatePlan();
      return;
    }

    const exam = state.exam;
    const tExam = examTime(exam);
    const phase = rawPhase(exam, tExam);
    const remainingWrite = exam.writingEnd - tExam;
    const tone = exam.pausedAt ? "paused" : toneFor(phase, remainingWrite);
    document.documentElement.dataset.phase = tone;
    $("rule").hidden = true;
    $("paperLine").hidden = !exam.title;
    $("paperLine").textContent = exam.title || "";

    let kickerKey = "writingPhase";
    let heroMs = remainingWrite;
    let heroIsClock = false;
    let subKey = "remaining";
    let instructionKey = "";
    if (phase === "waiting") {
      kickerKey = "waitingPhase";
      heroIsClock = true;
      subKey = "";
    } else if (phase === "reading") {
      kickerKey = "readingPhase";
      heroMs = exam.writingStart - tExam;
      instructionKey = "doNotWrite";
    } else if (phase === "up") {
      kickerKey = "timeUp";
      heroMs = 0;
      subKey = "";
      instructionKey = "stopWriting";
    } else if (remainingWrite <= 5 * 60000) {
      kickerKey = "under5";
    } else if (remainingWrite <= 15 * 60000) {
      kickerKey = "under15";
    }
    if (exam.pausedAt) {
      kickerKey = "pausedPhase";
      instructionKey = "pausedNote";
    }

    $("kicker").hidden = false;
    $("kicker").textContent = t(kickerKey);
    if (s.bilingual) {
      $("kickerHi").hidden = false;
      $("kickerHi").textContent = I18N.hi[kickerKey];
      if (s.lang === "hi") $("kicker").textContent = I18N.en[kickerKey];
    } else {
      $("kickerHi").hidden = true;
    }

    if (heroIsClock) {
      const p = wallParts(now);
      const showS = s.seconds;
      ensureFace($("hero"), showS ? 6 : 4, !!p.ap, s.segments);
      updateFace($("hero"), pad(p.h) + pad(p.m) + (showS ? pad(p.s) : ""), p.ap, dim);
      $("heroSub").hidden = true;
    } else {
      const parts = hms(heroMs);
      ensureFace($("hero"), 6, false, s.segments);
      updateFace($("hero"), pad(parts.h) + pad(parts.m) + pad(parts.s), "", dim && phase !== "up");
      $("heroSub").hidden = !subKey;
      $("heroSub").textContent = subKey ? (s.bilingual ? I18N.en[subKey] + "  ·  " + I18N.hi[subKey] : t(subKey)) : "";
    }

    $("instruction").hidden = !instructionKey;
    $("instruction").textContent = instructionKey ? both(instructionKey) : "";

    if (phase === "waiting") {
      const nextAt = exam.readingStart != null ? exam.readingStart : exam.writingStart;
      const nextLabel = exam.readingStart != null ? t("readingAt") : t("writingAt");
      setStatRow([
        { label: t("now"), value: formatWall(now, false) },
        { label: t("beginsIn"), value: hms(nextAt - tExam).text, accent: true },
        { label: nextLabel, value: formatWall(new Date(nextAt), false) },
      ]);
    } else if (phase === "reading") {
      setStatRow([
        { label: t("now"), value: formatWall(now, true) },
        { label: t("writingAt"), value: formatWall(new Date(exam.writingStart), false) },
        { label: t("ends"), value: formatWall(new Date(exam.writingEnd), false) },
      ]);
    } else {
      const elapsed = Math.max(0, tExam - exam.writingStart);
      setStatRow([
        { label: t("now"), value: formatWall(now, true) },
        { label: t("elapsed"), value: hms(elapsed).text },
        { label: t("ends"), value: formatWall(new Date(exam.writingEnd), false) },
      ]);
    }

    const showProgress = phase === "reading" || phase === "writing" || phase === "up" || exam.pausedAt;
    $("progress").hidden = !showProgress;
    if (showProgress) {
      let pct = 100;
      let barTone = "danger";
      if (phase === "reading") {
        const span = Math.max(1, exam.writingStart - exam.readingStart);
        pct = ((tExam - exam.readingStart) / span) * 100;
        barTone = "accent";
      } else if (phase === "writing" || (exam.pausedAt && rawPhase(exam, tExam) === "writing")) {
        const span = Math.max(1, exam.writingEnd - exam.writingStart);
        pct = ((tExam - exam.writingStart) / span) * 100;
        barTone = remainingWrite <= 5 * 60000 ? "danger" : remainingWrite <= 15 * 60000 ? "warn" : "ok";
      } else if (phase === "waiting") {
        pct = 0;
        barTone = "accent";
      }
      pct = Math.max(0, Math.min(100, pct));
      $("progressFill").style.width = pct + "%";
      $("progress").dataset.tone = phase === "up" ? "danger" : barTone;
      $("progress").setAttribute("aria-valuenow", String(Math.round(pct)));
    }

    const heroText = heroIsClock ? formatWall(now, false) : hms(heroMs).text;
    document.title = heroText + (exam.title ? " · " + exam.title : "") + " · " + brand;
    const minuteKey = phase + ":" + Math.floor((heroIsClock ? 0 : heroMs) / 60000) + ":" + (exam.pausedAt ? 1 : 0);
    if (minuteKey !== liveKey) {
      liveKey = minuteKey;
      $("live").textContent = t(kickerKey) + (heroIsClock ? "" : " " + heroText);
    }

    if (!$("panelRunning").hidden) {
      $("ctrlPhase").textContent = t(kickerKey);
      $("ctrlRemain").textContent = heroIsClock ? hms((exam.readingStart || exam.writingStart) - tExam).text : hms(heroMs).text;
      $("btnPause2").textContent = exam.pausedAt ? t("resume") : t("pause");
    }
    if (sheetMode === "start") updatePlan();
    checkPhaseEntry(exam);
    checkAlerts(exam);
  }

  function checkPhaseEntry(exam) {
    if (!exam || exam.pausedAt) return;
    const now = Date.now();
    const phase = rawPhase(exam, now);
    if (phase === "reading" && !exam.fired.reading) {
      exam.fired.reading = true;
      if (now - exam.readingStart < 20000) {
        showBanner(state.settings.bilingual ? I18N.en.bannerReading + " · " + I18N.hi.bannerReading : t("bannerReading"), "accent");
        if (state.settings.sound && state.settings.bells.reading) bell("short");
      }
      save();
    }
    if ((phase === "writing" || phase === "up") && !exam.fired.start) {
      exam.fired.start = true;
      const into = now - exam.writingStart;
      if (into >= 0 && into < 20000) {
        showBanner(state.settings.bilingual ? I18N.en.bannerStart + " · " + I18N.hi.bannerStart : t("bannerStart"), "accent");
        if (state.settings.sound && state.settings.bells.start) bell("long");
      }
      save();
    }
  }

  function checkAlerts(exam) {
    if (!exam || exam.pausedAt) return;
    const now = Date.now();
    const phase = rawPhase(exam, now);
    if (phase !== "writing" && phase !== "up") {
      exam._prevRemaining = exam.writingEnd - now;
      return;
    }
    const remaining = exam.writingEnd - now;
    const prev = exam._prevRemaining;
    exam._prevRemaining = remaining;
    if (prev == null) return;
    if (prev > 0 && remaining <= 0) {
      if (!exam.fired.end) {
        exam.fired.end = true;
        showBanner(state.settings.bilingual ? I18N.en.bannerEnd + " · " + I18N.hi.bannerEnd : t("bannerEnd"), "danger");
        if (state.settings.sound && state.settings.bells.end) bell("end");
        save();
      }
      return;
    }
    if (prev > 5 * 60000 && remaining <= 5 * 60000 && !exam.fired.m5) {
      exam.fired.m5 = true;
      showBanner(t("banner5"), "danger");
      if (state.settings.sound && state.settings.bells.m5) bell("short");
      save();
      return;
    }
    if (prev > 15 * 60000 && remaining <= 15 * 60000 && !exam.fired.m15) {
      exam.fired.m15 = true;
      showBanner(t("banner15"), "warn");
      if (state.settings.sound && state.settings.bells.m15) bell("short");
      save();
      return;
    }
    if (!state.settings.bells.hourly) return;
    const elapsed = now - exam.writingStart;
    const prevElapsed = elapsed - (prev - remaining);
    let lastHour = 0;
    for (let h = 1; h <= 12; h++) {
      if (prevElapsed < h * 3600000 && elapsed >= h * 3600000) lastHour = h;
    }
    if (lastHour && !exam.fired["h" + lastHour]) {
      for (let h = 1; h <= lastHour; h++) exam.fired["h" + h] = true;
      const hi = state.settings.lang === "hi";
      const text = hi
        ? (lastHour === 1 ? "1 घंटा पूरा" : lastHour + " घंटे पूरे")
        : (lastHour === 1 ? "1 hour completed" : lastHour + " hours completed");
      showBanner(text, "accent");
      if (state.settings.sound) bell("short");
      save();
    }
  }

  function clearFutureAlerts(exam) {
    const rem = exam.writingEnd - examTime(exam);
    if (rem > 0) delete exam.fired.end;
    if (rem > 5 * 60000) delete exam.fired.m5;
    if (rem > 15 * 60000) delete exam.fired.m15;
    const elapsed = Math.max(0, examTime(exam) - exam.writingStart);
    for (let h = 1; h <= 12; h++) {
      if (elapsed < h * 3600000) delete exam.fired["h" + h];
    }
    exam._prevRemaining = rem;
  }

  function addMinutes(n) {
    if (!state.exam || !n) return;
    state.exam.writingEnd += n * 60000;
    if (!state.exam.fired) state.exam.fired = {};
    clearFutureAlerts(state.exam);
    save();
    showBanner(fill(t("added"), { n: n }), "accent");
    lastKey = "";
  }
  function togglePause() {
    const exam = state.exam;
    if (!exam) return;
    if (exam.pausedAt) {
      const delta = Date.now() - exam.pausedAt;
      if (exam.readingStart != null) exam.readingStart += delta;
      exam.writingStart += delta;
      exam.writingEnd += delta;
      exam.pausedAt = null;
      exam._prevRemaining = exam.writingEnd - Date.now();
    } else {
      exam.pausedAt = Date.now();
    }
    save();
    lastKey = "";
    updateDock();
  }
  function endExam() {
    state.exam = null;
    save();
    closeDialog();
    closeSheet();
    lastKey = "";
    updateDock();
  }

  function extraMin() {
    const n = Number($("extraInput").value);
    if (!isFinite(n) || n < 0) return 0;
    return Math.min(180, Math.round(n));
  }
  function writingMinutes() {
    const raw = $("writingCustom").value.trim();
    if (raw !== "") {
      const n = Number(raw);
      if (!isFinite(n)) return NaN;
      return Math.round(n);
    }
    const chip = $("writingChips").querySelector("button.on");
    return chip ? Number(chip.dataset.min) : 180;
  }
  function readingMinutes() {
    const chip = $("readingChips").querySelector("button.on");
    return chip ? Number(chip.dataset.min) : 0;
  }
  function scheduleMode() {
    return $("scheduleTimed").classList.contains("on") ? "timed" : "now";
  }
  function setSchedule(mode) {
    const timed = mode === "timed";
    $("scheduleNow").classList.toggle("on", !timed);
    $("scheduleTimed").classList.toggle("on", timed);
    $("scheduleNow").setAttribute("aria-pressed", String(!timed));
    $("scheduleTimed").setAttribute("aria-pressed", String(timed));
    $("nowFields").hidden = timed;
    $("timedFields").hidden = !timed;
    $("readingTimeField").hidden = !$("useReading").checked;
    updateModeHint();
    updatePlan();
  }
  function updateModeHint() {
    $("modeHint").textContent = scheduleMode() === "now" ? t("startHint") : t("timedHint");
  }
  function selectChip(container, min) {
    let found = false;
    container.querySelectorAll("button").forEach(function (b) {
      const on = Number(b.dataset.min) === min;
      if (on) found = true;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", String(on));
    });
    return found;
  }

  function currentPlan() {
    const extra = extraMin();
    if (scheduleMode() === "now") {
      const reading = readingMinutes();
      const writing = writingMinutes();
      if (!isFinite(writing) || writing < 5) return { ok: false, error: t("minWriting") };
      if (writing > 360) return { ok: false, error: t("minWriting") };
      const now = Date.now();
      const readingStart = reading > 0 ? now : null;
      const writingStart = reading > 0 ? now + reading * 60000 : now;
      const writingEnd = writingStart + (writing + extra) * 60000;
      return {
        ok: true, mode: "now", readingStart: readingStart, writingStart: writingStart,
        writingEnd: writingEnd, readingMin: reading, writingMin: writing, extra: extra,
      };
    }
    const writingStart = todayAt($("writingAt").value);
    const baseEnd = todayAt($("endAt").value);
    const useReading = $("useReading").checked;
    const readingStart = useReading ? todayAt($("readingAt").value) : null;
    if (!isFinite(writingStart) || !isFinite(baseEnd) || (useReading && !isFinite(readingStart))) {
      return { ok: false, error: t("badTime") };
    }
    const writingEnd = baseEnd + extra * 60000;
    if (writingEnd <= writingStart) return { ok: false, error: t("endBeforeStart") };
    if (readingStart != null && readingStart > writingStart) return { ok: false, error: t("readingAfter") };
    if (Date.now() >= writingEnd) return { ok: false, error: t("alreadyEnded") };
    return {
      ok: true, mode: "timed", readingStart: readingStart, writingStart: writingStart,
      writingEnd: writingEnd, extra: extra,
    };
  }
  function describePlan(plan) {
    const end = formatWall(new Date(plan.writingEnd), false);
    const hi = state.settings.lang === "hi";
    if (plan.mode === "now") {
      if (plan.readingMin > 0) {
        return hi
          ? "पठन " + formatDuration(plan.readingMin) + ", फिर लेखन " + formatDuration(plan.writingMin + plan.extra) + "। समाप्ति " + end + "।"
          : "Reading " + formatDuration(plan.readingMin) + ", then writing " + formatDuration(plan.writingMin + plan.extra) + ". Ends " + end + ".";
      }
      return hi
        ? "लेखन " + formatDuration(plan.writingMin + plan.extra) + "। समाप्ति " + end + "।"
        : "Writing " + formatDuration(plan.writingMin + plan.extra) + ". Ends " + end + ".";
    }
    const now = Date.now();
    if (plan.readingStart && now < plan.readingStart) {
      const at = formatWall(new Date(plan.readingStart), false);
      return hi
        ? at + " तक प्रतीक्षा, फिर पठन। लेखन समाप्ति " + end + "।"
        : "Waiting until " + at + ", then reading. Writing ends " + end + ".";
    }
    if (now < plan.writingStart) {
      const left = hms(plan.writingStart - now).text;
      return hi
        ? "पठन समय में खुलेगा, " + left + " शेष। लेखन समाप्ति " + end + "।"
        : "Opens in reading time, " + left + " left. Writing ends " + end + ".";
    }
    const left = hms(plan.writingEnd - now).text;
    return hi
      ? "लेखन समय में खुलेगा, " + left + " शेष। समाप्ति " + end + "।"
      : "Opens in writing time, " + left + " left. Ends " + end + ".";
  }
  function updatePlan() {
    const plan = currentPlan();
    const err = $("planError");
    const begin = $("examBegin");
    if (!plan.ok) {
      err.hidden = false;
      err.textContent = plan.error;
      $("planSummary").textContent = "—";
      begin.disabled = true;
      return;
    }
    err.hidden = true;
    $("planSummary").textContent = describePlan(plan);
    begin.disabled = false;
    begin.textContent = plan.mode === "timed" && Date.now() < plan.writingStart ? t("arm") : t("begin");
  }
  function flashSummary() {
    const el = $("planSummary");
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
  }

  function beginExam() {
    const plan = currentPlan();
    if (!plan.ok) return;
    unlockAudio();
    state.settings.sound = $("bellsOn").checked;
    state.settings.school = $("schoolInputStart").value.trim().slice(0, 60);
    $("schoolInput").value = state.settings.school;
    state.exam = {
      title: $("paperInput").value.trim().slice(0, 80),
      readingStart: plan.readingStart,
      writingStart: plan.writingStart,
      writingEnd: plan.writingEnd,
      pausedAt: null,
      fired: {},
      createdAt: Date.now(),
    };
    save();
    checkPhaseEntry(state.exam);
    closeSheet();
    enterFull();
    requestWake();
    lastKey = "";
    updateDock();
    render(new Date());
  }

  function sheetTitleKey() {
    if (sheetMode === "display") return "displayTitle";
    if (sheetMode === "running") return "controlsTitle";
    return "startTitle";
  }
  function openSheet(mode, from) {
    sheetMode = mode;
    opener = from || null;
    $("panelStart").hidden = mode !== "start";
    $("panelRunning").hidden = mode !== "running";
    $("panelDisplay").hidden = mode !== "display";
    $("sheetFoot").hidden = mode !== "start";
    $("sheetTitle").textContent = t(sheetTitleKey());
    document.body.classList.add("sheet-open");
    $("sheet").classList.add("open");
    $("sheet").setAttribute("aria-hidden", "false");
    $("scrim").hidden = false;
    $("scrim").classList.add("show");
    showDock(true);
    if (mode === "start") {
      $("schoolInputStart").value = state.settings.school || "";
      $("bellsOn").checked = !!state.settings.sound;
      updateModeHint();
      updatePlan();
      setTimeout(function () { $("paperInput").focus(); }, 280);
    }
    if (mode === "running" && state.exam) {
      $("ctrlPaper").value = state.exam.title || "";
    }
    if (mode === "display") syncDisplayForm();
    lastKey = "";
  }
  function closeSheet() {
    sheetMode = null;
    document.body.classList.remove("sheet-open");
    fitKey = "";
    $("sheet").classList.remove("open");
    $("sheet").setAttribute("aria-hidden", "true");
    $("scrim").classList.remove("show");
    setTimeout(function () { if (!sheetMode) $("scrim").hidden = true; }, 300);
    if (opener && opener.focus) opener.focus();
  }
  function openDialog() {
    $("dialog").classList.add("show");
    $("dialog").setAttribute("aria-hidden", "false");
    $("dialogKeep").focus();
  }
  function closeDialog() {
    $("dialog").classList.remove("show");
    $("dialog").setAttribute("aria-hidden", "true");
  }

  function syncDisplayForm() {
    const s = state.settings;
    document.querySelectorAll("#themeSwatches .swatch").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.theme === s.theme));
    });
    $("digitPlain").setAttribute("aria-pressed", String(!s.segments));
    $("digitLed").setAttribute("aria-pressed", String(!!s.segments));
    $("hour12").setAttribute("aria-pressed", String(!!s.hour12));
    $("hour24").setAttribute("aria-pressed", String(!s.hour12));
    $("optSeconds").checked = !!s.seconds;
    $("optBlink").checked = !!s.blink;
    $("optDate").checked = !!s.showDate;
    $("optBilingual").checked = !!s.bilingual;
    $("optHideBrand").checked = !!s.hideBrand;
    $("optSound").checked = !!s.sound;
    $("langEn").setAttribute("aria-pressed", String(s.lang !== "hi"));
    $("langHi").setAttribute("aria-pressed", String(s.lang === "hi"));
    setPressedVolume(s.volume);
    $("schoolInput").value = s.school || "";
    $("noticeInput").value = s.notice || "";
    $("brandInput").value = s.brand || "HALLTIME";
    $("bellReading").checked = !!s.bells.reading;
    $("bellStart").checked = !!s.bells.start;
    $("bellHourly").checked = !!s.bells.hourly;
    $("bell15").checked = !!s.bells.m15;
    $("bell5").checked = !!s.bells.m5;
    $("bellEnd").checked = !!s.bells.end;
    updateShare();
  }
  function setPressedVolume(vol) {
    $("volQuiet").setAttribute("aria-pressed", String(vol <= 0.35));
    $("volRoom").setAttribute("aria-pressed", String(vol > 0.35 && vol < 0.8));
    $("volLoud").setAttribute("aria-pressed", String(vol >= 0.8));
  }
  function updateShare() {
    const box = $("shareBox");
    const hosted = location.protocol === "http:" || location.protocol === "https:";
    box.hidden = !hosted;
    if (!hosted) return;
    const url = new URL(location.href);
    url.search = "";
    url.hash = "";
    const s = state.settings;
    if (s.school) url.searchParams.set("school", s.school);
    if (s.theme && s.theme !== "blackboard") url.searchParams.set("theme", s.theme);
    if (s.lang === "hi") url.searchParams.set("lang", "hi");
    if (!s.hour12) url.searchParams.set("hours", "24");
    if (s.segments) url.searchParams.set("led", "1");
    if (!s.seconds) url.searchParams.set("seconds", "0");
    if (s.notice) url.searchParams.set("notice", s.notice);
    if (s.brand && s.brand.toUpperCase() !== "HALLTIME") url.searchParams.set("name", s.brand);
    $("shareUrl").value = url.toString();
  }

  function updateDock() {
    const full = isFull();
    $("fullLabel").textContent = full ? t("exitFullscreen") : t("fullscreen");
    const on = !!state.exam;
    $("examLabel").textContent = on ? t("exam") : t("startExam");
    $("btnExam").classList.toggle("primary", !on);
    $("btnPause").hidden = !on;
    $("btnAdd").hidden = !on;
    $("pauseLabel").textContent = state.exam && state.exam.pausedAt ? t("resume") : t("pause");
    $("btnPause").classList.toggle("primary", !!(state.exam && state.exam.pausedAt));
    $("addLabel").textContent = t("add5");
    $("displayLabel").textContent = t("display");
  }

  function isFull() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }
  function enterFull() {
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (!req) return;
    try {
      const p = req.call(el);
      if (p && p.catch) p.catch(function () {});
    } catch (e) {}
  }
  function exitFull() {
    const exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
    if (exit) {
      try { exit.call(document); } catch (e) {}
    }
  }
  function toggleFull() {
    if (isFull()) exitFull();
    else enterFull();
  }
  function showSafeFrame() {
    const frame = $("safeFrame");
    frame.classList.add("show");
    clearTimeout(safeTimer);
    safeTimer = setTimeout(function () { frame.classList.remove("show"); }, 5000);
  }

  async function requestWake() {
    if (!navigator.wakeLock) return;
    try {
      wakeLock = await navigator.wakeLock.request("screen");
    } catch (e) {}
  }

  function showDock(lock) {
    $("dock").classList.add("show");
    $("idleHint").hidden = true;
    document.body.classList.remove("hide-cursor");
    clearTimeout(dockTimer);
    if (!lock) {
      dockTimer = setTimeout(hideDock, 4000);
    }
  }
  function hideDock() {
    if (sheetMode || $("dialog").classList.contains("show")) return;
    if ($("dock").matches(":hover") || $("dock").contains(document.activeElement)) {
      dockTimer = setTimeout(hideDock, 2000);
      return;
    }
    $("dock").classList.remove("show");
    if (isFull()) document.body.classList.add("hide-cursor");
  }

  let fitKey = "";
  function fitHero() {
    const hero = $("hero");
    const face = hero.querySelector(".face");
    if (!face) return;
    const key = [
      window.innerWidth,
      window.innerHeight,
      document.body.classList.contains("is-exam"),
      document.body.classList.contains("segments"),
      document.body.classList.contains("no-seconds"),
      document.body.classList.contains("sheet-open"),
      hero.dataset.key || "",
      document.documentElement.dataset.phase || "",
    ].join("|");
    if (key === fitKey && hero.style.fontSize) return;
    fitKey = key;
    hero.style.fontSize = "";
    let size = parseFloat(getComputedStyle(hero).fontSize);
    const sheetW = document.body.classList.contains("sheet-open") && window.innerWidth > 860
      ? Math.min(500, window.innerWidth)
      : 0;
    const maxW = (window.innerWidth - sheetW) * 0.9;
    let guard = 0;
    while (face.scrollWidth > maxW && size > 32 && guard < 24) {
      size *= 0.94;
      hero.style.fontSize = size + "px";
      guard++;
    }
    const cluster = document.querySelector(".cluster");
    guard = 0;
    while (cluster.getBoundingClientRect().height > window.innerHeight * 0.86 && size > 32 && guard < 16) {
      size *= 0.94;
      hero.style.fontSize = size + "px";
      guard++;
    }
  }

  function render(now) {
    const exam = state.exam;
    const phase = exam ? rawPhase(exam, examTime(exam)) : "clock";
    const rem = exam ? Math.floor((exam.writingEnd - examTime(exam)) / 1000) : 0;
    const key = [
      now.getHours(), now.getMinutes(), now.getSeconds(),
      phase, rem, state.settings.theme, state.settings.segments, state.settings.hour12,
      state.settings.seconds, state.settings.lang, state.settings.bilingual, state.settings.school,
      state.settings.notice, state.settings.showDate, state.settings.hideBrand, state.settings.brand,
      exam && exam.title, exam && exam.pausedAt, exam && exam.writingEnd,
    ].join("|");
    const dimOnly = key === lastKey;
    if (!dimOnly) lastKey = key;
    renderBoard(now);
    if (!dimOnly) fitHero();
    else {
      const dim = state.settings.blink && now.getMilliseconds() >= 500;
      document.querySelectorAll(".colon, .colon-seg").forEach(function (c) {
        c.classList.toggle("dim", dim && phase !== "up");
      });
    }
  }

  function loop() {
    render(new Date());
    setTimeout(loop, 200);
  }

  function typingTarget(e) {
    const t = e.target;
    if (!t) return false;
    const tag = t.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || t.isContentEditable;
  }

  function bind() {
    $("btnFull").addEventListener("click", toggleFull);
    $("btnExam").addEventListener("click", function () {
      openSheet(state.exam ? "running" : "start", $("btnExam"));
    });
    $("btnDisplay").addEventListener("click", function () { openSheet("display", $("btnDisplay")); });
    $("btnPause").addEventListener("click", togglePause);
    $("btnPause2").addEventListener("click", togglePause);
    $("btnAdd").addEventListener("click", function () { addMinutes(5); });
    $("btnEnd").addEventListener("click", openDialog);
    $("dialogKeep").addEventListener("click", closeDialog);
    $("dialogEnd").addEventListener("click", endExam);
    $("sheetClose").addEventListener("click", closeSheet);
    $("examCancel").addEventListener("click", closeSheet);
    $("scrim").addEventListener("click", closeSheet);
    $("examBegin").addEventListener("click", beginExam);

    $("q1h").addEventListener("click", function () {
      setSchedule("now");
      selectChip($("readingChips"), 0);
      selectChip($("writingChips"), 60);
      $("writingCustom").value = "";
      $("extraInput").value = "0";
      updatePlan();
      flashSummary();
    });
    $("q3h").addEventListener("click", function () {
      setSchedule("now");
      selectChip($("readingChips"), 15);
      selectChip($("writingChips"), 180);
      $("writingCustom").value = "";
      $("extraInput").value = "0";
      updatePlan();
      flashSummary();
    });
    $("qCbse").addEventListener("click", function () {
      setSchedule("timed");
      $("useReading").checked = true;
      $("readingTimeField").hidden = false;
      $("readingAt").value = "10:15";
      $("writingAt").value = "10:30";
      $("endAt").value = "13:30";
      $("extraInput").value = "0";
      updatePlan();
      flashSummary();
    });

    $("scheduleNow").addEventListener("click", function () { setSchedule("now"); });
    $("scheduleTimed").addEventListener("click", function () { setSchedule("timed"); });
    $("useReading").addEventListener("change", function () {
      $("readingTimeField").hidden = !$("useReading").checked;
      updatePlan();
    });
    ["readingAt", "writingAt", "endAt", "extraInput", "paperInput"].forEach(function (id) {
      $(id).addEventListener("input", updatePlan);
    });
    $("schoolInputStart").addEventListener("input", function () {
      state.settings.school = $("schoolInputStart").value.slice(0, 60);
      $("schoolInput").value = state.settings.school;
      save();
      lastKey = "";
    });
    $("writingCustom").addEventListener("input", function () {
      if ($("writingCustom").value.trim() !== "") {
        $("writingChips").querySelectorAll("button").forEach(function (b) {
          b.classList.remove("on");
          b.setAttribute("aria-pressed", "false");
        });
      }
      updatePlan();
    });
    $("readingChips").addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;
      selectChip($("readingChips"), Number(btn.dataset.min));
      updatePlan();
    });
    $("writingChips").addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;
      selectChip($("writingChips"), Number(btn.dataset.min));
      $("writingCustom").value = "";
      updatePlan();
    });
    $("extraMinus").addEventListener("click", function () {
      $("extraInput").value = String(Math.max(0, extraMin() - 5));
      updatePlan();
    });
    $("extraPlus").addEventListener("click", function () {
      $("extraInput").value = String(Math.min(180, extraMin() + 5));
      updatePlan();
    });
    $("extraChips").addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;
      const v = btn.dataset.extra;
      if (v.endsWith("%")) {
        const pct = Number(v.slice(0, -1));
        let base = writingMinutes();
        if (scheduleMode() === "timed") {
          base = Math.round((todayAt($("endAt").value) - todayAt($("writingAt").value)) / 60000);
        }
        if (!isFinite(base) || base < 0) base = 0;
        $("extraInput").value = String(Math.min(180, Math.round(base * pct / 100)));
      } else {
        $("extraInput").value = v;
      }
      updatePlan();
    });
    $("bellsOn").addEventListener("change", function () {
      state.settings.sound = $("bellsOn").checked;
      $("optSound").checked = state.settings.sound;
      save();
    });

    $("addChips").addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;
      addMinutes(Number(btn.dataset.add));
    });
    $("btnAddCustom").addEventListener("click", function () {
      const n = Math.round(Number($("addCustom").value));
      if (n > 0 && n <= 60) addMinutes(n);
    });
    $("ctrlPaper").addEventListener("input", function () {
      if (!state.exam) return;
      state.exam.title = $("ctrlPaper").value.slice(0, 80);
      save();
      lastKey = "";
    });
    $("btnTest").addEventListener("click", function () { unlockAudio(); bell("short"); });
    $("btnTest2").addEventListener("click", function () { unlockAudio(); bell("short"); });

    $("themeSwatches").addEventListener("click", function (e) {
      const btn = e.target.closest(".swatch");
      if (!btn) return;
      state.settings.theme = btn.dataset.theme;
      save();
      syncDisplayForm();
      lastKey = "";
    });
    $("digitPlain").addEventListener("click", function () { state.settings.segments = false; save(); syncDisplayForm(); lastKey = ""; });
    $("digitLed").addEventListener("click", function () { state.settings.segments = true; save(); syncDisplayForm(); lastKey = ""; });
    $("hour12").addEventListener("click", function () { state.settings.hour12 = true; save(); syncDisplayForm(); lastKey = ""; });
    $("hour24").addEventListener("click", function () { state.settings.hour12 = false; save(); syncDisplayForm(); lastKey = ""; });
    $("langEn").addEventListener("click", function () { state.settings.lang = "en"; save(); applyLang(); syncDisplayForm(); });
    $("langHi").addEventListener("click", function () { state.settings.lang = "hi"; save(); applyLang(); syncDisplayForm(); });
    $("optSeconds").addEventListener("change", function () { state.settings.seconds = $("optSeconds").checked; save(); lastKey = ""; });
    $("optBlink").addEventListener("change", function () { state.settings.blink = $("optBlink").checked; save(); });
    $("optDate").addEventListener("change", function () { state.settings.showDate = $("optDate").checked; save(); lastKey = ""; });
    $("optBilingual").addEventListener("change", function () { state.settings.bilingual = $("optBilingual").checked; save(); lastKey = ""; });
    $("optHideBrand").addEventListener("change", function () { state.settings.hideBrand = $("optHideBrand").checked; save(); lastKey = ""; });
    $("optSound").addEventListener("change", function () {
      state.settings.sound = $("optSound").checked;
      $("bellsOn").checked = state.settings.sound;
      save();
    });
    $("volQuiet").addEventListener("click", function () { state.settings.volume = 0.28; save(); setPressedVolume(0.28); });
    $("volRoom").addEventListener("click", function () { state.settings.volume = 0.55; save(); setPressedVolume(0.55); });
    $("volLoud").addEventListener("click", function () { state.settings.volume = 0.9; save(); setPressedVolume(0.9); });
    [
      ["bellReading", "reading"],
      ["bellStart", "start"],
      ["bellHourly", "hourly"],
      ["bell15", "m15"],
      ["bell5", "m5"],
      ["bellEnd", "end"],
    ].forEach(function (pair) {
      $(pair[0]).addEventListener("change", function () {
        state.settings.bells[pair[1]] = $(pair[0]).checked;
        save();
      });
    });
    function liveText(id, key, max) {
      $(id).addEventListener("input", function () {
        state.settings[key] = $(id).value.slice(0, max);
        if (key === "school") $("schoolInputStart").value = state.settings.school;
        save();
        updateShare();
        lastKey = "";
      });
    }
    liveText("schoolInput", "school", 60);
    liveText("noticeInput", "notice", 90);
    liveText("brandInput", "brand", 16);
    $("btnCopy").addEventListener("click", async function () {
      updateShare();
      const url = $("shareUrl").value;
      try {
        await navigator.clipboard.writeText(url);
        $("btnCopy").textContent = t("copied");
      } catch (e) {
        $("shareUrl").focus();
        $("shareUrl").select();
      }
      setTimeout(function () { $("btnCopy").textContent = t("copy"); }, 1600);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if ($("dialog").classList.contains("show")) { closeDialog(); return; }
        if (sheetMode) { closeSheet(); return; }
        if (isFull()) exitFull();
        return;
      }
      if (typingTarget(e)) return;
      if (e.repeat) return;
      const k = e.key.toLowerCase();
      if (k === "f") { e.preventDefault(); toggleFull(); }
      else if (k === "e") { e.preventDefault(); openSheet(state.exam ? "running" : "start"); }
      else if (k === "d") { e.preventDefault(); openSheet("display"); }
      else if (e.code === "Space") {
        if (state.exam) { e.preventDefault(); togglePause(); }
      } else if (e.key === "+" || e.key === "=" || e.code === "NumpadAdd") {
        if (state.exam) { e.preventDefault(); addMinutes(5); }
      } else if (k === "t") {
        const i = THEMES.indexOf(state.settings.theme);
        state.settings.theme = THEMES[(i + 1) % THEMES.length];
        save();
        lastKey = "";
      } else if (k === "l") {
        state.settings.lang = state.settings.lang === "hi" ? "en" : "hi";
        save();
        applyLang();
      } else if (k === "m") {
        state.settings.sound = !state.settings.sound;
        save();
        showBanner(state.settings.sound ? t("bells") : t("scM"), state.settings.sound ? "accent" : "warn");
      }
    });

    ["mousemove", "pointerdown", "touchstart"].forEach(function (evt) {
      document.addEventListener(evt, function () { showDock(false); }, { passive: true });
    });
    document.addEventListener("keydown", function () { showDock(false); });
    $("stage").addEventListener("dblclick", function (e) {
      if (e.target.closest("button, a, input, .sheet, .dock")) return;
      toggleFull();
    });
    document.addEventListener("fullscreenchange", function () {
      updateDock();
      if (isFull()) showSafeFrame();
      else document.body.classList.remove("hide-cursor");
    });
    document.addEventListener("webkitfullscreenchange", function () { updateDock(); });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        requestWake();
        lastKey = "";
        render(new Date());
      }
    });
    window.addEventListener("resize", fitHero);
    window.addEventListener("beforeunload", function (e) {
      if (!state.exam) return;
      const phase = rawPhase(state.exam, Date.now());
      if (phase === "up") return;
      e.preventDefault();
      e.returnValue = "";
    });
  }

  applyUrl();
  bind();
  applyLang();
  syncDisplayForm();
  updateDock();
  render(new Date());
  fitHero();
  loop();
  requestWake();
  document.addEventListener("pointerdown", function once() {
    requestWake();
  }, { once: true });

  if (state.exam) {
    let seen = false;
    try { seen = sessionStorage.getItem("halltime-restored") === "1"; } catch (e) {}
    const phase = rawPhase(state.exam, examTime(state.exam));
    if (!seen && phase !== "up") {
      try { sessionStorage.setItem("halltime-restored", "1"); } catch (e) {}
      showBanner(t("restored"), "accent");
    }
  }

  showDock(false);
  dockTimer = setTimeout(hideDock, 7000);
  hintTimer = setTimeout(function () { $("idleHint").hidden = true; }, 12000);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { lastKey = ""; fitHero(); });
  }
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
