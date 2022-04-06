import { initializeApp } from "firebase/app";
import { getFirestore, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"; 

function FirebaseTestScreen() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("all-listings");

    function getListings() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setListings(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getListings();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Listings</h1>
            {listings.map((listing) => (
                <div>
                    <h2>{listing.ItemName}</h2>
                    <p>{listing.ItemPrice}</p>
                    <p>{listing.ItemDesc}</p>
                </div>
            ))}
        </div>
    );
}