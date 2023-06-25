import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    
    collections => collections ?  Object.keys(collections).map(key=> collections[key]) : []
)


// export const selectCollection = (collectionUrlParam) =>{ 
// console.log(collectionUrlParam);
 
// return (createSelector(
//     [selectCollections],
             
//     collections => (collections ? collections.map(key=> collections[collectionUrlParam]===key) : null)
//     //`${console.log(collections)}` 
// ))
// };


// export const selectCollection = (collectionUrlParam) =>  createSelector(
//       [selectCollections],
//       (collections) => {
//         if (collections) {
//           return collections.find((key) => key === String(collectionUrlParam)) || null;
//         }
//         return null;
//     }
// );




export const selectCollection = (collectionUrlParam) => {
    console.log(collectionUrlParam);
    const str = String(collectionUrlParam)
  
    return createSelector(
      [selectCollections],
      (collections) => collections.find((obj) => obj.routeName === str) 
        // collections ? collections.find((key) => key === String(collectionUrlParam)) || null : null
    );
};



export const selectIsCollectionFetching =
createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded= createSelector(
    [selectShop],
    shop => !!shop.collections
)


// export const selectCollection = collectionUrlParam => createSelector(
//     [selectCollections],
//     collections => collections.id===COLLECTION_ID_MAP[collectionUrlParam] 
// );






