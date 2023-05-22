const MILK_PRODUCTS_RU = {
  PASTERIZOVANNOE: 'Пастеризованное',
  ULTRAPASTERIZOVANNOE: 'Ультрапастеризованное',
  TOPLENOE: 'Топленое',
  STERILIZOVANNOE: 'Стерилизованное',
} as const;

const VEGETABLE_PRODUCTS_RU = {
  TOMATOES: 'Помидоры',
  CUCUMBERS: 'Огурцы',
  PEPPER: 'Перец',
  POTATO: 'Картофель',
  CARROT: 'Морковь',
  ONION: 'Лук',
  BEET: 'Свекла',
} as const;

export const MILK_PRODUCTS = {
  [MILK_PRODUCTS_RU.PASTERIZOVANNOE]: 'pasterizovannoe',
  [MILK_PRODUCTS_RU.ULTRAPASTERIZOVANNOE]: 'ultrapasterizovannoe',
  [MILK_PRODUCTS_RU.TOPLENOE]: 'toplenoe',
  [MILK_PRODUCTS_RU.STERILIZOVANNOE]: 'sterilizovannoe',
} as const;

export const VEGETABLE_PRODUCTS = {
  [VEGETABLE_PRODUCTS_RU.TOMATOES]: 'tomotoes',
  [VEGETABLE_PRODUCTS_RU.CUCUMBERS]: 'cucumbers',
  [VEGETABLE_PRODUCTS_RU.PEPPER]: 'pepper',
  [VEGETABLE_PRODUCTS_RU.POTATO]: 'potato',
  [VEGETABLE_PRODUCTS_RU.CARROT]: 'carrot',
  [VEGETABLE_PRODUCTS_RU.ONION]: 'onion',
  [VEGETABLE_PRODUCTS_RU.BEET]: 'beet',
} as const;
