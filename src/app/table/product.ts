export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
  }
  export interface Target {
    id?: string;
    colA: string;
    colB: string;
    product?:Product;
    originCol?:any;
    originTableIndex?:any
  }
  