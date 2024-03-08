export default function Singer ({singer}){
    return (
        <div style={{
            border: '1px solid tomato',
            padding: '10px',
            margin: '10px',
            textAlign: 'center',
            width: '300px',
            borderRadius: '20px',
        }}>
            <h3>Singer: {singer.name}</h3>
            <p>Age:{singer.age}</p>
        </div>
    )

}