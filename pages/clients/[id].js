export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(client => {
        return {
            params: { id: client.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
 const id = context.params.id
 const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
 const data = await res.json()
 
 return {
     props: { client: data }
 }
}
const Details = ({ client }) => {
    return (
        <div>
            <h1>{client.name}</h1>
            <p>{client.email}</p>
            <p>{client.website}</p>
            <p>{client.address.city}</p>
        </div>
    );
}
 
export default Details
