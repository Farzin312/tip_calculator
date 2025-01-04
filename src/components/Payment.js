export default function Payment({ bill, tip }) {
    const total = bill + tip
    return(
        <h2>
            You pay ${total} (${bill} + ${tip} tip) 
        </h2>
    )
}