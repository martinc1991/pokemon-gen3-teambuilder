import { ItemClient } from 'pokenode-ts';
import { itemList } from './itemList';

const itemClient = new ItemClient();

interface Seed_Item {
  name: string;
  effect: string;
  flingEffect?: string;
  flingPower?: number;
  sprite: string;
}

export async function getItems(): Promise<Seed_Item[]> {
  try {
    const items = await Promise.all(
      itemList.map((item) => {
        return itemClient.getItemByName(item.name);
      }),
    );

    return items.map((item, i) => {
      return {
        name: item.name,
        effect: itemList[i].description,
        flingEffect: item.fling_effect?.name ?? null,
        flingPower: item.fling_power ?? null,
        sprite: item.sprites.default,
      };
    });
  } catch (error) {
    console.log('Error getting items info');
    console.log(error);
  }
}
