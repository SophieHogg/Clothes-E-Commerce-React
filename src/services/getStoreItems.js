import { firestore } from "./../firebase";

export const getStoreItems = async () => {
    //Specify which collection
    const collectionRef = firestore.collection("items"); //collectionReference
    //get records
    const data = await collectionRef.get(); //returns QuerySnapshot
    //want to return docs
    const rawDocuments = data.docs; //Array of Query Document Snapshots
    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    return cleanedDocuments;
};

export const getItemById = async (id) => {
    const collectionRef = firestore.collection("items");
    //get document ref
    const docRef = collectionRef.doc(id);
    const rawDoc = await docRef.get();
    return { id: rawDoc.id, ...rawDoc.data() };
};

export const getItemByFavourite = async (favourited) => {
    const collectionRef = firestore.collection("items");
    //get document ref
    const docRef = collectionRef.doc(favourited);
    const rawDoc = await docRef.get();
    return { id: rawDoc.id, ...rawDoc.data() };
};

export const removeFromCart = async (id, stock, inCart) => {
    const collectionRef = firestore.collection("items");
    //get document ref
    const docRef = collectionRef.doc(id);
    docRef.update({ stock: stock + 1 });
    docRef.update({ inCart: inCart - 1 });
    return true;
};

export const addToCart = async (id, stock, inCart) => {
    const collectionRef = firestore.collection("items");
    //get document ref
    const docRef = collectionRef.doc(id);
    docRef.update({ stock: stock - 1 });
    docRef.update({ inCart: inCart + 1 });
    return true;
};

export const toggleFavourites = async (id, favourited) => {
    const collectionRef = firestore.collection("items");
    //get document ref
    const docRef = collectionRef.doc(id);
    docRef.update({ favourited: !favourited });
    return true;
};
