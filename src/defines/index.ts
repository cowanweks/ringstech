
export interface ICartItem {
  brand: string,
  model: string,
  quantity: number,
  item_name: string,
  item_color: string,
  item_image: string,
  in_stock: number,
  item_price: number,
  item_description: string
}

export interface IOrder {
  brand: string,
  model: string,
  quantity: number,
  item_name: string,
  item_color: string,
  item_image: string,
  in_stock: number,
  item_price: number,
  item_description: string
}


export interface IProduct {
  product_id?: string | undefined,
  rom?: string;
  type?: string,
  description?: string;
  product_name?: string;
  product_unit_price?: number;
  product_category?: string;
  available_colors?: Array<string>;
  in_stock?: number;
  product_image?: string;
  brand?: string;
  model?: string;
  battery?: string;
  cameras?: string;
  processor?: string | null;
  display?: string;
  ram?: string;
}

export interface ILifeStyle {
  product_id?: string | undefined,
  type?: string,
  description?: string;
  product_name?: string;
  product_unit_price?: number;
  product_category?: string;
  available_colors?: Array<string>;
  in_stock?: number;
  product_image?: string;
  brand?: string;
  model?: string;
}