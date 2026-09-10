import type { Product } from '../../types'
import { cn } from '../../lib/cn'
import { productAppIcons } from '../../data/appIcons'
import { Icon } from '../ui/Icon'

export function AppLogo({product,className}: {product:Product;className?:string}) {
  const icon = productAppIcons[product.id]

  if (icon) {
    return (
      <div
        className={cn('grid aspect-square shrink-0 place-items-center', !className && 'size-20', className)}
        role="img"
        aria-label={`${product.name} logo`}
      >
        <img
          src={icon}
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div
      className={cn('grid aspect-square shrink-0 place-items-center rounded-2xl text-white shadow-sm', !className && 'size-20', className)}
      style={{background:product.logoColor}}
      role="img"
      aria-label={`${product.name} app icon unavailable`}
    >
      <Icon name="box" className="size-[42%]" strokeWidth={1.8}/>
    </div>
  )
}
