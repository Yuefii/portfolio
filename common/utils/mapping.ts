import { Children, ReactNode } from 'react'

interface MappingProps<T> {
  of: T[]
  render: (item: T, index: number) => ReactNode
}

const Mapping = <T>({ of, render }: MappingProps<T>) => {
  return Children.toArray(of.map((item, index) => render(item, index)))
}

export default Mapping
