// TODO: Define la interfaz Product basándote en db.json
export interface Product {
  id: number,
  name: string,
  price: number,
  image: string,
  stock: number,
}

// TODO: Define la interfaz CartItem (Extiende de Product e incluye quantity)
export interface CartItem {
  producto: Product
  quantity: number
}