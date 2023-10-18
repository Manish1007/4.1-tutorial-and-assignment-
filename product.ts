export interface Product {
  id: number;
  name: string;
  price: number;
  country: string;
  description: string;
}

export const products = [
  {
    id: 789,
    name: 'Samsung Flip',
    price: 1200,
    country: 'USA',
    description: 'A large screen with full HD',
  },
  {
    id: 743,
    name: 'Vivo pix',
    price: 800,
    country: 'USA',
    description: 'A large screen with 128M pixel camera',
  },
  {
    id: 983,
    name: 'Samsung S20',
    price: 1000,
    country: 'USA',
    description: 'A large screen with ultra speed charger',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
