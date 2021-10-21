import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { TextField, Checkbox } from '@material-ui/core'

interface IFormInputs {
    TextField: string
    MyCheckbox: boolean
}

const App = () => {
    const { handleSubmit, control, reset } = useForm<IFormInputs>()
    const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name='MyCheckbox'
                control={control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field }) => <Checkbox {...field} />}
            />
            <input type='submit' />
        </form>
    )
}

export default App
