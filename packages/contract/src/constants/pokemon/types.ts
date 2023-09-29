import { DamageClass, TypeNames } from '@prisma/client';
import { IType } from '../../types';

export const typesArray: IType[] = [
  {
    name: TypeNames.normal,
    damageClass: DamageClass.physical,
    doubleDamageFrom: [TypeNames.fighting],
    doubleDamageTo: [],
    halfDamageFrom: [],
    halfDamageTo: [TypeNames.rock, TypeNames.steel],
    noDamageFrom: [TypeNames.ghost],
    noDamageTo: [TypeNames.ghost],
  },
  {
    name: TypeNames.ice,
    damageClass: DamageClass.special,
    doubleDamageFrom: [TypeNames.fighting, TypeNames.rock, TypeNames.steel, TypeNames.fire],
    doubleDamageTo: [TypeNames.flying, TypeNames.ground, TypeNames.grass, TypeNames.dragon],
    halfDamageFrom: [TypeNames.ice],
    halfDamageTo: [TypeNames.steel, TypeNames.fire, TypeNames.water, TypeNames.ice],
    noDamageFrom: [],
    noDamageTo: [],
  },
  {
    name: TypeNames.ghost,
    damageClass: DamageClass.physical,
    doubleDamageFrom: [TypeNames.ghost, TypeNames.dark],
    doubleDamageTo: [TypeNames.ghost, TypeNames.psychic],
    halfDamageFrom: [TypeNames.poison, TypeNames.bug],
    halfDamageTo: [TypeNames.dark, TypeNames.steel],
    noDamageFrom: [TypeNames.normal, TypeNames.fighting],
    noDamageTo: [TypeNames.normal],
  },
  {
    name: TypeNames.dark,
    damageClass: DamageClass.special,
    doubleDamageFrom: [TypeNames.fighting, TypeNames.bug],
    doubleDamageTo: [TypeNames.ghost, TypeNames.psychic],
    halfDamageFrom: [TypeNames.ghost, TypeNames.dark],
    halfDamageTo: [TypeNames.fighting, TypeNames.dark, TypeNames.steel],
    noDamageFrom: [TypeNames.psychic],
    noDamageTo: [],
  },
  {
    name: TypeNames.grass,
    damageClass: DamageClass.special,
    doubleDamageFrom: [TypeNames.flying, TypeNames.poison, TypeNames.bug, TypeNames.fire, TypeNames.ice],
    doubleDamageTo: [TypeNames.ground, TypeNames.rock, TypeNames.water],
    halfDamageFrom: [TypeNames.ground, TypeNames.water, TypeNames.grass, TypeNames.electric],
    halfDamageTo: [TypeNames.flying, TypeNames.poison, TypeNames.bug, TypeNames.steel, TypeNames.fire, TypeNames.grass, TypeNames.dragon],
    noDamageFrom: [],
    noDamageTo: [],
  },
  {
    name: TypeNames.electric,
    damageClass: DamageClass.special,
    doubleDamageFrom: [TypeNames.ground],
    doubleDamageTo: [TypeNames.flying, TypeNames.water],
    halfDamageFrom: [TypeNames.flying, TypeNames.steel, TypeNames.electric],
    halfDamageTo: [TypeNames.grass, TypeNames.electric, TypeNames.dragon],
    noDamageFrom: [],
    noDamageTo: [TypeNames.ground],
  },
  {
    name: TypeNames.steel,
    damageClass: DamageClass.physical,
    doubleDamageFrom: [TypeNames.fighting, TypeNames.ground, TypeNames.fire],
    doubleDamageTo: [TypeNames.rock, TypeNames.ice],
    halfDamageFrom: [
      TypeNames.normal,
      TypeNames.flying,
      TypeNames.rock,
      TypeNames.bug,
      TypeNames.steel,
      TypeNames.grass,
      TypeNames.psychic,
      TypeNames.ice,
      TypeNames.dragon,
      TypeNames.ghost,
      TypeNames.dark,
    ],
    halfDamageTo: [TypeNames.steel, TypeNames.fire, TypeNames.water, TypeNames.electric],
    noDamageFrom: [TypeNames.poison],
    noDamageTo: [],
  },
  {
    name: TypeNames.ground,
    damageClass: DamageClass.physical,
    doubleDamageFrom: [TypeNames.water, TypeNames.grass, TypeNames.ice],
    doubleDamageTo: [TypeNames.poison, TypeNames.rock, TypeNames.steel, TypeNames.fire, TypeNames.electric],
    halfDamageFrom: [TypeNames.poison, TypeNames.rock],
    halfDamageTo: [TypeNames.bug, TypeNames.grass],
    noDamageFrom: [TypeNames.electric],
    noDamageTo: [TypeNames.flying],
  },
  {
    name: TypeNames.fighting,
    damageClass: DamageClass.physical,
    doubleDamageFrom: [TypeNames.flying, TypeNames.psychic],
    doubleDamageTo: [TypeNames.normal, TypeNames.rock, TypeNames.steel, TypeNames.ice, TypeNames.dark],
    halfDamageFrom: [TypeNames.rock, TypeNames.bug, TypeNames.dark],
    halfDamageTo: [TypeNames.flying, TypeNames.poison, TypeNames.bug, TypeNames.psychic],
    noDamageFrom: [],
    noDamageTo: [TypeNames.ghost],
  },
  {
    name: TypeNames.bug,
    damageClass: DamageClass.physical,
    doubleDamageFrom: [TypeNames.flying, TypeNames.rock, TypeNames.fire],
    doubleDamageTo: [TypeNames.grass, TypeNames.psychic, TypeNames.dark],
    halfDamageFrom: [TypeNames.fighting, TypeNames.ground, TypeNames.grass],
    halfDamageTo: [TypeNames.fighting, TypeNames.flying, TypeNames.poison, TypeNames.ghost, TypeNames.steel, TypeNames.fire],
    noDamageFrom: [],
    noDamageTo: [],
  },
  {
    name: TypeNames.poison,
    damageClass: DamageClass.physical,
    doubleDamageFrom: [TypeNames.ground, TypeNames.psychic],
    doubleDamageTo: [TypeNames.grass],
    halfDamageFrom: [TypeNames.fighting, TypeNames.poison, TypeNames.bug, TypeNames.grass],
    halfDamageTo: [TypeNames.poison, TypeNames.ground, TypeNames.rock, TypeNames.ghost],
    noDamageFrom: [],
    noDamageTo: [TypeNames.steel],
  },
  {
    name: TypeNames.rock,
    damageClass: DamageClass.physical,
    doubleDamageFrom: [TypeNames.fighting, TypeNames.ground, TypeNames.steel, TypeNames.water, TypeNames.grass],
    doubleDamageTo: [TypeNames.flying, TypeNames.bug, TypeNames.fire, TypeNames.ice],
    halfDamageFrom: [TypeNames.normal, TypeNames.flying, TypeNames.poison, TypeNames.fire],
    halfDamageTo: [TypeNames.fighting, TypeNames.ground, TypeNames.steel],
    noDamageFrom: [],
    noDamageTo: [],
  },
  {
    name: TypeNames.water,
    damageClass: DamageClass.special,
    doubleDamageFrom: [TypeNames.grass, TypeNames.electric],
    doubleDamageTo: [TypeNames.ground, TypeNames.rock, TypeNames.fire],
    halfDamageFrom: [TypeNames.steel, TypeNames.fire, TypeNames.water, TypeNames.ice],
    halfDamageTo: [TypeNames.water, TypeNames.grass, TypeNames.dragon],
    noDamageFrom: [],
    noDamageTo: [],
  },
  {
    name: TypeNames.flying,
    damageClass: DamageClass.physical,
    doubleDamageFrom: [TypeNames.rock, TypeNames.electric, TypeNames.ice],
    doubleDamageTo: [TypeNames.fighting, TypeNames.bug, TypeNames.grass],
    halfDamageFrom: [TypeNames.fighting, TypeNames.bug, TypeNames.grass],
    halfDamageTo: [TypeNames.rock, TypeNames.steel, TypeNames.electric],
    noDamageFrom: [TypeNames.ground],
    noDamageTo: [],
  },
  {
    name: TypeNames.fire,
    damageClass: DamageClass.special,
    doubleDamageFrom: [TypeNames.ground, TypeNames.rock, TypeNames.water],
    doubleDamageTo: [TypeNames.bug, TypeNames.steel, TypeNames.grass, TypeNames.ice],
    halfDamageFrom: [TypeNames.bug, TypeNames.steel, TypeNames.fire, TypeNames.grass, TypeNames.ice],
    halfDamageTo: [TypeNames.rock, TypeNames.fire, TypeNames.water, TypeNames.dragon],
    noDamageFrom: [],
    noDamageTo: [],
  },
  {
    name: TypeNames.dragon,
    damageClass: DamageClass.special,
    doubleDamageFrom: [TypeNames.ice, TypeNames.dragon],
    doubleDamageTo: [TypeNames.dragon],
    halfDamageFrom: [TypeNames.fire, TypeNames.water, TypeNames.grass, TypeNames.electric],
    halfDamageTo: [TypeNames.steel],
    noDamageFrom: [],
    noDamageTo: [],
  },
  {
    name: TypeNames.psychic,
    damageClass: DamageClass.special,
    doubleDamageFrom: [TypeNames.bug, TypeNames.ghost, TypeNames.dark],
    doubleDamageTo: [TypeNames.fighting, TypeNames.poison],
    halfDamageFrom: [TypeNames.fighting, TypeNames.psychic],
    halfDamageTo: [TypeNames.steel, TypeNames.psychic],
    noDamageFrom: [],
    noDamageTo: [TypeNames.dark],
  },
  {
    name: TypeNames.empty,
    damageClass: DamageClass.none,
    doubleDamageFrom: [],
    doubleDamageTo: [],
    halfDamageFrom: [],
    halfDamageTo: [],
    noDamageFrom: [],
    noDamageTo: [],
  },
];