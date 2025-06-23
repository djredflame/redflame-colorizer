declare function defer(fn: () => void): void;
declare function post(message: string): void;

declare class Task {
  constructor(callback: () => void);
  schedule(time: number): void;
}

function colorize(): void {
  const task = new Task(function () {
    const liveSet = new LiveAPI("live_set");
    const count = liveSet.getcount("tracks");

    const colorMap: { [key: string]: number } = {
      // Drums and percussion instruments
      kick: 14,
      snare: 14,
      clap: 14,
      hihat: 14,
      hat: 14,
      tom: 14,
      "perc-low": 14,
      "perc-mid": 14,
      "perc-high": 14,
      "perc-top": 14,
      "perc-bottom": 14,
      openhat: 14,
      "open-hat": 14,
      closedhat: 14,
      "closed-hat": 14,
      hh: 14,
      oh: 14,
      ch: 14,
      "hat-open": 14,
      "hat-closed": 14,
      cabasa: 14,
      woodblock: 14,
      rimshot: 14,
      snap: 14,
      tambourine: 14,
      triangle: 14,
      cowbell: 14,
      claves: 14,
      sticks: 14,
      bongo: 14,
      "bongo-hi": 14,
      "bongo-low": 14,
      "bongo-mid": 14,
      conga: 14,
      "conga-hi": 14,
      "conga-low": 14,
      drum: 14,
      "kick drum": 14,
      "snare drum": 14,
      crash: 14,
      ride: 14,
      "ride cymbal": 14,
      "crash cymbal": 14,
      Maracas: 14,

      // Strings that are plucked (guitar family)
      guitar: 30,
      contrabass: 30,
      harp: 30,
      acoustic: 30,
      "electric guitar": 30,
      nylon: 30,
      steel: 30,
      slide: 30,

      // Strings that are bowed (classical string instruments)
      violin: 1,
      cello: 1,
      viola: 1,
      strings: 1,
      "string ensemble": 1,
      orchestra: 1,
      "solo strings": 1,
      chamber: 1,

      // Keyboard-based instruments
      piano: 11,
      clav: 11,
      rhodes: 11,
      ep: 11,
      keys: 11,
      organ: 11,
      keyboards: 11,
      "synth keys": 11,
      "toy piano": 11,
      "upright piano": 11,
      harpsichord: 11,

      // Sustained sounds used for background or atmosphere
      pad: 12,
      ambient: 12,
      drone: 12,
      sustain: 12,
      "air pad": 12,
      "space pad": 12,
      "warm pad": 12,
      "cold pad": 12,
      background: 12,

      // Synthesizers used for melody and leads
      lead: 65,
      arp: 65,
      melody: 65,
      synth: 65,
      mono: 65,
      poly: 65,
      "brass lead": 65,
      saw: 65,
      square: 65,
      acid: 65,

      // Bass instruments and sub-frequencies
      bass: 19,
      sub: 19,
      "808": 19,
      "synth bass": 19,
      "electric bass": 19,
      bassline: 19,
      reese: 19,
      "fm bass": 19,
      subby: 19,

      // Vocal and voice-related elements
      vocal: 15,
      voice: 15,
      vox: 15,
      speech: 15,
      spoken: 15,
      talk: 15,
      rap: 15,
      female: 15,
      male: 15,
      vocoder: 15,

      // Effects and transitional sounds
      fx: 69,
      sfx: 69,
      riser: 69,
      sweep: 69,
      impact: 69,
      reverse: 69,
      "impact fx": 69,
      "transition fx": 69,
      laser: 69,
      fall: 69,
      rise: 69,
      "mod fx": 69,

      // Bell-like percussive melodic instruments
      bell: 54,
      kalimba: 54,
      mallet: 54,
      bells: 54,
      "music box": 54,
      celesta: 54,
      toy: 54,

      // Brass and wind instruments
      brass: 4,
      bras: 4,
      sax: 4,
      trumpet: 4,
      horn: 4,
      tuba: 4,
      flugelhorn: 4,
      clarinet: 4,
      pipes: 4,
      whistle: 4,

      // Plucked electronic sounds and short percussive blips
      pluck: 66,
      blip: 66,
      glitch: 66,

      // Sound design and cinematic elements
      whoosh: 70,
      drop: 70,
      hit: 70,
      tension: 70,
      boom: 70,

      // World instruments
      sitar: 31,
      koto: 31,
      shamisen: 31,
      tabla: 31,
      djembe: 31,
      conga: 31,
      bongo: 31,
      "hang drum": 31,
      balafon: 31,
      berimbau: 31,
      oud: 31,

      // Hybrid and layered instruments
      hybrid: 48,
      layer: 48,
      stack: 48,

      // Experimental
      noise: 71,
      texture: 71,
      granular: 71,
      morph: 71,
      resample: 71,
      "fx bus": 71,
      "glitch vox": 71,
      "no-input": 71,
      broken: 71,
      tape: 71,
      vinyl: 71,
    };

    for (let i = 0; i < count; i++) {
      const track = new LiveAPI("live_set tracks " + i);
      let name: string = "";
      try {
        const rawName = track.get("name");
        if (Array.isArray(rawName) && typeof rawName[0] === "string") {
          name = rawName[0].toLowerCase();
        } else if (typeof rawName === "string") {
          name = rawName.toLowerCase();
        }
      } catch (err) {
        name = "";
      }

      const lower = typeof name === "string" ? name.toLowerCase() : "";
      let assignedColor: number | undefined = undefined;
      for (const key in colorMap) {
        if (lower.indexOf(key) !== -1) {
          assignedColor = colorMap[key];
          track.set("color_index", assignedColor);

          const clipSlotsCount = track.getcount("clip_slots");
          for (let j = 0; j < clipSlotsCount; j++) {
            const clipSlot = new LiveAPI(
              `live_set tracks ${i} clip_slots ${j}`
            );
            const hasClip = clipSlot.get("has_clip");
            if (Array.isArray(hasClip) && hasClip[0] === 1) {
              const clip = new LiveAPI(
                `live_set tracks ${i} clip_slots ${j} clip`
              );
              if (clip && typeof clip.set === "function") {
                clip.set("color_index", assignedColor);
              }
            }
          }
          break;
        }
      }
    }
  });
  task.schedule(0);
}

// Automatically trigger colorization once the device is initialized
const thisDevice = new LiveAPI("this_device");
thisDevice.call("store_chains"); // force initialization
defer(() => {
  colorize();
});
