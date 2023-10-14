interface Seed_Item {
  name: string;
  effect: string;
  flingEffect?: string | null;
  flingPower?: number | null;
  sprite: string;
}

export const ITEMS: Seed_Item[] = [
  {
    name: 'choice-band',
    effect: "Holder's Attack is 1.5x, but it can only select the first move it executes.",
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-band.png',
  },
  {
    name: 'leftovers',
    effect: 'At the end of every turn, holder restores 1/16 of its max HP.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leftovers.png',
  },
  {
    name: 'lum-berry',
    effect: 'Holder cures itself if it has a non-volatile status or is confused. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lum-berry.png',
  },
  {
    name: 'salac-berry',
    effect: "Raises holder's Speed by 1 stage when at 1/4 max HP or less. Single use.",
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/salac-berry.png',
  },
  {
    name: 'apicot-berry',
    effect: "Raises holder's Sp. Def by 1 stage when at 1/4 max HP or less. Single use.",
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/apicot-berry.png',
  },
  {
    name: 'black-belt',
    effect: "Holder's Fighting-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/black-belt.png',
  },
  {
    name: 'black-glasses',
    effect: "Holder's Dark-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/black-glasses.png',
  },
  {
    name: 'bright-powder',
    effect: 'The accuracy of attacks against the holder is 0.9x.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/bright-powder.png',
  },
  {
    name: 'charcoal',
    effect: "Holder's Fire-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/charcoal.png',
  },
  {
    name: 'chesto-berry',
    effect: 'Holder wakes up if it is asleep. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/chesto-berry.png',
  },
  {
    name: 'dragon-fang',
    effect: "Holder's Dragon-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 70,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dragon-fang.png',
  },
  {
    name: 'ganlon-berry',
    effect: "Raises holder's Defense by 1 stage when at 1/4 max HP or less. Single use.",
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ganlon-berry.png',
  },
  {
    name: 'grepa-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/grepa-berry.png',
  },
  {
    name: 'hard-stone',
    effect: "Holder's Rock-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 100,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hard-stone.png',
  },
  {
    name: 'kelpsy-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kelpsy-berry.png',
  },
  {
    name: 'kings-rock',
    effect: "Holder's attacks without a chance to flinch gain a 10% chance to flinch.",
    flingEffect: 'flinch',
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kings-rock.png',
  },
  {
    name: 'lansat-berry',
    effect: 'Holder gains the Focus Energy effect when at 1/4 max HP or less. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lansat-berry.png',
  },
  {
    name: 'lax-incense',
    effect: 'The accuracy of attacks against the holder is 0.95x.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lax-incense.png',
  },
  {
    name: 'leppa-berry',
    effect: "Restores 10 PP to the first of the holder's moves to reach 0 PP. Single use.",
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leppa-berry.png',
  },
  {
    name: 'liechi-berry',
    effect: "Raises holder's Attack by 1 stage when at 1/4 max HP or less. Single use.",
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/liechi-berry.png',
  },
  {
    name: 'magnet',
    effect: "Holder's Electric-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/magnet.png',
  },
  {
    name: 'metal-coat',
    effect: "Holder's Steel-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metal-coat.png',
  },
  {
    name: 'miracle-seed',
    effect: "Holder's Grass-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/miracle-seed.png',
  },
  {
    name: 'mystic-water',
    effect: "Holder's Water-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mystic-water.png',
  },
  {
    name: 'never-melt-ice',
    effect: "Holder's Ice-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/never-melt-ice.png',
  },
  {
    name: 'petaya-berry',
    effect: "Raises holder's Sp. Atk by 1 stage when at 1/4 max HP or less. Single use.",
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/petaya-berry.png',
  },
  {
    name: 'poison-barb',
    effect: "Holder's Poison-type attacks have 1.1x power.",
    flingEffect: 'poison',
    flingPower: 70,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poison-barb.png',
  },
  {
    name: 'quick-claw',
    effect: 'Each turn, holder has a 20% chance to move first in its priority bracket.',
    flingEffect: null,
    flingPower: 80,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/quick-claw.png',
  },
  {
    name: 'scope-lens',
    effect: "Holder's critical hit ratio is raised by 1 stage.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/scope-lens.png',
  },
  {
    name: 'sea-incense',
    effect: "Holder's Water-type attacks have 1.05x power.",
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sea-incense.png',
  },
  {
    name: 'sharp-beak',
    effect: "Holder's Flying-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 50,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sharp-beak.png',
  },
  {
    name: 'shell-bell',
    effect: 'After an attack, holder gains 1/8 of the damage in HP dealt to other Pokemon.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shell-bell.png',
  },
  {
    name: 'silk-scarf',
    effect: "Holder's Normal-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/silk-scarf.png',
  },
  {
    name: 'silver-powder',
    effect: "Holder's Bug-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/silver-powder.png',
  },
  {
    name: 'soft-sand',
    effect: "Holder's Ground-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/soft-sand.png',
  },
  {
    name: 'spell-tag',
    effect: "Holder's Ghost-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/spell-tag.png',
  },
  {
    name: 'starf-berry',
    effect: 'Raises a random stat by 2 when at 1/4 max HP or less (not acc/eva). Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/starf-berry.png',
  },
  {
    name: 'twisted-spoon',
    effect: "Holder's Psychic-type attacks have 1.1x power.",
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/twisted-spoon.png',
  },
  {
    name: 'white-herb',
    effect: 'Restores all lowered stat stages to 0 when one is less than 0. Single use.',
    flingEffect: 'herb-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/white-herb.png',
  },
  {
    name: 'deep-sea-scale',
    effect: 'If held by a Clamperl, its Sp. Def is doubled.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/deep-sea-scale.png',
  },
  {
    name: 'deep-sea-tooth',
    effect: 'If held by a Clamperl, its Sp. Atk is doubled.',
    flingEffect: null,
    flingPower: 90,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/deep-sea-tooth.png',
  },
  {
    name: 'light-ball',
    effect: 'If held by a Pikachu, its Special Attack is doubled.',
    flingEffect: 'paralyze',
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/light-ball.png',
  },
  {
    name: 'lucky-punch',
    effect: 'If held by a Chansey, its critical hit ratio is raised by 2 stages.',
    flingEffect: null,
    flingPower: 40,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lucky-punch.png',
  },
  {
    name: 'metal-powder',
    effect: "If held by a Ditto that hasn't Transformed, its Defense is doubled.",
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metal-powder.png',
  },
  {
    name: 'soul-dew',
    effect: 'If held by a Latias or a Latios, its Sp. Atk and Sp. Def are 1.5x.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/soul-dew.png',
  },
  {
    name: 'stick',
    effect: 'If held by a Farfetch’d, its critical hit ratio is raised by 2 stages.',
    flingEffect: null,
    flingPower: 60,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/stick.png',
  },
  {
    name: 'thick-club',
    effect: 'If held by a Cubone or a Marowak, its Attack is doubled.',
    flingEffect: null,
    flingPower: 90,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thick-club.png',
  },
  {
    name: 'aguav-berry',
    effect: 'Restores 1/8 max HP at 1/2 max HP or less; confuses if -SpD Nature. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/aguav-berry.png',
  },
  {
    name: 'aspear-berry',
    effect: 'Holder is cured if it is frozen. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/aspear-berry.png',
  },
  {
    name: 'cheri-berry',
    effect: 'Holder cures itself if it is paralyzed. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png',
  },
  {
    name: 'figy-berry',
    effect: 'Restores 1/8 max HP at 1/2 max HP or less; confuses if -Atk Nature. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/figy-berry.png',
  },
  {
    name: 'focus-band',
    effect: 'Holder has a 10% chance to survive an attack that would KO it with 1 HP.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/focus-band.png',
  },
  {
    name: 'iapapa-berry',
    effect: 'Restores 1/8 max HP at 1/2 max HP or less; confuses if -Def Nature. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/iapapa-berry.png',
  },
  {
    name: 'macho-brace',
    effect: "Holder's Speed is halved. The Klutz Ability does not ignore this effect.",
    flingEffect: null,
    flingPower: 60,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/macho-brace.png',
  },
  {
    name: 'mago-berry',
    effect: 'Restores 1/8 max HP at 1/2 max HP or less; confuses if -Spe Nature. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mago-berry.png',
  },
  {
    name: 'mental-herb',
    effect: 'Holder is cured if it is infatuated. Single use.',
    flingEffect: 'herb-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mental-herb.png',
  },
  {
    name: 'oran-berry',
    effect: 'Restores 10 HP when at 1/2 max HP or less. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oran-berry.png',
  },
  {
    name: 'pecha-berry',
    effect: 'Holder is cured if it is poisoned. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pecha-berry.png',
  },
  {
    name: 'persim-berry',
    effect: 'Holder is cured if it is confused. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/persim-berry.png',
  },
  {
    name: 'rawst-berry',
    effect: 'Holder is cured if it is burned. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rawst-berry.png',
  },
  {
    name: 'sitrus-berry',
    effect: 'Restores 30 HP when at 1/2 max HP or less. Single use.',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sitrus-berry.png',
  },
  {
    name: 'wiki-berry',
    effect: 'Restores 1/8 max HP at 1/2 max HP or less; confuses if -SpA Nature. Single use',
    flingEffect: 'berry-effect',
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/wiki-berry.png',
  },
  {
    name: 'belue-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/belue-berry.png',
  },
  {
    name: 'claw-fossil',
    effect: 'Can be revived into Anorith.',
    flingEffect: null,
    flingPower: 100,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/claw-fossil.png',
  },
  {
    name: 'cornn-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cornn-berry.png',
  },
  {
    name: 'dive-ball',
    effect: 'A Poke Ball that works especially well on Pokemon that live underwater.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dive-ball.png',
  },
  {
    name: 'dome-fossil',
    effect: 'Can be revived into Kabuto.',
    flingEffect: null,
    flingPower: 100,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dome-fossil.png',
  },
  {
    name: 'dragon-scale',
    effect: 'Evolves Seadra into Kingdra when traded.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dragon-scale.png',
  },
  {
    name: 'durin-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/durin-berry.png',
  },
  {
    name: 'fire-stone',
    effect: 'Evolves certain species of Pokemon when used.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png',
  },
  {
    name: 'friend-ball',
    effect: 'A Poke Ball that makes caught Pokemon more friendly.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/friend-ball.png',
  },
  {
    name: 'great-ball',
    effect: 'A high-performance Ball that provides a higher catch rate than a Poke Ball.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',
  },
  {
    name: 'helix-fossil',
    effect: 'Can be revived into Omanyte.',
    flingEffect: null,
    flingPower: 100,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/helix-fossil.png',
  },
  {
    name: 'hondew-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hondew-berry.png',
  },
  {
    name: 'leaf-stone',
    effect: 'Evolves certain species of Pokemon when used.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png',
  },
  {
    name: 'luxury-ball',
    effect: 'A comfortable Poke Ball that makes a caught wild Pokemon quickly grow friendly.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/luxury-ball.png',
  },
  {
    name: 'magost-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/magost-berry.png',
  },
  {
    name: 'master-ball',
    effect: 'The best Ball with the ultimate performance. It will catch any wild Pokemon.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
  },
  {
    name: 'moon-stone',
    effect: 'Evolves certain species of Pokemon when used.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png',
  },
  {
    name: 'nanab-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/nanab-berry.png',
  },
  {
    name: 'nest-ball',
    effect: 'A Poke Ball that works especially well on weaker Pokemon in the wild.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/nest-ball.png',
  },
  {
    name: 'net-ball',
    effect: 'A Poke Ball that works especially well on Water- and Bug-type Pokemon.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/net-ball.png',
  },
  {
    name: 'nomel-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/nomel-berry.png',
  },
  {
    name: 'old-amber',
    effect: 'Can be revived into Aerodactyl.',
    flingEffect: null,
    flingPower: 100,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/old-amber.png',
  },
  {
    name: 'pamtre-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pamtre-berry.png',
  },
  {
    name: 'poke-ball',
    effect: 'A device for catching wild Pokemon. It is designed as a capsule system.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
  },
  {
    name: 'pomeg-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pomeg-berry.png',
  },
  {
    name: 'premier-ball',
    effect: 'A rare Poke Ball that has been crafted to commemorate an event.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png',
  },
  {
    name: 'qualot-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/qualot-berry.png',
  },
  {
    name: 'rabuta-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rabuta-berry.png',
  },
  {
    name: 'razz-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/razz-berry.png',
  },
  {
    name: 'repeat-ball',
    effect: 'A Poke Ball that works well on Pokemon species that were previously caught.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/repeat-ball.png',
  },
  {
    name: 'root-fossil',
    effect: 'Can be revived into Lileep.',
    flingEffect: null,
    flingPower: 100,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/root-fossil.png',
  },
  {
    name: 'spelon-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/spelon-berry.png',
  },
  {
    name: 'sun-stone',
    effect: 'Evolves certain species of Pokemon when used.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png',
  },
  {
    name: 'tamato-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tamato-berry.png',
  },
  {
    name: 'thunder-stone',
    effect: 'Evolves certain species of Pokemon when used.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png',
  },
  {
    name: 'timer-ball',
    effect: 'A Poke Ball that becomes better the more turns there are in a battle.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/timer-ball.png',
  },
  {
    name: 'ultra-ball',
    effect: 'An ultra-performance Ball that provides a higher catch rate than a Great Ball.',
    flingEffect: null,
    flingPower: null,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',
  },
  {
    name: 'up-grade',
    effect: 'Evolves Porygon into Porygon2 when traded.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/up-grade.png',
  },
  {
    name: 'water-stone',
    effect: 'Evolves certain species of Pokemon when used.',
    flingEffect: null,
    flingPower: 30,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png',
  },
  {
    name: 'watmel-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/watmel-berry.png',
  },
  {
    name: 'wepear-berry',
    effect: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck',
    flingEffect: null,
    flingPower: 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/wepear-berry.png',
  },
];
