import type {PropsWithChildren, ReactNode} from 'react'

interface ChildProps extends PropsWithChildren {
    title:string,
    footer?:ReactNode
}

export const Card = ({title, children, footer}:ChildProps) => {
  return (
    <section>
        <h2>{title}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
    </section>
  )
}
