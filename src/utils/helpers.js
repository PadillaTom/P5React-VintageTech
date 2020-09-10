// helper functions
//
// :::::::::: Featured Products :::::::::::
// Filter --> Si el item tiene Featured: True then Return it.
// Pasando Data como parametro
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
