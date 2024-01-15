-- CreateEnum
CREATE TYPE "StatName" AS ENUM ('hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed');

-- CreateEnum
CREATE TYPE "NatureNames" AS ENUM ('adamant', 'bashful', 'bold', 'brave', 'calm', 'careful', 'docile', 'gentle', 'hardy', 'hasty', 'impish', 'jolly', 'lax', 'lonely', 'mild', 'modest', 'naive', 'naughty', 'quiet', 'quirky', 'rash', 'relaxed', 'sassy', 'serious', 'timid');

-- CreateEnum
CREATE TYPE "TypeNames" AS ENUM ('normal', 'ice', 'ghost', 'dark', 'grass', 'electric', 'steel', 'ground', 'fighting', 'bug', 'poison', 'rock', 'water', 'flying', 'fire', 'dragon', 'psychic', 'empty');

-- CreateEnum
CREATE TYPE "DamageClass" AS ENUM ('physical', 'special', 'status');

-- CreateEnum
CREATE TYPE "MoveTarget" AS ENUM ('selectedPokemon', 'user', 'allOpponents', 'userAndAllies', 'specificMove', 'allOtherPokemon', 'entireField', 'ally', 'usersField', 'randomOpponent', 'allPokemon', 'opponentsField');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'genderless');

-- CreateEnum
CREATE TYPE "Tier" AS ENUM ('lc', 'nfe', 'nu', 'ou', 'pu', 'publ', 'uber', 'uu', 'uubl');

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL,
    "name" "TypeNames" NOT NULL,
    "damageClass" "DamageClass" NOT NULL,
    "noDamageTo" "TypeNames"[],
    "halfDamageTo" "TypeNames"[],
    "doubleDamageTo" "TypeNames"[],
    "noDamageFrom" "TypeNames"[],
    "halfDamageFrom" "TypeNames"[],
    "doubleDamageFrom" "TypeNames"[],

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nature" (
    "id" TEXT NOT NULL,
    "name" "NatureNames" NOT NULL,
    "increased" "StatName",
    "decreased" "StatName",

    CONSTRAINT "Nature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "effect" TEXT NOT NULL,
    "flingEffect" TEXT,
    "flingPower" INTEGER,
    "sprite" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nationalPokedexNumber" INTEGER NOT NULL,
    "sprite" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "typeOneName" "TypeNames" NOT NULL,
    "typeTwoName" "TypeNames" NOT NULL,
    "genders" "Gender"[],
    "tier" "Tier" NOT NULL DEFAULT 'lc',
    "baseHp" INTEGER NOT NULL,
    "baseAttack" INTEGER NOT NULL,
    "baseDefense" INTEGER NOT NULL,
    "baseSpattack" INTEGER NOT NULL,
    "baseSpdefense" INTEGER NOT NULL,
    "baseSpeed" INTEGER NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slot" (
    "id" TEXT NOT NULL,
    "name" TEXT DEFAULT 'no-name',
    "teamId" TEXT NOT NULL,
    "nationalPokedexNumber" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "abilityName" TEXT NOT NULL,
    "natureName" "NatureNames" NOT NULL,
    "evHp" INTEGER NOT NULL DEFAULT 0,
    "evAttack" INTEGER NOT NULL DEFAULT 0,
    "evDefense" INTEGER NOT NULL DEFAULT 0,
    "evSpAttack" INTEGER NOT NULL DEFAULT 0,
    "evSpDefense" INTEGER NOT NULL DEFAULT 0,
    "evSpeed" INTEGER NOT NULL DEFAULT 0,
    "ivHp" INTEGER NOT NULL DEFAULT 31,
    "ivAttack" INTEGER NOT NULL DEFAULT 31,
    "ivDefense" INTEGER NOT NULL DEFAULT 31,
    "ivSpAttack" INTEGER NOT NULL DEFAULT 31,
    "ivSpDefense" INTEGER NOT NULL DEFAULT 31,
    "ivSpeed" INTEGER NOT NULL DEFAULT 31,
    "itemName" TEXT,
    "shiny" BOOLEAN NOT NULL DEFAULT false,
    "gender" "Gender" NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 100,
    "happiness" INTEGER NOT NULL DEFAULT 255,
    "moveOneName" TEXT NOT NULL,
    "moveTwoName" TEXT,
    "moveThreeName" TEXT,
    "moveFourName" TEXT,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Move" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "damageClass" "DamageClass" NOT NULL,
    "description" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "pp" INTEGER NOT NULL,
    "target" "MoveTarget" NOT NULL,
    "type" "TypeNames" NOT NULL,

    CONSTRAINT "Move_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AbilityToPokemon" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MoveToPokemon" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ability_name_key" ON "Ability"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Nature_name_key" ON "Nature"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_nationalPokedexNumber_key" ON "Pokemon"("nationalPokedexNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Slot_teamId_order_key" ON "Slot"("teamId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "Move_name_key" ON "Move"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AbilityToPokemon_AB_unique" ON "_AbilityToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_AbilityToPokemon_B_index" ON "_AbilityToPokemon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MoveToPokemon_AB_unique" ON "_MoveToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_MoveToPokemon_B_index" ON "_MoveToPokemon"("B");

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_typeOneName_fkey" FOREIGN KEY ("typeOneName") REFERENCES "Type"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_typeTwoName_fkey" FOREIGN KEY ("typeTwoName") REFERENCES "Type"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_nationalPokedexNumber_fkey" FOREIGN KEY ("nationalPokedexNumber") REFERENCES "Pokemon"("nationalPokedexNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_abilityName_fkey" FOREIGN KEY ("abilityName") REFERENCES "Ability"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_natureName_fkey" FOREIGN KEY ("natureName") REFERENCES "Nature"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_itemName_fkey" FOREIGN KEY ("itemName") REFERENCES "Item"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_moveOneName_fkey" FOREIGN KEY ("moveOneName") REFERENCES "Move"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_moveTwoName_fkey" FOREIGN KEY ("moveTwoName") REFERENCES "Move"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_moveThreeName_fkey" FOREIGN KEY ("moveThreeName") REFERENCES "Move"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_moveFourName_fkey" FOREIGN KEY ("moveFourName") REFERENCES "Move"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToPokemon" ADD CONSTRAINT "_MoveToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Move"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoveToPokemon" ADD CONSTRAINT "_MoveToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
