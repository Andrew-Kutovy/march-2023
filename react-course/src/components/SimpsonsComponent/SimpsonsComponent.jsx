import styles from "./SimpsonsComponent.module.css";
const SimpsonsComponent = () => {
    return (
        <div className={styles.simpsons}>
            <div className={'simpson'}>
                <h2>Bart</h2>
                <h3>Simpson</h3>
                <p>age: 10</p>
                <p>gender: male</p>
                <img src={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'} alt={'bart'}></img>
            </div>
            <div className={'simpson'}>
                <h2>Homer</h2>
                <h3>Simpson</h3>
                <p>age: 40</p>
                <p>gender: male</p>
                <img src={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'} alt={'homer'}></img>
            </div>
            <div className={'simpson'}>
                <h2>Marge</h2>
                <h3>Simpson</h3>
                <p>age: 38</p>
                <p>gender: female</p>
                <img src={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'} alt={'bart'}></img>
            </div>
            <div className={'simpson'}>
                <h2>Lisa</h2>
                <h3>Simpson</h3>
                <p>age: 9</p>
                <p>gender: female</p>
                <img src={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'} alt={'bart'}></img>
            </div>
            <div className={'simpson'}>
                <h2>Maggie</h2>
                <h3>Simpson</h3>
                <p>age: 1</p>
                <p>gender: female</p>
                <img src={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'} alt={'bart'}></img>
            </div>
        </div>
    )
}

export default SimpsonsComponent;