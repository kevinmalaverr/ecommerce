export function productsToSearchList(products) {
  const searchList = []

  products.forEach(({ name, id }) => {
    searchList.push({ name, id })
  })

  return searchList
}
