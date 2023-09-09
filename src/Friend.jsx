export default function Friend({friend}){
    const {name,email,phone} = friend;
    return (
        <div className="box">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}