const styles = {
    Display: { display: 'flex', gap: '16px' }    
}

export function ProductsList(props) {
    return(
        <>
            <h2>Products</h2>
            <div style={styles.Display}>{props.children}</div>
        </>
    )
}