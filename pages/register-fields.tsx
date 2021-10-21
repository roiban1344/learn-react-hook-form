//Example code from https://react-hook-form.com/get-started#registerfields
import { useForm, SubmitHandler } from 'react-hook-form'

enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other',
}

interface IFormInput {
    firstName: String
    gender: GenderEnum
}

const RegisterFields = () => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input {...register('firstName')} />
            <label>Gender Selection</label>
            <select {...register('gender')}>
                <option value='female'>female</option>
                <option value='male'>male</option>
                <option value='other'>other</option>
            </select>
            <input type='submit' />
        </form>
    )
}

export default RegisterFields
