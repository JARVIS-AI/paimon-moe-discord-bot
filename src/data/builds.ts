interface Role {
  [key: string]: {
    recommended: boolean;
    weapons: Array<{ id: string; refine?: number | number[] }>;
    artifacts: string[][];
    mainStats: {
      sands: string;
      goblet: string;
      circlet: string;
    };
    subStats: string[];
    talent: string[];
    tip: string;
    note?: string;
  };
}

interface Builds {
  [key: string]: {
    roles: Role;
  };
}

export const builds: Builds = {
  sucrose: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'frostbearer',
          },
          {
            id: 'magic_guide',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['viridescent_venerer', 'gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Anemo Damage',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'Elemental Mastery',
          'ATK%',
          'Energy Recharge',
          'Flat ATK',
        ],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: 'Despite how much damage she could do alone, Sucrose DPS playstyle still surrounds other party members to have her kit utilized at max.',
      },
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'sacrificial_fragments',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'favonius_codex',
          },
        ],
        artifacts: [['viridescent_venerer'], ['instructor']],
        mainStats: {
          sands: 'Elemental Mastery',
          goblet: 'Elemental Mastery',
          circlet: 'Elemental Mastery',
        },
        subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "Make sure you don't immediately swap away after casting Burst, you need to be on-field for VV 4-set perk to proc on swirl first.",
        note: "People often compare Sucrose with Venti for Crowd-Control capabilities, but that's not what you'll be looking for. Sucrose is a character that can share Elemental Mastery to her team mates through swirling elements (Ascension 1 Talent), which in turn improves reaction damage for the Character benefitting from the EM boost. Her Ascension 4 Talent also boosts the entire team's EM by 20% of Sucrose's total EM, which is why you want to stack as much elemental mastery as possible in her artifacts. As a support, most of Sucrose's value lies on these (Ascension 1 and 4) talents, hence leveling her other talents (Skill and Burst) is not required.",
      },
    },
  },
  jean: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'royal_longsword',
          },
          {
            id: 'fillet_blade',
          },
        ],
        artifacts: [
          ['bloodstained_chivalry', 'pale_flame'],
          ['gladiators_finale'],
          ['bloodstained_chivalry', 'pale_flame'],
          ['bloodstained_chivalry', 'gladiators_finale'],
          ['brave_heart', 'viridescent_venerer'],
          ['martial_artist', 'viridescent_venerer'],
          ['resolution_of_sojourner', 'viridescent_venerer'],
          ['brave_heart', 'berserker'],
          ['martial_artist', 'berserker'],
          ['resolution_of_sojourner', 'berserker'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical Damage',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: "Jean's Elemental Burst contiously imbues characters in zone with Anemo status, that means it can cleanse all elemental statuses aside from Dendro",
        note: "Really good with [C4] if you can get it, otherwise still a good DPS. Still decent with [C2]. Jean's ES does additional fall dmg based off MAX HP% of the enemy if you aim it upwards. Do note that some 4 stars out-dps jean, Jean is better off as a support.",
      },
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'fillet_blade',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['noblesse_oblige'],
          ['viridescent_venerer', 'gladiators_finale'],
          ['viridescent_venerer', 'noblesse_oblige'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge%',
          goblet: 'ATK%/ Anemo Damage',
          circlet: 'Healing Bonus / ATK% / Crit Rate / DMG',
        },
        subStats: ['ATK%', 'Energy Recharge', 'Crit Rate / DMG', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Elemental Skill can be used to push smaller mobs away. Elemental Burst's heal scales off of ATK. Use Sacrificial Sword over The Flute if you have bad energy recharge.\nSet 1 is the bread and butter for anemo characters in general, as it is commonly used for Elemental Resistance Shredding, but if you already have other characters with 4-pcs. Viridescent Venerer, you want to go for the other options.n\nSet 2 is, as mentioned above, when there's already another 4-pcs. Viridescent Venerer user, as having 2 characters with the same set won't stack and will have no benefit at all. This set  will provide an atk buff whenever Jean uses her elemental burst at the cost of lower elemental skill damage.\nSet 3 if both sets above are already present in the team, or if you want to build Jean as a sub dps. This set provides her with decent Elemental Skill and Burst damage, while at the same time, Jean benefits from Gladiator Finale's +Atk%, because her burst scales off atk.\nSet 4 benefits with decent elemental skill and burst damage.For Jean, you can either go for More ATK = Stronger Heals, but relatively lower Q uptime, or Lesser Atk, Focus on ER = Weaker Heals, Higher Q Uptime. It is personal preference. If Venti is on the team, Jean has very little energy problem and can potentially go full atk/subdps build.",
      },
    },
  },
  venti: {
    roles: {
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'skyward_harp',
          },
          {
            id: 'alley_hunter',
            refine: [2, 5],
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'the_stringless',
            refine: [2, 5],
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'alley_hunter',
            refine: 1,
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'the_stringless',
            refine: 1,
          },
          {
            id: 'windblume_ode',
            refine: 5,
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'rust',
          },
          {
            id: 'slingshot',
          },
        ],
        artifacts: [
          ['viridescent_venerer'],
          ['noblesse_oblige'],
          ['viridescent_venerer', 'noblesse_oblige'],
          ['viridescent_venerer', 'gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery / Energy Recharge',
          goblet: 'Anemo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "Make sure you don't immediately swap away after casting Burst, you need to be on-field for VV 4-set perk to proc on swirl first.(E > Q to avoid this issue). Check out http://tinyurl.com/ventiburstinfo to see which characters can hit the enemies sucked and ragdolled in Venti's burst.",
        note: "This build focuses on damage over ER because of his ER ascension stat.\nThe amount of swirls his burst can achieve depends on how long the original element's aura lasts and how many enemies are inside the ult. If it's a single target and the aura expires relatively quickly, it might only swirl once. If you keep refreshing the aura by reapplying the element, then it can swirl up to 7 times. This can be seen here.\nSwirl can only cause two instances of AoE damage per element for a single AoE skill. This means that if you have seven enemies with Pyro auras, and Swirl them with an AoE ability, only two instances of AoE Swirl Pyro damage will occur. This results in a max of 14 swirl damage procs against a single target throughout a single Venti burst. Further analysis on swirl can be seen here.\nStringless starts to outperform other 4 star weapons at refine 2 and surpasses Amos' Bow at refine 5.\nElegy for the end is better than Skyward Harp in terms of teamwide DPS, but below Viridescent Hunt in terms of Venti DPS. Elegy for the End's ATK buff DOES NOT buff Venti's burst if Venti is the one equipping the bow. This is due to Venti's burst snapshotting his stats (excluding EM toward transfomative reactions) at the time of cast.\n",
      },
    },
  },
  traveler_geo: {
    roles: {
      'DPS GEO': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'festering_desire',
            refine: 5,
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'sword_of_descension',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'archaic_petra'],
          ['archaic_petra', 'noblesse_oblige'],
          ['brave_heart', 'berserker'],
          ['martial_artist', 'berserker'],
          ['resolution_of_sojourner', 'berserker'],
          ['brave_heart', 'instructor'],
          ['martial_artist', 'instructor'],
          ['resolution_of_sojourner', 'instructor'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: 'Skill and Burst have equal priorities.',
        note: "This section is dedicated to utilising the Geo Traveller's immense geo burst damage capabilities. Due to how little field time this playstyle takes, the traveller can also fulfill the role of a quickswap style Sub-DPS",
      },
      'DPS PHYSICAL': {
        recommended: false,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'harbinger_of_dawn',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['pale_flame'],
          ['gladiators_finale'],
          ['retracing_bolide'],
          ['brave_heart', 'berserker'],
          ['martial_artist', 'berserker'],
          ['resolution_of_sojourner', 'berserker'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: '',
        note: "Regarding Gladiator's Finale (2) Pale Flame (2): This set is ranked higher than Pale Flame (2) Bloodstained Chivalry (2) due to how much geo damage is in his kit. If you truly prefer to have the highest physical damage output, use Set 2 instead.\nRegarding Pale Flame (4): This set is unreliable for a multitude of reasons. Firstly, a 6 second cooldown means that the 4 piece set effect will only kick in 12 seconds into the rotation (overall DPS loss as compared to other sets). Second, due to the nature of the ability (where there is a delay on skill cast), it can be clunky to maintain the uptime of the aforementioned 4 piece set effect.",
      },
    },
  },
  traveler_anemo: {
    roles: {
      'DPS ANEMO': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'festering_desire',
            refine: 5,
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'sword_of_descension',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'viridescent_venerer'],
          ['viridescent_venerer'],
          ['noblesse_oblige', 'viridescent_venerer'],
          ['brave_heart', 'berserker'],
          ['martial_artist', 'berserker'],
          ['resolution_of_sojourner', 'berserker'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Anemo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: "This section is dedicated to utilising the Anemo Traveller's Anemo Skill/Burst. Due to how little field time this playstyle takes, the traveller can also fulfill the role of a quickswap style Sub-DPS.",
      },
      'DPS PHYSICAL': {
        recommended: false,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'harbinger_of_dawn',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['gladiators_finale', 'pale_flame'],
          ['gladiators_finale', 'bloodstained_chivalry'],
          ['brave_heart', 'berserker'],
          ['martial_artist', 'berserker'],
          ['resolution_of_sojourner', 'berserker'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: '',
        note: 'When running Pale Flame (4), make sure you do Press Cast and not Hold Cast, as the Hold Cast Skill Cooldown would be too long for you to refresh your Pale Flame (4) stacks.',
      },
    },
  },
  xiao: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'white_tassel',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [['viridescent_venerer', 'gladiators_finale']],
        mainStats: {
          sands: 'ATK% / Energy Recharge%',
          goblet: 'Anemo DMG',
          circlet: 'Crit DMG > Crit Rate',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: 'Best combo for Xiao when fighting a single target:Plunge -> Normal Attack -> Charged Attack -> PlungeBest combo for Xiao when fighting multiple enemies:Plunge -> Normal Attack -> Plunge',
        note: "Xiao has issues with Energy regeneration because he cannot generate any particles with his Elemental Skill while his Burst is active, so it is not suggested to use his Elemental Skill during Elemental Burst. Start off a fight with casting his skill twice (even at c1) and cast your burst immediately, you will want to be half way through your burst animation before the particles reach you, this way you can start off your burst with a portion of the energy gauge already filled. Same goes for any other Anemo Battery (recommended below), cast skill and swap back to Xiao to cast burst before the particles reach you.\nYou'll want to pair Xiao with another Anemo character (Venti, Sucrose, Jean or Anemo Traveler) to help him gain Energy while his Burst is on cooldown. Xiao's Burst ends when you swap to another character. Although he has two charges of his Elemental Skill, only ONE charge comes back per cooldown.\nRegarding Mainstat Choices: With a proper anemo battery (e.g. Sucrose), Xiao needs as little as 120-130% ER to maintain a high burst uptime. In these scenarios, you should always go for an atk% sands over an energy recharge one as it will drastically increase DPS.\n\n",
      },
    },
  },
  diona: {
    roles: {
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'sacrificial_bow',
          },
          {
            id: 'favonius_warbow',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'recurve_bow',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['maiden_beloved'],
          ['maiden_beloved', 'tenacity_of_the_millelith'],
          ['maiden_beloved', 'the_exile'],
          ['maiden_beloved', 'scholar'],
          ['the_exile'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'Energy Recharge / HP%',
          goblet: 'HP%',
          circlet: 'HP% / Healing Bonus',
        },
        subStats: ['HP%', 'Energy Recharge', 'Flat HP'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "Diona's Elemental Skill grants you a cryo shield which allows cleansing. Every time you swap characters with the shield up, it applies cryo. This acts as a cleanse.",
        note: "The shielding Diona puts out should offset the need for healing from her burst. The damage boost from noblesse has more practical use. Additionally, her first constellation greatly increases her ultimate uptime, further lowering the healing needed.\nRegarding Recurve Bow: This bow will be your best choice for stronger shields, but it reduces Diona's burst uptime significantly due to no Energy Recharge on her weapon.\nMaiden's Beloved to increase healing potential of your burst, which is Diona's specialty, healing and shielding. \nExile/Scholar 2pc to compensate for Diona's lack of energy since her burst costs 80 energy.\nRegarding mainstat choices: Full Stack HP% is recommended if you want stronger shields but a weaker heal. Go for a HB Circlet if you want a nice balance between the two. Regarding Talent Priority: Prioritise whichever your Diona is geared for (shielder or healer), if built for a balance between the two, level both equally.",
      },
    },
  },
  chongyun: {
    roles: {
      'SUB DPS/NUKE': {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'prototype_archaic',
            refine: [2, 5],
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'prototype_archaic',
            refine: 1,
          },
          {
            id: 'debate_club',
            refine: 5,
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['blizzard_strayer', 'noblesse_oblige'],
          ['gladiators_finale', 'blizzard_strayer'],
          ['gladiators_finale', 'noblesse_oblige'],
          ['wanderers_troupe', 'blizzard_strayer'],
          ['wanderers_troupe', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge / Elemental Mastery',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Elemental Mastery',
          'Energy Recharge',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "Chongyun's EB is calculated as Claymore damage, which means it breaks Geo Structures/Shields at a much easier rate and can proc shatter.",
        note: "Chongyun is much preferred as a Sub dps/Nuke over Main dps as his AA scalings are very low. His AA takes such a low portion of his damage even when including Constellation 1. His Elemental Burst on the other hand hits extremely hard on later constellations and takes a much higher total damage portion over his AA. On top of that, you can melt all 3 hits of his Elemental Burst with Bennett's strong pyro application. \nHe gains extra ATK% as he ascends, giving you some free space to put in EM for Melt reaction damage bonus. \n",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'favonius_greatsword',
          },
          {
            id: 'prototype_archaic',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['blizzard_strayer', 'noblesse_oblige'],
          ['the_exile'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: "Please do not activate Chongyun's Skill with Razor in your team.",
        note: "At [C2], his Elemental Skill reduces ability CD that is casted within the zone. Just watch out for his Cryo field overwriting your elemental melee basics (e.g. Keqing). Pyro > Cryo > Electro \nIf you're running Instructors on Chongyun, you should be the one who procs elemental reactions for the 4 set perk to proc.Your primary goal with using Chongyun as a support is to let him function as a cryo battery/applier + an attack buffer with WGS. ER weapons allow you to quickly gain energy for Chongyun, allowing for easier burst rotations. \n",
      },
    },
  },
  kaeya: {
    roles: {
      'Cryo DPS': {
        recommended: true,
        weapons: [
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'fillet_blade',
          },
          {
            id: 'cool_steel',
          },
        ],
        artifacts: [
          ['blizzard_strayer'],
          ['gladiators_finale'],
          ['blizzard_strayer', 'gladiators_finale'],
          ['blizzard_strayer', 'noblesse_oblige'],
          ['martial_artist'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit DMG',
        },
        subStats: [
          'Crit DMG',
          'ATK%',
          'Energy Recharge',
          'Flat ATK',
          'Crit Rate',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: 'Kaeya at C1 gains 15% crit rate against enemies affected by Cryo. This fact can be further developed together with the Cryo resonance that gives an additional 15% towards enemies affected by Cryo or in the Frozen State. Total +30% Crit rate! Stacking this with the 4 piece blizzard strayer set and the original 5% crit rate everyone has, Kaeya can have 75% crit rate without any weapons/artifact stats.Combined with Chongyun and Xingqiu, you get your permanent Freeze Cryo DPS.Video reference and credits:https://www.bilibili.com/video/BV19Z4y1371S?zw',
        note: 'Kaeya is currently one of the best cryo carries in the game with the new 1.2 Blizzard Strayer set and in the right comp.\nKaeya DPS is only used in a team with chongyun and Xingqiu/Barb with 4 set blizzard strayer equipped. In this team, a c1 kaeya has 75% crit rate against frozen enemies without any weapons and artifact stats, which means blacksword and any crit rate stats would be completely unnecessary and diminishing.',
      },
      'Physical DPS': {
        recommended: false,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'fillet_blade',
          },
          {
            id: 'royal_longsword',
          },
          {
            id: 'harbinger_of_dawn',
          },
        ],
        artifacts: [
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['pale_flame', 'gladiators_finale'],
          ['bloodstained_chivalry', 'gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate/DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'skyward_blade',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'skyrider_sword',
          },
          {
            id: 'harbinger_of_dawn',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['noblesse_oblige', 'blizzard_strayer'],
          ['noblesse_oblige', 'the_exile'],
          ['noblesse_oblige', 'scholar'],
          ['the_exile', 'scholar'],
          ['instructor'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Energy Recharge',
          'Crit Rate / DMG',
          'ATK%',
          'Flat ATK',
          'Elemental Mastery',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Wanted for his burst that works even off-field, granting cryo procs while you can use your main DPS.\nKaeya's ult actually outscales venti's ult in terms of raw skill damage. This means that Kaeya's ult has very high damage ceiling and can be especially lethal on constellation 6.",
      },
    },
  },
  rosaria: {
    roles: {
      'CRYO DPS': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'royal_spear',
          },
          {
            id: 'white_tassel',
            refine: 5,
          },
          {
            id: 'dragonspine_spear',
          },
        ],
        artifacts: [
          ['blizzard_strayer'],
          ['gladiators_finale'],
          ['blizzard_strayer', 'gladiators_finale'],
          ['martial_artist'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit DMG',
        },
        subStats: [
          'Crit DMG',
          'ATK%',
          'Energy Recharge',
          'Flat ATK',
          'Crit Rate',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: 'If Rosaria is played in a reverse melt team comp, the talent priority should be:Burst > Normal Attack > Skill',
        note: "This section is dedicated for Rosaria's synergy with Chongyun, which allows her attacks to be infused with cryo.If played in a permafreeze setup, Rosaria has the same teamcomp as Freeze kaeya. Check Kaeya's ability tips section for teamcomp setup.Regarding Dragon's Bane: This ranking for dragon's bane is only if Rosaria is played in a team comp in which she triggers reverse melt, otherwise do not use this weapon.\nRegarding substat choices: Energy Recharge has a higher priority over Crit Rate until the 150% mark.Compared to Kaeya, Rosaria has even less desire for Crit Rate, as her Ascension 1 Talent includes an extra 12% Crit Rate once skill hits the back of an enemy.\n",
      },
      'PHYSICAL DPS': {
        recommended: false,
        weapons: [
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'crescent_pike',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'dragonspine_spear',
            refine: 3,
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'dragonspine_spear',
            refine: [1, 2],
          },
          {
            id: 'white_tassel',
            refine: 5,
          },
        ],
        artifacts: [
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['gladiators_finale', 'bloodstained_chivalry'],
          ['blizzard_strayer'],
          ['retracing_bolide'],
          ['martial_artist'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: "Regarding Blizzard Strayer (4): It has been tested that Rosaria's Q is required to maintain uptime on 4pc blizzard strayer (due to fischl/beidou stealing cryo procs for superconduct). Due to the low uptime of Rosaria's Q at [C0] this artifact set should only be recommended at [C2+].Regarding Gladiator's Finale (2) Bloodstained Chivalry (2): This set is better than Gladiator's Finale (4) if Rosaria is running Crescent Pike (4⭐). This is because the 4-set effect of Gladiator's Finale does not stack with Crescent Pike's passive.\n",
      },
      'SUB DPS': {
        recommended: false,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'white_tassel',
            refine: 5,
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['noblesse_oblige', 'blizzard_strayer'],
          ['noblesse_oblige', 'berserker'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG*',
        },
        subStats: [
          'Crit Rate',
          'Elemental Mastery',
          'Energy Recharge',
          'Crit DMG',
          'ATK%',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "Be sure to cast skill before burst as Crit Rate granted by the Ascension 1 Talent will be included with Ascension 4 Talent Bonus as well.Rosaria's skill and burst can be reverse melted (1.5x) using Bennett or a pyro main DPS for some quick and powerful damage. More on this can be seen here.",
        note: "This Sub DPS section is tailored around giving Rosaria as much damage as possible. Crit Rate stacking is not as necessary, long as 50% Crit Rate is guaranteed at the very least, you will still be giving crit rate buffs of 9.7% with the Ascension 1 Talent Bonus.\nElemental Mastery is only recommended if you are proccing reverse melt on Rosaria as seen in the Ability Tips section.\nThe following is only recommended to those who have not obtained a desirable set for Rosaria, with crit rate building as her place holder set.If you don't wish to hyper invest onto Rosaria, she could still be used as a crit rate battery, you can build up to 88% Crit Rate and use skill to cap out 100% Crit Rate, then burst for easy crit rate buff. This can be easily achievable if you have an existing Crit Rate substat polearm, otherwise just put on whatever Crit Rate Circlet, substat and Berserker artifacts you may have. ",
      },
    },
  },
  qiqi: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'fillet_blade',
          },
          {
            id: 'cool_steel',
          },
        ],
        artifacts: [
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "QiQi's ES when casted can still work while swimming, if you're trying to travel far distances across water, cast ES and just keep going forward.",
        note: 'Use Elemental Skill and/or Elemental Burst to Heal while doing damage with your attacks.\n',
      },
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'skyrider_sword',
          },
          {
            id: 'fillet_blade',
          },
          {
            id: 'cool_steel',
          },
        ],
        artifacts: [
          ['maiden_beloved'],
          ['maiden_beloved', 'gladiators_finale'],
          ['tenacity_of_the_millelith'],
          ['noblesse_oblige'],
          ['the_exile', 'scholar'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'ATK%',
          circlet: 'ATK% / Healing Bonus',
        },
        subStats: ['ATK%', 'Flat ATK', 'Energy Recharge'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "QiQi's ES when casted can still work while swimming, if you're trying to travel far distances across water, cast ES and just keep going forward.",
        note: "Qiqi's Elemental Burst has a very high energy cost, and Qiqi struggles to generate energy. On top of this, the healing generated by her Ascension 4 Talent and Elemental Skill is very potent. Because of this, it isn't very recommended to build Energy Recharge on her. Keep her Burst as an emergency button, as it is unlikely that you will be using it often in a single fight.\nQiqi's elemental burst allows other characters to maximize burst DPS while healing off-field herself. At Ascension 4, her Normal Attack applies the healing talisman onto an enemy once every 30 seconds.\nTenacity of the Millelith allows Qiqi to give the team a decent ATK boost (and shield strength boost if your team contains a Shielder) while her Elemental Skill is active. Sacrificial Sword increases the uptime of her Elemental Skill, which in turn increases the uptime of the team's ATK and Shield Strength boost. If you find that your Qiqi's heals are often more than enough, you may want to consider switching her to this artifact set.\nSet 2 (Maiden's 2-pc + Glad 2-pc) focuses on a stable increase on her Skill healing without the need of having her onfield for healing. The bonus from Maiden's 4-pc effect will only apply to the first heal proc on the character switched to after casting her Skill.",
      },
    },
  },
  ganyu: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'amos_bow',
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'the_stringless',
          },
        ],
        artifacts: [
          ['blizzard_strayer'],
          ['wanderers_troupe'],
          ['gladiators_finale', 'blizzard_strayer'],
          ['retracing_bolide'],
          ['heart_of_depth'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Elemental Mastery',
          'Flat ATK',
          'Energy Recharge',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Charge Attack spam is her main source of damage. Do note that if her Frostflake arrow crits (2nd charge), the bloom damage is NOT guaranteed to crit.Make sure to hit enemies with her skill's inital damage and her explosion damage as they both regen energy for her ult.When using her Elemental burst, make sure to stand inside to have the benefit of Cryo DMG%",
        note: "Set 1 is a build for Frozen team comp, whereas you focus all your stats on Crit DMG while prioritizing ATK% over Crit Rate%. This has high damage consistency and can also be used outside of freeze comps for a flat 20% Crit Rate against enemies with a Cryo status. This set will equire a supporting hydro unit or rain to freeze targets in order to make full use of it. Highly Recommended, especially for players who have Ganyu at C4.\nSet 2 is a set that focuses on doing Reverse Melt charged shots since the initial hit and bloom have a separate ICD which allows you to Reverse Melt both in one shot. Highly Recommended, as Xiangling, the best Pyro support for this team is easily accessible while also offering consistent damage output.\nSet 3 is the generalist set, and provides an overall damage increase to all aspect of her kit. Recommended as a placeholder set.\nSet 4 is an alternative to set 2 but ONLY if you pair ganyu with Zhongli. Zhongli is the only character in the game with permanent shield uptime on his own. Diona (sacrificial bow) still has downtime on her shield since the shield lasts 12 seconds on skill lvl 7+ (hold e) and sacrificial bow has a 30 second cooldown. Recommended as a placeholder set.\nSet 5 is also an alternative to set 2 if you don't have Zhongli.",
      },
      'SUB DPS': {
        recommended: false,
        weapons: [
          {
            id: 'skyward_harp',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'royal_bow',
          },
          {
            id: 'the_viridescent_hunt',
          },
        ],
        artifacts: [
          ['noblesse_oblige', 'blizzard_strayer'],
          ['gladiators_finale', 'noblesse_oblige'],
          ['gladiators_finale', 'blizzard_strayer'],
          ['noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Cryo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Energy Recharge',
          'Crit Rate / DMG',
          'Elemental Mastery',
          'ATK%',
          'Flat ATK',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "When using her burst, place her skill in the AOE to taunt and keep enemies inside the zone for constant damage.Make sure to hit enemies with her skill's inital damage and her explosion damage as they both regen energy for her ult.",
        note: "For weapons, Stringless is BiS only when Ganyu is used as a reverse melt sub dps, Skyward Harp is BiS for any other build.\nSet 1 is the generalist set, it focuses on dealing damage with her elemental burst and constantly affecting enemies with cryo for reactions.\nSet 2 has the same ease of use as Set 1, however it deals overall less damage than Set 1.\nSet 3 same as Set 1 and Set 2, just deals less damage compared to both.\nSet 4 is a pure support build for Ganyu, focuses on her using her burst and switching out to to your main dps for extra damage (Gives a 20% boost to DMG) and to trigger reactions. Use this set if you are only using her Burst and to support your main DPS.\nYou would want at least 140% ER with a support Ganyu, although from testing, with a DPS Ganyu at 111% ER, the ult uptime is already 100% so you don't have to invest a lot of stats into Energy Recharge explicitly, you want to focus more on Cr/Cd and EM. The stats priority, crit rate / DMG and Elemental Mastery is interchangeable depending on what team comp you're using Ganyu as a support is in. Elemental Mastery would be no. 2 prioritiy for Reverse Melt comps, while Crit rate / DMG for a more general purpose, and Crit Rate / DMG is generally more versatile and useful.",
      },
    },
  },
  fischl: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'skyward_harp',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'rust',
            refine: 5,
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'rust',
          },
          {
            id: 'compound_bow',
          },
          {
            id: 'slingshot',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['thundersoother'],
          ['gladiators_finale', 'bloodstained_chivalry'],
          ['thundering_fury', 'bloodstained_chivalry'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: '',
        note: "[C1] is recommended to even start Fischl's DPS build, meaning Oz can still attack even off field.  \nWith [C6], you'll be able to have additional electro damage that scales off 30% of Fischl's ATK.  \nThere's also an animation cancelling technique with Fischl DPS, after 3 or 5 basic attacks, rapidly tap Aim button twice and you'll reset your whole combo, but only use this for animation cancelling when you're out of stamina.  \nViridescent Hunt is a really good investment that even surpasses Amos in a situation where there are crowds of enemies, although it's not as efficient towards massive single targets or really agile targets, it offers crowd dps that is often a trouble for Fischl DPS players.\nDespite Thundersoother being an excellent DPS artifact set with a 35% Damage Bonus, this is only if you are able to have consistent Electrto element application to maintain 100% perk uptime. Against enemies that have imbued elements, you'll be forced to proc electro and waste a lot of dps potential, Glad x Bloodstained is generally recommended over Thundersoother.  \nElectro DMG Goblet can be prioritized over Physical DMG Goblet on C6 Fischl if you have perpetual Oz uptime.\n",
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'alley_hunter',
            refine: 5,
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'the_stringless',
            refine: 5,
          },
          {
            id: 'alley_hunter',
            refine: [1, 4],
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'the_stringless',
            refine: [1, 4],
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'rust',
          },
          {
            id: 'windblume_ode',
            refine: 5,
          },
          {
            id: 'favonius_warbow',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'thundering_fury'],
          ['thundersoother'],
          ['thundering_fury'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG / ATK%',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Flat ATK',
          'Elemental Mastery',
        ],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: "Burst and skill both summon Oz, so make sure you don't use the two together. Start with your Elemental Burst, then use the Skill, and alternate. Hopefully, by the time your second round of Oz summoning is over, you'll have gained enough energy to repeat the loop.\nWindblume's ATK buff can be applied to Oz after burst through pressing your skill button after exiting bird form. This relocates Oz and reapplies the buff which is then snapshotted throughout the rest of its duration.\nRegarding Thundersoother (4): This artifact set will outperform Gladiator's Finale(2) Thundering Fury(2) if used in a team comp where an electro aura is always present (e.g. Electro/Electro-charged comps) therefore it is highly recommended within this niche.\nRegarding Thundering Fury(4): This set is only good on Fischl when she can reliably trigger reactions. However, 99% of the case fischl is an aura, unless you use her in a team comp where she is specifically and reliably triggering reactions. In cases where you have a way to reliably trigger electro reactions rapidly, such as with using Childe's elemental skill, Xingqiu's Elemental Burst, you can get Oz to have nearly no cooldown on his summon without using your Elemental Blast. In those cases, the added reaction bonuses from 4TF would be beneficial. However due to how conditional this set is, it is generally not recommended.",
      },
    },
  },
  beidou: {
    roles: {
      'PHYSICAL DPS': {
        recommended: false,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'prototype_archaic',
          },
        ],
        artifacts: [
          ['bloodstained_chivalry', 'thundering_fury'],
          ['pale_flame', 'thundering_fury'],
          ['bloodstained_chivalry', 'noblesse_oblige'],
          ['pale_flame', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'HP%',
          'Flat ATK',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Beidou's skill grants you an Electro status for a brief moment upon holding it. This means it can be used for status-cleansing (NO Particular Effective Element). Can only be done on herself.",
        note: "Generally not recommended for a main carry due to Beidou's high levels of electro. Physical build has higher single target DPS below C4, however it is very inflexible with rotations and doesn't scale well with constellations.\n",
      },
      'ELECTRO DPS': {
        recommended: false,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'prototype_archaic',
          },
        ],
        artifacts: [
          ['thundering_fury', 'noblesse_oblige'],
          ['thundering_fury', 'gladiators_finale'],
          ['noblesse_oblige', 'gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'HP%',
          'Flat ATK',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: 'Big thanks to ZΛNTO#4984 from BeidouMains for reaching out for the overhaul.For more indepth information, please check the Keqingmains Full Beidou Guide',
        note: 'Very versatile with artifact choices and works well with rotations due to her burst being maintained off field. Her great survivability makes her very enticing for a carry role, but her low basic attack ratios and hybrid damage makes Sub DPS the strongest role for her.\n',
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'prototype_archaic',
          },
        ],
        artifacts: [
          ['thundering_fury', 'noblesse_oblige'],
          ['thundering_fury', 'gladiators_finale'],
          ['noblesse_oblige', 'gladiators_finale'],
          ['noblesse_oblige'],
          ['thundersoother'],
          ['scholar', 'the_exile'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Elemental Mastery',
          'HP%',
          'Flat ATK',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Artifact sets 1-3 serve as general purpose builds. Mix and match for what you want your beidou to be strongest in.\nArtifact set 4 should be used if your team doesn't already have a Noblesse Oblige (4) user. Burst damage is almost identical to Noblesse Oblige (2) Gladiator's Finale (2)\nArtifact set 5 seeks to maximise your Burst damage in an Electro-Charge comp, take note that the set effect could be rendered useless when against enemies with non-Electro/Hydro elements imbued.\nArtifact set 6 should only be considered when you have no other set options or when you cannot secure over 150% ER with a double electro team, this set should be replaced as soon as possible.",
      },
    },
  },
  lisa: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'frostbearer',
          },
          {
            id: 'magic_guide',
          },
        ],
        artifacts: [
          ['thundering_fury'],
          ['thundersoother'],
          ['gladiators_finale', 'thundering_fury'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge / Elemental Mastery',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Skill', 'Normal Attack', 'Burst'],
        tip: '',
        note: 'Lisa gets Elemental Mastery over Ascension, make sure that you pair her with someone that can do off-field elemental applications, ideally Hydro for Electro-Charge reactions.\n',
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'favonius_codex',
          },
        ],
        artifacts: [
          ['thundering_fury', 'gladiators_finale'],
          ['thundering_fury', 'noblesse_oblige'],
          ['noblesse_oblige'],
          ['thundersoother'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'Energy Recharge',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG / Elemental Mastery',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: 'More info here: https://keqingmains.com/lisa',
        note: "Can be built to set up for either Burst damage or Quickswap Skill Nuke damage.Lisa works well with anemo characters which can keep enemies in her ultimate radius.Instructor is placed above The Exile for Lisa's burst energy cost being 80, so her ultimate can take long to activate again for the Exile 4-set perk to be abused.",
      },
    },
  },
  razor: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'snow-tombed_starsilver',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'debate_club',
            refine: 5,
          },
          {
            id: 'skyrider_greatsword',
            refine: 5,
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['gladiators_finale', 'bloodstained_chivalry'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Razor's EB grants you an Electro Status when you basic attack while burst is in-effect, that means it can be used for status-cleansing (no particular effective element).  Can only be done on himself.For more indepth information, please check the Razor Mains Theorycrafting Library",
        note: "Both Serpent Spine and Blackcliff Slasher are conditional weapons that can't maintain the highest DPS possible when the environment does not suit their perk needs, so pick with caution.\nPale Flame (2) Bloodsdtained Chivalry (2) is better if your ATK% is covered by your substats, otherwise you would be better off running Gladiator's Finale (4). This is only recommended to those who have no immediate access to a decent Pale Flame set, otherwise you would be better off investing on Pale Flame pieces, regardless of weapon choice.\nSerpent Spine is great against one on one and fights that doesn't do surprises which might lose your stacks, whereas Blackcliff Slasher will do the most against a massive crowd, granting him an even greater ATK bonus over Serpent Spine with no penalty. Do note that Blackcliff Slasher buffs are counted separately.\nRegarding Serpent Spine: At [C6], it is better to run an atk% cup over physical damage% with serpent spine. This is due to the oversaturation of damage bonuses (ascension stat + serpent spine) in addition to the fact that electro accounts for a significant portion of razor's damage. An in-depth explanation can be found here.\nWolf's Gravestone (inactive) outperforms Skyward Pride in every scenario except crowd battles.\nSkyward Pride is viable with a Physical DMG goblet, as the damage dealt through its passive scales with Physical%.\nThe Unforged is the best for solo damage when paired with Zhongli.\n",
      },
    },
  },
  keqing: {
    roles: {
      'PHYSICAL DPS': {
        recommended: true,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'prototype_rancour',
            refine: [3, 5],
          },
          {
            id: 'the_black_sword',
            refine: [2, 5],
          },
          {
            id: 'prototype_rancour',
            refine: [1, 2],
          },
          {
            id: 'the_black_sword',
            refine: 1,
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'harbinger_of_dawn',
            refine: 5,
          },
          {
            id: 'royal_longsword',
          },
          {
            id: 'iron_sting',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['bloodstained_chivalry', 'gladiators_finale'],
          ['retracing_bolide'],
          ['bloodstained_chivalry'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "For an in-depth analysis on keqing's attack rotations, check out https://tinyurl.com/keqabilitytips",
        note: "This section is dedicated to a playstyle where Keqing does not infuse her attacks with electro, and instead focuses on physical damage (white numbers). For this reason, you should be charged attacking after casting Stellar Restoration (E) instead of recasting it.\nSet 1 (4PF) is the best by far as Keqing can proc it's 4 piece set bonus instantly by charge attacking after casting E.\nSet 2 (2PF+2BSC) should only be used until getting 4PF.\nSet 3 (2BSC+2Glad)  is a generalist set, just the same as Set 1 for Electro but physical instead.\nSet 4 (4RB) should only be used with a consistent shielder (i.e. Zhongli/Diona) for obvious reasons.\nSet 5 (4BSC)  is for general solo and Abyss content where there are multiple mobs that can be killed with charged attacks within 10 seconds, this is for dealing with a crowd, in other words, AoE. It is not recommended because of the kill condition.\n",
      },
      'ELECTRO DPS': {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'harbinger_of_dawn',
            refine: 5,
          },
          {
            id: 'the_flute',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'royal_longsword',
          },
          {
            id: 'prototype_rancour',
          },
        ],
        artifacts: [
          ['thundering_fury', 'gladiators_finale'],
          ['thundersoother'],
          ['thundering_fury', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Electro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Flat ATK', 'Energy Recharge'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Preferred Skill Combo: ES (Place stiletto, don't reactivate yet) -> EB -> ES (Reactivation) -> Spam AA -> Repeat. Regarding Roles:Both physical and electro keqing are good and viable. You'd usually want to decide which build to go for depending on your weapon gacha luck. For example, if you get Lion's Roar, it'd be a good idea to go for Electro Keqing, and if you get The Flute, while being viable for both Physical and Electro, it is better with Physical.  But if you do get Aquila Favonia, it is up to your personal preference which build you'd want to go for because Aquila is a solid choice for both roles.",
        note: "Set 1 (2Glad+2TF) is a generalist set, which means it can be used generally anywhere, whether it be Co-op or Abyss, or other singleplayer content. This has a lot of consistency due to its independence from electro aura, and it is more viable in abyss.\nSet 2 (4TS) should be used with Electro-charged team compositions (Keqing + Xingqiu) or mono-electro team comp(Not Suggested). This set has a 35% dmg modifier which increases all damage from all sources, although that modifier is a bit unstable due to it's dependency to the sustainability of electro aura on enemies.\nSet 3 (2TF+2NO) This set is used for Burst/Quickswap AoE Keqing. With this set, you'd want to be using Starward Sword (Q) all the time, which is your main source of dps with this set.\nSummit Shaper can only beat Jade Cutter [R1] when it's shielded at [R2]. ",
      },
    },
  },
  ningguang: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'memory_of_dust',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'royal_grimoire',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'frostbearer',
          },
          {
            id: 'wine_and_song',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'twin_nephrite',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'archaic_petra'],
          ['retracing_bolide'],
          ['archaic_petra', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Flat ATK',
          'HP%',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: "Walk through your Skill before using Burst for more damage. Normal Attack Animation Cancel is possible if you hold down on a walking direction and do Normal Attack before you start moving.Ningguang C2 will reset your skill cooldown when the previous barrier shatters, but recasting your skill when a previous barrier exists also triggers the c2 effect, giving you an extra barrier immediately, use the 6 second cool down of c2 for a consecutive cast of 3-4 barriers, for example:Skill Cast > Wait Skill CD (11s) > Skill Cast > C2 resets Skill CD > Skill Cast > Wait C2 CD (6s) > Skill Cast\nThe DPS Artifact set ranking order assumes C2 s.t. you have efficient energy generation with burst loops. If you don't have C2 and can't quickly regain your EB basically off cooldown, then full bolide set may be better. Before 5* artifacts, any other +18% ATK can work in place of gladiator's.\nRetracing Bolide comparisons done with C2 and C6. For general use, Bolide has the highest damage of the three options on normal -> charge loops, but is the weakest on burst rotations assuming at least C2 s.t. you  Skill -> Burst -> Charge loops -> Skill. You need about 4 rotations between bursts to catch Noblesse + Gladiator's hybrid if C6, 5 if C2. You would need 9 rotations to catch Archaic + Glad's hybrid even with C6. Do charge before E so you run out the timer between generating Energy with the Skill. If you're not C6, it may be worse than Noblesse, and will be worse if you're not doing enough normals to help it catch up, depending on your rotation.",
      },
      'SUB DPS/NUKE': {
        recommended: false,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'solar_pearl',
            refine: [4, 5],
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'solar_pearl',
            refine: [1, 3],
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'royal_grimoire',
          },
          {
            id: 'twin_nephrite',
          },
        ],
        artifacts: [
          ['archaic_petra', 'noblesse_oblige'],
          ['archaic_petra', 'gladiators_finale'],
          ['noblesse_oblige', 'gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          '<div class="softmerge-inner" style="width:147px;left:-1px"> Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Flat ATK</div>',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: 'If Ningguang is [C6], do Burst > NA > Skill instead.Walking through the Jade Screen before casting burst is heavily recommended for the geo damage bonus.',
        note: 'This section is dedicated towards a quickswap style Ningguang, where she outputs high burst damage in an extremely short time window before swapping out to other supports.\nRegarding Widsith: Widsith is ranked fairly lowly due to the playstyle not aligning with its downtime. (You might get 1-2 burst rotations without buff active, depending on how quickly you rotate your supports) For this reason, the average DPS is below Solar Pearl.\nREGARDING WEAPON RANKINGS WITH BENNETT BURST: With Bennett burst considered, Solar Pearl and Lost Prayer will be ranked above Memory of Dust, with Solar Pearl outperforming LP at R2+. This is because in a quickswap composition, it is difficult to develop and maintian stacks on a Lost Prayer. (5* weapons R1 assumed.) (All other rankings remain the same.)',
      },
    },
  },
  noelle: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'serpent_spine',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'snow-tombed_starsilver',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'whiteblind',
          },
          {
            id: 'debate_club',
            refine: 5,
          },
        ],
        artifacts: [['retracing_bolide'], ['gladiators_finale']],
        mainStats: {
          sands: 'ATK% / DEF%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'DEF%',
          'ATK%',
          'Energy Recharge',
          'Flat DEF',
          'Flat ATK',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Optimal attack rotation is N1>N2>N3>N4>dash/hop, where N refers to each normal attack in her 4 hit combo. This isn't always feasible due to cast time and N4 covers a lesser AoE than N1-3, so the recommended rotation is N1>N2>N3>dash/hop.This video covers optimal attack cancels and weapon priorities for both DPS and support.",
        note: "Weapon comparison data can be found here, as well as an indepth look into her kit for both DPS and support.Noelle DPS is best optimized at [C6] where she converts an additional 50% DEF into ATK.DPS weapon comparison assumes [C1]-[C4] with 50% burst uptime.\n[C6] Sands use DEF%\n[C6] WEAPON PRIORITY: (Max stacks) Serpent Spine > Skyward Pride R1 > Whiteblind > Blackcliff Slasher > The Unforged / Wolf's GravestoneSkyward Pride is BELOW Serpent Spine when assuming you cast your burst off cooldown.\n",
      },
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'whiteblind',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'favonius_greatsword',
          },
        ],
        artifacts: [
          ['maiden_beloved'],
          ['defenders_will', 'maiden_beloved'],
          ['retracing_bolide', 'maiden_beloved'],
        ],
        mainStats: {
          sands: 'DEF%',
          goblet: 'DEF%',
          circlet: 'Healing Bonus',
        },
        subStats: ['DEF%', 'Flat DEF', 'Energy Recharge'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: "With the Retracing and Maiden hybrid set you'll be able to heal with a stronger shield durability while you're on field, as Retracing Bolide 2-set perk only works for the character equipped with it. (It increases shield strength, which is a stat instead of a value multiplier.)\nWhen using her for healing, SPIN. Spinning makes her healing much faster than basic attacks.",
      },
    },
  },
  zhongli: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'crescent_pike',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'dragonspine_spear',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'royal_spear',
          },
          {
            id: 'halberd',
          },
          {
            id: 'prototype_starglitter',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'bloodstained_chivalry'],
          ['gladiators_finale', 'pale_flame'],
          ['retracing_bolide'],
          ['gladiators_finale', 'noblesse_oblige'],
          ['archaic_petra', 'noblesse_oblige'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: "Zhongli's Geo DPS is not very reliable and consistent, and so we look to build his Physical DPS here.\nThe Physical DPS combo tested by JinJinx is to:Place Skill > Charge Attack > Full Normal Attack Rotation > Repeat\nAnother combo for dealing fall damage with elemental skill is showcased by u/ST4RK0221:Full Normal Attack Rotation > Place Skill\nIf you wish to make Geo DPS Zhongli viable, you'll have to use Geo Traveler/Ningguang as your Geo Battery to generate enough energy for Zhongli to charge his burst up, as Zhongli's current energy gain per Stele pulse seems to be capped at 1 geo energy particle while being completely random and inconsistent.\nGenerally not recommended as his kit is best utilised as support with shielding and Burst with damage/CC.\n",
      },
      'SUPPORT/NUKE': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'black_tassel',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [
          ['tenacity_of_the_millelith'],
          ['archaic_petra', 'noblesse_oblige'],
          ['noblesse_oblige'],
          ['archaic_petra', 'gladiators_finale'],
          ['archaic_petra', 'tenacity_of_the_millelith'],
          ['archaic_petra'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'HP% / ATK% / Energy Recharge',
          goblet: 'Geo DMG / HP%',
          circlet: 'Crit Rate / DMG / HP%',
        },
        subStats: [
          'Crit Rate / DMG',
          'HP%',
          'ATK%',
          'Energy Recharge',
          'Flat ATK',
          'Flat HP',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Zhongli's kit is best utilised as a Geo burst damage support for his short burst cool down (12s) and low energy cost (40 Energy), while his Elemental Skill Hold Cast (Shield) scales his HP and at Ascension lv.4 you would unlock a talent that allows your burst to scale 33% of Max HP, making him an amazing source of shields and damage.\nFor a shield focused Zhongli, you should look to replace your damage-oriented artifact main stats in the following order: Sands > Circlet > Goblet. A Zhongli with HP sands can still deal significant amounts of burst damage, so consider stopping here if you want a balance between shield health and damage. Black Tassel also works exceptionally well here if you want to gear your Zhongli fully into shielding.\nComparison between Tenacity (4) and Noblesse (2) Archaic (2): Tenacity is recommended as top choice because of what it offers at a lower investment is just way too good, while at higher investments it won't be losing out a lot as it offers more utility instead of some extra DPS. Noblese (2) Archaic (2) is only recommended for people who are willing to invest as much as they can for higher damage numbers.\nRegarding Favonius Lance Rankings: Zhongli's lackluster particle generation can be problematic in teams without a reliable source of geo energy. With sufficient energy/geo particles (i.e. in a dual Geo team) Lithic Spear and above will outperform Favonius Lance.\nZhongli works best as Geo Traveler/Ningguang's support as he recharges energy rapidly with them generating batches of energy to chain bursts.\nIdeally, you'll want HP, ATK, ATK%, Geo DMG Bonus, Crit Rate/DMG for maximum burst damage, as his Ascension 4 Talent scaling would be best benefitted using only one HP main stat, any additional HP stat is desirable as it goes to his shield durability/burst damage.",
      },
    },
  },
  albedo: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'fillet_blade',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'archaic_petra'],
          ['defenders_will', 'archaic_petra'],
          ['noblesse_oblige', 'archaic_petra'],
          ['martial_artist'],
        ],
        mainStats: {
          sands: 'DEF%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG / DEF%',
        },
        subStats: ['Crit Rate / DMG', 'DEF%', 'Energy Recharge', 'Flat DEF'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: 'It is better to run DEF over ATK on albedo since most of his damage comes from his E.\nYou can refresh the E transient blossom 2 seconds internal cooldown by placing down the E again right after you perform transient blossom. For example, if you stand in the middle of your E and have your E off cooldown, you then attack an enemy and make the blossom happen, then place down the E immediately, your next attack will be transient blossom without the 2 seconds internal cooldown. This is very important since Albedo only has 4 seconds of e cooldown, which makes this mechanic extremely spammable.',
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'iron_sting',
          },
          {
            id: 'prototype_rancour',
          },
        ],
        artifacts: [
          ['archaic_petra', 'noblesse_oblige'],
          ['tenacity_of_the_millelith'],
          ['archaic_petra'],
          ['archaic_petra', 'defenders_will'],
          ['noblesse_oblige'],
          ['defenders_will', 'the_exile'],
          ['defenders_will', 'scholar'],
          ['berserker', 'the_exile'],
          ['berserker', 'scholar'],
        ],
        mainStats: {
          sands: 'DEF%',
          goblet: 'Geo DMG',
          circlet: 'Crit Rate / DMG / DEF%',
        },
        subStats: ['Crit Rate / DMG', 'DEF%', 'Energy Recharge', 'Flat DEF'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: "Albedo's E particle generation is completely RNG like Zhongli, but with better odds.\nIt is generally recommended to not build ER/ATK on him at all and go all in on DEF/Geo Dmg Bonus/Crit since most of his dmg comes from transient blossom and his ult damage is entirely rng.\nRun DEF main stat on hat and sand. Albedo's E DEF scaling is very high and Harbinger gives you a lot of leeway to rely on substats for crit.\nHOD is the go-to weapon for SUB DPS Albedo due to most of his damage coming from his E procs, which scale of Def%.",
      },
    },
  },
  xingqiu: {
    roles: {
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'skyrider_sword',
          },
          {
            id: 'harbinger_of_dawn',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['noblesse_oblige', 'heart_of_depth'],
          ['noblesse_oblige', 'gladiators_finale'],
          ['noblesse_oblige', 'wanderers_troupe'],
          ['heart_of_depth', 'wanderers_troupe'],
          ['noblesse_oblige', 'instructor'],
          ['instructor'],
          ['noblesse_oblige', 'the_exile'],
          ['the_exile', 'scholar'],
          ['thundersoother'],
          ['blizzard_strayer'],
        ],
        mainStats: {
          sands: 'Energy Recharge/ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "Activating XQ's ES/EB applies Hydro to the on-field character with his shield. (Pyro in specific)\nCleansing electro may take an additional switch for your character with the shield active, while Cryo would freeze you in place.",
        note: "Set 1-5 is assuming that you already have the optimal Energy Recharge and wish to pursue the highest DPS possible.\nSet 6 requires Xingqiu to be on field and triggering the elemental reaction, otherwise the 4-set perk will not come into effect.\nSet 7 gives a good balance in between DPS and additional Energy Recharge to cover for what you might need, potentially better than Set 3 or 4.\nSet 8 is only necessary if you really lack Energy Recharge or have no other set to use.\nSet 9 is only recommended in the instance where he is supporting Keqing.\nSet 10 is second to noblesse full set if with kaeya in freeze team.Festering Desire on r5 is better than Skyward Blade on r1 as a damage subcarry/support option. You can get r5 completely for free if you played the 1.2 event.*Harbringer of Dawn is a great weapon for Xingqiu, assuming the following conditions are met: 1) He's C6 (grants energy per burst tick) or 2) He's teamed up with another Hydro Character.\nSet 11 is second to noblesse full set if with Kaeya in freeze team.",
      },
    },
  },
  barbara: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'frostbearer',
          },
          {
            id: 'magic_guide',
          },
        ],
        artifacts: [
          ['heart_of_depth'],
          ['wanderers_troupe'],
          ['heart_of_depth', 'gladiators_finale'],
          ['wanderers_troupe', 'gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: "Barbara's skill gives you a pulse of healing every 5 seconds, every pulse will imbue you with a hydro status, that means it can be used for status-cleansing (Pyro in specific, while other elements may take more pulses).Take note that Hydro reacting with Cryo status will freeze you in place, her skill should be used in consideration of the environment",
        note: "Use Charged Attacks if you're going to be doing Vaporize DPS, Normal Attacks are for Electro-Charge DPS.\nMemory of Dust requires stacks to be utilized, and in Vaporize DPS comps, you usually don't want to give up the first few Vaporize hits to stack up Memory of Dust's perk.\nAlways activate your skill first, as it reduces stamina consumption and if you have Constellation 2, it will give 15% Hydro Damage Bonus.\n",
      },
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
          {
            id: 'prototype_amber',
          },
        ],
        artifacts: [
          ['maiden_beloved'],
          ['maiden_beloved', 'tenacity_of_the_millelith'],
          ['noblesse_oblige'],
          ['maiden_beloved', 'the_exile'],
          ['maiden_beloved', 'scholar'],
        ],
        mainStats: {
          sands: 'Energy Recharge / HP%',
          goblet: 'HP%',
          circlet: 'Healing Bonus',
        },
        subStats: ['HP%', 'Energy Recharge', 'Flat HP'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: 'Use Elemental Skill and/or Elemental Burst and Switch. Generally, run ER if you want more consistent heals. Noblesse is an option if Barb already has enough heal and you want her to buff your dps more.',
      },
    },
  },
  tartaglia: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'skyward_harp',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'the_viridescent_hunt',
          },
          {
            id: 'rust',
            refine: 5,
          },
          {
            id: 'prototype_crescent',
            refine: 5,
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'prototype_crescent',
            refine: [1, 4],
          },
          {
            id: 'the_stringless',
          },
        ],
        artifacts: [
          ['heart_of_depth'],
          ['gladiators_finale', 'heart_of_depth'],
          ['noblesse_oblige', 'heart_of_depth'],
          ['noblesse_oblige', 'gladiators_finale'],
          ['noblesse_oblige', 'wanderers_troupe'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Elemental Mastery', 'Flat ATK'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: 'For a more indepth guide please check the Childe Mains Theorycrafting Library.',
        note: "If you use Childe's bow attacks more then his melee stance lvl his normal attack up first.\nRust R5 wins in normal stance non aimed,  and is about equal with Skyward R1 in melee stance. Skyward only pulls ahead on good EB usage; they're mostly interchangable, but Skyward has a very slight advantage. Simulated over a wide variety of stat distributions.\nPrototype Crescent can potentially be on par with Viridescent Hunt with decent perk uptime.\n",
      },
      'SUB DPS/NUKE': {
        recommended: false,
        weapons: [
          {
            id: 'the_stringless',
            refine: [4, 5],
          },
          {
            id: 'alley_hunter',
            refine: [4, 5],
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'alley_hunter',
            refine: [2, 3],
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'amos_bow',
          },
          {
            id: 'alley_hunter',
            refine: 1,
          },
          {
            id: 'the_viridescent_hunt',
            refine: 1,
          },
          {
            id: 'windblume_ode',
            refine: 5,
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'prototype_crescent',
          },
        ],
        artifacts: [
          ['noblesse_oblige', 'heart_of_depth'],
          ['noblesse_oblige', 'wanderers_troupe'],
          ['noblesse_oblige', 'gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Elemental Mastery',
          'Energy Recharge',
          'Flat ATK',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Weapon rankings are assuming that you are proccing vaporise with Childe's Burst, which is heavily recommended when playing him as a nuke.\nFocuses on using his Elemental Burst off cooldown. Energy recharge can be considered as a good substat.\nElemental Mastery on sands is for when you have enough ATK% substats, and not running Stringless.\n",
      },
    },
  },
  mona: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'frostbearer',
          },
        ],
        artifacts: [
          ['heart_of_depth'],
          ['heart_of_depth', 'gladiators_finale'],
          ['heart_of_depth', 'noblesse_oblige'],
          ['wanderers_troupe', 'noblesse_oblige'],
          ['gladiators_finale', 'noblesse_oblige'],
          ['wanderers_troupe'],
          ['gladiators_finale', 'wanderers_troupe'],
          ['berserker', 'the_exile'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge'],
        talent: ['Burst', 'Normal Attack', 'Skill'],
        tip: 'An in depth guide on weapon choices, playstyle, and how to do the vaporise nuke can be found here: https://tinyurl.com/monatips',
        note: 'Use Berserker + The Exile until you get good 5 ⭐ Artifacts for Heart of Depth.\n',
      },
      'SUB DPS/NUKE': {
        recommended: true,
        weapons: [
          {
            id: 'the_widsith',
          },
          {
            id: 'skyward_atlas',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'favonius_codex',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['noblesse_oblige', 'heart_of_depth'],
          ['noblesse_oblige', 'gladiators_finale'],
          ['noblesse_oblige', 'wanderers_troupe'],
          ['noblesse_oblige'],
          ['the_exile', 'scholar'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'ATK% / ER% / Elemental Mastery',
          goblet: 'Hydro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'Energy Recharge',
          'ATK%',
          'Elemental Mastery',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: "If you want Mona's ult to be the one proc'ing the vaporize 2.0x multiplier:1. Apply Pyro status on enemy2. Cast Burst (should react and remove Pyro status on the enemy after using Burst)3. Apply Pyro status on enemy4. Burst will pop after enemy gets hit, applying Hydro Damage onto Pyro status, resulting in the 2.0x damage multiplier on Hydro triggered Vaporize.",
        note: "Mona's E provides taunt and procs wet status on enemies, her elemental burst is also capable of rendering minions immobile and providing a huge damage burst (and additional debuff after proc). \nUpon casting Elemental Burst, immediately switch to your DPS and go straight for bubble pop, ideally you want to use pyro on the first hit for the 1.5x multiplier off the pyro-proc vaporize then deal the maximum amount of damage you can within the short period whereas the Omen is active.\nLook to the right (Ability Tip) for how to properly set up a Mona Nuke.It's worth noting that, for a Mona Nuke Build, Noblesse Oblige (2) Heart of Depth (2) outperforms Noblesse Oblige (4). ",
      },
    },
  },
  amber: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'amos_bow',
            refine: [2, 5],
          },
          {
            id: 'prototype_crescent',
            refine: 5,
          },
          {
            id: 'amos_bow',
            refine: 1,
          },
          {
            id: 'skyward_harp',
          },
          {
            id: 'sharpshooters_oath',
            refine: 5,
          },
          {
            id: 'prototype_crescent',
          },
          {
            id: 'sharpshooters_oath',
            refine: [1, 4],
          },
          {
            id: 'blackcliff_warbow',
          },
          {
            id: 'compound_bow',
          },
          {
            id: 'messenger',
          },
        ],
        artifacts: [
          ['wanderers_troupe'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['gladiators_finale', 'martial_artist'],
          ['gladiators_finale', 'brave_heart'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Pyro DMG',
          circlet: 'Crit DMG',
        },
        subStats: [
          'Crit DMG',
          'ATK%',
          'Energy Recharge',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: "This playstyle will be focused onto maximizing Amber's charged shot damage on enemies weak spots, while crit will be guaranteed when you land your shot on a weak spot.\nThe Amber DPS Build aims to utilise Amber's Ascension 4 Talent, which increases ATK by 15% for 10s after hitting a weak spot. \nArcher charge attacks are imbued with their aligned-element, that's why Pyro damage is desired, as it adds damage to Amber's Charged Shot, Skill and Burst.\nDespite Blackcliff Bow being a very conditional weapon, when facing against a crowd (while you're properly levelled), you'll be quickly stacking up ATK as you kill, while being able to make use of the Crit Damage second stat the whole time.\n",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'elegy_for_the_end',
          },
          {
            id: 'the_stringless',
          },
          {
            id: 'favonius_warbow',
          },
          {
            id: 'sacrificial_bow',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['noblesse_oblige', 'the_exile'],
          ['noblesse_oblige', 'scholar'],
          ['noblesse_oblige', 'crimson_witch_of_flames'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Energy Recharge',
          'ATK%',
          'Crit Rate / DMG',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Amber support can be utilised even at very low levels, her burst only requiring 40 energy and applies Pyro rapidly, while also having a taunt ability included.\nAs she grows in constellation she'll be giving more utility bonuses, an extra Baron Bunny, manual detonation, burst giving movement speed and ATK bonuses by 15% for 10s.",
      },
    },
  },
  xiangling: {
    roles: {
      DPS: {
        recommended: false,
        weapons: [
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'crescent_pike',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'staff_of_homa',
          },
          {
            id: 'dragonspine_spear',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['bloodstained_chivalry', 'gladiators_finale'],
          ['pale_flame', 'gladiators_finale'],
          ['martial_artist'],
          ['bloodstained_chivalry', 'crimson_witch_of_flames'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'ATK%', 'Energy Recharge', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: '',
        note: "Pale Flame (4) can maintain 100% uptime through using Guoba off cooldown.Crescent Pike is extremely strong on Xiangling due to the nature of her attack combo, Crescent Pike continues to surpass Primordial Jade Winged-Spear in terms of Normal/Charge Attack Damage.Do not use Gladiator's Finale (4) with Crescent Pike due to the passive damage scaling with physical, NOT normal damage.",
      },
      'SUB DPS': {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [
          ['noblesse_oblige', 'crimson_witch_of_flames'],
          ['crimson_witch_of_flames'],
          ['crimson_witch_of_flames', 'gladiators_finale'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['noblesse_oblige'],
          ['noblesse_oblige', 'the_exile'],
          ['noblesse_oblige', 'scholar'],
        ],
        mainStats: {
          sands: 'Energy Recharge / ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Energy Recharge',
          'Crit Rate / DMG',
          'ATK%',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Staff of Homa, due to it's superb passive and Crit DMG substat, remains as Xiangling's BIS weapon for a Pyro Sub-DPS build. However, Primordial Jade Winged-Spear offers more flexibility due to it's Crit Rate sub-stat, allowing you to not stress over Crit Rate sub-stats in your artifacts. Switch between the two as you see fit. \nAlthough the damage Skyward Spine nets you is lacking compared to the aforementioned weapons, it does offer more upfront ER, allowing for easier burst rotations. Favonius Lance and Prototype Starglitter accomplish the same task. However, it's worth noting that ER becomes less important when considering a second pyro character for increased energy generation.Prototype Starglitter vs Dragon's Bane depends on what artifacts you currently have. Starglitter offers more upfront ER while Bane offers more upfront EM, and a balanced mix is necessary. It's worth noting that a Dragon's Bane with high refinements will easily outperform Favonius Lance and Starglitter in a Vaporize-centered team composition. ",
      },
    },
  },
  bennett: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'primordial_jade_cutter',
          },
          {
            id: 'summit_shaper',
          },
          {
            id: 'aquila_favonia',
          },
          {
            id: 'the_alley_flash',
          },
          {
            id: 'iron_sting',
            refine: [2, 5],
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'blackcliff_longsword',
          },
          {
            id: 'the_black_sword',
          },
          {
            id: 'iron_sting',
            refine: 1,
          },
          {
            id: 'lions_roar',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'harbinger_of_dawn',
          },
          {
            id: 'fillet_blade',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['crimson_witch_of_flames', 'gladiators_finale'],
          ['crimson_witch_of_flames', 'noblesse_oblige'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['thundering_fury'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Elemental Mastery',
          'Energy Recharge',
        ],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: "Bennett's EB grants you a pyro status as long as your characters are within his burst AoE (Cryo in specific, since Pyro > Cryo).For that, cast EB with Bennett, switch to the character imbued with Cryo and walk on Bennett's Burst fieldUpon entering burst field, the Pyro status will continuously imbue you with Pyro, reacting with other elements on you and eventually removing them.",
        note: "Set 1 works best with chongyun on the same team for consistent melt, c6 bennett does not work with chongyun at all.The recommended artifact sets are based on the assumption a DPS Bennet is build with a Melt/Vape team comp because practically speaking, a Phys Bennett is useless compared to other main DPS roles and Melt/Vape comps are where Bennet shines as a DPS.\nAssuming a melt/vaporize team, Crimson Witch 4-pcs is your best set for damage.Pyro damage bonus will always be the best for cup. The combo for the highest melt/vaporize dmg is black sword and EM sand. R1 iron sting and EM sand turns out to have diminishing retuns and isn't as good, but R2+ iron sting is a different question because better buffs. (Assuming you don't have a whale build's CR/CD stats, in which case Aquilla with EM sands is just flat out better.)\nRegarding Thundering Fury (4): This set works best if paired with Electro supports such as Beidou and Fischl/Lisa, as it allows Bennett to accomplish 2 things:\n1) Rapidly spam E for raw pyro damage + overload\n2) generate tons of energy for the entire team.\nThundering Fury (4) also allows Bennett to quickly break the shields of the Abyss Lectors in Floor 12, chamber 3. This comp is generally only recommended for those with Beidou on c2/c6.",
      },
      SUPPORT: {
        recommended: true,
        weapons: [
          {
            id: 'aquila_favonia',
          },
          {
            id: 'skyward_blade',
          },
          {
            id: 'the_alley_flash',
          },
          {
            id: 'festering_desire',
          },
          {
            id: 'prototype_rancour',
          },
          {
            id: 'favonius_sword',
          },
          {
            id: 'sacrificial_sword',
          },
          {
            id: 'the_flute',
          },
          {
            id: 'skyrider_sword',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['crimson_witch_of_flames', 'noblesse_oblige'],
          ['the_exile', 'scholar'],
          ['the_exile', 'maiden_beloved'],
          ['scholar', 'maiden_beloved'],
          ['instructor'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge / HP%',
          goblet: 'Pyro DMG / HP%',
          circlet: 'Crit Rate / DMG / Healing Bonus',
        },
        subStats: [
          'Crit Rate / DMG',
          'Energy Recharge',
          'ATK% / HP%',
          'Elemental Mastery',
          'Flat HP',
        ],
        talent: ['Burst', 'Skill', 'Normal Attack'],
        tip: '',
        note: "Heals from Elemental Burst scale off of HP, while damage buff from Burst only scales with your base ATK (character base atk stat and weapon base atk stat)\nRegarding Prototype Rancour: This weapon will give you a stronger buff than even Festering Desire (4⭐). However, due to its substat being physical damage%, it requires you to heavily invest into energy recharge in artifacts to maintain good burst uptime. If you only want a stronger atk buff, use this weapon over Festering Desire.\nRegarding Alley Flash: Similar to Prototype Rancour, this weapon will give a very slightly stronger buff as compared to Skyward Blade (5⭐), but requires you to find more energy recharge in artifacts, for this reason, skyward blade is ranked higher.\nDO NOT increase Bennett's constellation from 5 to 6 unless he is in a pyro team and you know what you're doing. This is because Bennett turns all of your melee on-field character's normal/charge attack into pyro, which means that Bennett will lose a lot of his team comp potential.\nAlthough Bennett is usually considered a healer, he already heals a lot even without necessarily building for HP%, if you find it unnecessary to build for HP%, you are free to build him as a Pyro DPS with ATK% and Crit.\n",
      },
    },
  },
  xinyan: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'skyward_pride',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'snow-tombed_starsilver',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'whiteblind',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'royal_greatsword',
          },
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'debate_club',
          },
          {
            id: 'favonius_greatsword',
          },
          {
            id: 'skyrider_greatsword',
          },
        ],
        artifacts: [
          ['pale_flame', 'bloodstained_chivalry'],
          ['retracing_bolide'],
          ['gladiators_finale', 'bloodstained_chivalry'],
          ['gladiators_finale'],
          ['bloodstained_chivalry'],
        ],
        mainStats: {
          sands: 'ATK%',
          goblet: 'Physical DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Flat ATK',
          'DEF%',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: "Xinyan's ES grants you a pyro status upon contact with shield. No matter how many times you switch your characters, it'll still apply pryo every instant you switch with shield. This allows you to cleanse every single elemental status that has been applied to you.If the status doesn't get cleansed, switch on that character one more time with the shield. Pyro doesn't cleanse Hydro very efficiently, take Cecilia Garden for example, you'll have to apply pyro on your character 4 times before actually cleansing the hydro status",
        note: "Whiteblind would be better than Prototype Archaic if you're willing to give up some DPS for a stronger shield, but even so Xinyan's DEF scaling on her shield is lacking in comparison to other shielders It's best to think of her shield as a knockback counter bonus and go for the highest DPS options, so please avoid building DEF intentionally.\nDespite how dependant Xinyan's playstyle can get with Charged Attacks, Bloodstained Chivalry Full Set is still not recommended due to it only coming in effect after a kill.\n",
      },
      SUPPORT: {
        recommended: false,
        weapons: [
          {
            id: 'sacrificial_greatsword',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'whiteblind',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'favonius_greatsword',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['bloodstained_chivalry', 'noblesse_oblige'],
          ['noblesse_oblige', 'the_exile'],
          ['gladiators_finale', 'bloodstained_chivalry'],
          ['tenacity_of_the_millelith'],
          ['defenders_will', 'noblesse_oblige'],
          ['the_exile'],
        ],
        mainStats: {
          sands: 'DEF% / Energy Recharge',
          goblet: 'Physical DMG / DEF%',
          circlet: 'DEF% / Crit Rate / Crit DMG',
        },
        subStats: ['DEF% / ATK%', 'Crit Rate / DMG', 'Energy Recharge'],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: "For a sub-DPS role, Set 1 is best on Xinyan once she's C2. \nXinyan support is mostly used for her shield and/or burst damage. If you want to use her as a Physical Support, she needs both her Ascension 4 Talent and C4 to maximize her support capabilities, making her a somewhat expensive choice to be considered for Physical Support role. However, the Tenacity of the Millelith set gives her a new role with a lower Constellation level prerequisite.\nTenacity of the Millelith: This set gives Xinyan a unique role among the shielders. Currently, Xinyan is one of the few shielders in the game who can make full use of the Tenacity set's effects. If you can maximize the uptime of Xinyan's Level 3 shield, she can provide a constant 30% Shield Strength and 20% Atk boost to the team (as long as the pulses hit an enemy). This means that Sacrificial Greatsword and Xinyan's C2 are crucial to making this set shine on her. This set isn't as recommended for her if you have neither of the two.\nShield uptime is also crucial to maximizing her Physical/Shield Support capabilities. If you have neither Sacrificial Greatsword nor at least C2 (but ideally C4) on Xinyan, you may want to build her as a Burst Support instead of Physical/Shield Support.\nAt C2, her burst \"Riff Revolution\" has a 100% Crit Rate, which means you can build solely Crit Dmg (instead of trying to get a 1:2 Crit Rate:Crit DMG ratio) if you're building her as a Physical Burst support.\nGenerally not recommended for Pyro Applications, as the pulses only happen at Shield Level 3, and are not very efficient at breaking Cryo shields.",
      },
    },
  },
  yanfei: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'royal_grimoire',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'frostbearer',
          },
          {
            id: 'magic_guide',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['wanderers_troupe'],
          ['crimson_witch_of_flames', 'gladiators_finale'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['retracing_bolide'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: 'Her Ascension 4 Talent does a second hit after a Crit Charge Attack. This scales 80% of your ATK and can trigger reactions as well due to having a separate internal cooldown on its pyro application. For more information on Yanfei and her role in a team, check https://www.youtube.com/watch?v=Uz7E1kOlZDc.',
        note: "Yanfei can have trouble trying to set up for her reaction DPS. Vaporize is generally the more consistent option and you need Xingqiu to make this work best. When running a vaporise team with Xingqiu, 3 normal attacks into a charged attack (N1>N2>N3>C) is the safest and most reliable way to vaporise your charged attacks. Make sure you're adding applying hydro first before starting combos.\nEnergy Recharge is prioritized over Elemental Mastery here since she has an 80 energy burst cost while her skill is also not very efficient at generating particles for getting it back. A major source of your energy will be coming from enemies as well as potential pyro batteries like Bennett, so be sure to have her pick the particles up as off-field characters only get 0.6x the value of the particles.\nRegarding her weapon priority, a Memory of Dust would overtake all of the other catalysts assuming you are running her with a shield character, such as Zhongli.\nRunning Yanfei with a shield character also allows you to make use of a full Retracing Bolide 4-set as a placeholder, until you're able to find a good Crimson Witch 4-set. ",
      },
    },
  },
  diluc: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'rainslasher',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'debate_club',
            refine: 5,
          },
          {
            id: 'snow-tombed_starsilver',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['crimson_witch_of_flames', 'gladiators_finale'],
          ['crimson_witch_of_flames', 'wanderers_troupe'],
          ['gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Elemental Mastery',
          'Energy Recharge',
        ],
        talent: ['Normal Attack', 'Skill', 'Burst'],
        tip: 'You can interweave Normal Attacks while using his Elemental skill.ie. ES -> NA -> NA -> ES -> NA -> NA -> ES -> NA -> NA',
        note: "Crimson Witch of Flames is generally the better choice with how easily Diluc can stack up for Pyro Damage, while his burst imbues his Normal/Charged Attacks with Pyro.\nGladiator's Finale is for those who are still reluctant on farming for Crimson Witch of Flames (Pre-AR 45), this will still provide it a fairly decent increase in DPS as he still relies on his Normal/Charged Attacks mostly.\nIf you're Constellation 2, refrain from using Serpent Spine as C2 requires you to take damage for the buff which counteracts with Serpent Spine's Stacks UNLESS Diluc is being used with Zhongli for consistent shield. Serpent Spine can lose its stacks if you take any damage, but taking hits with a shield on does not constitute as taking damage. Constellation 2 buff stacks up even if you take hits with a shield, which means that you can potentially stack up both constellation 2 buff and the serpent spine buff. This can only be performed consistently by a well invested Zhongli. (S1 means 1 Stack)\nIf Diluc is run alongside Xingqiu where he can trigger vaporize very often, you can run EM sands as an alternative to ATK sands. EM boosts diluc's reaction damage by a lot after all. Note that when Diluc's pyro imbued basic attack is active, he can trigger vaporize every 2 basic attacks due to internal cooldown. (vaporize, no vaporize, vaporize, no vaporize, etc.)\nLithic Blade is assumed to have 1 stack active bc you will almost definitely be running xingqiu with diluc in every situation.\nRegarding Serpent Spine: R5 serpent spine (with decent stack management) will outperform a R2 Wolf's gravestone.Regarding Rainslasher: For obvious reasons, this weapon is only recommended when Diluc is in a team comp where he can consistently proc vaporise (i.e. when paired with Xingqiu). Rainslasher will also outperform Blackcliff Slasher at [R3+].\n",
      },
    },
  },
  klee: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'lost_prayer_to_the_sacred_winds',
          },
          {
            id: 'the_widsith',
            refine: 5,
          },
          {
            id: 'memory_of_dust',
          },
          {
            id: 'solar_pearl',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'blackcliff_agate',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'royal_grimoire',
          },
          {
            id: 'eye_of_perception',
          },
          {
            id: 'frostbearer',
          },
          {
            id: 'magic_guide',
          },
        ],
        artifacts: [
          ['gladiators_finale', 'crimson_witch_of_flames'],
          ['crimson_witch_of_flames'],
          ['lavawalker'],
          ['crimson_witch_of_flames', 'noblesse_oblige'],
          ['wanderers_troupe'],
        ],
        mainStats: {
          sands: 'ATK% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Elemental Mastery',
          'Energy Recharge',
          'Flat ATK',
        ],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: 'Extremely squishy, Klee requires great positioning. Being tiny, this is hard to achieve. Constant jumping during your charged attacks can help.',
        note: "Attacks have a 50% chance of spawning a floating star. Floating star removes the stamina cost for the next Charged Attack and increases 50% of it's damage, this gives us another DPS option (Wanderer's Troupe).\nGladiator's Finale and Crimson Witch of Flames hybrid is generally the easiest utilised build for general combat, as you get a straight increase of damage from your stats and Pyro Damage Bonus.\nCrimson Witch of Flames is best used against Cryo/Electro enemies as it increases the damage of your reactions, but the 4-set perk doesn't really get stacked efficiently as Klee's Elemental Skill takes quite a while to charge again, making it hard to have the set used at full capacity.\nKlee's kit makes it harder to utilize vaporize and melt the same way another pyro carry would, but her constant pyro application makes Lavawalkers a viable set. See Kleeful Frame's great number breakdown here \nWith her fantastic energy generation and ult uptime, 2 Noblesse becomes viable. \nWanderer's Troupe increases the Charged Attack by another 35% Damage Bonus. It can serve as a decent DPS choice but due to how clunky Klee's attack animations are, it's hard to put this in actual practise as it requires you to dodge more and consume more stamina, not to mention how the DPS gets caught up by the 2 other builds mentioned above.\n",
      },
      'BURST DPS/NUKE': {
        recommended: false,
        weapons: [
          {
            id: 'skyward_atlas',
          },
          {
            id: 'the_widsith',
          },
          {
            id: 'mappa_mare',
          },
          {
            id: 'favonius_codex',
          },
          {
            id: 'thrilling_tales_of_dragon_slayers',
          },
        ],
        artifacts: [
          ['noblesse_oblige'],
          ['instructor'],
          ['crimson_witch_of_flames'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'ATK%',
          'Energy Recharge',
          'Elemental Mastery',
          'Flat ATK',
        ],
        talent: ['Skill', 'Burst', 'Normal Attack'],
        tip: '',
        note: "Use Instructor Set when Constellation is less than [C4]. Use either Noblesse Oblige or Crimson Witch of Flames at [C4]+. Klee's ult does not carry over when you change characters. Keep in mind klee is really bad as a support and only used for applying pyro effectively if below [C4]",
      },
    },
  },
  hu_tao: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'staff_of_homa',
          },
          {
            id: 'primordial_jade_winged-spear',
          },
          {
            id: 'dragons_bane',
          },
          {
            id: 'deathmatch',
          },
          {
            id: 'blackcliff_pole',
          },
          {
            id: 'vortex_vanquisher',
          },
          {
            id: 'skyward_spine',
          },
          {
            id: 'white_tassel',
          },
          {
            id: 'lithic_spear',
          },
          {
            id: 'prototype_starglitter',
          },
          {
            id: 'favonius_lance',
          },
          {
            id: 'halberd',
          },
        ],
        artifacts: [
          ['crimson_witch_of_flames'],
          ['wanderers_troupe', 'crimson_witch_of_flames'],
          ['tenacity_of_the_millelith', 'crimson_witch_of_flames'],
          ['retracing_bolide'],
          ['noblesse_oblige', 'crimson_witch_of_flames'],
          ['heart_of_depth'],
          ['thundering_fury'],
        ],
        mainStats: {
          sands: 'HP% / Elemental Mastery',
          goblet: 'Pyro DMG',
          circlet: 'Crit Rate / DMG',
        },
        subStats: [
          'Crit Rate / DMG',
          'HP%',
          'Elemental Mastery',
          'Atk%',
          'Energy Recharge',
        ],
        talent: ['Normal Attack', 'Skill / Burst', 'Burst / Skill'],
        tip: "Use Hu Tao's Elemental Burst (Q) when your HP is below 50% (=/<50%), and use it when Hu Tao's Elemental Skill is about to end as to maximize its damage.For more indepth information about Hu Tao, please check https://keqingmains.com/hu-tao/",
        note: "Important Note - Hu Tao is most effective when used with Xingqiu to proc Vaporize reactions which utilizes her BiS Set, Crimson Witch of Flames 4-pcs.\nSet 1 and 2 are for higher sustained dps and higher reaction damage, while Set 4 is for higher Elemental burst damage in exchange for lower sustained & reaction damage.  Prioritize burst before your skill if you are going 2 set NO 2 set CW, and prioritize skill if you are running a 4 set CW or 2 set CW 2 set WT\nRetracing Bolide (4) and Wanderer's Troupe / Tenacity of the Millelith (2) + Crimson's Witch of Flame (2) is almost on equal footing because both of the sets have an equal overall damage output assuming you have 100% shield uptime when using Bolide (4). The difference is, you want to use 2/2 WT/CW when focusing on Nuking and better consistency, while 4 Bolide is for overall higher AA damage at the expense of lower burst damage, although inconsistent if you cannot keep your shield permanently.\nHeart of Depth is a niche alternative for charge attack spam builds. 4 Thundering Fury is also a niche alternative for when you pair hutao with xingqiu and fischl to overload and reduce e downtime.\nDeathmatch (4⭐) is better than Dragon's Bane (4⭐) when you're not using Xingqiu in pair with Hu Tao. Although it is highly recommended to pair Xingqiu with her, so most of the times, Dragon's Bane is better.\nVortex Vanquisher and Skyward Spine provide little to nothing to hutao since hutao scales better with HP% than atk% with every spear in the game. Base attack DOES NOT MAKE A DIFFERENCE WHATSOEVER on Hutao because Hutao has a very high hp to atk conversion cap. It is so high that even a 3 star weapon's base attack is enough. In this example scenario, with 40k max hp, hutao won't hit the conversion cap with the 3 star weapon base atk, and normally you won't be getting 40k max hp anyway, so getting a spear on hutao only for the sake of higher conversion cap is just not worth it.",
      },
    },
  },
  eula: {
    roles: {
      DPS: {
        recommended: true,
        weapons: [
          {
            id: 'wolfs_gravestone',
          },
          {
            id: 'song_of_broken_pines',
          },
          {
            id: 'the_unforged',
          },
          {
            id: 'serpent_spine',
          },
          {
            id: 'skyward_pride',
          },
          {
            id: 'blackcliff_slasher',
          },
          {
            id: 'lithic_blade',
          },
          {
            id: 'prototype_archaic',
          },
          {
            id: 'snow-tombed_starsilver',
          },
          {
            id: 'skyrider_greatsword',
            refine: 5,
          },
          {
            id: 'debate_club',
            refine: 5,
          },
        ],
        artifacts: [
          ['pale_flame'],
          ['pale_flame', 'bloodstained_chivalry'],
          ['pale_flame', 'gladiators_finale'],
          ['bloodstained_chivalry', 'gladiators_finale'],
          ['gladiators_finale'],
        ],
        mainStats: {
          sands: 'ATK% / Energy Recharge',
          goblet: 'Physical DMG / ATK%',
          circlet: 'Crit Rate / DMG',
        },
        subStats: ['Crit Rate / DMG', 'Energy Recharge', 'ATK%', 'Flat ATK'],
        talent: ['Normal Attack', 'Burst', 'Skill'],
        tip: 'The simpler way to illustrate her combo is:\nNormal combo: NA Spam > Press Cast Skill > NA Spam > Press Cast Skill.\nBurst combo: Press Cast > Burst > Press Cast > NA Spam > Hold Cast\n Currently the best theorized combo for Eula is 2 NA -> ES Tap -> EB -> ES Tap -> 4 NA -> dodge cancel -> 2 NA -> Hold ES Cast -> 2 NA -> Lightfall Sword Explosion\nAn alternative combo is ES Tap -> EB -> ES Hold -> 4 NA -> dodge cancel -> 3 NA -> Lightfall Sword Explosion',
        note: "Eula's weapon rankings assume that you're not running her with Bennett, and that she has more than 40% ER substats from her artifacts alone. Increasing Eula's Energy Recharge up to ~140% through substats can help alleviate her burst downtime.\nEula's burst does not snapshot. This means that any buffs Eula has upon casting burst will not be taken into effect if the buff duration expires before the Lightfall Sword hits.\nRegarding Pale Flame (4): This is Eula's optimal artifact set and it relies on having a condition fulfilled in order to outperform Pale Flame (2) + Bloodstained Chivalry (2). If you are able to sustain the conditional buff, you will be able to achieve a 50% Physical DMG Bonus + 18% Atk. Without using your Elemental Burst, you can sustain the Pale Flame's 4 set bonus because each stack lasts 7s and it refreshes per stack, and Eula's Elemental Skill is only 4s when doing 1-taps, therefore you can keep the condition up. When using this set, it is recommended to not use hold skill cast until your Lightfall Sword is nearly about to end. This restriction is only for players who don't have Eula C2 or above. Please visit the Ability Tips for her combo.\nRegarding Serpent Spine: It is only better than Skyward Pride in terms of damage within one rotation when it has more than one refinement.\nRegarding Skyward Pride: This weapon is more forgiving towards ER substats. If there is a cryo battery unit in your team (Diona with Sacrificial bow or Kaeya with Favonius Sword) or your team generates enough particles on their own, Skyward Pride loses effectiveness compared to the above options.\nRegarding Energy Recharge Sands: This follows the same principle as Skyward Pride. If your energy recharge is below ~140% and you're struggling to keep burst uptime due to lackluster particle generation, this is a solid choice.",
      },
    },
  },
};
