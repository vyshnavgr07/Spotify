import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const Checkout = () => {
    let stripePromise = null;

    let getstripe = async ({ lineItems }) => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
        }

        const stripe = await stripePromise; // Wait for stripePromise to resolve
        await stripe.redirectToCheckout({
            mode: 'payment',
            lineItems,
            successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: window.location.origin,
        });
    };

    return (
        <div>
            {/* You should call getstripe somewhere in your component */}
        </div>
    );
};

export default Checkout;
