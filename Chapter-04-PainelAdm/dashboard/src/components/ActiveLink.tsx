import { cloneElement, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'

import { useRouter } from 'next/dist/client/router'

type ActiveLinkProps = LinkProps & {
  children: ReactElement
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  let isActive = false

  const { asPath } = useRouter()

  if (asPath === rest.href) {
    isActive = true
  }

  return (
    // cloneElement clona o primeiro elemento dentro do Link para modificar alguma coisa dele
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'red.700' : 'gray.50',
      })}
    </Link>
  )
}
