// src/sanity/structure.js
export const structure = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
