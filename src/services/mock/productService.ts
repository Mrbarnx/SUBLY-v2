import { products } from '../../data/mockData'
import type { ProductService } from '../contracts'
export const productService:ProductService={async list(){return structuredClone(products)},async getBySlug(slug){return structuredClone(products.find(product=>product.slug===slug)??null)}}
