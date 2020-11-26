import StripeCheckout from 'react-stripe-checkout'



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HrXcCCbPIGDMbWP9f6f1kAf5CJRdHvN3AzbJNJ6RxohhNsFbovuVV0P8pR8wAZENNrpYt1Z2etdgivZmDa7DS8z002kT5N2vd'

   const onToken = token => {
        console.log(token)
        alert('Payment Successful');
}


    return (
        <StripeCheckout
            label='Pay Now'
            name='Brand Clothing LLC.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            
        />
    )

}

export  default StripeCheckoutButton