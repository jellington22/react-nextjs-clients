import styles from '../../styles/clients.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {


    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { clients: data}
    }
}

const clients = ({ clients }) => {
    return (
        <div>
            <h1>All Clients</h1>
            {clients.map(client => (
                <Link href={'/clients/' + client.id} key={client.id}>
                    <a className={styles.single}>
                        <h3>{client.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default clients;