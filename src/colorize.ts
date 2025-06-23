declare function defer(fn: () => void): void;
declare function post(message: string): void;

declare class Task {
  constructor(callback: () => void);
  schedule(time: number): void;
}

function colorize(): void {
  var task = new Task(function () {
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
      perc: 14,
      cabasa: 14,
      woodblock: 14,

      // Strings that are plucked (guitar family)
      guitar: 30,
      contrabass: 30,
      harp: 30,

      // Strings that are bowed (classical string instruments)
      violin: 1,
      cello: 1,
      viola: 1,
      strings: 1,

      // Keyboard-based instruments
      piano: 11,
      clav: 11,
      rhodes: 11,
      ep: 11,
      keys: 11,
      organ: 44,

      // Sustained sounds used for background or atmosphere
      pad: 12,
      ambient: 12,
      drone: 12,
      sustain: 12,

      // Synthesizers used for melody and leads
      lead: 65,
      arp: 65,
      melody: 65,
      synth: 65,

      // Bass instruments and sub-frequencies
      bass: 19,
      sub: 19,
      "808": 19,

      // Vocal and voice-related elements
      vocal: 15,
      voice: 15,
      vox: 15,
      speech: 15,

      // Effects and transitional sounds
      fx: 69,
      sfx: 69,
      riser: 69,
      sweep: 69,
      impact: 69,
      reverse: 69,

      // Bell-like percussive melodic instruments
      bell: 54,
      kalimba: 54,
      mallet: 54,

      // Brass and wind instruments
      brass: 4,
      bras: 4,
      sax: 4,
      trumpet: 4,
      horn: 4,
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
var thisDevice = new LiveAPI("this_device");
thisDevice.call("store_chains"); // force initialization
defer(() => {
  colorize();
});
