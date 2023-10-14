interface Seed_Ability {
  name: string;
  shortDescription: string;
  longDescription: string;
}

export const ABILITIES: Seed_Ability[] = [
  {
    name: 'stench',
    shortDescription: 'Has a 10% chance of making target Pokémon flinch with each hit.',
    longDescription:
      "This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect. This ability does not stack with a held item. Overworld: The wild encounter rate is halved while this Pokémon is first in the party.",
  },
  {
    name: 'drizzle',
    shortDescription: 'Summons rain that lasts indefinitely upon entering battle.',
    longDescription:
      "The weather changes to rain when this Pokémon enters battle and does not end unless replaced by another weather condition. If multiple Pokémon with this ability, drought, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
  },
  {
    name: 'speed-boost',
    shortDescription: 'Raises Speed one stage after each turn.',
    longDescription: "This Pokémon's Speed rises one stage after each turn.",
  },
  {
    name: 'battle-armor',
    shortDescription: 'Protects against critical hits.',
    longDescription: 'Moves cannot score critical hits against this Pokémon. This ability functions identically to shell armor.',
  },
  {
    name: 'sturdy',
    shortDescription: 'Prevents being KOed from full HP, leaving 1 HP instead.  Protects against the one-hit KO moves regardless of HP.',
    longDescription:
      'When this Pokémon is at full HP, any hit that would knock it out will instead leave it with 1 HP.  Regardless of its current HP, it is also immune to the one-hit KO moves: fissure, guillotine, horn drill, and sheer cold. If this Pokémon is holding a focus sash, this ability takes precedence and the item will not be consumed.',
  },
  {
    name: 'damp',
    shortDescription: 'Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.',
    longDescription: 'While this Pokémon is in battle, self destruct and explosion will fail and aftermath will not take effect.',
  },
  {
    name: 'limber',
    shortDescription: 'Prevents paralysis.',
    longDescription:
      'This Pokémon cannot be paralyzed. If a Pokémon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.',
  },
  {
    name: 'sand-veil',
    shortDescription: 'Increases evasion to 1.25x  during a sandstorm.  Protects against sandstorm damage.',
    longDescription:
      'During a sandstorm, this Pokémon has 1.25x  its evasion, and it does not take sandstorm damage regardless of type. The evasion bonus does not count as a stat modifier. Overworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.',
  },
  {
    name: 'static',
    shortDescription: 'Has a 30% chance of paralyzing attacking Pokémon on contact.',
    longDescription:
      "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed. Pokémon that are immune to electric-type moves can still be paralyzed by this ability. Overworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
  },
  {
    name: 'volt-absorb',
    shortDescription: 'Absorbs electric moves, healing for 1/4 max HP.',
    longDescription:
      "Whenever an electric-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it. This ability will not take effect if this Pokémon is ground-type and thus immune to Electric moves.  Electric moves will ignore this Pokémon's substitute. This effect includes non-damaging moves, i.e. thunder wave.",
  },
  {
    name: 'water-absorb',
    shortDescription: 'Absorbs water moves, healing for 1/4 max HP.',
    longDescription:
      "Whenever a water-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it. Water moves will ignore this Pokémon's substitute.",
  },
  {
    name: 'oblivious',
    shortDescription: 'Prevents infatuation and protects against captivate.',
    longDescription:
      'This Pokémon cannot be infatuated and is immune to captivate. If a Pokémon is infatuated and acquires this ability, its infatuation is cleared.',
  },
  {
    name: 'cloud-nine',
    shortDescription: 'Negates all effects of weather, but does not prevent the weather itself.',
    longDescription:
      'While this Pokémon is in battle, weather can still be in play, but will not have any of its effects. This ability functions identically to air lock.',
  },
  {
    name: 'compound-eyes',
    shortDescription: "Increases moves' accuracy to 1.3x .",
    longDescription:
      "This Pokémon's moves have 1.3x  their accuracy. This ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold). Overworld: If the first Pokémon in the party has this ability, the chance of a wild Pokémon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
  },
  {
    name: 'insomnia',
    shortDescription: 'Prevents sleep.',
    longDescription:
      'This Pokémon cannot be asleep. This causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle. This ability functions identically to vital spirit in battle.',
  },
  {
    name: 'color-change',
    shortDescription: 'Changes type to match when hit by a damaging move.',
    longDescription:
      "Whenever this Pokémon takes damage from a move, the Pokémon's type changes to match the move. If the Pokémon has two types, both are overridden.  The Pokémon must directly take damage; for example, moves blocked by a substitute will not trigger this ability, nor will moves that deal damage indirectly, such as spikes. This ability takes effect on only the last hit of a multiple-hit attack. In Pokémon Colosseum and XD: Gale of Darkness, this ability does not take effect on Shadow-type moves.",
  },
  {
    name: 'immunity',
    shortDescription: 'Prevents poison.',
    longDescription:
      'This Pokémon cannot be poisoned.  This includes bad poison. If a Pokémon is poisoned and acquires this ability, its poison is healed; this includes when regaining a lost ability upon leaving battle.',
  },
  {
    name: 'flash-fire',
    shortDescription:
      "Protects against fire moves.  Once one has been blocked, the Pokémon's own Fire moves inflict 1.5x  damage until it leaves battle.",
    longDescription:
      "This Pokémon is immune to fire-type moves.  Once this Pokémon has been hit by a Fire move, its own Fire moves will inflict 1.5x  as much damage until it leaves battle. This ability has no effect while the Pokémon is frozen.  The Fire damage bonus is retained even if the Pokémon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pokémon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
  },
  {
    name: 'shield-dust',
    shortDescription: "Protects against incoming moves' extra effects.",
    longDescription:
      "This Pokémon is immune to the extra effects of moves used against it. An extra effect is a move's chance, listed as an \"effect chance\", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.",
  },
  {
    name: 'own-tempo',
    shortDescription: 'Prevents confusion.',
    longDescription:
      'This Pokémon cannot be confused. If a Pokémon is confused and acquires this ability, its confusion will immediately be healed.',
  },
  {
    name: 'suction-cups',
    shortDescription: "Prevents being forced out of battle by other Pokémon's moves.",
    longDescription:
      'This Pokémon cannot be forced out of battle by moves such as whirlwind. dragon tail and circle throw still inflict damage against this Pokémon. Overworld: If the lead Pokémon has this ability, the success rate while fishing is increased.',
  },
  {
    name: 'intimidate',
    shortDescription: "Lowers opponents' Attack one stage upon entering battle.",
    longDescription:
      "When this Pokémon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected. This ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle. This ability has no effect on an opponent that has a substitute. Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
  },
  {
    name: 'shadow-tag',
    shortDescription: 'Prevents opponents from fleeing or switching out.',
    longDescription:
      'While this Pokémon is in battle, opposing Pokémon cannot flee or switch out. Other Pokémon with this ability are unaffected.  Pokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.',
  },
  {
    name: 'rough-skin',
    shortDescription: 'Damages attacking Pokémon for 1/8 their max HP on contact.',
    longDescription:
      "Whenever a move makes contact with this Pokémon, the move's user takes 1/8 of its maximum HP in damage. This ability functions identically to iron barbs.",
  },
  {
    name: 'wonder-guard',
    shortDescription: 'Protects against damaging moves that are not super effective.',
    longDescription:
      'This Pokémon is immune to damaging moves that are not super effective against it. Moves that inflict fixed damage, such as night shade or seismic toss, are considered super effective if their types are.  Damage not directly dealt by moves, such as damage from weather, a status ailment, or spikes, is not prevented. This ability cannot be copied with role play or traded away with skill swap, but it can be copied with trace, disabled with gastro acid, or changed with worry seed.  This Pokémon can still use Role Play itself to lose this ability, but not Skill Swap. If this Pokémon has a substitute, this ability will block moves as usual and any moves not blocked will react to the Substitute as usual.',
  },
  {
    name: 'levitate',
    shortDescription: 'Evades ground moves.',
    longDescription:
      'This Pokémon is immune to ground-type moves, spikes, toxic spikes, and arena trap. This ability is disabled during gravity or ingrain, or while holding an iron ball.  This ability is not disabled during roost.',
  },
  {
    name: 'effect-spore',
    shortDescription: 'Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact.',
    longDescription:
      "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random. Nothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
  },
  {
    name: 'synchronize',
    shortDescription: 'Copies burns, paralysis, and poison received onto the Pokémon that inflicted them.',
    longDescription:
      "Whenever this Pokémon is burned, paralyzed, or poisoned, the Pokémon who gave this Pokémon that ailment is also given the ailment. This ability passes back bad poison when this Pokémon is badly poisoned.  This ability cannot pass on a status ailment that the Pokémon did not directly receive from another Pokémon, such as the poison from toxic spikes or the burn from a flame orb. Overworld: If the lead Pokémon has this ability, wild Pokémon have a 50% chance of having the lead Pokémon's nature, and a 50% chance of being given a random nature as usual, including the lead Pokémon's nature.  This does not work on Pokémon received outside of battle or roaming legendaries.",
  },
  {
    name: 'clear-body',
    shortDescription: 'Prevents stats from being lowered by other Pokémon.',
    longDescription:
      'This Pokémon cannot have its stats lowered by other Pokémon. This ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap. This ability functions identically to white smoke in battle.',
  },
  {
    name: 'natural-cure',
    shortDescription: 'Cures any major status ailment upon switching out.',
    longDescription:
      'This Pokémon is cured of any major status ailment when it is switched out for another Pokémon. If this ability is acquired during battle, the Pokémon is cured upon leaving battle before losing the temporary ability.',
  },
  {
    name: 'lightning-rod',
    shortDescription:
      'Redirects single-target electric moves to this Pokémon where possible.  Absorbs Electric moves, raising Special Attack one stage.',
    longDescription:
      "All other Pokémon's single-target electric-type moves are redirected to this Pokémon if it is an eligible target.  Other Pokémon's Electric moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it. If the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability. If the Pokémon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
  },
  {
    name: 'serene-grace',
    shortDescription: "Doubles the chance of moves' extra effects occurring.",
    longDescription:
      "This Pokémon's moves have twice their usual effect chance. An effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, flamethrower's chance of burning the target is doubled, but protect's chance of success and air cutter's increased critical hit rate are unaffected. secret power is unaffected.",
  },
  {
    name: 'swift-swim',
    shortDescription: 'Doubles Speed during rain.',
    longDescription: "This Pokémon's Speed is doubled during rain. This bonus does not count as a stat modifier.",
  },
  {
    name: 'chlorophyll',
    shortDescription: 'Doubles Speed during strong sunlight.',
    longDescription: "This Pokémon's Speed is doubled during strong sunlight. This bonus does not count as a stat modifier.",
  },
  {
    name: 'illuminate',
    shortDescription: 'Doubles the wild encounter rate.',
    longDescription:
      'Overworld: If the lead Pokémon has this ability, the wild encounter rate is doubled. This ability has no effect in battle.',
  },
  {
    name: 'trace',
    shortDescription: "Copies an opponent's ability upon entering battle.",
    longDescription:
      "When this Pokémon enters battle, it copies a random opponent's ability. This ability cannot copy flower gift, forecast, illusion, imposter, multitype, trace, wonder guard, or zen mode.",
  },
  {
    name: 'huge-power',
    shortDescription: 'Doubles Attack in battle.',
    longDescription:
      "This Pokémon's Attack is doubled while in battle. This bonus does not count as a stat modifier. This ability functions identically to pure power.",
  },
  {
    name: 'poison-point',
    shortDescription: 'Has a 30% chance of poisoning attacking Pokémon on contact.',
    longDescription: "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
  },
  {
    name: 'inner-focus',
    shortDescription: 'Prevents flinching.',
    longDescription: 'This Pokémon cannot flinch.',
  },
  {
    name: 'magma-armor',
    shortDescription: 'Prevents freezing.',
    longDescription:
      'This Pokémon cannot be frozen. If a Pokémon is frozen and acquires this ability, it will immediately thaw out; this includes when regaining a lost ability upon leaving battle. Overworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or flame body.',
  },
  {
    name: 'water-veil',
    shortDescription: 'Prevents burns.',
    longDescription:
      'This Pokémon cannot be burned. If a Pokémon is burned and acquires this ability, its burn is healed; this includes when regaining a lost ability upon leaving battle.',
  },
  {
    name: 'magnet-pull',
    shortDescription: 'Prevents steel opponents from fleeing or switching out.',
    longDescription:
      'While this Pokémon is in battle, opposing steel-type Pokémon cannot flee or switch out. Pokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item. Overworld: If the lead Pokémon has this ability, Steel-type Pokémon have a higher encounter rate.',
  },
  {
    name: 'soundproof',
    shortDescription: 'Protects against sound-based moves.',
    longDescription:
      'This Pokémon is immune to moves flagged as being sound-based. heal bell is unaffected.  uproar still prevents this Pokémon from sleeping.  This Pokémon can still receive a Perish Song counter through baton pass, and will retain a Perish Song counter if it acquires this ability after Perish Song is used. howl, roar of time, sonic boom, and yawn are not flagged as sound-based.',
  },
  {
    name: 'rain-dish',
    shortDescription: 'Heals for 1/16 max HP after each turn during rain.',
    longDescription: 'This Pokémon heals for 1/16 of its maximum HP after each turn during rain.',
  },
  {
    name: 'sand-stream',
    shortDescription: 'Summons a sandstorm that lasts indefinitely upon entering battle.',
    longDescription:
      "The weather changes to a sandstorm when this Pokémon enters battle and does not end unless cancelled by another weather condition. If multiple Pokémon with this ability, drizzle, drought, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay. Overworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
  },
  {
    name: 'pressure',
    shortDescription: 'Increases the PP cost of moves targetting the Pokémon by one.',
    longDescription:
      "Moves targetting this Pokémon use one extra PP. This ability stacks if multiple targets have it.  This ability still affects moves that fail or miss.  This ability does not affect ally moves that target either the entire field or just its side, nor this Pokémon's self-targetted moves; it does, however, affect single-targetted ally moves aimed at this Pokémon, ally moves that target all other Pokémon, and opponents' moves that target the entire field.  If this ability raises a move's PP cost above its remaining PP, it will use all remaining PP. When this Pokémon enters battle, all participating trainers are notified that it has this ability. Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
  },
  {
    name: 'thick-fat',
    shortDescription: 'Halves damage from fire and ice moves.',
    longDescription: 'This Pokémon takes half as much damage from fire- and ice-type moves.',
  },
  {
    name: 'early-bird',
    shortDescription: 'Makes sleep pass twice as quickly.',
    longDescription:
      "This Pokémon's remaining sleep turn count falls by 2 rather than 1. If this Pokémon's sleep counter is at 1, it will fall to 0 and then the Pokémon will wake up.",
  },
  {
    name: 'flame-body',
    shortDescription: 'Has a 30% chance of burning attacking Pokémon on contact.',
    longDescription:
      "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being burned. Overworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or magma armor.",
  },
  {
    name: 'run-away',
    shortDescription: 'Ensures success fleeing from wild battles.',
    longDescription: 'This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.',
  },
  {
    name: 'keen-eye',
    shortDescription: 'Prevents accuracy from being lowered.',
    longDescription:
      "This Pokémon cannot have its accuracy lowered. This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap. Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
  },
  {
    name: 'hyper-cutter',
    shortDescription: 'Prevents Attack from being lowered by other Pokémon.',
    longDescription:
      "This Pokémon's Attack cannot be lowered by other Pokémon. This ability does not prevent any Attack losses other than stat modifiers, such as the Attack cut from a burn.  This Pokémon can still be passed negative Attack modifiers through heart swap or power swap.",
  },
  {
    name: 'pickup',
    shortDescription: "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
    longDescription:
      "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one. The air balloon and eject button cannot be picked up. The items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
  },
  {
    name: 'truant',
    shortDescription: 'Skips every second turn.',
    longDescription:
      'Every second turn on which this Pokémon should attempt to use a move, it will instead do nothing ("loaf around"). Loafing around interrupts moves that take multiple turns the same way paralysis, flinching, etc do.  Most such moves, for example bide or rollout, are simply cut off upon loafing around.  Attacks with a recharge turn, such as hyper beam, do not have to recharge; attacks with a preparation turn, such as fly, do not end up being used.  Moves that are forced over multiple turns and keep going through failure, such as outrage, uproar, or any move forced by encore, keep going as usual. If this Pokémon is confused, its confusion is not checked when loafing around; the Pokémon cannot hurt itself, and its confusion does not end or come closer to ending. If this Pokémon attempts to move but fails, e.g. because of paralysis or gravity, it still counts as having moved and will loaf around the next turn.  If it does not attempt to move, e.g. because it is asleep or frozen, whatever it would have done will be postponed until its next attempt; that is, it will either loaf around or move as usual, depending on what it last did. This ability cannot be changed with worry seed, but it can be disabled with gastro acid, changed with role play, or traded away with skill swap.',
  },
  {
    name: 'hustle',
    shortDescription: 'Strengthens physical moves to inflict 1.5x  damage, but decreases their accuracy to 0.8x .',
    longDescription:
      "This Pokémon's physical moves do 1.5x  as much regular damage, but have 0.8x  their usual accuracy. Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage. Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
  },
  {
    name: 'cute-charm',
    shortDescription: 'Has a 30% chance of infatuating attacking Pokémon on contact.',
    longDescription:
      "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated. Overworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
  },
  {
    name: 'plus',
    shortDescription: 'Increases Special Attack to 1.5x  when a friendly Pokémon has plus or minus.',
    longDescription:
      'This Pokémon has 1.5x  its Special Attack if any friendly Pokémon has plus or minus. This bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.',
  },
  {
    name: 'minus',
    shortDescription: 'Increases Special Attack to 1.5x  when a friendly Pokémon has plus or minus.',
    longDescription:
      'This Pokémon has 1.5x  its Special Attack if any friendly Pokémon has plus or minus. This bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.',
  },
  {
    name: 'forecast',
    shortDescription: "Changes castform's type and form to match the weather.",
    longDescription:
      "During rain, strong sunlight, or hail, this Pokémon's type changes to water, fire, or ice, respectively, and its form changes to match. This ability has no effect for any Pokémon other than castform. If the weather ends or becomes anything that does not trigger this ability, or a Pokémon with air lock or cloud nine enters battle, this Pokémon's type and form revert to their default.  If this ability is lost or disabled, this Pokémon cannot change its current type and form until it regains its ability.",
  },
  {
    name: 'sticky-hold',
    shortDescription: 'Prevents a held item from being removed by other Pokémon.',
    longDescription:
      "This Pokémon's hold item cannot be removed by other Pokémon. Damaging moves that would remove this Pokémon's item can still inflict damage against this Pokémon, e.g. knock off or pluck.  This Pokémon can still use moves that involve the loss of its own item, e.g. fling or trick. Overworld: If the lead Pokémon has this ability, the encounter rate while fishing is increased.",
  },
  {
    name: 'shed-skin',
    shortDescription: 'Has a 33% chance of curing any major status ailment after each turn.',
    longDescription: 'After each turn, this Pokémon has a 33% of being cured of any major status ailment.',
  },
  {
    name: 'guts',
    shortDescription: 'Increases Attack to 1.5x  with a major status ailment.',
    longDescription:
      'Whenever this Pokémon is asleep, burned, paralyzed, or poisoned, it has 1.5x  its Attack.  This Pokémon is not affected by the usual Attack cut from a burn. This bonus does not count as a stat modifier.',
  },
  {
    name: 'marvel-scale',
    shortDescription: 'Increases Defense to 1.5x  with a major status ailment.',
    longDescription:
      'Whenever this Pokémon has a major status ailment, it has 1.5x  its Defense. This bonus does not count as a stat modifier.',
  },
  {
    name: 'liquid-ooze',
    shortDescription: 'Gegnern die absorbierende Attacken einsetzen, wird Schaden in der Höhe zugefügt, die die Attacke geheilt hätte.',
    longDescription:
      'Wenn ein Pokémon mit dieser Fähigkeit von einer absorbierenden Attacke wie absorb getroffen wird, erleidet der Gegner so viele hp Schaden wie ihn die Attacke geheilt hätte. dream eater ist davon nicht betroffen.',
  },
  {
    name: 'overgrow',
    shortDescription: 'Erhöht den Schaden von grass Attacken um 50% wenn nur noch 1/3 der maximalen hp oder weniger übrig sind.',
    longDescription:
      'Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine grass Attacken verstärkt, so dass sie 1,5x  so viel regular damage anrichten wie sonst.',
  },
  {
    name: 'blaze',
    shortDescription: 'Strengthens fire moves to inflict 1.5x  damage at 1/3 max HP or less.',
    longDescription: 'When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5x  as much regular damage.',
  },
  {
    name: 'torrent',
    shortDescription: 'Strengthens water moves to inflict 1.5x  damage at 1/3 max HP or less.',
    longDescription: 'When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5x  as much regular damage.',
  },
  {
    name: 'swarm',
    shortDescription: 'Strengthens bug moves to inflict 1.5x  damage at 1/3 max HP or less.',
    longDescription:
      'When this Pokémon has 1/3 or less of its HP remaining, its bug-type moves inflict 1.5x  as much regular damage. Overworld: If the lead Pokémon has this ability, the wild encounter rate is increased.',
  },
  {
    name: 'rock-head',
    shortDescription: 'Protects against recoil damage.',
    longDescription:
      "This Pokémon does not receive recoil damage from its recoil moves. struggle's recoil is unaffected.  This ability does not prevent crash damage from missing with jump kick or high jump kick.",
  },
  {
    name: 'drought',
    shortDescription: 'Summons strong sunlight that lasts indefinitely upon entering battle.',
    longDescription:
      "The weather changes to strong sunlight when this Pokémon enters battle and does not end unless cancelled by another weather condition. If multiple Pokémon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
  },
  {
    name: 'arena-trap',
    shortDescription: 'Prevents opponents from fleeing or switching out.  Eluded by flying-types and Pokémon in the air.',
    longDescription:
      'While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.  flying-type Pokémon and Pokémon in the air, e.g. due to levitate or magnet rise, are unaffected. Pokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item. Overworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.',
  },
  {
    name: 'vital-spirit',
    shortDescription: 'Prevents sleep.',
    longDescription:
      'This Pokémon cannot be asleep. This causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle. This ability functions identically to insomnia in battle. Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.',
  },
  {
    name: 'white-smoke',
    shortDescription: 'Prevents stats from being lowered by other Pokémon.',
    longDescription:
      'This Pokémon cannot have its stats lowered by other Pokémon. This ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis; nor self-inflicted stat drops, such as the Special Attack drop from overheat; nor opponent-triggered stat boosts, such as the Attack boost from swagger.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap. This ability functions identically to clear body in battle. Overworld: If the lead Pokémon has this ability, the wild encounter rate is halved.',
  },
  {
    name: 'pure-power',
    shortDescription: 'Doubles Attack in battle.',
    longDescription:
      "This Pokémon's Attack is doubled in battle. This bonus does not count as a stat modifier. This ability functions identically to huge power.",
  },
  {
    name: 'shell-armor',
    shortDescription: 'Protects against critical hits.',
    longDescription: 'Moves cannot score critical hits against this Pokémon. This ability functions identically to battle armor.',
  },
  {
    name: 'air-lock',
    shortDescription: 'Negates all effects of weather, but does not prevent the weather itself.',
    longDescription:
      'While this Pokémon is in battle, weather can still be in play, but will not have any of its effects. This ability functions identically to cloud nine.',
  },
];
