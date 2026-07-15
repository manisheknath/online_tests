/* ============================================================
   QUESTIONS FILE — this is the ONLY file you edit per test.
   Keep quiz-engine.html untouched; just swap this file out
   (or its contents) alongside it for each new test.

   Variable name must stay TEST_CONFIG — the engine looks for
   this exact name.
   ============================================================ */
const TEST_CONFIG = {

  // A short code to tell tests apart at a glance, e.g. "TEST 014"
  testCode: "TEST 001",

  title: "Sample Knowledge Check",
  intro: "Answer every question before time runs out. Your answers submit automatically when the clock hits zero.",

  // How long the taker gets once they hit "Start test", in minutes.
  timeLimitMinutes: 15,

  // Hard deadline — nobody can START the test after this moment.
  // Format: "YYYY-MM-DDTHH:MM:SS" in the taker's local time.
  deadline: "2026-12-31T23:59:59",

  // Questions: type "mc" (multiple choice, auto-graded) or
  // "short" (free-text, ungraded — shown to you for manual review).
  questions: [
    {
      type: "mc",
      prompt: "Which planet is closest to the sun?",
      points: 1,
      options: ["Venus", "Mercury", "Earth", "Mars"],
      correctIndex: 1
    },
    {
      type: "mc",
      prompt: "What is 12 × 8?",
      points: 1,
      options: ["96", "84", "108", "88"],
      correctIndex: 0
    },
    {
      type: "short",
      prompt: "In two or three sentences, explain why the sky appears blue.",
      points: 2
    }
  ]
};
