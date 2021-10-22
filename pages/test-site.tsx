import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../styles/testSite.module.scss'

type ChemicalElement = {
    atomicNumber: number
    name: string
    symbol: string
}

const NOBLE_GASSES: ChemicalElement[] = [
    {
        atomicNumber: 2,
        name: 'helium',
        symbol: 'He',
    },
    {
        atomicNumber: 10,
        name: 'neon',
        symbol: 'Ne',
    },
    {
        atomicNumber: 18,
        name: 'argon',
        symbol: 'Ar',
    },
    {
        atomicNumber: 36,
        name: 'krypton',
        symbol: 'Kr',
    },
    {
        atomicNumber: 54,
        name: 'xenon',
        symbol: 'Xe',
    },
    {
        atomicNumber: 86,
        name: 'radon',
        symbol: 'Rn',
    },
    {
        atomicNumber: 118,
        name: 'oganesson',
        symbol: 'Og',
    },
]

type Inputs = {
    isbn: string
    nobleGasId: number
}

const App = () => {
    const { register, handleSubmit, watch, formState } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('hello')
        console.log(data)
        console.log(`submit: ${data.isbn} ${data.nobleGasId}`)
    }

    console.log(`watch(isbn): ${watch('isbn')}`)
    console.log(`watch(nobleGasId): ${watch('nobleGasId')}`)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input {...register('isbn', { required: true })} />
            <select {...register('nobleGasId')}>
                {NOBLE_GASSES.map(({ atomicNumber, name, symbol }, index) => {
                    return (
                        <option value={index} key={index}>
                            {atomicNumber}: {symbol}
                            {` `}({name})
                        </option>
                    )
                })}
            </select>
            <input type='submit' />
            {!formState.isValid && <span>errors</span>}
        </form>
    )
}

export default App
