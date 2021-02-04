import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: JSX.Element
}

const ActiveLink = ({ children, ...props }: ActiveLinkProps): JSX.Element => {
  const { pathname } = useRouter()
  return (
    <Link {...props}>
      {React.cloneElement(children, { 'data-active': pathname === props.href ? 'true' : null })}
    </Link>
  )
}

export default ActiveLink
