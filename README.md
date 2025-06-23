# Redflame Colorizer 🎛🔥

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

Redflame Colorizer is a minimal and powerful Max for Live device for Ableton Live that automatically assigns colors to your tracks based on instrument types.

## 🎯 What It Does

When you drop the device into your Live Set, it immediately scans all existing tracks and clips, and applies a color scheme based on their names. For example:

```
- 🥁 Drums & Percussion → Red
  `kick`, `snare`, `hihat`, `perc-low`, `clap`, `tambourine`, `cowbell`, `rimshot`, `snap`, `sticks`, `kick drum`, `snare drum`

- 🎸 Plucked Strings → Sand Brown
  `guitar`, `harp`, `acoustic`, `electric guitar`, `nylon`, `slide`

- 🎻 Bowed Strings → Orange
  `violin`, `cello`, `viola`, `strings`, `orchestra`, `solo strings`

- 🎹 Keys & Pianos → Pink-Violet
  `piano`, `ep`, `keys`, `organ`, `clav`, `toy piano`, `synth keys`, `upright piano`, `harpsichord`

- 🌫 Pads & Atmosphere → Pink
  `pad`, `ambient`, `drone`, `background`, `warm pad`, `space pad`

- 🎚 Leads & Synths → Indigo Blue
  `lead`, `synth`, `arp`, `melody`, `mono`, `acid`, `saw`, `square`, `brass lead`

- 🔊 Bass & Sub → Neon Green
  `bass`, `sub`, `808`, `reese`, `bassline`, `electric bass`, `synth bass`, `fm bass`

- 🗣 Vocals → Signal Orange
  `vocal`, `voice`, `vox`, `rap`, `spoken`, `vocoder`, `male`, `female`

- 🎧 FX & Risers → Dark Gray
  `fx`, `sfx`, `riser`, `impact`, `sweep`, `fall`, `laser`, `reverse`, `mod fx`

- 🔔 Bells & Mallets → Magenta
  `bell`, `mallet`, `kalimba`, `music box`, `celesta`

- 🎷 Brass & Winds → Yellow-Green
  `brass`, `sax`, `horn`, `trumpet`, `tuba`, `clarinet`, `pipes`, `whistle`

- 🌍 World Instruments → Pastel Green
  `sitar`, `tabla`, `bongo`, `djembe`, `hang drum`, `balafon`, `oud`

- 🧪 Experimental → Anthracite
  `noise`, `granular`, `morph`, `resample`, `tape`, `vinyl`, `fx bus`, `glitch vox`
```

Both tracks and clips (in Session View) will be colorized.

## ✅ How to Use

1. Open your Ableton Live set.
2. Drag the `Redflame Colorizer.amxd` device into main track.
3. Boom — track names are analyzed and colored automatically.
4. Rename any track — the color will update instantly.

## 🧠 Why Use This?

- Better visual overview of your session
- Instant recognition of track types
- Save time on manual coloring
- Works with your own naming conventions

## 💡 Customization

Want to change colors or extend the mappings? Open the `colorize.ts` file and edit the `colorMap` dictionary.

## 📜 License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0).  
That means you are free to use and adapt the project for personal and educational purposes, but **not for commercial use**.  
For full details, see the [LICENSE](LICENSE) file.

---

Made with ❤️ by DJRedflame  
Follow the 🔥, not the rules.
